import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import variants from "./variants";

interface LayoutProps {
  children: React.ReactNode;
}

const Transition = ({ children }: LayoutProps) => {
  const { asPath } = useRouter();

  const getVariants = () => {
    if (asPath === "/") {
      return variants.home;
    }

    return variants.about;
  };

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
