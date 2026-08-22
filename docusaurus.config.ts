import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { SITE_ORIGIN, KRISP_AFFILIATE_URL } from './src/constants';

const config: Config = {
  title: 'Krisp Guide',
  tagline: 'The independent guide to Krisp — noise cancellation, AI meeting notes, setup & honest comparisons',
  favicon: 'img/favicon.png',

  url: SITE_ORIGIN,
  baseUrl: '/',
  trailingSlash: true,

  // A broken internal link fails the build (site is in production).
  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Krisp Guide Blog',
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // Once you have a Google Analytics 4 property, add its id here:
        // gtag: { trackingID: 'G-XXXXXXX' },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  headTags: [
    {
      // Sitewide schema graph: WebSite + Organization. Per-page entities
      // (Review, FAQPage, HowTo) reference the Organization by @id.
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${SITE_ORIGIN}/#website`,
            name: 'Krisp Guide',
            url: SITE_ORIGIN,
            description: 'The independent guide to Krisp: noise cancellation, AI meeting notes, setup guides, and honest comparisons.',
            publisher: { '@id': `${SITE_ORIGIN}/#organization` },
          },
          {
            '@type': 'Organization',
            '@id': `${SITE_ORIGIN}/#organization`,
            name: 'Krisp Guide',
            url: SITE_ORIGIN,
            description: 'An independent guide to Krisp: how to set it up, what it costs, and how it compares to other noise-cancellation and AI meeting tools.',
            founder: {
              '@type': 'Person',
              name: 'Driss Lahbil',
              jobTitle: 'Software engineer',
              url: `${SITE_ORIGIN}/about/`,
            },
          },
        ],
      }),
    },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap',
      },
    },
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'keywords', content: 'krisp, krisp review, krisp ai, noise cancellation, ai meeting notes, krisp alternatives, krisp pricing, krisp zoom' },
      { name: 'description', content: 'The independent guide to Krisp: setup on Zoom, Teams and Discord, pricing, and honest comparisons with Otter, Fireflies, NVIDIA and more.' },
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'Krisp Guide - independent guide to Krisp noise cancellation and AI notes',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Guides',
          position: 'left',
          items: [
            { to: '/docs/what-is-krisp', label: 'What is Krisp?' },
            { to: '/docs/use/', label: 'Use Krisp on your apps' },
            { to: '/docs/for/', label: 'Krisp for your use case' },
            { to: '/docs/guides/', label: 'How-to guides' },
          ],
        },
        { to: '/docs/compare/', label: 'Compare', position: 'left' },
        { to: '/docs/review/', label: 'Review', position: 'left' },
        { to: '/docs/changelog', label: "What's new", position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: KRISP_AFFILIATE_URL,
          label: 'Try Krisp free',
          position: 'right',
          className: 'navbar-cta',
          rel: 'sponsored nofollow noopener noreferrer',
          'aria-label': 'Try Krisp for free, opens in a new tab',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            { label: 'Use Krisp on your apps', to: '/docs/use/' },
            { label: 'Krisp for your use case', to: '/docs/for/' },
            { label: 'How-to guides', to: '/docs/guides/' },
          ],
        },
        {
          title: 'Compare',
          items: [
            { label: 'Krisp alternatives', to: '/docs/compare/' },
            { label: 'Krisp review', to: '/docs/review/' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: "What's new in Krisp", to: '/docs/changelog' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Affiliate Disclosure', to: '/legal/affiliate-disclosure' },
            { label: 'Privacy Policy', to: '/legal/privacy-policy' },
            { label: 'Terms of Service', to: '/legal/terms-of-service' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Krisp Guide. Independent guide, not affiliated with Krisp Technologies Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
