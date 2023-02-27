import React, { useRef } from "react";
import { useRouter } from "next/router";
import content from "locales/about.content";
import styles from "styles/pages/About.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { LetterSlide } from "components/Animations/TextAnimations";
import Image from "next/image";
import John from "images/photos/john_portrait_border_long.png";

const AboutSection = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];

  return (
    <div className={styles["about"]}>
      <LetterSlide
        animateInView={true}
        tag={"h1"}
        text={pageContent.title}
        className="text-3d"
      />
      <section>
        <PresentationItems items={pageContent.presentation} />
      </section>
      <section className={styles["description"]}>
        <Image src={John} alt="Photo de John-Kenneth" unoptimized />
        <p>
          {pageContent.description.map((text, index) => (
            <React.Fragment key={index}>
              {text}
              <br />
            </React.Fragment>
          ))}
        </p>
      </section>
    </div>
  );
};

type Props = {
  items: any[];
};

const PresentationItems = ({ items }: Props) => {
  const controls = useAnimation();
  const ref = useRef() as React.RefObject<HTMLUListElement>;
  const inView = useInView(ref);
  const delay = 0.3;

  const presentationVariants = {
    label: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    value: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.set("hidden");
    }
  }, [controls, inView]);

  return (
    <ul ref={ref} className={styles["presentation"]}>
      {items.map(({ label, value }, index) => (
        <React.Fragment key={`presentation-${index}`}>
          <motion.li
            variants={presentationVariants.label}
            initial="hidden"
            animate={controls}
            transition={{ delay: delay * (index + 1) }}
          >
            <p>{label}</p>
          </motion.li>
          <motion.li
            variants={presentationVariants.value}
            initial="hidden"
            animate={controls}
            transition={{ delay: delay * (index + 1) }}
          >
            <p>{value}</p>
          </motion.li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default AboutSection;
