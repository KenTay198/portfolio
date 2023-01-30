import React from "react";
import { motion } from "framer-motion";

export const AnimatedSlideDown = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
        delay: props.delay || 0,
        duration: props.duration,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedSlideUp = ({ children, ...props }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "linear",
          delay: 2,
        }}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const AnimatedSlideRight = ({ children, ...props }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          ease: "linear",
          delay: props.delay,
        }}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const AnimatedRotate = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      exit={{ opacity: 0, rotate: -360 }}
      transition={{
        ease: "linear",
        delay: props.delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
