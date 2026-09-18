import React from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'button' | 'text' | 'card' | 'inline';
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  /** Optional placement label, e.g. "hero-primary", "verdict-box", "final-cta".
   *  Sent to GA as `cta_location` so per-placement conversion can be compared. */
  location?: string;
}

/**
 * Every outbound affiliate link goes through this component. It:
 *  - opens in a new tab,
 *  - sets rel="sponsored nofollow ..." (Google's correct rel for paid/affiliate links),
 *  - fires a Google Analytics event so you can see which CTAs convert.
 *
 * The actual destination URL is passed in (usually the KRISP_AFFILIATE_URL
 * constant), so attribution lives in one place.
 */
export default function AffiliateLink({
  href,
  children,
  className = '',
  variant = 'text',
  onClick,
  location,
}: AffiliateLinkProps): React.ReactElement {
  const baseClass = 'cta-link';
  const variantClass = `${baseClass}--${variant}`;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const slug = window.location.pathname.replace(/\/$/, '');
      window.gtag('event', 'affiliate_link_clicked', {
        page_slug: slug || window.location.pathname,
        destination_url: href,
        link_text: typeof children === 'string' ? children : 'affiliate_link',
        page_location: window.location.href,
        ...(location && { cta_location: location }),
      });
    }
    onClick?.(e);
  };

  /** MDX often wraps multiline link text in `<p>`, which is invalid inside `<a>`. */
  const linkChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === 'p') {
      return (child.props as { children?: React.ReactNode }).children;
    }
    return child;
  });

  // Inline links sit inside body prose, so they skip the visible ↗ icon and
  // read as a normal word-level link (they keep the sponsored rel + GA event).
  const isInline = variant === 'inline';

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={`${baseClass} ${variantClass} ${className}`.trim()}
      onClick={handleClick}
    >
      {linkChildren}
      {!isInline && (
        <span className="cta-link__external-icon" aria-hidden="true">
          ↗
        </span>
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
