import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type { WrapperProps } from '@docusaurus/types';
import StickyCTA from '@site/src/components/StickyCTA';

type Props = WrapperProps<typeof LayoutType>;

/**
 * Wraps the default doc article layout to add a dismissable sticky affiliate
 * CTA on every /docs/ page. Docs are where most search traffic lands, so this
 * gives readers a button at the moment they are convinced, mid-article.
 */
export default function LayoutWrapper(props: Props): React.ReactElement {
  return (
    <>
      <Layout {...props} />
      <StickyCTA />
    </>
  );
}
