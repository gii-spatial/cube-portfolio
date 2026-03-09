import { useRef } from "react";
import { useSetAtom, useAtomValue } from "jotai";
import { animate, MotionValue, useMotionValue } from "framer-motion";
import CubeAtom from "./cube.atoms";
import CubeUtils from "./cube.utils";
import { type CubeFace, CubeFaceRotation } from "./cube.interface";

interface UseCubeReturn {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  rotateToFace: (face: CubeFace) => Promise<void>;
}
export default function useCube(): UseCubeReturn {
  const currentFace = useAtomValue(CubeAtom.currentFace);
  const setIsAutoRotating = useSetAtom(CubeAtom.isAutoRotating);

  const faceRotation = CubeFaceRotation[currentFace];

  const rotateX = useRef(useMotionValue(faceRotation.x)).current;
  const rotateY = useRef(useMotionValue(faceRotation.y)).current;

  const rotateToFace = async (face: CubeFace) => {
    const target = CubeFaceRotation[face];
    setIsAutoRotating(true);

    // normalize angle
    let currentX = CubeUtils.normalize360(rotateX.get());
    let currentY = CubeUtils.normalize360(rotateY.get());
    let targetX = CubeUtils.normalize360(target.x);
    let targetY = CubeUtils.normalize360(target.y);

    // compute shortest delta for X
    let deltaX = targetX - currentX;
    if (deltaX > 180) deltaX -= 360;
    if (deltaX < -180) deltaX += 360;
    const finalX = rotateX.get() + deltaX;

    // compute shortest delta for Y
    let deltaY = targetY - currentY;
    if (deltaY > 180) deltaY -= 360;
    if (deltaY < -180) deltaY += 360;
    const finalY = rotateY.get() + deltaY;

    const animationX = animate(rotateX, finalX, {
      duration: 0.8,
      ease: "easeInOut",
    });

    const animationY = animate(rotateY, finalY, {
      duration: 0.8,
      ease: "easeInOut",
    });

    await Promise.all([animationX, animationY]);
    setIsAutoRotating(false);
  };

  return {
    rotateX,
    rotateY,
    rotateToFace,
  };
}
