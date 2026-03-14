import { type ReactElement } from "react";
import { motion } from "framer-motion";
import SpinningCube from "@/components/features/animations/SpinningCube";
import AstronautRocket from "@/components/features/animated-svgs/AstronautRocket";

export default function Tagline(): ReactElement {
  return (
    <div className="flex flex-col">
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-light tracking-tight leading-none max-w-[90vw] overflow-visible"
        style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
      >
        Hello, I'm GII
        <span className="inline-block ml-2 align-top w-12 h-12 md:w-16 md:h-16 overflow-visible">
          <div className="w-full h-full relative">
            <AstronautRocket
              className="absolute -top-[20px] -left-[10px] w-full h-full"
              style={{ transform: "scale(1.5)", transformOrigin: "top left" }}
            />
          </div>
        </span>
      </motion.h1>
      {/* Tagline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-light tracking-tight text-neutral-40"
        style={{
          fontSize: "clamp(1rem, 2vw, 2rem)",
          lineHeight: "1.2",
        }}
      >
        Building reliable web apps with seamless experiences and clean code —
        Crafting apps that just work
        <span className="inline-block ml-2 align-top">
          <SpinningCube />
        </span>
      </motion.h2>
    </div>
  );
}
