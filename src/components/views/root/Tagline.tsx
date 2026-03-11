import { type ReactElement } from "react";
import { motion } from "framer-motion";
import SpinningCube from "@/components/_core/animations/SpinningCube";

export default function Tagline(): ReactElement {
  return (
    <>
      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-light tracking-tight max-w-[90vw] mx-auto">
          Hello, I'm GII
        </h1>
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-4 md:mt-6 max-w-3xl mx-auto"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-light tracking-tight text-neutral-400">
          I engineer reliable web applications
          <span className="inline-block ml-2 align-top">
            <SpinningCube />
          </span>
        </h2>
      </motion.div>
    </>
  );
}
