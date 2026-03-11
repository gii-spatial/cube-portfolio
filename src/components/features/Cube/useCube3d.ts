import { useSetAtom, useAtomValue } from "jotai";
import { animate, MotionValue } from "framer-motion";
import CubeAtom from "./_atoms";
import CubeUtils from "./_utils";
import { type CubeFace, CubeFaceRotation } from "./_interface";

interface UseCubeReturn {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  rotateToFace: (face: CubeFace) => Promise<void>;
}
export default function useCube3d(): UseCubeReturn {
  const setIsAutoRotating = useSetAtom(CubeAtom.isAutoRotating);

  const rotateX = useAtomValue(CubeAtom.rotateX);
  const rotateY = useAtomValue(CubeAtom.rotateY);

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
