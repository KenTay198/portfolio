import Layout from "components/Layout/Layout";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import content from "locales/about.content";
import styles from "styles/pages/About.module.scss";
import { useParallax } from "react-scroll-parallax";

const AboutSection = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];

  const title = useParallax({
    speed: -20,
    translateX: ["-100%", "100%"],
  });

  const texte = useParallax({
    speed: 50,
  });

  // https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion
  return (
    <div className={styles["about"]}>
      <div>
        <h1
          ref={title.ref as React.RefObject<HTMLDivElement>}
          className="text-3d"
        >
          {pageContent.title}
        </h1>
      </div>
      <section
        className={styles["texte"]}
        ref={texte.ref as React.RefObject<HTMLDivElement>}
      >
        <ul className={styles["presentation"]}>
          {pageContent.presentation.map(({ label, value }, index) => (
            <li key={`presentation-${index}`}>
              <p>{label}</p>
              <p>{value}</p>
            </li>
          ))}
        </ul>
        {/* <p>
          {pageContent.description.map((text, index) => (
            <React.Fragment key={index}>
              {text}
              <br />
            </React.Fragment>
          ))}
        </p> */}
      </section>
    </div>
  );
};

export default AboutSection;
