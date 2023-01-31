import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const LetterSlide = ({
  tag: Tag,
  text,
  animateInView = false,
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const splitText = text.split("");

  const variants = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: [null, 50, 0] },
  };

  useEffect(() => {
    if (animateInView) {
      if (inView) {
        controls.start("visible");
      } else {
        controls.set("hidden");
      }
    }
  }, [animateInView, controls, inView]);

  return (
    <Tag {...props} ref={ref}>
      {splitText.map((letter, index) => (
        <motion.span
          key={`letter-${index}`}
          variants={variants}
          initial="hidden"
          animate={animateInView ? controls : "visible"}
          transition={{
            ease: "linear",
            delay: 0.075 * index,
            duration: 0.4,
          }}
        >
          {letter === " " ? <>&nbsp;</> : letter}
        </motion.span>
      ))}
    </Tag>
  );
};
