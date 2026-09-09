# Fact ledger — Krisp

Single source of truth for every factual claim our content makes about Krisp.
Before stating a number or a capability on any page, check it here. Each claim
has a verdict, the figure, a dated source, and an "approved wording" to paste.

Rules (from our house method):
- Never hardcode exact prices in page content. Link to `https://krisp.ai/pricing/`.
- Attribute every stat to a named, dated source. No vague "studies show."
- Feature availability drifts. When a figure changes (e.g. languages, versions),
  update it here first, then fix the pages that cite it.
- Re-verify anything marked SOFTEN or UNVERIFIED before publishing it as fact.

Last verified: 2026-08-21.

---

## Affiliate program

### Krisp affiliate program: APPROVED via Impact.com. 30% paid + 30% recurring, 30-day cookie, 7-day trial.
- Verdict: CONFIRMED (corrected 2026-09-09 — program is on Impact.com, NOT Dub.co; Dub Partner rejected the application)
- Figure: Approved 2026-09-09. **30% commission on paid subscriptions + 30% on recurring subscriptions (USD).** Last-click attribution. **30-day click cookie window.** 400-day parent-action window for recurring. Action locking 27 days after month end, payout 20 days after lock. Referrals get Krisp's **7-day free trial**.
- Live tracking link: `https://krisp.pxf.io/jR4eQP` (Impact domain krisp.pxf.io). Set in `KRISP_AFFILIATE_URL` in src/constants.ts on 2026-09-09.
- Source: Impact.com contract acceptance email + Impact link builder, 2026-09-09.
- Program rules to respect (all currently satisfied by the site): **Direct Linking NOT allowed** (CTAs go via our site, not direct-to-krisp). **No branded terms ("Krisp" + variants/misspellings) in paid search** — we do organic only. **No Krisp-branded social accounts.** No "official site / authorized wholesaler" claims. Only affiliate-program-provided coupons. No political/violent/hate/adult content. Advertiser does NOT allow a media-partner tracking pixel.
- Usable site content: the **7-day free trial** is the honest CTA line ("Try Krisp free for 7 days, no card").

---

## Pricing and plans

### No permanent free plan. Krisp offers a 7-day free trial, then paid plans (Core / Advanced / Enterprise).
- Verdict: CONFIRMED (CORRECTED 2026-09-09 — supersedes the old "60 min/day permanent free plan")
- Figure: The only no-cost option is a **7-day Free Trial** ($0, no credit card, full access to premium features including unlimited noise cancellation and unlimited AI notes for the trial period). After 7 days it converts to a paid plan. There is NO permanent free tier and NO separate noise-cancellation-only plan (noise cancellation is bundled into every plan).
- Source: krisp.ai/pricing, verified in-browser (rendered JS) 2026-09-09. Krisp's own pricing FAQ: "No separate plan, because Noise Cancellation is built into every Krisp plan."
- ⚠️ HISTORY: Krisp previously offered a permanent free plan (60 min/day noise cancellation, unlimited transcription, ~2 AI notes/day, no card). That plan was discontinued. Do NOT claim a permanent free plan anywhere. The honest CTA is the **7-day free trial** ("Try Krisp free for 7 days, no card").
- Approved wording: Krisp does not have a permanent free plan. It offers a 7-day free trial with full access and no credit card, after which you pick a paid plan.

### Paid plans: Core, Advanced, Enterprise (do NOT quote exact prices in body copy).
- Verdict: CONFIRMED (do NOT quote the exact price in content)
- Figure: **Core** (best for individuals/small teams): unlimited AI note-taker, unlimited noise cancellation, integrations, mobile app, multilingual transcript, ~1 hr/day accent conversion, 10 GB storage — ~$8/mo/user on annual. **Advanced**: unlimited accent conversion, advanced admin controls, more integrations, 60 GB storage — ~$15/mo/user on annual. **Enterprise**: SSO/SCIM, advanced security, on-device private transcription, HIPAA, unlimited storage — custom pricing. Annual billing ~50% cheaper than monthly.
- Source: krisp.ai/pricing, verified in-browser 2026-09-09.
- Approved wording: Krisp's paid plans are Core, Advanced, and Enterprise. Core suits individuals and small teams; Advanced adds unlimited accent conversion and admin controls; Enterprise adds security and compliance. Prices change, so we link to Krisp's pricing page rather than quote a number.

---

## Product capabilities

### Two-way (bidirectional) noise cancellation is Krisp's flagship feature.
- Verdict: CONFIRMED
- Figure: Krisp offers award-winning bidirectional noise cancellation (cleans both your outgoing microphone and incoming audio).
- Source: Krisp llms.txt (https://krisp.ai/llms.txt), scraped 2026-08-21.
- Approved wording: Krisp's flagship feature is bidirectional noise cancellation: it removes background noise from your microphone and from the other person's incoming audio.

### Noise cancellation runs on-device.
- Verdict: CONFIRMED
- Figure: Noise removal is processed locally on the device.
- Source: 2026 reviews (bluedothq, buildbetter), cross-checked; consistent with Krisp's on-device positioning.
- Approved wording: Krisp processes noise cancellation on your device, so raw audio is cleaned locally rather than uploaded for that step.
- Note: This applies to the noise-cancellation step. AI notes and transcription are separate cloud features the user turns on.

### Transcription supports 17 languages with speaker identification.
- Verdict: CONFIRMED (updated from an earlier "16")
- Figure: Searchable transcripts in 17 languages, with speaker identification, for live meetings and uploaded audio/video.
- Source: Krisp llms.txt, scraped 2026-08-21. (Older third-party reviews still say 16; llms.txt is Krisp's current statement, so 17 is canonical.)
- Approved wording: Krisp transcribes in 17 languages with speaker identification.

### Works on top of any calling app via a virtual mic/speaker.
- Verdict: CONFIRMED
- Figure: Krisp acts as an audio layer between the microphone/speakers and the calling app; integrates with Zoom, Google Meet, Microsoft Teams, Webex, and works with any conferencing or voice app.
- Source: Krisp llms.txt, scraped 2026-08-21.
- Approved wording: Krisp adds a virtual microphone and speaker, so it works on top of Zoom, Teams, Google Meet, Webex, Discord, and any other calling app.

### AI Note Taker: bot-free recording, summaries, action items, and AI chat for meeting Q&A.
- Verdict: CONFIRMED
- Figure: Records without a bot joining the meeting; produces searchable transcripts, notes, summaries, action items, and an AI chat to ask questions about the meeting. Records online and in-person.
- Source: Krisp llms.txt + krisp.ai/ai-note-taker, 2026.
- Approved wording: Krisp's AI Note Taker records meetings without a bot joining, then generates transcripts, summaries, action items, and lets you ask an AI chat about what was said.

### Integrations: conferencing, CRMs, project tools, Zapier.
- Verdict: CONFIRMED
- Figure: Zoom, Google Meet, Microsoft Teams, Webex; Salesforce, HubSpot, Affinity; Asana, Jira, Notion, Monday; Slack; Zapier.
- Source: Krisp llms.txt, scraped 2026-08-21.
- Approved wording: Krisp integrates with Zoom, Meet, Teams and Webex, with CRMs like Salesforce and HubSpot, and with tools like Slack, Notion, Jira, and Zapier.

### Security: SOC 2, PCI DSS, HIPAA (availability depends on plan/config).
- Verdict: CONFIRMED (with hedge)
- Figure: Supports SOC 2, PCI DSS, and HIPAA, with encryption in transit and at rest; availability depends on plan and configuration.
- Source: Krisp llms.txt (security section), scraped 2026-08-21.
- Approved wording: Krisp supports SOC 2, PCI DSS, and HIPAA (availability depends on your plan and configuration).

---

## Scale / trust signals

### Krisp powers audio on 200M+ devices; used by Discord, Twilio, VMware.
- Verdict: CONFIRMED
- Figure: Krisp's AI is used on over 200 million devices; trusted by Discord, Twilio, and VMware among others.
- Source: Krisp llms.txt, scraped 2026-08-21.
- Approved wording: Krisp's Voice AI powers audio on more than 200 million devices and is used by companies including Discord, Twilio, and VMware.

### Krisp's awards and recognition.
- Verdict: CONFIRMED
- Figure: Gartner "Cool Vendor in Digital Workplace Programs and Applications"; Forbes AI 50 (America's Most Promising AI Companies); People's Voice Award winner in Productivity & Collaboration; G2 Leader in Noise Cancellation and Voice Recognition. Also cited: 800,000+ professionals use Krisp.
- Source: Krisp program page on Dub.co (partners.dub.co/marketplace/krisp), provided by user 2026-08-22.
- Approved wording: Present these as KRISP's awards (not the guide's). e.g. "Krisp has been recognized as a Gartner Cool Vendor, a Forbes AI 50 company, and a G2 Leader in noise cancellation." Do not reproduce the Gartner/Forbes/G2 logos (third-party marks); cite by name.
- Where used: homepage "Awards Krisp has earned" section.

### Krisp has processed 80+ billion minutes of conversations.
- Verdict: SOFTEN (dated figure, grows over time)
- Figure: "Over 80 billion minutes" processed, stated as of 2025.
- Source: 2025/2026 review aggregations (fusebase, others).
- Approved wording: As of 2025, Krisp said it had processed more than 80 billion minutes of conversations. (Attribute the year; the number keeps growing.)

---

## Competitors (for comparison pages)

### Commonly compared alternatives.
- Verdict: CONFIRMED (as "commonly compared", not a ranking)
- Figure: For AI notes: Otter, Fireflies, Fathom, tl;dv, Notta, Jamie. For noise cancellation: NVIDIA Broadcast / RTX Voice, plus built-in suppression in Zoom/Teams/Discord.
- Source: SERP for "Krisp alternatives" (meetjamie, fellow, tldv, bluedothq, fusebase), 2026-08-21.
- Approved wording: Krisp is most often compared with Otter, Fireflies, Fathom, tl;dv, and Notta for notes, and with NVIDIA Broadcast for noise cancellation.

---

## Claims to AVOID or re-check

### "Krisp does not support Arabic / Chinese / Japanese / Thai / Vietnamese."
- Verdict: UNVERIFIED — do not assert.
- Reason: Based on an older third-party review. Krisp now states 17 languages and has been adding languages (e.g. Valencian in 2026). The specific unsupported list may be stale.
- Approved handling: Say "Krisp supports 17 languages, so check its current list covers yours" instead of naming specific unsupported languages.

### Exact Krisp prices in page body.
- Verdict: BANNED in content.
- Reason: Prices drift and vary by region. Quoting them dates the page and risks being wrong.
- Approved handling: Describe plans qualitatively and link to https://krisp.ai/pricing/.
