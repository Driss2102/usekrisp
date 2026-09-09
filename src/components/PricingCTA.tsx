import React from 'react';
import AffiliateLink from './AffiliateLink';
import { KRISP_AFFILIATE_URL } from '@site/src/constants';

interface PricingCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: 'inline' | 'banner';
  headingLevel?: 2 | 3;
  /** GA cta_location label forwarded to AffiliateLink (e.g. "review-final"). */
  location?: string;
  /** When true, renders a reassurance line below the button. */
  riskReversal?: boolean;
}

/** Reusable conversion CTA block. Drop into any MDX page where the reader is
 *  ready to act. Links to the single KRISP_AFFILIATE_URL constant. */
export default function PricingCTA({
  title = 'Ready to try Krisp?',
  subtitle = 'Krisp works on top of Zoom, Teams, Meet, Discord and any calling app. The 7-day free trial needs no card.',
  buttonText = 'Try Krisp free',
  variant = 'inline',
  headingLevel = 2,
  location,
  riskReversal = false,
}: PricingCTAProps): React.ReactElement {
  const TitleTag = headingLevel === 3 ? 'h3' : 'h2';

  return (
    <div className={`pricing-cta pricing-cta--${variant}`} data-nosnippet>
      <div className="pricing-cta__content">
        <TitleTag className="pricing-cta__title">{title}</TitleTag>
        <p className="pricing-cta__subtitle">{subtitle}</p>
      </div>
      <AffiliateLink
        href={KRISP_AFFILIATE_URL}
        variant="button"
        className="pricing-cta__button"
        location={location}
      >
        {buttonText}
      </AffiliateLink>
      {riskReversal && (
        <p className="pricing-cta__risk-reversal">7-day free trial, no credit card required.</p>
      )}
    </div>
  );
}
