import { type ReactElement } from "react";
import { motion } from "framer-motion";
import ShinyText from "@/components/features/reacbits/ShinyText";

export default function Motto(): ReactElement {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="text-base md:text-2xl font-light tracking-tight text-neutral-400 mt-4"
    >
      <ShinyText text="Think outside the box, build inside the cube" />
    </motion.h2>
  );
}
