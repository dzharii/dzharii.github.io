import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HelloWorld from '../../docs/intro.md';


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
        </div>
      </main>
    </Layout>
  );
}