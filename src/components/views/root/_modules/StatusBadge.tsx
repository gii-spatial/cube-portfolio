import { type ReactElement } from "react";
import { motion } from "framer-motion";

export default function StatusBadge(): ReactElement {
  return (
    <motion.div className="inline-flex items-center gap-3 relative">
      <motion.span
        className="h-3 w-3 rounded-full bg-green-500 relative"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <motion.span
          className="absolute -inset-1 rounded-full bg-green-400 opacity-30"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </motion.span>

      {/* Badge Text */}
      <motion.span
        className="text-sm font-semibold"
        animate={{ opacity: [1, 0.85, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        Open for work
      </motion.span>
    </motion.div>
  );
}
