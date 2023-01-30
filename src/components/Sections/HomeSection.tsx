import React from "react";
import Image from "next/image";
import styles from "styles/pages/Home.module.scss";
import Link from "next/link";
import CasquetteBeige from "assets/images/casquette-beige.png";
import {
  AnimatedRotate,
  AnimatedSlideRight,
} from "components/Animated/EnterAnimations";
import { InfiniteBounce } from "components/Animated/InfiniteAnimations";
import { ClickRotate } from "components/Animated/ClickAnimations";
import { useRouter } from "next/router";
import content from "locales/index.content";
import { useState } from "react";
import { useParallax } from "react-scroll-parallax";

const HomeSection = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];

  const image = useParallax({
    speed: -20,
  });

  const texte = useParallax({
    speed: -10,
  });

  return (
    <section className={styles["homepage"]}>
      <div className={styles["homepage-content"]}>
        <div ref={image.ref as React.RefObject<HTMLDivElement>}>
          <AnimatedRotate delay={0.3}>
            <InfiniteBounce>
              <ClickRotate>
                <Image
                  src={CasquetteBeige}
                  alt={pageContent.images.logo.alt}
                  unoptimized
                  priority
                />
              </ClickRotate>
            </InfiniteBounce>
          </AnimatedRotate>
        </div>

        <div
          className={styles["texte"]}
          ref={texte.ref as React.RefObject<HTMLDivElement>}
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
              <p className={`${styles["next-page"]} hover-effect-underline`}>
                {pageContent.nextPage}
              </p>
            </Link>
          </AnimatedSlideRight>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
