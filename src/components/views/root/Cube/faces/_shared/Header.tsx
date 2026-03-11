import { type ReactElement } from "react";
import { motion } from "framer-motion";
import useCubeFaceZoom from "@/components/features/Cube/extensions/CubeFaceZoom/useCubeFaceZoom";

export default function Header({ title }: { title: string }): ReactElement {
  const { zoomOut } = useCubeFaceZoom();

  return (
    <div className="relative w-full bg-red p-5">
      <div className="flex w-full flex-row justify-between">
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl"
        >
          {title}
        </motion.h1>
        <button
          onClick={zoomOut}
          className="
            bg-white text-gray-700 border border-gray-300 
            rounded-full px-6 py-2 text-sm uppercase tracking-wider 
            transition-all duration-300

            /* Hover only on sm+ */
             sm:hover:bg-gray-900 sm:hover:text-white

            /* Disable active background on mobile */
             active:bg-white focus:bg-white sm:active:bg-gray-900 sm:focus:bg-gray-900"
        >
          BACK
        </button>
      </div>
    </div>
  );
}
