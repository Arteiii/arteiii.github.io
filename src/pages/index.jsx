import React, { useState } from "react";
import Layout from "@theme/Layout";

import HeroSection from "../components/homepage/HeroSection";
import Head from "@docusaurus/Head";

export default function Homepage() {
  return (
    <Layout
      description="A personal blog and documentation site. Linux, Windows, programming, kernel development, Python"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <title>Arteii - not a web dev</title>
        <meta name="msvalidate.01" content="4BE0AB5A8B5736126C93DE177CA2EC2F" />
        <meta name="yandex-verification" content="13d1cc1868fe2de2" />
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>

      <HeroSection />

      {/* <ResourcesSection /> */}
    </Layout>
  );
}
