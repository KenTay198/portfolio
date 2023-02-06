import React from "react";
import Image from "next/image";
import styles from "styles/pages/Home.module.scss";
import Link from "next/link";
import CasquetteBeige from "images/logos/casquette-beige.png";
import {
  AnimateRotate,
  AnimateSlide,
} from "components/Animations/EnterAnimations";
import { InfiniteBounce } from "components/Animations/InfiniteAnimations";
import { ClickRotate } from "components/Animations/ClickAnimations";
import { useRouter } from "next/router";
import content from "locales/index.content";
const HomeSection = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];

  return (
    <section className={styles["homepage"]}>
      <div className={styles["homepage-content"]}>
        <div>
          <AnimateRotate delay={0.3}>
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
          </AnimateRotate>
        </div>

        <div className={styles["texte"]}>
          <AnimateSlide direction="right" delay={0.4}>
            <h1>
              John-Kenneth, Stephen
              <br />
              TAYLOR AFONAH
            </h1>
          </AnimateSlide>
          <AnimateSlide direction="right" delay={0.5}>
            <h2>{pageContent.job}</h2>
          </AnimateSlide>
          <AnimateSlide direction="right" delay={0.6}>
            <Link href={"/about"}>
              <p className={`${styles["next-page"]} hover-effect-underline`}>
                {pageContent.nextPage}
              </p>
            </Link>
          </AnimateSlide>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
