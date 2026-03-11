import { type ReactElement, useState, useCallback } from "react";
import { motion, type Variants, easeInOut } from "framer-motion";
import { ListOfArsenal } from "./constants";
import type { ArsenalMetaData } from "@/interfaces/shared";
import { getRandomToSay } from "./utils";
import CharacterCoding from "@/components/features/animated-svgs/CharacterCoding";

export default function ArsenalScreen(): ReactElement {
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(new Set());
  const [currentMessage, setCurrentMessage] = useState<string | undefined>(
    undefined,
  );

  const handleFlip = useCallback((index: number) => {
    setFlippedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
        // Flipped → show message from this card
        const message = getRandomToSay(ListOfArsenal[index]);
        setCurrentMessage(message);
        // Clear after 3 seconds
        setTimeout(() => setCurrentMessage(undefined), 3000);
      }
      return newSet;
    });
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: easeInOut },
    },
  };

  return (
    <div className="pt-4 font-quantico">
      <div
        className="
          flex flex-col items-center
          md:items-start md:flex-row  md:gap-8"
      >
        <CharacterCoding speech={currentMessage} />

        {/* Arsenal grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:w-2/3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ListOfArsenal.map((arsenal: ArsenalMetaData, index: number) => {
            const isFlipped = flippedIndices.has(index);

            return (
              <motion.div
                key={index}
                className="w-20 h-20 perspective cursor-pointer relative"
                onClick={() => handleFlip(index)}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "tween", duration: 0.1, ease: easeInOut }}
                variants={cardVariants}
              >
                {/* Flip container */}
                <motion.div
                  className="relative w-full h-full"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* FRONT */}
                  <div
                    className={`absolute w-full h-full backface-hidden bg-gray-100 rounded-md border border-gray-300 flex items-center justify-center shadow-sm ${
                      !isFlipped ? "z-10" : "z-0"
                    }`}
                  >
                    {arsenal.iconClassName ? (
                      <i
                        className={arsenal.iconClassName}
                        style={{ fontSize: "60px", fill: "black" }}
                      />
                    ) : (
                      <span className="text-xs text-gray-400 font-bold">
                        NULL
                      </span>
                    )}
                  </div>

                  {/* BACK */}
                  <div
                    className={`absolute w-full h-full backface-hidden bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center ${
                      isFlipped ? "z-10" : "z-0"
                    }`}
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <span className="text-xs font-bold text-gray-700 text-center px-1">
                      {arsenal.name}
                    </span>
                  </div>
                </motion.div>

                {/* Recently used badge */}
                {arsenal.recentlyUsed && (
                  <span className="absolute top-0 right-0 flex h-6 w-6 -translate-x-[-18px] -translate-y-[6px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_6px_rgba(74,222,128,0.5)]"></span>
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
