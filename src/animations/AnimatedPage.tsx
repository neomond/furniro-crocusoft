import { motion } from "framer-motion";
import { FC } from "react";
interface AnimatedPageProps {
  children: React.ReactNode;
}
const animations = {
  initial: { opacity: 0, x: 100, scale: 0.95 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -100,
    scale: 0.95,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export const fadeIn = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
  },
};

const AnimatedPage: FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
