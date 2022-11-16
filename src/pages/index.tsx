import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { default as LegacyImage } from "next/legacy/image";
import React from "react";
import styles from "../styles/pages/Home.module.scss";
import { useRouter } from "next/router";
import fr from "../locales/index/fr";
import en from "../locales/index/en";
import Layout from "@components/Layout/Layout";
import Link from "next/link";
import CasquetteBeige from "@assets/images/casquette-beige.png";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = locale === "fr" ? fr : en;

  return (
    <React.Fragment>
      <Head>
        <title>John-Kenneth TAYLOR AFONAH</title>
        <meta name="description" content={pageContent.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.homepage}>
          <div className={styles["logo-bubble"]}>
            <div className={`${styles.bubble} shadowed`}>
              <h1 className="title-font">
                John-Kenneth, Stephen
                <br />
                TAYLOR AFONAH
              </h1>
            </div>
            <div className={`${styles.logo} shadowed`}>
              <Image
                src={CasquetteBeige}
                alt={pageContent.images.casquetteBeige.alt}
                width={200}
              />
            </div>
          </div>
          <div className={styles["page-flip-container"]}>
            <span className={`${styles["next-page-button"]} text-shadowed`}>
              <Link href={"/about"}>{pageContent.nextPage}</Link>
            </span>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
