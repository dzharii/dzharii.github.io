import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HelloWorld from '@site/docs/intro.md';

import WatchListDoc from '@site/docs/a-watch-reading-list/my-watch-reading-list-now.md';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div style={{
          paddingTop: '10pt',
          paddingLeft: '5vw',
          paddingRight: '5vw',
        }}>
            <HelloWorld />

            <h2>📺 My watching/reading list</h2>
            <WatchListDoc />
        </div>
      </main>
    </Layout>
  );
}