import { type ReactElement } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type IntroductionVariant = "default" | "muted" | "large";

interface IntroductionProps {
  text: string;
  variant?: IntroductionVariant;
  showLoader?: boolean;
  className?: string;
}

const variantStyles: Record<IntroductionVariant, string> = {
  default: "text-base leading-relaxed text-gray-800",
  muted: "text-sm leading-relaxed text-gray-500",
  large: "text-lg leading-relaxed text-gray-900",
};

export default function Introduction({
  text,
  variant = "default",
  showLoader = true,
  className,
}: IntroductionProps): ReactElement {
  return (
    <p
      className={clsx(
        "text-left text-white",
        variantStyles[variant],
        className,
      )}
    >
      {text}

      {showLoader && (
        <span className="inline-flex gap-1 align-middle ml-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-current inline-block"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
                delay: i * 0.15,
              }}
            />
          ))}
        </span>
      )}
    </p>
  );
}
