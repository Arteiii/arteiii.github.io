import React, { useState } from "react";
import Layout from "@theme/Layout";

import HeroSection from "../components/homepage/HeroSection";
import Head from "@docusaurus/Head";
import ResourcesSection from "../components/homepage/ResourcesSection";

export default function Homepage() {
  return (
      <Layout
          description="A personal blog and documentation site. Linux, Windows, programming, kernel development, Python"
          wrapperClassName="homepage flex flex-col"
      >
        <Head>
          <title>Arteii - not a web dev</title>
          <meta name="msvalidate.01" content="4BE0AB5A8B5736126C93DE177CA2EC2F"/>
          <meta name="yandex-verification" content="13d1cc1868fe2de2"/>
          <meta property="og:title" content="Arteii - not a web dev"/>
          <meta property="og:description"
                content="A personal blog and documentation site. Linux, Windows, programming, kernel development, Python"/>
          <meta property="og:image" content="https://arteiii.github.io/img/Website-Social-Card.jpeg"/>
          <meta property="twitter:description"
                content="A personal blog and documentation site. Linux, Windows, programming, kernel development, Python"/>
          <meta property="og:url" content="https://arteiii.github.io/"/>
          <meta property="og:type" content="website"/>
          <meta name="author" content="Arteii"/>
          <meta name="keywords" content="arteii, blog, documentation, linux, programming, windows, kernel, python"/>
          <link rel="prefetch" href="/assets/css/elements.min.css"/>
        </Head>

        <HeroSection/>

         {/*<ResourcesSection />*/}
      </Layout>
  );
}
