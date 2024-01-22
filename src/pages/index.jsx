import React, { useState } from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <Layout
      description="Arteii - Ben i do things"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>
      
      <HeroSection />
    </Layout>
  );
}
