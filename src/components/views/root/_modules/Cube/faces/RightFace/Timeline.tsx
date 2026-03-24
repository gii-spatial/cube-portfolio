import { type ReactElement, useRef } from "react";
import { motion } from "framer-motion";
import { Building } from "lucide-react";
import { Journeys } from "./constants";

export default function Timeline(): ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   container: scrollRef,
  // });

  // const smoothProgress = useSpring(scrollYProgress, {
  //   stiffness: 85,
  //   damping: 24,
  //   mass: 1,
  //   restDelta: 0.001,
  // });

  // const delayedProgress = useSpring(smoothProgress, {
  //   stiffness: 65,
  //   damping: 22,
  //   mass: 1.05,
  //   restDelta: 0.001,
  // });

  // const scaleY = useTransform(delayedProgress, [0, 1], [0, 0.985]);

  // const lineOpacity = useTransform(
  //   delayedProgress,
  //   [0, 0.12, 1],
  //   [0.5, 0.85, 1],
  // );
  // const lineY = useTransform(delayedProgress, [0, 1], [6, 0]);

  // const lineStyle = {
  //   scaleY,
  //   opacity: lineOpacity,
  //   y: lineY,
  // };

  return (
    <div className="relative flex-1 w-full overflow-hidden">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="relative h-full overflow-auto overflow-x-hidden"
      >
        <div className="relative flex">
          {/* Animated Timeline Line */}
          {/* <motion.div
            style={lineStyle}
            className="
              absolute left-1/2 top-0 bottom-0 w-[5px]
              origin-top
              bg-gradient-to-b
              from-indigo-500
              via-purple-500
              to-pink-500
            "
          /> */}
          {/* Timeline items */}
          <div className="flex-1 flex flex-col gap-10 ">
            {Journeys.map((exp, i) => (
              <motion.div
                key={i}
                className="relative flex"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                  root: scrollRef,
                }}
              >
                {/* Card */}
                <div className="text-left w-full p-5 border-2 border-gray-900 shadow-lg rounded-lg">
                  <h1 className="font-semibold text-xl">{exp.date}</h1>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                      root: scrollRef,
                    }}
                    className="text-lg font-bold font-quantico text-gray-100  mb-1"
                  >
                    {exp.job}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                      root: scrollRef,
                    }}
                    className="flex flex-row gap-1.5 font-quantico text-gray-400 "
                  >
                    <Building className="w-4 h-4 text-gray-400 " />
                    <div className="text-sm">{exp.company}</div>
                  </motion.div>

                  <div className="flex flex-col gap-2 py-3">
                    {exp.description.map((line, i) => (
                      <p
                        key={i}
                        className="font-quantico text-sm opacity-80 whitespace-pre-line"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 justify-start">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="font-quantico text-xs px-3 py-1 bg-gray-900 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Top gradient overlay */}
      {/* <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-20" /> */}
    </div>
  );
}
