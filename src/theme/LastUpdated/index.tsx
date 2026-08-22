import React, { type ReactNode } from 'react';
import type { Props } from '@theme/LastUpdated';

/**
 * Clean swizzle of the LastUpdated component. It renders the freshness date
 * (good for SEO) but drops Docusaurus's dev-only "(Simulated during dev for
 * better perf)" note that the default component appends in development.
 */
function formatDate(ts: number): string {
  const ms = ts > 1e12 ? ts : ts * 1000;
  return new Date(ms).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function LastUpdated({
  lastUpdatedAt,
  lastUpdatedBy,
}: Props): ReactNode {
  const parts: string[] = [];
  if (lastUpdatedAt) {
    parts.push(`Last updated on ${formatDate(lastUpdatedAt)}`);
  }
  if (lastUpdatedBy) {
    parts.push(`${lastUpdatedAt ? 'by' : 'Last updated by'} ${lastUpdatedBy}`);
  }
  const text = parts.join(' ');
  if (!text) {
    return null;
  }
  return (
    <span className="theme-last-updated">
      <em>{text}</em>
    </span>
  );
}
