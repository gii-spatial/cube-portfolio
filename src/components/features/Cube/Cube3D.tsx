import { type ReactElement, useEffect, useRef } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { motion } from "framer-motion";
import { CubeFaceIds, CubeFaces, type CubeFace } from "./_interface";
import CubeAtom from "./_atoms";
import useCube from "./useCube3d";
import "./cube3d.css";

/**
 * Adjust this value to make the inertia/momentum effect more or less pronounced.
 * The higher the multiplier, the more velocity is retained, resulting in longer inertia.
 * The lower the multiplier, the quicker it slows down.
 */
const VELOCITY_MULTIPLIER = 0.55;

interface Props {
  initialAngle?: { x: number; y: number; z?: number };
  // ! to check
  faceProps: Record<CubeFace, ReactElement>;
}

export default function Cube3D(props: Props): ReactElement {
  const { initialAngle, faceProps } = props;
  const { rotateX, rotateY } = useCube();

  const isAutoRotating = useAtomValue(CubeAtom.isAutoRotating);
  const [faceZoom] = useAtom(CubeAtom.faceZoom);

  const cubeRef = useRef<HTMLDivElement>(null);

  // Inertia/momentum state
  const draggingRef = useRef<boolean>(false);
  const dragDistanceRef = useRef<number>(0);
  const prevPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const momentumFrame = useRef<number | null>(null);

  const getEventPos = (e: any) => {
    if (e.touches && e.touches.length > 0) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  const handleStart = (e: any) => {
    /**
     * If there's an ongoing momentum animation,
     * stop it immediately when user starts a new drag.
     */
    if (momentumFrame.current) {
      cancelAnimationFrame(momentumFrame.current);
      momentumFrame.current = null;
    }

    if (isAutoRotating || faceZoom) return;
    draggingRef.current = true;
    dragDistanceRef.current = 0;
    prevPosRef.current = getEventPos(e);
  };

  const handleMove = (e: any) => {
    if (!draggingRef.current || isAutoRotating || faceZoom) return;
    if (e.cancelable) e.preventDefault();

    const { x, y } = getEventPos(e);
    const deltaX = x - prevPosRef.current.x;
    const deltaY = y - prevPosRef.current.y;

    rotateY.set(rotateY.get() + deltaX * 0.5);
    rotateX.set(rotateX.get() - deltaY * 0.5);

    /**
     * Store velocity for inertia calculation.
     * The multiplier (0.1) can be adjusted to make the inertia more or less pronounced.
     * The higher the multiplier,
     * the more velocity is retained, resulting in longer inertia.
     */
    velocityRef.current = {
      x: deltaY * -VELOCITY_MULTIPLIER,
      y: deltaX * VELOCITY_MULTIPLIER,
    };

    // euclidean distance between the current and previous position
    const euclid = Math.sqrt(deltaX ** 2 + deltaY ** 0.9);
    dragDistanceRef.current = dragDistanceRef.current + euclid;
    prevPosRef.current = { x, y };
  };

  const handleEnd = () => {
    draggingRef.current = false;

    // start inertia/momentum
    let { x: velocityX, y: velocityY } = velocityRef.current;
    const friction = 0.95;

    const step = () => {
      // stop if velocity is very small
      if (Math.abs(velocityX) < 0.01 && Math.abs(velocityY) < 0.01) {
        momentumFrame.current = null;
        return;
      }

      rotateX.set(rotateX.get() + velocityX);
      rotateY.set(rotateY.get() + velocityY);

      velocityX *= friction;
      velocityY *= friction;

      momentumFrame.current = requestAnimationFrame(step);
    };

    // kick off the loop only if there’s noticeable velocity
    if (Math.abs(velocityX) > 0.01 || Math.abs(velocityY) > 0.01) {
      momentumFrame.current = requestAnimationFrame(step);
    }
  };

  const handleMouseLeave = () => {
    handleEnd();
    if (momentumFrame.current) cancelAnimationFrame(momentumFrame.current);
  };

  useEffect(() => {
    if (initialAngle !== undefined) {
      rotateX.set(initialAngle.x || 0);
      rotateY.set(initialAngle.y || 0);
    }
  }, [initialAngle, rotateX, rotateY]);

  return (
    <motion.div
      className="scene"
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
      {/* 3D Cube */}
      <motion.div
        className="cube"
        ref={cubeRef}
        style={{ rotateX, rotateY, scale: faceZoom ? 0.7 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {CubeFaces.map((face) => (
          <motion.div
            key={face}
            id={CubeFaceIds[face]}
            className={`face ${face}`}
          >
            {faceProps[face]}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
