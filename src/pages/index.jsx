import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "@styles/pages/Home.module.scss";
import { useRouter } from "next/router";
import fr from "../locales/index/fr";
import en from "../locales/index/en";
import Layout from "@components/Layout/Layout";
import Link from "next/link";
import CasquetteBeige from "@assets/images/casquette-beige.png";
import CasquetteBleue from "@assets/images/casquette-bleue.png";
import { useColorTheme } from "@context/ColorThemeContext";

const Home = () => {
  const [{ theme }] = useColorTheme();
  const router = useRouter();
  const { locale } = router;
  const pageContent = locale === "fr" ? fr : en;

  const handleShake = (e) => {
    e.target.classList.add("shake");
    setTimeout(() => {
      e.target.classList.remove("shake");
    }, 500);
  };

  return (
    <React.Fragment>
      <Head>
        <title>John-Kenneth TAYLOR AFONAH</title>
        <meta name="description" content={pageContent.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div
          className={`${styles["homepage"]} ${
            theme === "dark" ? styles["dark"] : ""
          }`}
        >
          <div className={styles["homepage-content"]}>
            <div className={styles["logo"]} onClick={(e) => handleShake(e)}>
              {theme === "dark" ? (
                <Image
                  src={CasquetteBeige}
                  alt={pageContent.images.logo.alt}
                  width={200}
                  priority
                />
              ) : (
                <Image
                  src={CasquetteBleue}
                  alt={pageContent.images.logo.alt}
                  width={200}
                  priority
                />
              )}
            </div>
            <div className={styles["texte"]}>
              <h1>
                John-Kenneth, Stephen
                <br />
                TAYLOR AFONAH
              </h1>
              <h2>{pageContent.job}</h2>
              <Link href={"/about"}>
                <p
                  className={`${styles["next-page"]} hover-effect-underline ${theme}`}
                >
                  {pageContent.nextPage}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
