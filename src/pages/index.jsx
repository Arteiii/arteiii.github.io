import React, { useState } from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>

      {/* <div>
        <div className="w-full bg-gradient-to-r from-blue-500 to-red-500 p-4 text-center font-medium text-white">
        Affected by Twilio Video Sunsetting? Migrate to Dyte and get $30,000 Credits{' '}
          <Link
            to="https://dyte.io/twilio-video-competitor"
            className="text-white underline"
          >
            Learn more
          </Link>
        </div>
      </div> */}

      <HeroSection />
    </Layout>
  );
}
