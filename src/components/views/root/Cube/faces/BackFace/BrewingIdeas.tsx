import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brewingIdeasMsgs } from "./constants";

export default function BrewingIdeas() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % brewingIdeasMsgs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-sm sm:text-base text-white leading-tight">
      <p className="italic">Brewing ideas...</p>

      <AnimatePresence mode="wait">
        <motion.p
          key={brewingIdeasMsgs[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {brewingIdeasMsgs[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
