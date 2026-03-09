import { type ReactElement } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import lottieAnimations from "@/assets/lottie";

interface CharacterCodingProps {
  speech?: string;
  speechClassName?: string;
  className?: string;
}

export default function CharacterCoding(
  props: CharacterCodingProps,
): ReactElement {
  const { speech, speechClassName, className } = props;

  return (
    <motion.div
      className={clsx(
        "relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]",
        className,
      )}
    >
      <Lottie
        animationData={lottieAnimations.characterCoding}
        style={{ width: "100%", height: "100%" }}
      />

      {speech !== undefined && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -4 }}
          exit={{ opacity: 0, y: -8, transition: { duration: 0.5 } }}
          transition={{ duration: 0.3 }}
          className={clsx(
            `absolute -top-10 left-1/2 -translate-x-1/2
             px-4 py-2 min-w-[140px] max-w-[260px]
             bg-white border border-gray-300
             rounded-2xl shadow-lg
             text-sm md:text-base text-gray-800
             text-center break-words`,
            speechClassName,
          )}
        >
          {speech}
        </motion.div>
      )}
    </motion.div>
  );
}
