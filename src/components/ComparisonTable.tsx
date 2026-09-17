import React, { useId } from 'react';
import AffiliateLink from './AffiliateLink';
import { KRISP_AFFILIATE_URL } from '@site/src/constants';

interface ComparisonRow {
  feature: string;
  krisp: string;
  competitor: string;
}

interface ComparisonTableProps {
  competitorName: string;
  krispLabel?: string;
  rows: ComparisonRow[];
  krispUrl?: string;
  competitorUrl?: string;
  ctaText?: string;
}

/** Side-by-side feature table for "Krisp vs X" pages. Horizontally scrollable
 *  on small screens, accessible (caption + scope), with a Krisp CTA below. */
export default function ComparisonTable({
  competitorName,
  krispLabel = 'Krisp',
  rows,
  krispUrl = KRISP_AFFILIATE_URL,
  ctaText = 'Try Krisp free',
}: ComparisonTableProps): React.ReactElement {
  const captionId = useId();
  const helpId = useId();
  return (
    <div
      className="comparison-table-wrapper"
      tabIndex={0}
      role="region"
      aria-labelledby={captionId}
      aria-describedby={helpId}
    >
      <p id={helpId} className="sr-only">
        This comparison table may scroll horizontally on smaller screens.
      </p>
      <table className="comparison-table">
        <caption id={captionId} className="sr-only">
          {krispLabel} versus {competitorName} feature comparison
        </caption>
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col" className="comparison-table__highlight">{krispLabel}</th>
            <th scope="col">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <th scope="row">{row.feature}</th>
              <td className="comparison-table__highlight">{row.krisp}</td>
              <td>{row.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="comparison-table__cta-row">
        <AffiliateLink href={krispUrl} variant="button" location="comparison-table">
          {ctaText}
        </AffiliateLink>
      </div>
    </div>
  );
}
