import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Translate from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useBlogTagsPostsPageTitle} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogTagsPostsPage';

/**
 * Swizzled BlogTagsPostsPage: same as the default, but wraps the post list in
 * `.blog-cards` so tag pages render the same bordered cards as /blog.
 */
function BlogTagsPostsPageMetadata({tag}: {tag: Props['tag']}): ReactNode {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      {/* Tag archives are thin aggregations of posts already indexed on /blog;
          keep them crawlable for users but out of the index. */}
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}

function BlogTagsPostsPageContent({
  tag,
  items,
  sidebar,
  listMetadata,
}: Props): ReactNode {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <BlogLayout sidebar={sidebar}>
      {tag.unlisted && <Unlisted />}
      <header className="margin-bottom--xl">
        <Heading as="h1">{title}</Heading>
        {tag.description && <p>{tag.description}</p>}
        <Link href={tag.allTagsPath}>
          <Translate
            id="theme.tags.tagsPageLink"
            description="The label of the link targeting the tag list page">
            View All Tags
          </Translate>
        </Link>
      </header>
      <div className="blog-cards">
        <BlogPostItems items={items} />
      </div>
      <BlogListPaginator metadata={listMetadata} />
    </BlogLayout>
  );
}

export default function BlogTagsPostsPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <BlogTagsPostsPageMetadata {...props} />
      <BlogTagsPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
