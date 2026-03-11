import { type ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {
  label?: string;
}
export default function TempFaceLayout(props: Props): ReactElement {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center">
      {props.label && (
        <span className="text-white/80 text-xl font-bold">
          {props.label ?? "FRONT"}
        </span>
      )}

      {/* Subtext */}
      <p className="text-neutral-400 text-[0.65rem] mt-1 text-center">
        This cube face is under development
      </p>

      {/* Maintenance corner Tag */}
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded-full">
        {/* Pulsing Dot */}
        <motion.span
          className="w-2 h-2 rounded-full bg-yellow-800"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <span className="text-yellow-800 text-[0.55rem] font-semibold uppercase">
          Maintenance
        </span>
      </div>
    </div>
  );
}
