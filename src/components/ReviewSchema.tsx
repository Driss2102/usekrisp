import React from 'react';
import { useLocation } from '@docusaurus/router';
import { plainText, schemaScriptId, toAbsoluteUrl, toCanonicalPath } from './schemaUtils';
import { SITE_ORIGIN, KRISP_HOME } from '@site/src/constants';

/**
 * Independent, third-party editorial (critic) review of Krisp, a product we do
 * not own — allowed under Google's review-snippet policy (the self-serving ban
 * is about reviewing your OWN products). Emits a single named-author Review with
 * a real critic rating and NO aggregateRating/reviewCount, so we never imply
 * crowd-sourced ratings we have not collected.
 */
interface ReviewSchemaProps {
  itemName: string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  itemType?: string;
  /** Canonical URL of the reviewed subject (defaults to Krisp). Use the page URL for comparisons. */
  itemUrl?: string;
  author?: string;
  authorUrl?: string;
  reviewBody?: string;
  datePublished?: string;
}

export default function ReviewSchema({
  itemName,
  ratingValue,
  bestRating = 5,
  worstRating = 1,
  itemType = 'SoftwareApplication',
  itemUrl = KRISP_HOME,
  author = 'Driss Lahbil',
  authorUrl = `${SITE_ORIGIN}/about/`,
  reviewBody,
  datePublished,
}: ReviewSchemaProps): React.ReactElement {
  const { pathname } = useLocation();
  const canonicalPath = toCanonicalPath(pathname);
  const pageUrl = toAbsoluteUrl(canonicalPath);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${pageUrl}#review`,
    name: `${plainText(itemName)} Review`,
    mainEntityOfPage: pageUrl,
    itemReviewed: {
      '@type': itemType,
      name: plainText(itemName),
      url: toAbsoluteUrl(itemUrl),
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue,
      bestRating,
      worstRating,
    },
    author: {
      '@type': 'Person',
      name: plainText(author),
      url: toAbsoluteUrl(authorUrl),
    },
    publisher: { '@id': `${SITE_ORIGIN}/#organization` },
    ...(reviewBody && { reviewBody: plainText(reviewBody) }),
    ...(datePublished && { datePublished }),
  };

  return (
    <script
      id={schemaScriptId('review', canonicalPath, plainText(itemName))}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
