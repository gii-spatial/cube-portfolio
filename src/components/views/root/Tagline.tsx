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
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight">
          Hello, I'm GII
        </h1>
      </motion.div>

      {/* Tagline 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-4 md:mt-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-neutral-400">
          I engineer reliable web applications
          <span className="inline-block ml-2 align-top">
            <SpinningCube />
          </span>
        </h2>
      </motion.div>
    </>
  );
}
