import { type ReactElement } from "react";
import { motion } from "framer-motion";

export default function SpinningCube(): ReactElement {
  return (
    <motion.div
      className="w-2 h-2 bg-current inline-block"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    />
  );
}
