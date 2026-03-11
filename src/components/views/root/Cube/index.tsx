import { useRef, type ReactElement } from "react";
import { motion } from "framer-motion";
import Cube3D, { Cube3DProvider } from "@/components/features/Cube";
import SVG from "@/assets/svg-icons";
import { CubeFaceLayout, TempFaceLayout } from "./sides";
import { SupportedCubeFaceLabels } from "./_interface";
import EnchancedNavigation from "./EnchancedNavigation";
import { CubeFaceZoom } from "@/components/features/Cube/extensions";
import BackFace from "./faces/BackFace";
import TopFace from "./faces/TopFace";
import RightFace from "./faces/RightFace";

export default function Cube(): ReactElement {
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-12">
      <Cube3DProvider>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative inline-block p-10"
        >
          <Cube3D
            initialAngle={{ x: -15, y: -40 }}
            faceProps={{
              top: (
                <CubeFaceLayout
                  label={SupportedCubeFaceLabels.top}
                  Icon={SVG.SwordIcon}
                />
              ),
              right: (
                <CubeFaceLayout
                  label={SupportedCubeFaceLabels.right}
                  Icon={SVG.BookOpenIcon}
                />
              ),
              back: (
                <CubeFaceLayout
                  label={SupportedCubeFaceLabels.back}
                  Icon={SVG.RepoSubModuleIcon}
                />
              ),
              front: <TempFaceLayout label="Front" />,
              left: <TempFaceLayout label="Left" />,
              bottom: <TempFaceLayout label="Bottom" />,
            }}
          />

          <CubeFaceZoom
            FaceTopComponent={TopFace}
            FaceBackComponent={BackFace}
            FaceRightComponent={RightFace}
          />

          {/* border accents */}
          <div className="absolute top-0 -left-0 w-6 h-6 border-l-2 border-t-2 border-white" />
          <div className="absolute -top-0 -right-0 w-6 h-6 border-r-2 border-t-2 border-white" />
          <div className="absolute -bottom-0 -left-0 w-6 h-6 border-l-2 border-b-2 border-white" />
          <div className="absolute -bottom-0 -right-0 w-6 h-6 border-r-2 border-b-2 border-white" />
        </motion.div>

        <EnchancedNavigation faceLabel={SupportedCubeFaceLabels} />
      </Cube3DProvider>
    </div>
  );
}
