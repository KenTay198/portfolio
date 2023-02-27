import React from "react";
import { useRouter } from "next/router";
import content from "locales/about.content";
import styles from "styles/pages/About.module.scss";
import { LetterSlide } from "components/Animations/TextAnimations";
import Image from "next/image";
import John from "images/photos/john_full.jpg";

const AboutSection = () => {
  const router = useRouter();
  const { locale } = router;
  const pageContent = content[locale as keyof typeof content];

  const formatText = (str: string): JSX.Element => {
    if (str.includes("<em>")) {
      const emIndex = str.indexOf("<em>");
      const splitStr = str.split("<em>");
      console.log(splitStr)
    }

    return <>{str}</>;
  };

  return (
    <div className={styles["about"]}>
      <LetterSlide
        animateInView={true}
        tag={"h1"}
        text={pageContent.title}
        className="text-3d"
      />
      <section className={styles["description"]}>
        <Image src={John} alt="Photo de John-Kenneth" unoptimized />
        <p>
          {pageContent.description.map((text, index) => (
            <React.Fragment key={index}>
              {formatText(text)}
              <br />
            </React.Fragment>
          ))}
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
