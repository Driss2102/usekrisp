# Content intelligence — from the Krisp scrape

Source: `data/krisp/posts.json` (543 blog posts, 2018-11 to 2026-07) and
`data/krisp/pages.json` (53 product/marketing pages). Re-run the scraper to refresh.
This is intel for planning content. We never copy Krisp's wording; see STYLE-BAR.

Last updated: 2026-08-21.

## What Krisp's own content tells us

Theme clusters across the 543 blog posts (by title keyword):

| Cluster | Posts | Read as |
|---|---|---|
| Meeting notes / minutes / summary | 130 | Krisp's biggest bet is the AI Note Taker, not just noise cancellation |
| Per-app (Zoom, Teams, Meet, Discord, Webex, Slack) | 79 | Per-app intent is huge; our `/use/` hub is aimed right |
| Noise / audio / echo / microphone | 69 | Their historical core; our defensible angle |
| Transcription / speech-to-text | 60 | Strong secondary intent |
| Remote / hybrid work | 44 | Good top-of-funnel persona traffic |
| Headphones / hardware | 33 | Their affiliate-bait content. NOT our angle, skip it |
| Call center / contact center / BPO | 23 | Enterprise; we cover it lightly via `/for/call-centers` |
| Accent / translation | 17 | Differentiator, low competition |

## Krisp's dedicated product pages (intent map)

Krisp maintains separate pages for each of these, which means real search intent
behind each. Each is a candidate for our own independent guide or comparison:

- **Per-app AI Note Taker:** Zoom, Microsoft Teams, Google Meet (Krisp has one page each).
- **Per-app transcription:** "Transcribe Zoom / Teams / Google Meet / Slack meetings".
- **Per-app recording:** "Record Zoom / Teams / Google Meet meetings".
- **Per-app meeting minutes and summaries:** Zoom / Teams / Meet minutes and summaries.
- **AI meeting minutes generator**, **audio to notes**, **video to notes**.
- **Voice translation**, **listener-side accent conversion**.
- **Real-time Voice AI SDK** (developers).
- **Summarize a YouTube video with AI** (a content angle worth a guide).

## Announcement timeline (credibility + changelog)

Real dated launches from the blog (already folded into `/docs/changelog`):

- 2025-02 Krisp AI Chat (meeting Q&A); AI Live Interpreter.
- 2024-12 PCI DSS certification.
- 2024-10 Screen recording for meetings; Zapier integration.
- 2024-08 Speech-to-Text API for developers.
- 2024-05/06 On-device transcription SDKs; accent conversion SDK early access.
- Partnerships: Five9 (repeat), 8x8, Vodex, Symphony, Fixie/Ultravox, Aarista, NICE.

## Wave 3 content opportunities (prioritized)

High intent, low-to-medium competition, aligned to our angle:

1. **Per-app note-taker angle** (extends `/use/` beyond noise): "Krisp AI note taker for Zoom / Teams / Google Meet". Krisp ranks these; we add the independent take.
2. **Transcription how-tos:** "How to transcribe a Zoom / Teams / Google Meet meeting". Pairs with our transcription guide.
3. **AI meeting minutes** cluster: "How to get AI meeting minutes", "meeting minutes template".
4. **Explainer pages** for the differentiators: "What is accent conversion", "AI voice translation explained".
5. **More comparisons:** Krisp vs Jamie, vs Avoma, vs Fellow (round out the alternatives hub).
6. **Developer angle:** one page on Krisp's Voice AI SDK (niche, very low affiliate competition).
7. **Guide:** "How to summarize a YouTube video with AI" (Krisp has a page; broad top-funnel intent).

Avoid: the headphones/AirPods/headset cluster. It is Krisp's own affiliate-bait
content and is off our positioning.

## How this feeds the workflow

- Use these titles as the Wave 3 backlog (append to the architecture doc).
- Before writing any page, pull the facts from `data/krisp/pages.json` + the
  FACT-LEDGER, never from memory.
- Re-run `scraper/scrape.py` monthly to catch new posts and keep the changelog fresh.
