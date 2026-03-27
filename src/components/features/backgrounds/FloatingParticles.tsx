import { type ReactElement, useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

interface Props {
  particleColor?: string;
  backgroundColor?: string;
  count?: number;
  size?: number;
  floatDistance?: number;
  duration?: number;
  className?: string;
}

export default function FloatingParticles(props: Props): ReactElement {
  const {
    particleColor,
    backgroundColor = "transparent",
    count = 20,
    size = 4,
    floatDistance = 30,
    duration = 3,
    className = "",
  } = props;

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: duration + Math.random() * 2,
    }));
  }, [count, duration]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ backgroundColor }}
    >
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            width: size,
            height: size,
            backgroundColor: particleColor,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -floatDistance, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
