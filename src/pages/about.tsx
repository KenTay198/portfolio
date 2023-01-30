import Layout from "components/Layout/Layout";
import React from "react";
import { useRouter } from "next/router";
import content from "locales/about.content";
import styles from "styles/pages/About.module.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const AboutPage = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];

  return (
    <Layout mainclass={styles["about"]}>
      <Parallax pages={1}>
        <ParallaxLayer offset={0}>
          <h1>{pageContent.title}</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <h1>{pageContent.title}</h1>
        </ParallaxLayer>
      </Parallax>
      <ul>
        {pageContent.presentation.map(({ label, value }, index) => (
          <li key={`presentation-${index}`}>
            {label} : {value}
          </li>
        ))}
      </ul>
      <p>
        {pageContent.description.map((text, index) => (
          <React.Fragment key={index}>
            {text}
            <br />
          </React.Fragment>
        ))}
      </p>
    </Layout>
  );
};

export default AboutPage;
