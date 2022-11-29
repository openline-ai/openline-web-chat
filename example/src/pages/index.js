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
  console.log(siteConfig)
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
        <WebChat apikey={`${siteConfig.customFields.REACT_APP_SP_API_KEY}`}
                 httpServerPath={`${siteConfig.customFields.REACT_APP_SP_HTTP_PATH}`}
                 wsServerPath={`${siteConfig.customFields.REACT_APP_SP_WS_PATH}`}
                 trackerEnabled={`${siteConfig.customFields.REACT_APP_SP_TRACKER_ENABLED}` === 'true'}
                 trackerAppId={`${siteConfig.customFields.REACT_APP_SP_TRACKER_APP_ID}`}
                 trackerId={`${siteConfig.customFields.REACT_APP_SP_TRACKER_TRACKER_ID}`}
                 trackerCollectorUrl={`${siteConfig.customFields.REACT_APP_SP_TRACKER_COLLECTOR_URL}`}
                 trackerBufferSize={`${siteConfig.customFields.REACT_APP_SP_TRACKER_BUFFER_SIZE}`}
                 trackerMinimumVisitLength={`${siteConfig.customFields.REACT_APP_SP_TRACKER_MIN_VISIT_SECONDS}`}
                 trackerHeartbeatDelay={`${siteConfig.customFields.REACT_APP_SP_TRACKER_HEARTBEAT_SECONDS}`}

        ></WebChat>
    </Layout>
  );
}
