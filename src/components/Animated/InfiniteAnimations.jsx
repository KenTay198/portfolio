import React from "react";
import { motion } from "framer-motion";

export const InfiniteBounce = ({ children, ...props }) => {
  return (
    <motion.div
      animate={{ y: [15, -15] }}
      transition={{
        repeat: "Infinity",
        duration: 0.5,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
};
