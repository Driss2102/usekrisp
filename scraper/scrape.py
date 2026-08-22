#!/usr/bin/env python3
"""
Krisp content scraper (fact source of truth).

Same idea as the reference scrimbaguide scraper, adapted to Krisp's WordPress
site. We do NOT copy Krisp's prose. We collect FACTS (titles, dates,
descriptions, JSON-LD) so our own independent content can cite accurate,
up-to-date information.

Strategy:
  1. Discover URLs from https://krisp.ai/sitemap_index.xml and its child
     sitemaps (post = blog, page = static pages, headset = product content).
     Each URL comes with a <lastmod> date, which we use for incremental runs.
  2. Fetch every public URL's HTML with httpx (async, polite concurrency) and
     extract: <title>, meta description, canonical, og:type, article dates, all
     JSON-LD blocks, H1, and a rough word count.
  3. Save the raw per-page metadata under output/, a combined output/index.json,
     Krisp's own llms.txt, and clean data files under ../data/krisp/ that our
     Docusaurus site and our writing can consume.

Usage:
    python scrape.py                 # incremental scrape of everything
    python scrape.py --full          # ignore the incremental cache
    python scrape.py --type post     # only blog posts
    python scrape.py --limit 20      # cap number of pages (for testing)
"""

from __future__ import annotations

import argparse
import asyncio
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree as ET

import httpx
from bs4 import BeautifulSoup

# Make stdout UTF-8 so Krisp's accented titles print on Windows consoles.
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

ROOT = Path(__file__).resolve().parent
OUTPUT_DIR = ROOT / "output"
DATA_DIR = ROOT.parent / "data" / "krisp"

SITEMAP_INDEX = "https://krisp.ai/sitemap_index.xml"
LLMS_TXT = "https://krisp.ai/llms.txt"

USER_AGENT = (
    "Mozilla/5.0 (compatible; KrispGuideResearchBot/1.0; "
    "independent affiliate content research; contact hello@krispguide.tech)"
)

# Concurrency knobs (be polite to a single origin). krisp.ai rate-limits hard,
# so keep concurrency low, add a small delay between requests, and retry 429s.
HTTP_CONCURRENCY = 3
HTTP_TIMEOUT = 25.0
REQUEST_DELAY = 0.5   # seconds between requests (per worker)
MAX_RETRIES = 3
RETRY_AFTER_CAP = 20  # never sleep longer than this on a 429

SITEMAP_TYPE = {
    "post_sitemap.xml": "post",
    "page_sitemap.xml": "page",
    "author_sitemap.xml": "author",
    "sitemap_headset.xml": "headset",
    "sitemap_headset_comparison.xml": "headset-comparison",
}

# Fetched by default. The headset / headset-comparison sitemaps hold thousands
# of programmatic pages that are not relevant to our affiliate angle, so they
# are only scraped when explicitly requested via --type.
DEFAULT_TYPES = {"post", "page"}


def slugify_url(url: str) -> str:
    path = urlparse(url).path.strip("/") or "index"
    return re.sub(r"[^a-zA-Z0-9._-]", "_", path)[:120]


# ── Sitemap discovery ───────────────────────────────────────────────

def _localname(tag: str) -> str:
    return tag.rsplit("}", 1)[-1]


async def fetch_text(client: httpx.AsyncClient, url: str) -> str | None:
    try:
        r = await client.get(url)
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"  ! fetch failed {url}: {e}")
        return None


def parse_sitemap(xml_text: str) -> list[dict]:
    """Return a list of {loc, lastmod} for a urlset, or {loc} for an index."""
    out: list[dict] = []
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError as e:
        print(f"  ! xml parse error: {e}")
        return out
    for child in root:
        if _localname(child.tag) not in ("url", "sitemap"):
            continue
        entry: dict = {}
        for el in child:
            name = _localname(el.tag)
            if name == "loc":
                entry["loc"] = (el.text or "").strip()
            elif name == "lastmod":
                entry["lastmod"] = (el.text or "").strip()
        if entry.get("loc"):
            out.append(entry)
    return out


async def discover_urls(client: httpx.AsyncClient, only_type: str | None) -> list[dict]:
    """Walk the sitemap index and return classified URL records."""
    index_xml = await fetch_text(client, SITEMAP_INDEX)
    if not index_xml:
        return []
    child_sitemaps = [e["loc"] for e in parse_sitemap(index_xml)]
    print(f"Found {len(child_sitemaps)} child sitemaps.")

    records: list[dict] = []
    for sm in child_sitemaps:
        fname = sm.rsplit("/", 1)[-1]
        page_type = SITEMAP_TYPE.get(fname, "other")
        if page_type == "author":
            continue  # author archive pages are not useful facts
        if only_type:
            if page_type != only_type:
                continue
        elif page_type not in DEFAULT_TYPES:
            continue  # skip headset / headset-comparison unless asked via --type
        xml = await fetch_text(client, sm)
        if not xml:
            continue
        entries = parse_sitemap(xml)
        for e in entries:
            records.append({
                "url": e["loc"],
                "type": page_type,
                "lastmod": e.get("lastmod", ""),
            })
        print(f"  {fname}: {len(entries)} urls ({page_type})")
    return records


# ── Page extraction ─────────────────────────────────────────────────

def extract_page(url: str, html: str) -> dict:
    soup = BeautifulSoup(html, "lxml")

    def meta(attr: str, val: str) -> str | None:
        el = soup.find("meta", attrs={attr: val})
        return el.get("content").strip() if el and el.get("content") else None

    title = (soup.title.string or "").strip() if soup.title else None
    h1 = soup.find("h1")
    h1_text = h1.get_text(" ", strip=True) if h1 else None
    canonical_el = soup.find("link", attrs={"rel": "canonical"})
    canonical = canonical_el.get("href") if canonical_el else None

    jsonld: list = []
    for tag in soup.find_all("script", attrs={"type": "application/ld+json"}):
        raw = tag.string or tag.get_text()
        if not raw:
            continue
        try:
            jsonld.append(json.loads(raw))
        except Exception:
            pass  # some pages ship malformed JSON-LD; skip it

    # Rough body word count (article/main if present, else body).
    body = soup.find("article") or soup.find("main") or soup.body
    words = len(body.get_text(" ", strip=True).split()) if body else 0

    return {
        "url": url,
        "title": title,
        "h1": h1_text,
        "description": meta("name", "description"),
        "og_type": meta("property", "og:type"),
        "published": meta("property", "article:published_time"),
        "modified": meta("property", "article:modified_time"),
        "canonical": canonical,
        "word_count": words,
        "jsonld": jsonld,
    }


async def get_with_retry(client: httpx.AsyncClient, url: str) -> httpx.Response | None:
    """GET with polite retries on 429 (respecting Retry-After, capped)."""
    for attempt in range(MAX_RETRIES):
        try:
            r = await client.get(url)
        except Exception as e:
            if attempt < MAX_RETRIES - 1:
                await asyncio.sleep(2 * (attempt + 1))
                continue
            print(f"  ! {url}: {e}")
            return None
        if r.status_code == 429:
            wait = min(float(r.headers.get("Retry-After", 5) or 5), RETRY_AFTER_CAP)
            await asyncio.sleep(wait)
            continue
        try:
            r.raise_for_status()
        except Exception as e:
            print(f"  ! {url}: {e}")
            return None
        return r
    print(f"  ! {url}: gave up after {MAX_RETRIES} tries (429)")
    return None


async def fetch_page(client: httpx.AsyncClient, rec: dict, sem: asyncio.Semaphore) -> dict | None:
    async with sem:
        await asyncio.sleep(REQUEST_DELAY)
        r = await get_with_retry(client, rec["url"])
        if r is None:
            return None
        data = extract_page(rec["url"], r.text)
        data["type"] = rec["type"]
        data["lastmod"] = rec.get("lastmod", "")
        data["scraped_at"] = datetime.now(timezone.utc).isoformat()
        # Cache the raw HTML metadata per page.
        (OUTPUT_DIR / "pages").mkdir(parents=True, exist_ok=True)
        (OUTPUT_DIR / "pages" / f"{slugify_url(rec['url'])}.json").write_text(
            json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"  ok [{rec['type']}] {data.get('title') or rec['url']}")
        return data


# ── Incremental cache ───────────────────────────────────────────────

def load_cache() -> dict:
    p = OUTPUT_DIR / "index.json"
    if not p.exists():
        return {}
    try:
        prev = json.loads(p.read_text(encoding="utf-8"))
        return {item["url"]: item for item in prev}
    except Exception:
        return {}


# ── Data build (clean output the site can consume) ──────────────────

def to_iso_date(rec: dict) -> str:
    return (rec.get("published") or rec.get("modified") or rec.get("lastmod") or "")[:10]


def build_data(items: list[dict]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    posts = [
        {
            "url": it["url"],
            "title": it.get("h1") or it.get("title"),
            "date": to_iso_date(it),
            "modified": (it.get("modified") or it.get("lastmod") or "")[:10],
            "description": it.get("description"),
        }
        for it in items
        if it.get("type") == "post"
    ]
    posts.sort(key=lambda p: p.get("modified") or p.get("date") or "", reverse=True)

    pages = [
        {"url": it["url"], "title": it.get("title"), "type": it.get("type"),
         "description": it.get("description"), "modified": (it.get("modified") or it.get("lastmod") or "")[:10]}
        for it in items
        if it.get("type") in ("page", "headset", "headset-comparison")
    ]

    (DATA_DIR / "posts.json").write_text(json.dumps(posts, ensure_ascii=False, indent=2), encoding="utf-8")
    (DATA_DIR / "pages.json").write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nData written to {DATA_DIR}:")
    print(f"  posts.json: {len(posts)} blog posts")
    print(f"  pages.json: {len(pages)} pages")


# ── Main ────────────────────────────────────────────────────────────

async def main() -> None:
    ap = argparse.ArgumentParser(description="Krisp content scraper")
    ap.add_argument("--full", action="store_true", help="ignore incremental cache")
    ap.add_argument("--type", choices=list(SITEMAP_TYPE.values()), help="only one page type")
    ap.add_argument("--limit", type=int, default=0, help="cap pages fetched (testing)")
    args = ap.parse_args()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    cache = {} if args.full else load_cache()

    async with httpx.AsyncClient(
        headers={"User-Agent": USER_AGENT},
        timeout=HTTP_TIMEOUT,
        follow_redirects=True,
    ) as client:
        # Save Krisp's own llms.txt (a curated, authoritative fact source).
        llms = await fetch_text(client, LLMS_TXT)
        if llms:
            (OUTPUT_DIR / "llms.txt").write_text(llms, encoding="utf-8")
            print(f"Saved llms.txt ({len(llms)} chars)")

        records = await discover_urls(client, args.type)
        print(f"\nDiscovered {len(records)} URLs total.")

        # Incremental: skip pages whose lastmod matches the cache.
        todo, reused = [], []
        for rec in records:
            prev = cache.get(rec["url"])
            if prev and rec.get("lastmod") and prev.get("lastmod") == rec["lastmod"]:
                reused.append(prev)
            else:
                todo.append(rec)
        if args.limit:
            todo = todo[: args.limit]
        print(f"To fetch: {len(todo)} | reused from cache: {len(reused)}\n")

        sem = asyncio.Semaphore(HTTP_CONCURRENCY)
        results = await asyncio.gather(*(fetch_page(client, r, sem) for r in todo))
        fetched = [r for r in results if r]

    items = fetched + reused
    (OUTPUT_DIR / "index.json").write_text(
        json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nindex.json: {len(items)} pages ({len(fetched)} fetched, {len(reused)} cached)")
    build_data(items)


if __name__ == "__main__":
    asyncio.run(main())
