import type { ReactElement, CSSProperties } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import lottieAnimations from "@/assets/lottie";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function PersonYoga(props: Props): ReactElement {
  const { className, style } = props;

  return (
    <motion.div className={clsx(className)} style={style}>
      <Lottie
        animationData={lottieAnimations.personYoga}
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
}
