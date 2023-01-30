
import { motion, useAnimationControls } from "framer-motion";

export const ClickRotate = ({ children, ...props }) => {
  const controls = useAnimationControls();

  const variants = {
    initial: {
      rotate: "0deg",
    },
    animate: {
      rotate: ["360deg", "0deg"],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={controls}
      exit="exit"
      onClick={() => controls.start("animate")}
    >
      {children}
    </motion.div>
  );
};
