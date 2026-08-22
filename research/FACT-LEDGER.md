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

### Krisp affiliate program: 30% recurring for 12 months, via Dub.co, 90-day cookie, 7-day trial.
- Verdict: CONFIRMED (corrected 2026-08-22)
- Figure: 30% recurring commission for 12 months on every paid subscription a referral starts (any plan, monthly or annual). Runs on **Dub.co** (partners.dub.co/marketplace/krisp), NOT Impact.com. **90-day cookie window.** Referrals get a **7-day free trial**. Krisp cites ~$8/month and 800,000+ professionals.
- Source: Krisp program page on Dub.co (partners.dub.co/marketplace/krisp), provided by user 2026-08-22.
- Program rules to respect: **No bidding on Krisp branded keywords in paid search (PPC).** Our organic-SEO strategy is fine. No misleading claims, no incentivized/artificial traffic, no spam.
- Note: Business model, not site content. The `KRISP_AFFILIATE_URL` constant should be set to the Dub.co referral link once approved.
- Usable site content: the **7-day free trial** is a great CTA line ("Try Krisp free, 7-day trial") and can be added to CTAs.

---

## Pricing and plans

### Free plan: 60 minutes/day of noise cancellation, unlimited transcription, a small number of AI notes/day, no card.
- Verdict: CONFIRMED
- Figure: Free plan includes 60 minutes per day of noise cancellation, unlimited transcription, and about 2 AI meeting notes per day. No credit card required.
- Source: Multiple 2026 reviews (aiproductivity.ai/tools/krisp, hamsterstack.com/pricing/krisp), cross-checked 2026-08-21.
- Approved wording: Krisp's free plan gives you 60 minutes of noise cancellation per day, unlimited transcription, and a couple of AI notes per day, with no credit card.

### Pro plan removes the limits; billed monthly or annually (annual is cheaper).
- Verdict: CONFIRMED (do NOT quote the exact price in content)
- Figure: Pro unlocks unlimited noise cancellation, unlimited AI summaries and action items, meeting history, recording, and compliance features. Around 8 USD/month on annual billing at time of writing, but this drifts and varies by region.
- Source: G2 pricing, top50aitools.com/pricing/krisp, 2026.
- Approved wording: Krisp Pro removes the daily limits and adds unlimited AI notes, recording, and compliance features. Prices change, so we link to Krisp's pricing page rather than quote a number.

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
