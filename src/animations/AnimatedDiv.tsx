import { motion } from "framer-motion";
import { fadeIn } from "./AnimatedPage";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: any;
  viewport?: any;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  className,
  viewport,
}: any) => {
  return (
    <motion.div
      variants={fadeIn}
      animate={{ opacity: 1 }}
      initial="hidden"
      whileInView="visible"
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
