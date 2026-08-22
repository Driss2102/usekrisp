/**
 * Central site + affiliate constants for the Krisp guide.
 *
 * Pure constants only — no React, no `@docusaurus/*` imports — so this module
 * can be imported by `docusaurus.config.ts` (navbar hrefs cannot route through
 * the <AffiliateLink> component) as well as by React components.
 */

/** Canonical site origin. */
export const SITE_ORIGIN = 'https://usekrisp.com';

/**
 * Krisp affiliate link (via Krisp's program on Dub.co).
 *
 * ⚠️ PLACEHOLDER — this currently points to krisp.ai directly (no commission).
 * Once your application to Krisp's affiliate program on Dub.co is approved,
 * replace this with your real Dub.co referral link (from your partner dashboard).
 * Every CTA on the site reads this one constant, so you only change it here.
 */
export const KRISP_AFFILIATE_URL = 'https://krisp.ai/';

/** Krisp's public site, for non-commission reference links (docs, help centre). */
export const KRISP_HOME = 'https://krisp.ai/';
