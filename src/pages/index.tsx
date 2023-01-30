import Head from "next/head";

import React from "react";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import content from "locales/global.content";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HomeSection from "components/Sections/HomeSection";
import AboutSection from "../components/Sections/AboutSection";

const Home = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];

  return (
    <>
      <Head>
        <title>John-Kenneth TAYLOR AFONAH</title>
        <meta name="description" content={pageContent.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* <Parallax pages={3}> */}
        <HomeSection />
        <AboutSection />
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        <p>GANG</p>
        {/* </Parallax> */}
      </Layout>
    </>
  );
};

export default Home;
