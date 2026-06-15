import { motion, AnimatePresence, type Variants } from "framer-motion";
import cubeLoaderStyles from "./loading-cube.module.css";

interface Props {
  in?: boolean;
  message?: string;
}

const containerVariants: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CubeLoader(props: Props) {
  const { in: isVisible = true, message } = props;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cubeLoaderStyles.cubeLoaderContainer}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className={cubeLoaderStyles.scene}>
            <motion.div
              className={cubeLoaderStyles.cube}
              initial={{ rotateX: -25, rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className={cubeLoaderStyles.face + " " + cubeLoaderStyles.front}
              />
              <div
                className={cubeLoaderStyles.face + " " + cubeLoaderStyles.back}
              />
              <div
                className={cubeLoaderStyles.face + " " + cubeLoaderStyles.right}
              />
              <div
                className={cubeLoaderStyles.face + " " + cubeLoaderStyles.left}
              />
              <div
                className={cubeLoaderStyles.face + " " + cubeLoaderStyles.top}
              />
              <div
                className={
                  cubeLoaderStyles.face + " " + cubeLoaderStyles.bottom
                }
              />
            </motion.div>
          </div>
          {message && <div className="mt-6 text-center text-sm">{message}</div>}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CubeLoader;
export type { Props as CubeLoaderProps };
