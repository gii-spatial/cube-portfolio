import { type ReactElement } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import lottieAnimations from "@/assets/lottie";

interface CharacterThinkingProps {
  className?: string;
}

export default function CharacterThinking(
  props: CharacterThinkingProps,
): ReactElement {
  const { className } = props;

  return (
    <motion.div className={clsx(className)}>
      <Lottie
        animationData={lottieAnimations.characterThinking}
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
}
