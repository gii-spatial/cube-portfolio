import { type ReactElement } from "react";
import { useAtom, useSetAtom } from "jotai";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import CubeNavigation, {
  type BaseCubeNavigationProps,
} from "@/components/features/Cube3D/extensions/CubeNavigation";
import useCube from "@/components/features/Cube3D/useCube3d";
import CubeAtom from "@/components/features/Cube3D/_atoms";
import { SupportedCubeFaceLabels } from "./_interface";
import type { CubeFace } from "@/components/features/Cube3D";
import { CubeFaceIds } from "@/components/features/Cube3D/_interface";

export default function EnchancedNavigation(
  props: Pick<BaseCubeNavigationProps, "hideFaces" | "faceLabel">,
): ReactElement {
  const { ...cubeNavProps } = props;

  const [currentFace, setCurrentFace] = useAtom(CubeAtom.currentFace);
  const setFaceZoom = useSetAtom(CubeAtom.faceZoom);
  const setFaceRect = useSetAtom(CubeAtom.faceRectangle);
  const { rotateToFace } = useCube();

  const handleOnExplore = async () => {
    await rotateToFace(currentFace);

    const faceDOM = document.getElementById(CubeFaceIds[currentFace]);
    if (faceDOM === null) return;

    const rect = faceDOM.getBoundingClientRect();
    setFaceRect(() => ({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    }));
    setFaceZoom(currentFace);
  };

  const navs = Object.keys(SupportedCubeFaceLabels) as CubeFace[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-row items-center gap-4 max-w-md ml-4"
    >
      <CubeNavigation
        navs={navs}
        {...cubeNavProps}
        value="front"
        onChange={(nav) => {
          setCurrentFace(nav);
        }}
      />

      <motion.button
        onClick={handleOnExplore}
        className="
          p-1
          bg-transparent
          rounded-full
          flex
          items-center
          justify-center
          text-white
          hover:bg-white/10
          transition
        "
      >
        <ArrowRightCircle className="w-10 h-10" />
      </motion.button>
    </motion.div>
  );
}
