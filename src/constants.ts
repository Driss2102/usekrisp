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
 * Krisp affiliate link (via Krisp's program on Impact.com).
 *
 * Live Impact tracking link. `krisp.pxf.io` is Krisp's Impact tracking domain,
 * so every click on this URL is attributed to our partner account (30% recurring,
 * 30-day click window). Empty landing page = it resolves to krisp.ai's home.
 * Every CTA on the site reads this one constant, so you only change it here.
 */
export const KRISP_AFFILIATE_URL = 'https://krisp.pxf.io/jR4eQP';

/** Krisp's public site, for non-commission reference links (docs, help centre). */
export const KRISP_HOME = 'https://krisp.ai/';
