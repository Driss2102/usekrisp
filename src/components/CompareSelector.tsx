import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';

/** Brand glyphs for the calling apps (reused from the homepage app-chooser). */
const ZoomIcon = (
  <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#2D8CFF" />
    <path d="M11 19a2 2 0 0 1 2-2h13a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2H14a3 3 0 0 1-3-3v-9Zm20 3.2 6-3.4v10.4l-6-3.4v-3.6Z" fill="#fff" />
  </svg>
);
const TeamsIcon = (
  <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#5B5FC7" />
    <text x="24" y="33" fontSize="22" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif">T</text>
  </svg>
);
const MeetIcon = (
  <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#00832D" />
    <path d="M12 19a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V19Zm17 3 7-3.5v11L29 26v-4Z" fill="#fff" />
  </svg>
);
const DiscordIcon = (
  <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#5865F2" />
    <circle cx="19.5" cy="25" r="2.4" fill="#fff" />
    <circle cx="28.5" cy="25" r="2.4" fill="#fff" />
    <path d="M17 18c3-1.4 11-1.4 14 0M17 31c3 1.4 11 1.4 14 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

interface Comparison {
  id: string;
  name: string;
  path: string;
  group: string;
  /** Brand color for the initial tile (used only if neither `icon` nor `img`). */
  color: string;
  /** Inline brand glyph (calling apps). */
  icon?: React.ReactNode;
  /** Official brand logo hosted under /static/img/logos (competitors). */
  img?: string;
}

const GROUP_ORDER = ['Built-in noise removal', 'AI note-takers', 'Noise & audio tools'];

/**
 * Every Krisp comparison page, grouped for readability. Add a line here when a
 * new `/docs/compare/krisp-vs-*` page ships and the selector picks it up
 * everywhere. Keep `path` with the trailing slash (site uses trailingSlash).
 * Competitor logos are the brands' own icons, served as <img> for editorial
 * comparison use; the calling apps use inline SVG glyphs.
 */
const COMPARISONS: Comparison[] = [
  { id: 'zoom-built-in', name: "Zoom's built-in", path: '/docs/compare/krisp-vs-zoom-built-in/', group: 'Built-in noise removal', color: '#2D8CFF', icon: ZoomIcon },
  { id: 'teams-built-in', name: "Teams' built-in", path: '/docs/compare/krisp-vs-teams-built-in/', group: 'Built-in noise removal', color: '#5B5FC7', icon: TeamsIcon },
  { id: 'google-meet-built-in', name: "Google Meet's built-in", path: '/docs/compare/krisp-vs-google-meet-built-in/', group: 'Built-in noise removal', color: '#00832D', icon: MeetIcon },
  { id: 'discord', name: "Discord's built-in", path: '/docs/compare/krisp-app-vs-discord/', group: 'Built-in noise removal', color: '#5865F2', icon: DiscordIcon },
  { id: 'otter', name: 'Otter', path: '/docs/compare/krisp-vs-otter/', group: 'AI note-takers', color: '#00A6C0', img: '/img/logos/otter.png' },
  { id: 'fireflies', name: 'Fireflies', path: '/docs/compare/krisp-vs-fireflies/', group: 'AI note-takers', color: '#F5A623', img: '/img/logos/fireflies.png' },
  { id: 'fathom', name: 'Fathom', path: '/docs/compare/krisp-vs-fathom/', group: 'AI note-takers', color: '#EF4444', img: '/img/logos/fathom.png' },
  { id: 'tldv', name: 'tl;dv', path: '/docs/compare/krisp-vs-tldv/', group: 'AI note-takers', color: '#2D3DF5', img: '/img/logos/tldv.png' },
  { id: 'notta', name: 'Notta', path: '/docs/compare/krisp-vs-notta/', group: 'AI note-takers', color: '#2E6BE6', img: '/img/logos/notta.png' },
  { id: 'jamie', name: 'Jamie', path: '/docs/compare/krisp-vs-jamie/', group: 'AI note-takers', color: '#1F2937', img: '/img/logos/jamie.png' },
  { id: 'fellow', name: 'Fellow', path: '/docs/compare/krisp-vs-fellow/', group: 'AI note-takers', color: '#E24C4B', img: '/img/logos/fellow.png' },
  { id: 'granola', name: 'Granola', path: '/docs/compare/krisp-vs-granola/', group: 'AI note-takers', color: '#8A9A3B', img: '/img/logos/granola.png' },
  { id: 'tactiq', name: 'Tactiq', path: '/docs/compare/krisp-vs-tactiq/', group: 'AI note-takers', color: '#C13BC7', img: '/img/logos/tactiq.png' },
  { id: 'read-ai', name: 'Read.ai', path: '/docs/compare/krisp-vs-read-ai/', group: 'AI note-takers', color: '#6D5AE6', img: '/img/logos/read-ai.png' },
  { id: 'avoma', name: 'Avoma', path: '/docs/compare/krisp-vs-avoma/', group: 'AI note-takers', color: '#FF6A2C', img: '/img/logos/avoma.jpg' },
  { id: 'nvidia-broadcast', name: 'NVIDIA Broadcast', path: '/docs/compare/krisp-vs-nvidia-broadcast/', group: 'Noise & audio tools', color: '#76B900', img: '/img/logos/nvidia-broadcast.png' },
  { id: 'adobe-podcast', name: 'Adobe Podcast', path: '/docs/compare/krisp-vs-adobe-podcast/', group: 'Noise & audio tools', color: '#6366F1', img: '/img/logos/adobe-podcast.png' },
  { id: 'cleanvoice', name: 'Cleanvoice', path: '/docs/compare/krisp-vs-cleanvoice/', group: 'Noise & audio tools', color: '#3B3BF5', img: '/img/logos/cleanvoice.png' },
  { id: 'utterly', name: 'Utterly', path: '/docs/compare/krisp-vs-utterly/', group: 'Noise & audio tools', color: '#E11D48', img: '/img/logos/utterly.png' },
  { id: 'plaud', name: 'Plaud', path: '/docs/compare/krisp-vs-plaud/', group: 'Noise & audio tools', color: '#FF5A1F', img: '/img/logos/plaud.png' },
];

/** Product icon: inline glyph, else official logo image, else brand-colored initial. */
function Avatar({ item, lg }: { item: Comparison; lg?: boolean }): React.ReactElement {
  const cls = `cmp-selector__avatar${lg ? ' cmp-selector__avatar--lg' : ''}`;
  if (item.icon) {
    return <span className={`${cls} cmp-selector__avatar--icon`} aria-hidden="true">{item.icon}</span>;
  }
  if (item.img) {
    return (
      <span className={`${cls} cmp-selector__avatar--img`} aria-hidden="true">
        <img src={item.img} alt="" loading="lazy" />
      </span>
    );
  }
  return (
    <span className={cls} aria-hidden="true" style={{ background: item.color, color: '#fff' }}>
      {item.name.charAt(0)}
    </span>
  );
}

interface CompareSelectorProps {
  /** id of the comparison this page shows, so it reads as selected. */
  current?: string;
}

/**
 * Interactive "Krisp vs [pick a tool]" head-to-head selector. Krisp is fixed on
 * the left; the right side is a dropdown that navigates to any other comparison
 * page. Options are grouped and are real internal links (good for crawl +
 * engagement). The menu closes on outside-click or Escape.
 */
export default function CompareSelector({ current }: CompareSelectorProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = COMPARISONS.find((c) => c.id === current);

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="cmp-selector" ref={ref}>
      <span className="cmp-selector__eyebrow">Head-to-head comparison</span>
      <div className="cmp-selector__match">
        <div className="cmp-selector__side cmp-selector__side--krisp">
          <span className="cmp-selector__avatar cmp-selector__avatar--lg cmp-selector__avatar--krisp" aria-hidden="true">K</span>
          <span className="cmp-selector__side-body">
            <span className="cmp-selector__side-name">Krisp</span>
            <span className="cmp-selector__side-tag">reviewed here</span>
          </span>
        </div>

        <span className="cmp-selector__vsbadge" aria-hidden="true">VS</span>

        <div className="cmp-selector__dd">
          <button
            type="button"
            className="cmp-selector__side cmp-selector__side--pick"
            aria-haspopup="listbox"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {active ? <Avatar item={active} lg /> : <span className="cmp-selector__avatar cmp-selector__avatar--lg" aria-hidden="true">?</span>}
            <span className="cmp-selector__side-body">
              <span className="cmp-selector__side-name">{active ? active.name : 'Choose a tool'}</span>
              <span className="cmp-selector__side-tag">Click to change</span>
            </span>
            <span className="cmp-selector__chevbtn" aria-hidden="true">
              <span className={`cmp-selector__chev${open ? ' cmp-selector__chev--open' : ''}`}>▾</span>
            </span>
          </button>

          {open && (
            <div className="cmp-selector__menu" role="listbox">
              {GROUP_ORDER.map((group) => (
                <div className="cmp-selector__group" key={group}>
                  <p className="cmp-selector__group-title">{group}</p>
                  <ul>
                    {COMPARISONS.filter((c) => c.group === group).map((c) => (
                      <li key={c.id} role="option" aria-selected={c.id === current}>
                        <Link
                          className={`cmp-selector__opt${c.id === current ? ' is-active' : ''}`}
                          to={c.path}
                          onClick={() => setOpen(false)}
                        >
                          <Avatar item={c} />
                          <span className="cmp-selector__opt-name">{c.name}</span>
                          {c.id === current && <span className="cmp-selector__check" aria-hidden="true">✓</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
