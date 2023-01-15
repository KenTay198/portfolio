import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "styles/pages/Home.module.scss";
import { useRouter } from "next/router";
import Layout from "components/Layout/Layout";
import Link from "next/link";
import CasquetteBeige from "assets/images/casquette-beige.png";
import CasquetteBleue from "assets/images/casquette-bleue.png";
import { useColorTheme } from "context/ColorThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import {
  InfiniteBounce,
  AnimatedSlideUp,
  AnimatedSlideDown,
  AnimatedRotate,
  AnimatedSlideRight,
} from "components/Animated/AnimatedContainers";
import content from "locales/index.content";
import { useState } from "react";

const Home = () => {
  const [{ theme }] = useColorTheme();
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];
  const [displayed, setDisplayed] = useState(true);

  const handleShake = (e: React.UIEvent) => {
    if (e.target instanceof Element) {
      e.target.classList.add("shake");
      setTimeout(() => {
        if (e.target instanceof Element) {
          e.target.classList.remove("shake");
        }
      }, 500);
    }
  };

  return (
    <>
      <Head>
        <title>John-Kenneth TAYLOR AFONAH</title>
        <meta name="description" content={pageContent.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout
        mainclass={`${styles["homepage"]} ${
          theme === "dark" ? styles["dark"] : ""
        }`}
      >
        <div className={styles["homepage-content"]}>
          <AnimatedRotate delay={0.3}>
            <InfiniteBounce>
              <Image
                src={theme === "dark" ? CasquetteBeige : CasquetteBleue}
                alt={pageContent.images.logo.alt}
                onClick={(e) => handleShake(e)}
                width={200}
                priority
              />
            </InfiniteBounce>
          </AnimatedRotate>

          <div
            onClick={() => setDisplayed(!displayed)}
            className={styles["texte"]}
          >
            <AnimatedSlideRight delay={0.4}>
              <h1>
                John-Kenneth, Stephen
                <br />
                TAYLOR AFONAH
              </h1>
            </AnimatedSlideRight>
            <AnimatedSlideRight delay={0.5}>
              <h2>{pageContent.job}</h2>
            </AnimatedSlideRight>
            <AnimatedSlideRight delay={0.6}>
              <Link href={"/about"}>
                <p
                  className={`${styles["next-page"]} hover-effect-underline ${theme}`}
                >
                  {pageContent.nextPage}
                </p>
              </Link>
            </AnimatedSlideRight>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
