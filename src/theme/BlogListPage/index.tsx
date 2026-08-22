import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogListPage';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';

/**
 * Swizzled BlogListPage: adds a small SEO H1 and wraps the post list in
 * `.blog-cards` so each post preview renders as a bordered card (see custom.css).
 */
export default function BlogListPage(props: Props): ReactNode {
  const { metadata, items, sidebar } = props;
  const isFirstPage = !metadata.page || metadata.page === 1;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
      <BlogListPageStructuredData {...props} />
      <BlogLayout sidebar={sidebar}>
        {isFirstPage && (
          <>
            <h1 className="blog-list-page__title">
              Krisp Guide Blog: Noise Cancellation, Calls, and Meeting Tips
            </h1>
            <nav className="blog-tag-filter" aria-label="Filter posts by topic">
              <span className="blog-tag-filter__label">Topics</span>
              <Link to="/blog">All</Link>
              <Link to="/blog/tags/noise-cancellation/">Noise cancellation</Link>
              <Link to="/blog/tags/meetings/">Meetings</Link>
              <Link to="/blog/tags/remote-work/">Remote work</Link>
              <Link to="/blog/tags/transcription/">Transcription</Link>
              <Link to="/blog/tags/audio-quality/">Audio quality</Link>
              <Link to="/blog/tags/productivity/">Productivity</Link>
            </nav>
          </>
        )}
        <div className="blog-cards">
          <BlogPostItems items={items} />
        </div>
        <BlogListPaginator metadata={metadata} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
