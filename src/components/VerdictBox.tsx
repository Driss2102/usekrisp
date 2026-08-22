import React from 'react';
import AffiliateLink from './AffiliateLink';
import { KRISP_AFFILIATE_URL } from '@site/src/constants';

interface VerdictBoxProps {
  title?: string;
  rating?: string;
  verdict: string;
  pros?: string[];
  cons?: string[];
  ctaText?: string;
  ctaHref?: string;
  /** GA `cta_location` tag. Defaults to `verdict-box`. */
  location?: string;
}

/** The "verdict" block that closes a review or comparison page: rating, a
 *  one-paragraph summary, pros/cons, and the primary affiliate CTA. */
export default function VerdictBox({
  title = 'The Verdict',
  rating,
  verdict,
  pros = [],
  cons = [],
  ctaText = 'Try Krisp free',
  ctaHref = KRISP_AFFILIATE_URL,
  location = 'verdict-box',
}: VerdictBoxProps): React.ReactElement {
  return (
    <div className="verdict-box">
      <div className="verdict-box__header">
        <h2 className="verdict-box__title">{title}</h2>
        {rating && <div className="verdict-box__rating">{rating}</div>}
      </div>

      <p className="verdict-box__summary">{verdict}</p>

      {(pros.length > 0 || cons.length > 0) && (
        <div className="verdict-box__lists">
          {pros.length > 0 && (
            <div className="verdict-box__list verdict-box__list--pros">
              <h3 className="verdict-box__list-title">
                <span className="verdict-box__list-icon" aria-hidden="true">+</span>
                Pros
              </h3>
              <ul>
                {pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </div>
          )}

          {cons.length > 0 && (
            <div className="verdict-box__list verdict-box__list--cons">
              <h3 className="verdict-box__list-title">
                <span className="verdict-box__list-icon" aria-hidden="true">−</span>
                Cons
              </h3>
              <ul>
                {cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="verdict-box__cta">
        <AffiliateLink href={ctaHref} variant="button" location={location}>
          {ctaText}
        </AffiliateLink>
      </div>
    </div>
  );
}
