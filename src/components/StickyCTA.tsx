import React, { useState, useEffect } from 'react';
import AffiliateLink from './AffiliateLink';
import { KRISP_AFFILIATE_URL } from '@site/src/constants';

const DISMISS_KEY = 'kg_sticky_dismissed';

/**
 * A slim, dismissable affiliate CTA bar that slides up once the reader has
 * scrolled into a long page. It gives someone who is convinced mid-article a
 * button without scrolling to the bottom. Dismissal is remembered for the
 * session so it never nags. Rendered on doc pages via the DocItem/Layout swizzle.
 */
export default function StickyCTA(): React.ReactElement | null {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // assume dismissed until we check, avoids a flash

  useEffect(() => {
    let already = false;
    try {
      already = sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch {
      already = false;
    }
    setDismissed(already);
    if (already) return undefined;

    const onScroll = (): void => {
      setVisible(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dismiss = (): void => {
    setVisible(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* private mode: fine, it just reappears */
    }
  };

  if (dismissed) return null;

  return (
    <div className={`sticky-cta${visible ? ' sticky-cta--in' : ''}`} role="complementary" aria-label="Try Krisp">
      <div className="sticky-cta__inner">
        <span className="sticky-cta__text">
          <strong>Ready to try Krisp?</strong>
          <span className="sticky-cta__sub">7-day free trial, no credit card.</span>
        </span>
        <AffiliateLink href={KRISP_AFFILIATE_URL} variant="button" className="sticky-cta__btn" location="sticky-bar">
          Try Krisp free
        </AffiliateLink>
        <button type="button" className="sticky-cta__close" onClick={dismiss} aria-label="Dismiss">
          ×
        </button>
      </div>
    </div>
  );
}
