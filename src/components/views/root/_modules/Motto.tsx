import { type ReactElement } from "react";
import { motion } from "framer-motion";
import ShinyText from "@/components/features/reactbits/ShinyText";

export default function Motto(): ReactElement {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="mt-3 text-sm md:text-base font-light tracking-tight text-neutral-500 italic"
    >
      <ShinyText
        text="Think outside the box, build inside the cube."
        className="whitespace-pre-line"
      />
    </motion.p>
  );
}
