import { motion, AnimatePresence, useUnmountEffect } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const PageWrapper = ({ children }) => {
  const { asPath } = useRouter();

  const variants = {
    initial: {
      opacity: 0,
      y: "100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.35,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: "-100vh",
      transition: {
        duration: 5,
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          style={{ height: "100%" }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={asPath}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
