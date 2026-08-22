# Style bar — Krisp Guide

House voice for every page and post. Match these patterns. The goal is the
independent-reviewer voice Krisp's own marketing cannot use: helpful, specific,
two-sided. That honesty is the moat.

Last updated: 2026-08-21.

## Voice

- **Independent reviewer, never a Krisp employee or spokesperson.** We test and
  explain. We never say "we" as if we built Krisp.
- **Two-sided is the moat.** Name real limitations plainly (shallower AI notes
  than dedicated note-takers, language coverage, unlimited use needs Pro). The
  honest downside is what makes the recommendation believable.
- **Answer first.** Open each H2 with the answer, not a throat-clear. The first
  two or three words of an intro should answer the title.
- **Qualify the reader.** "Who this is for / not for" beats "everyone should buy."

## Hard rules (the build should ideally gate on these)

- **No em-dashes (—) or en-dashes (–).** Use commas, colons, or parentheses.
- **No exact Krisp prices in page body.** Link to https://krisp.ai/pricing/.
  Free-tier limits (60 min/day, unlimited transcription) are features, and are OK.
- **Every stat is attributed** to a named, dated source. Check the FACT-LEDGER first.
- **Headings in sentence case.** Internal links carry trailing slashes.
- **No emojis in content.**

## Affiliate CTA shape

- Route every outbound Krisp link through `<AffiliateLink>` or a `<PricingCTA>`,
  never a raw `https://krisp.ai/...` markdown link. The destination is the single
  `KRISP_AFFILIATE_URL` constant in `src/constants.ts` (swap in the real Impact
  link once approved).
- **One soft CTA per page, placed late,** right after a sentence that ties Krisp's
  strength to the page's point. Lead with the free plan ("no card") rather than a price.
- CTA text is a single imperative: verb plus offer. Example: "Try Krisp free."
- Keep aggressive/sticky CTAs off pure research pages (broad how-to, top-of-funnel).

## Banned phrases / AI tells

Do not use: delve, robust, seamless, testament, pivotal, crucial, landscape,
tapestry, underscore, foster, showcase, vibrant, "in today's fast-paced world,"
"let's dive in," "unlock the power of," "game-changer," "elevate your."

Banned patterns:
- **Negative parallelism** as a rhetorical flip: "it is not about X, it is about Y."
  Rewrite as a plain causal statement.
- **Loose stat paraphrase** that widens a precise figure. Keep the source's own scope.
- **Generic upbeat closers.** End on a concrete action or a flat declarative.

## Good / bad pairs

1. Answer first.
   - BAD: "In this section we will explore how Krisp handles noise."
   - GOOD: "Krisp removes background noise in both directions, which is the part built-in tools miss."

2. Two-sided, specific.
   - BAD: "Krisp is the best meeting tool, period."
   - GOOD: "Krisp wins on audio. For deep, searchable notes, a dedicated note-taker still goes further."

3. Attribute stats.
   - BAD: "Krisp supports lots of languages."
   - GOOD: "Krisp transcribes in 17 languages (per Krisp's own product summary, 2026)."

4. Price without a number.
   - BAD: "Pro costs 8 dollars a month."
   - GOOD: "Pro removes the daily limit; see current pricing on Krisp's pricing page."

## Approved page skeleton (evergreen)

1. H1 that matches the target query.
2. `<DisclosureNotice />` directly under the H1.
3. Bold lead that answers the query in its first sentence.
4. Body sections, answer-first H2s, one FAQ block with `<FAQAccordion>` (emits schema).
5. One late CTA (`<PricingCTA>` or a `<VerdictBox>` on reviews/comparisons).
6. `last_update` in frontmatter for a visible freshness date.
