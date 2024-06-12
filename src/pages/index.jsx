import React, { useState } from "react";
import Layout from "@theme/Layout";

import HeroSection from "../components/homepage/HeroSection";
import ResourcesSection from "../components/homepage/ResourcesSection";
import Head from "@docusaurus/Head";

export default function Homepage() {
  return (
    <Layout
      description="A personal blog and documentation site. Discover articles on Linux, Windows, programming, kernel development, and Python."
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>

      <HeroSection />

      {/* <ResourcesSection /> */}
    </Layout>
  );
}
