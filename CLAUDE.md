# CLAUDE.md

Guidance for Claude Code (and humans) working in this repo.

## What this is

**Krisp Guide** is an independent review and setup site for **Krisp** (krisp.ai),
built to earn affiliate commissions through Krisp's program on Impact.com. It is
modeled on the same playbook as use-apify.com and scrimbaguide.tech: capture
bottom-of-funnel search intent ("krisp review", "krisp vs X", "krisp on Zoom")
with honest, independent content the official site cannot publish.

Stack: **Docusaurus 3** (React 19, TypeScript), content in MDX. Node 20+.

## Commands

```bash
npm start        # dev server at localhost:3000
npm run build    # production build (static site)
npm run serve    # serve the built site
npm run typecheck

# Scraper (Python) - collects FACTS from krisp.ai, never prose
cd scraper && .venv/Scripts/python scrape.py          # Windows
cd scraper && ./.venv/bin/python scrape.py            # macOS/Linux
```

## Architecture

- **Content lives under `docs/`** (evergreen) and `blog/` (timely). The docs/ and
  blog/ *are* the product. URLs are under `/docs/...` (`routeBasePath: '/docs'`).
- **Hub-and-spoke** under `docs/`:
  - `review/` - Krisp review pillar + pricing (bottom funnel).
  - `use/` - "Use Krisp on [app]" setup guides (primary hub; Zoom, Teams, Discord...).
  - `compare/` - alternatives pillar + "Krisp vs X" money pages.
  - `guides/` - top-of-funnel how-to.
  - `for/` - persona pages.
  - `changelog.mdx` - "What's new in Krisp", compiled from whatsnew.krisp.ai + blog.
- **Homepage** is `src/pages/index.tsx` ("Where do you use Krisp?" app chooser).
- **Reusable components** are in `src/components/` (see below). Import them in MDX
  via `import { X } from '@site/src/components'`.
- **Legal + about** pages are `src/pages/legal/*` and `src/pages/about.md`.

## Affiliate links (important)

- The single affiliate destination is `KRISP_AFFILIATE_URL` in `src/constants.ts`.
  It is currently a PLACEHOLDER pointing to krisp.ai. Replace it with the real
  Impact.com tracking link once the program is approved. Change it in that one place.
- **Never hand-write a raw `https://krisp.ai/...` link as a CTA.** Route CTAs through
  `<AffiliateLink>`, `<PricingCTA>`, or `<VerdictBox>`, which set `rel="sponsored nofollow"`
  and fire a GA event.
- `<DisclosureNotice />` (FTC) goes directly under the H1 on every content page.

## Components

`AffiliateLink`, `PricingCTA`, `VerdictBox`, `ComparisonTable`, `FAQAccordion`
(emits FAQPage JSON-LD), `ReviewSchema`, `DisclosureNotice`. Exported from
`src/components/index.ts`.

## Content rules (non-negotiable)

Two guardrails live in `research/`:
- **`research/FACT-LEDGER.md`** - every factual claim we make, with source and
  approved wording. **Check it before stating any number or capability.** Update
  it first when a fact changes, then fix the pages that cite it.
- **`research/STYLE-BAR.md`** - house voice. Key rules:
  - Independent-reviewer voice, never speak as Krisp.
  - **No em-dashes.** No exact Krisp prices in body copy (link to krisp.ai/pricing/).
  - Two-sided: name real limitations. Answer-first H2s. Sentence-case headings.
  - Attribute every stat to a dated source. Banned AI-tell vocabulary (see the file).
  - One soft CTA per page, placed late, free-plan-first framing.
- Add `last_update: { date: YYYY-MM-DD }` frontmatter for a visible freshness signal.

## SEO conventions

- `trailingSlash: true`. Internal links keep trailing slashes.
- Sitewide WebSite + Organization JSON-LD is in `docusaurus.config.ts` headTags;
  per-page Review/FAQ schema comes from the components.
- Before production, switch `onBrokenLinks` from `'warn'` to `'throw'`, and add a
  Google Analytics 4 `gtag` id in the classic preset.

## Scraper

`scraper/scrape.py` (Python venv, httpx + BeautifulSoup) discovers URLs from
krisp.ai sitemaps, extracts titles/dates/JSON-LD, and saves Krisp's `llms.txt`.
Output: `scraper/output/` (raw) and `data/krisp/posts.json` (blog posts, newest
first). It skips the ~5,280 programmatic "headset-comparison" pages by default.
**krisp.ai rate-limits aggressively (429)**, so the scraper runs at low
concurrency with delays and retries. It is incremental (unchanged pages reused).
We use the scraped facts as intel and to keep the FACT-LEDGER current. We never
copy Krisp's wording into our pages.
