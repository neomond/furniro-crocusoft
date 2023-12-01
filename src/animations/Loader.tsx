import { motion } from "framer-motion";

const LoadingContainer = {
  width: "10rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const PackageBox = {
  width: "3rem",
  height: "2rem",
  backgroundColor: "#B88E2E",
  borderRadius: "0.2rem",
};

const PackageLid = {
  width: "3rem",
  height: "0.5rem",
  backgroundColor: "#B88E2E",
  borderRadius: "0.1rem",
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const BoxVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "20%",
  },
};

const LidVariants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: "-120%",
  },
};

const Transition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function Loader() {
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            style={PackageBox}
            variants={BoxVariants}
            transition={Transition}
          >
            <motion.div
              style={PackageLid}
              variants={LidVariants}
              transition={Transition}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
