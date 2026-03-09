import type { ReactElement } from "react";
import { motion } from "framer-motion";
import type { CapsulePosition } from "./cube-navigation.interface";

interface CapsuleProps {
  position: CapsulePosition;
}
export default function Capsule({ position }: CapsuleProps): ReactElement {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className="
        absolute z-0
        md:h-12
        rounded-md bg-black"
    />
  );
}
