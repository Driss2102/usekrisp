import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { AffiliateLink } from '@site/src/components';
import { KRISP_AFFILIATE_URL } from '@site/src/constants';

function HeroSection(): React.ReactElement {
  const stats = [
    { value: '200M+', label: 'Devices powered' },
    { value: '17', label: 'Languages' },
    { value: '7-day', label: 'Free trial, no card' },
    { value: '4.5/5', label: 'Our rating' },
  ];
  return (
    <section className="hero-section">
      <div className="hero-section__inner">
        <p className="hero-section__eyebrow">Independent · Tested · Updated 2026</p>
        <h1>Get crystal-clear calls with Krisp</h1>
        <p className="hero-section__lead">
          The independent guide to Krisp: how to remove background noise on any app,
          what it costs, and how it compares to Otter, Fireflies, and NVIDIA.
        </p>
        <div className="hero-buttons">
          <AffiliateLink href={KRISP_AFFILIATE_URL} variant="button" location="home-hero">
            Try Krisp free
          </AffiliateLink>
          <Link className="cta-link cta-link--button home-pricing__outline-btn" to="/docs/review/">
            Read the review
          </Link>
        </div>
        <p className="hero-section__cta-note">7-day free trial, no credit card, full access. A real test takes one call.</p>
        <ul className="hero-section__proof">
          <li>Voice AI on <strong>200M+ devices</strong></li>
          <li>Used by <strong>Discord, Twilio, VMware</strong></li>
          <li className="hero-section__rating"><Stars /> <strong>4.5/5</strong></li>
        </ul>
      </div>
      <div className="hero-section__inner">
        <dl className="trust-bar">
          {stats.map((s) => (
            <div key={s.label} className="trust-bar__item">
              <dd className="trust-bar__value">{s.value}</dd>
              <dt className="trust-bar__label">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const ICON = 36;
const apps = [
  {
    name: 'Zoom', desc: 'Kill background noise on Zoom', to: '/docs/use/zoom',
    icon: (
      <svg viewBox="0 0 48 48" width={ICON} height={ICON} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#2D8CFF" />
        <path d="M11 19a2 2 0 0 1 2-2h13a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2H14a3 3 0 0 1-3-3v-9Zm20 3.2 6-3.4v10.4l-6-3.4v-3.6Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Teams', desc: 'Clean audio on Teams calls', to: '/docs/use/microsoft-teams',
    icon: (
      <svg viewBox="0 0 48 48" width={ICON} height={ICON} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#5B5FC7" />
        <text x="24" y="33" fontSize="22" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif">T</text>
      </svg>
    ),
  },
  {
    name: 'Google Meet', desc: 'Clean audio on Meet', to: '/docs/use/google-meet',
    icon: (
      <svg viewBox="0 0 48 48" width={ICON} height={ICON} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#00832D" />
        <path d="M12 19a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V19Zm17 3 7-3.5v11L29 26v-4Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Discord', desc: 'No keyboard clatter on Discord', to: '/docs/use/discord',
    icon: (
      <svg viewBox="0 0 48 48" width={ICON} height={ICON} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#5865F2" />
        <circle cx="19.5" cy="25" r="2.4" fill="#fff" />
        <circle cx="28.5" cy="25" r="2.4" fill="#fff" />
        <path d="M17 18c3-1.4 11-1.4 14 0M17 31c3 1.4 11 1.4 14 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Slack', desc: 'Clean Slack huddles', to: '/docs/use/slack',
    icon: (
      <svg viewBox="0 0 48 48" width={ICON} height={ICON} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#611F69" />
        <text x="24" y="33" fontSize="23" fontWeight="800" fill="#fff" textAnchor="middle" fontFamily="Arial, sans-serif">#</text>
      </svg>
    ),
  },
  {
    name: 'Phone & VoIP', desc: 'Clean audio on calls', to: '/docs/use/phone-calls',
    icon: (
      <svg viewBox="0 0 48 48" width={ICON} height={ICON} aria-hidden="true">
        <rect width="48" height="48" rx="11" fill="#4F46E5" />
        <path d="M18 14c-1.1 0-2 .9-2 2 0 8.8 7.2 16 16 16 1.1 0 2-.9 2-2v-3.3c0-.9-.6-1.6-1.4-1.9l-3.6-1.2c-.8-.3-1.7 0-2.2.7l-.8 1c-2.6-1.3-4.7-3.4-6-6l1-.8c.7-.5 1-1.4.7-2.2l-1.2-3.6c-.3-.8-1-1.4-1.9-1.4H18Z" fill="#fff" />
      </svg>
    ),
  },
];

function AppChooserSection(): React.ReactElement {
  return (
    <section className="home-section home-section--shaded">
      <div className="home-shell">
        <p className="home-eyebrow">Setup guides</p>
        <h2>Where do you use Krisp?</h2>
        <p className="home-section__subtitle">Pick your app for a step-by-step setup guide.</p>
        <div className="app-chooser">
          {apps.map((app) => (
            <Link key={app.name} className="card-link" to={app.to}>
              <div className="section-card app-card">
                <span className="app-card__icon">{app.icon}</span>
                <span className="app-card__name">{app.name}</span>
                <span className="app-card__desc">{app.desc}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="home-section__footer">
          <Link className="cta-link cta-link--text" to="/docs/use/">See all setup guides →</Link>
        </div>
      </div>
    </section>
  );
}

const comparisons = [
  { opponent: 'Otter', subtitle: 'Noise cancellation vs deep AI notes', verdict: 'Pick Krisp if noise is the problem, not just notes', to: '/docs/compare/krisp-vs-otter' },
  { opponent: 'NVIDIA Broadcast', subtitle: 'Any laptop vs RTX-only hardware', verdict: 'Pick Krisp if you are not on an RTX machine', to: '/docs/compare/krisp-vs-nvidia-broadcast' },
  { opponent: 'Fireflies', subtitle: 'Bot-free audio vs a meeting bot', verdict: 'Pick Krisp if you dislike a bot in the call', to: '/docs/compare/krisp-vs-fireflies' },
];

function CompareSection(): React.ReactElement {
  return (
    <section className="home-section home-section--shaded">
      <div className="home-shell">
        <p className="home-eyebrow">Head to head</p>
        <h2>Krisp next to the tools you are comparing</h2>
        <p className="home-section__subtitle">Short comparisons aimed at one decision: where Krisp wins, and where it does not.</p>
        <div className="section-grid section-grid--3col">
          {comparisons.map((c) => (
            <Link key={c.opponent} className="card-link" to={c.to}>
              <div className="section-card compare-card">
                <h3 className="compare-card__title">
                  Krisp<span className="compare-card__vs">vs</span>
                  <span className="compare-card__opponent">{c.opponent}</span>
                </h3>
                <p>{c.subtitle}</p>
                <p className="compare-card__verdict">{c.verdict}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="home-section__footer">
          <Link className="cta-link cta-link--text" to="/docs/compare/">See all Krisp alternatives →</Link>
        </div>
      </div>
    </section>
  );
}

const guides = [
  { name: 'What is Krisp?', desc: 'The voice AI app explained in plain English.', to: '/docs/what-is-krisp' },
  { name: 'Remove background noise', desc: 'Every way to clean up a noisy call, free to best.', to: '/docs/guides/how-to-remove-background-noise' },
  { name: 'AI meeting notes', desc: 'How they work and how to get accurate ones.', to: '/docs/guides/ai-meeting-notes' },
  { name: 'Download Krisp', desc: 'Install on Windows, Mac, and mobile in minutes.', to: '/docs/guides/how-to-download-krisp' },
];

function GuidesSection(): React.ReactElement {
  return (
    <section className="home-section">
      <div className="home-shell">
        <p className="home-eyebrow">Guides</p>
        <h2>Popular guides</h2>
        <p className="home-section__subtitle">Start here if you are new to Krisp or noise cancellation.</p>
        <div className="section-grid section-grid--2col">
          {guides.map((g) => (
            <Link key={g.name} className="card-link" to={g.to}>
              <div className="section-card">
                <h3>{g.name}</h3>
                <p>{g.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreePlanSection(): React.ReactElement {
  return (
    <section className="home-section home-section--shaded">
      <div className="home-shell">
        <div className="home-pricing">
          <p className="home-eyebrow">Pricing</p>
          <h2>Free to try. Paid when you need more.</h2>
          <p className="home-section__subtitle" style={{ margin: '0.5rem auto 0' }}>
            The 7-day free trial includes full access to noise cancellation, transcription, and AI notes,
            with no credit card. After the trial you pick a paid plan. Prices vary by
            region, so we link rather than quote.
          </p>
          <div className="home-pricing__buttons">
            <Link className="cta-link cta-link--button home-pricing__outline-btn" to="/docs/review/krisp-pricing">
              See the plans
            </Link>
            <AffiliateLink href={KRISP_AFFILIATE_URL} variant="button" location="home-pricing">
              Try Krisp free
            </AffiliateLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: 'Is Krisp free?', a: 'Krisp has a 7-day free trial with full access and no credit card, but no permanent free plan. After the trial you pick a paid plan.' },
  { q: 'Does Krisp work on Zoom and Teams?', a: 'Yes. Krisp adds a virtual microphone that works on top of Zoom, Teams, Google Meet, Discord, and any calling app.' },
  { q: 'Is Krisp worth it?', a: 'If you are on calls in a noisy space, the bidirectional noise cancellation is the best plug-and-play fix, and the 7-day free trial makes it risk-free to try.' },
  { q: 'Is Krisp safe?', a: 'Noise cancellation runs on your device, and Krisp supports SOC 2, PCI DSS, and HIPAA on the right plans.' },
];

function FaqSection(): React.ReactElement {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <section className="home-section">
      <div className="home-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <p className="home-eyebrow">FAQ</p>
        <h2>Questions people ask before trying Krisp</h2>
        <div className="section-grid section-grid--2col">
          {faqs.map((f) => (
            <article key={f.q} className="section-card">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </article>
          ))}
        </div>
        <div className="home-section__footer">
          <Link className="cta-link cta-link--text" to="/docs/review/">Read the full Krisp review →</Link>
        </div>
      </div>
    </section>
  );
}

const posts = [
  { read: '3 min read', title: 'Best Noise-Cancelling Apps (2026)', desc: 'The apps worth using for calls, and how to pick.', to: '/blog/best-noise-cancelling-apps' },
  { read: '2 min read', title: 'Sound Professional on Video Calls', desc: 'Small fixes that make you sound clear and credible.', to: '/blog/sound-professional-video-calls' },
  { read: '2 min read', title: 'Working From Home in a Noisy House', desc: 'Seven fixes for kids, pets, traffic, and thin walls.', to: '/blog/work-from-home-noisy-house' },
];

function BlogSection(): React.ReactElement {
  return (
    <section className="home-section home-section--shaded">
      <div className="home-shell">
        <p className="home-eyebrow">From the blog</p>
        <h2>Read before your next call</h2>
        <p className="home-section__subtitle">Practical, independent tips on calls, noise, and meetings.</p>
        <div className="section-grid section-grid--3col">
          {posts.map((p) => (
            <Link key={p.title} className="card-link" to={p.to}>
              <div className="section-card">
                <p className="section-card__meta">{p.read}</p>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="home-section__footer">
          <Link className="cta-link cta-link--text" to="/blog">Read all posts →</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection(): React.ReactElement {
  return (
    <section className="home-section home-section--compact">
      <div className="home-shell">
        <div className="home-final-cta">
          <h2>Hear the difference on your next call</h2>
          <p className="home-section__subtitle" style={{ margin: '0.5rem auto 1.25rem' }}>
            Noise cancellation is something you judge in one call, not by reading about it.
          </p>
          <div className="home-pricing__buttons">
            <AffiliateLink href={KRISP_AFFILIATE_URL} variant="button" location="home-final-cta">
              Try Krisp free
            </AffiliateLink>
            <Link className="cta-link cta-link--button home-pricing__outline-btn" to="/docs/compare/">
              Compare the alternatives
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars(): React.ReactElement {
  const star = 'M12 2l2.9 6 6.6.5-5 4.3 1.5 6.4L12 16.9 6.5 19.2 8 12.8l-5-4.3 6.6-.5z';
  return (
    <span className="stars" aria-hidden="true">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="kg-halfstar">
            <stop offset="50%" stopColor="#F5A623" />
            <stop offset="50%" stopColor="var(--kg-border)" />
          </linearGradient>
        </defs>
      </svg>
      {[0, 1, 2, 3].map((i) => (
        <svg key={i} viewBox="0 0 24 24" width="17" height="17"><path d={star} fill="#F5A623" /></svg>
      ))}
      <svg viewBox="0 0 24 24" width="17" height="17"><path d={star} fill="url(#kg-halfstar)" /></svg>
    </span>
  );
}

const trustLogos = ['Discord', 'Twilio', 'VMware', 'Zoom', 'Slack'];
function TrustLogosSection(): React.ReactElement {
  return (
    <section className="home-section home-section--compact trust-logos-section">
      <div className="home-shell">
        <p className="trust-logos__label">Krisp's Voice AI powers audio on 200M+ devices, trusted by</p>
        <div className="trust-logos">
          {trustLogos.map((n) => (
            <span key={n} className="trust-logos__item">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: '1', title: 'Install Krisp', desc: 'Download the free app for Windows, Mac, or mobile. No credit card.' },
  { n: '2', title: 'Select Krisp', desc: 'In your calling app, pick "Krisp Microphone" and "Krisp Speaker" once.' },
  { n: '3', title: 'Enjoy clean calls', desc: 'Background noise is gone, in both directions, on every app.' },
];
function HowItWorksSection(): React.ReactElement {
  return (
    <section className="home-section">
      <div className="home-shell">
        <p className="home-eyebrow">How it works</p>
        <h2>Clean calls in three steps</h2>
        <p className="home-section__subtitle">Krisp sits between your microphone and any app. Set it once, then forget it.</p>
        <div className="section-grid section-grid--3col">
          {steps.map((s) => (
            <div key={s.n} className="section-card step-card">
              <span className="step-card__num" aria-hidden="true">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const workflow = [
  { phase: 'Before', desc: 'An AI-generated agenda from past conversations, calendar reminders, and recording presets, so you walk in prepared.' },
  { phase: 'During', desc: 'Real-time noise cancellation in both directions, accent conversion, and live transcription in 17 languages keep the call clear.' },
  { phase: 'After', desc: 'Automatic notes, summaries, and action items, ready to share to Slack or your CRM, so nothing is lost.' },
];
function MeetingWorkflowSection(): React.ReactElement {
  return (
    <section className="home-section home-section--shaded">
      <div className="home-shell">
        <p className="home-eyebrow">The full workflow</p>
        <h2>Krisp across your whole meeting</h2>
        <p className="home-section__subtitle">
          It is more than noise cancellation. Krisp helps before, during, and after every call.
        </p>
        <div className="section-grid section-grid--3col">
          {workflow.map((w) => (
            <div key={w.phase} className="section-card workflow-card">
              <span className="workflow-card__phase">{w.phase} the meeting</span>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const awards = [
  { issuer: 'Gartner', text: 'Cool Vendor in Digital Workplace Programs and Applications' },
  { issuer: 'Forbes AI 50', text: "America's Most Promising AI Companies" },
  { issuer: "People's Voice Award", text: 'Winner in Productivity & Collaboration' },
  { issuer: 'G2', text: 'Leader in Noise Cancellation and Voice Recognition' },
];
function AwardsSection(): React.ReactElement {
  return (
    <section className="home-section">
      <div className="home-shell">
        <p className="home-eyebrow">Recognition</p>
        <h2>Awards Krisp has earned</h2>
        <p className="home-section__subtitle">
          Independent recognition for the product, from Gartner, Forbes, G2, and more. These are Krisp's awards, cited here because we review the product.
        </p>
        <div className="section-grid section-grid--3col">
          {awards.map((a) => (
            <div key={a.issuer} className="section-card award-card">
              <span className="award-card__issuer">{a.issuer}</span>
              <p className="award-card__text">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Krisp Guide: Noise Cancellation, AI Notes, Setup & Reviews"
      description="The independent guide to Krisp. Setup guides for Zoom, Teams and Discord, honest reviews, and comparisons with Otter, Fireflies and NVIDIA."
      wrapperClassName="homepage"
    >
      <main>
        <HeroSection />
        <TrustLogosSection />
        <AppChooserSection />
        <HowItWorksSection />
        <MeetingWorkflowSection />
        <AwardsSection />
        <CompareSection />
        <GuidesSection />
        <FreePlanSection />
        <FaqSection />
        <BlogSection />
        <FinalCtaSection />
      </main>
    </Layout>
  );
}
