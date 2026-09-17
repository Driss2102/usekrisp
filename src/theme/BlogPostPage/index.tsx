import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import type BlogPostPageType from '@theme/BlogPostPage';
import type { WrapperProps } from '@docusaurus/types';
import StickyCTA from '@site/src/components/StickyCTA';

type Props = WrapperProps<typeof BlogPostPageType>;

/**
 * Wraps the default blog post page to add the dismissable sticky affiliate CTA
 * on every full blog post, so timely top-of-funnel readers get a path to Krisp
 * without editing each post individually.
 */
export default function BlogPostPageWrapper(props: Props): React.ReactElement {
  return (
    <>
      <BlogPostPage {...props} />
      <StickyCTA />
    </>
  );
}
