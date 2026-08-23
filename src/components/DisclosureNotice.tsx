import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

/**
 * FTC affiliate disclosure. Rendered client-side after hydration so it is
 * visible to real readers but kept out of SERP snippets / plain-HTML crawlers
 * (data-nosnippet), while staying fully transparent to anyone on the page.
 */
export default function DisclosureNotice(): React.ReactElement | null {
  const { pathname } = useLocation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const isBlogListPreviewPage =
    pathname === '/blog/' ||
    pathname.startsWith('/blog/page/') ||
    pathname.startsWith('/blog/tags') ||
    pathname.startsWith('/blog/archive');

  if (!mounted || isBlogListPreviewPage) {
    return null;
  }

  return (
    <div className="disclosure-notice" data-nosnippet>
      <p>
        Contains affiliate links.{' '}
        <Link to="/legal/affiliate-disclosure/">Disclosure</Link>.
      </p>
    </div>
  );
}
