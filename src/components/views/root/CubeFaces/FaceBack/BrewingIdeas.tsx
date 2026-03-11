import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Perhaps a cup of coffee?",
  "Heyy, where's my cat?",
  "Maybe one more idea...",
  "Thinking... thinking...",
  "Hold on, inspiration loading...",
  "Perhaps I should take a walk? - feel some grass..",
];

export default function BrewingIdeas() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-sm sm:text-base text-gray-600 leading-tight">
      <p className="italic">Brewing ideas...</p>

      <AnimatePresence mode="wait">
        <motion.p
          key={messages[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
