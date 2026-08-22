# Krisp scraper

Collects **facts** from krisp.ai (sitemaps + JSON-LD + llms.txt) so our
independent content can cite accurate, up-to-date information. It never copies
Krisp's prose.

## Setup (once)

```bash
cd scraper
python -m venv .venv
.venv/Scripts/python -m pip install -r requirements.txt   # Windows
# source .venv/bin/activate && pip install -r requirements.txt  # macOS/Linux
```

## Run

```bash
.venv/Scripts/python scrape.py              # incremental scrape of everything
.venv/Scripts/python scrape.py --full       # ignore cache, re-fetch all
.venv/Scripts/python scrape.py --type post  # blog posts only
.venv/Scripts/python scrape.py --limit 20   # cap pages (testing)
```

## Output

- `output/llms.txt` — Krisp's own curated summary (authoritative fact source).
- `output/pages/*.json` — per-page metadata (title, dates, JSON-LD, word count).
- `output/index.json` — everything combined (also the incremental cache).
- `../data/krisp/posts.json` — blog posts, newest first (feeds the changelog).
- `../data/krisp/pages.json` — static + product pages.

Re-run whenever you want fresh facts. It is incremental: unchanged pages
(same sitemap `lastmod`) are reused from cache.
