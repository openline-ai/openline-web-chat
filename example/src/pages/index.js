import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import '@openline-ai/openline-web-chat/dist/esm/index.css'
import styles from './index.module.css';
import {WebChat} from "@openline-ai/openline-web-chat";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
        <WebChat apikey="nobody-will-guess-this-api-key"
                 httpServerPath="http://localhost:8013/api/v1"
                 wsServerPath="ws://localhost:8013/api/v1"
                 trackerEnabled={true}
                 trackerAppId="openline-help-widget"
                 trackerId="openline-help-widget-dev"
                 trackerCollectorUrl="https://lzdyxrxc-uat-ninja.openline.ai"
                 trackerBufferSize="1"
                 trackerMinimumVisitLength="10"
                 trackerHeartbeatDelay="10"

        ></WebChat>
    </Layout>
  );
}
