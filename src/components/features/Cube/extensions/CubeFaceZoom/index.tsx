import type { ReactElement, ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
import CubeAtom from "../../cube.atoms";
import ZoomFallback from "./ZoomFallback";

interface CubeFaceZoomProps {
  FaceFrontComponent?: ComponentType;
  FaceLeftComponent?: ComponentType;
  FaceRightComponent?: ComponentType;
  FaceBackComponent?: ComponentType;
  FaceTopComponent?: ComponentType;
  FaceBottomComponent?: ComponentType;
}
export default function CubeFaceZoom(props: CubeFaceZoomProps): ReactElement {
  const {
    FaceFrontComponent,
    FaceBackComponent,
    FaceBottomComponent,
    FaceLeftComponent,
    FaceRightComponent,
    FaceTopComponent,
  } = props;
  const faceRectangle = useAtomValue(CubeAtom.faceRectangle);
  const faceZoom = useAtomValue(CubeAtom.faceZoom);
  const setIsZooming = useSetAtom(CubeAtom.isZooming);

  const renderFaceContent = () => {
    switch (faceZoom) {
      case "front":
        return FaceFrontComponent ? <FaceFrontComponent /> : <ZoomFallback />;
      case "back":
        return FaceBackComponent ? <FaceBackComponent /> : <ZoomFallback />;
      case "bottom":
        return FaceBottomComponent ? <FaceBottomComponent /> : <ZoomFallback />;
      case "left":
        return FaceLeftComponent ? <FaceLeftComponent /> : <ZoomFallback />;
      case "right":
        return FaceRightComponent ? <FaceRightComponent /> : <ZoomFallback />;
      case "top":
        return FaceTopComponent ? <FaceTopComponent /> : <ZoomFallback />;
      default:
        return <ZoomFallback />;
    }
  };

  return (
    <AnimatePresence>
      {faceZoom && (
        <motion.div
          className="
            fixed z-[1000] 
            flex flex-col justify-center items-center 
            text-white cursor-pointer text-center"
          initial={{
            top: faceRectangle.top,
            left: faceRectangle.left,
            width: faceRectangle.width,
            height: faceRectangle.height,
          }}
          animate={{ top: 0, left: 0, width: "100vw", height: "100vh" }}
          exit={{
            top: faceRectangle.top,
            left: faceRectangle.left,
            width: faceRectangle.width,
            height: faceRectangle.height,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ zIndex: 1000 }}
          onAnimationStart={() => setIsZooming(true)}
          onAnimationComplete={() => setIsZooming(false)}
        >
          <AnimatePresence mode="wait">{renderFaceContent()}</AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
