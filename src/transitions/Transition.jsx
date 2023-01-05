import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import variants from "./variants";

const Transition = ({ children, ...props }) => {
  const { asPath } = useRouter();

  const getVariants = () => {};

  useEffect(() => {

  }, []);

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={getVariants()}
          animate="in"
          initial="out"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
