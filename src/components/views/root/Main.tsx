import { type ReactElement } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Tagline from "./Tagline";
import Motto from "./Motto";
import Cube from "./Cube";

export default function Main(): ReactElement {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center relative overflow-auto px-6">
        <Tagline />

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 14,
            delay: 0.2,
          }}
          className="mt-3 relative flex justify-center"
        >
          <motion.span
            className="relative inline-block px-5 py-2 text-sm font-bold rounded-full text-white bg-gray-900/70 border border-white/50 shadow-[0_0_8px_white/20]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            Open for work
          </motion.span>
        </motion.div>

        <Cube />
        <Motto />
      </main>
      <Footer />
    </>
  );
}
