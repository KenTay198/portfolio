import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const AnimateSlide = ({
  direction,
  children,
  animateInView = false,
  ...props
}) => {
  const ref = useRef();
  const controls = useAnimation();
  const inView = useInView(ref);

  const variants = {
    left: {
      hidden: { opacity: 0, translateX: "100%" },
      visible: { opacity: 1, translateX: 0 },
    },
    right: {
      hidden: { opacity: 0, translateX: "-100%" },
      visible: { opacity: 1, translateX: 0 },
    },
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
  };

  useEffect(() => {
    if (animateInView && inView) controls.start("visible");
  }, [animateInView, controls, inView]);

  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      animate={animateInView ? controls : "visible"}
      transition={{
        ease: props.ease || "linear",
        delay: props.delay || 0,
        duration: props.duration || 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const AnimateRotate = ({
  children,
  animateInView = false,
  ...props
}) => {
  const ref = useRef();
  const controls = useAnimation();
  const inView = useInView(ref);

  const variants = {
    hidden: {
      opacity: 0,
      rotate: "0deg",
    },
    visible: {
      opacity: 1,
      rotate: ["360deg", "0deg"],
    },
  };

  useEffect(() => {
    if (animateInView && inView) controls.start("visible");
  }, [animateInView, controls, inView]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={"visible"}
      transition={{
        ease: props.ease || "linear",
        delay: props.delay || 0,
        duration: props.duration || 0.5,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
