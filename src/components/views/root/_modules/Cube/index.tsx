import { type ReactElement } from "react";
import { motion } from "framer-motion";
import Cube3D, { Cube3DProvider } from "@/components/features/Cube3D";
import SVG from "@/assets/svg-icons";
import { CubeFaceLayout, TempFaceLayout } from "./sides";
import { SupportedCubeFaceLabels } from "./_interface";
import EnchancedNavigation from "./EnchancedNavigation";
import { CubeFaceZoom } from "@/components/features/Cube3D/extensions";
import BackFace from "./faces/BackFace";
import TopFace from "./faces/TopFace";
import RightFace from "./faces/RightFace";
import CornerAccents from "./CornerAccents";

export default function Cube(): ReactElement {
  return (
    <div className="relative flex flex-1 flex-col items-center gap-12">
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
          <CornerAccents />
        </motion.div>

        <EnchancedNavigation faceLabel={SupportedCubeFaceLabels} />
      </Cube3DProvider>
    </div>
  );
}
