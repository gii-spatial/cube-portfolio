import { type ReactElement, useEffect, useRef } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { motion } from "framer-motion";
import { CubeFaces, type CubeFace } from "./cube.interface";
import CubeAtom from "./cube.atoms";
import "./Cube.css";
import useCube from "./useCube";

/**
 * Adjust this value to make dragging more or less sensitive
 * Higher the value, the less sensitive it gets
 * Lower the value, the more sensitive it gets.
 */
const DRAG_SENSITIVITY = 4;

/**
 * Adjust this value to make the inertia/momentum effect more or less pronounced.
 * The higher the multiplier, the more velocity is retained, resulting in longer inertia.
 * The lower the multiplier, the quicker it slows down.
 */
const VELOCITY_MULTIPLIER = 0.55;

interface CubeProps {
  initialAngle?: { x: number; y: number; z?: number };
  faceProps: Record<CubeFace, { label: string; icon?: ReactElement }>;
}
export default function Cube(props: CubeProps): ReactElement {
  const { initialAngle, faceProps } = props;
  const { rotateX, rotateY, rotateToFace } = useCube();

  const isAutoRotating = useAtomValue(CubeAtom.isAutoRotating);
  const setFaceRectangle = useSetAtom(CubeAtom.faceRectangle);
  const [faceZoom, setFaceZoom] = useAtom(CubeAtom.faceZoom);

  const cubeRef = useRef<HTMLDivElement>(null);
  const cubeFaceAnimatingRef = useRef<boolean>(false);

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

  const handleFaceClick = async (face: CubeFace) => {
    /**
     * Should prevent click actions if the user was dragging
     * instead of intentially clicking the cube face.
     * We can determine this by checking if the drag distance
     * exceeds a small threshold or if the dragging is still true.
     */
    if (draggingRef.current || dragDistanceRef.current > DRAG_SENSITIVITY)
      return;

    // Prevent multiple rapid clicks while an animation is still running
    if (cubeFaceAnimatingRef.current) return;
    if (dragDistanceRef.current > DRAG_SENSITIVITY || faceZoom !== null) return;

    /**
     * Trigger a zoom animation to cube face
     * Should only run after the rotation animation completes.
     */
    await rotateToFace(face);
    const el = document.getElementById(`3dcube-face-${face}`);
    if (el) {
      const { top, left, width, height } = el.getBoundingClientRect();
      setFaceRectangle({ top, left, width, height });

      // trigger zoom
      setFaceZoom(face);
      cubeFaceAnimatingRef.current = false;
      return;
    }
  };

  const handleMouseLeave = () => {
    handleEnd();
    if (momentumFrame.current) cancelAnimationFrame(momentumFrame.current);
  };

  // This allows the cube to render at a specific orientation
  useEffect(() => {
    if (initialAngle !== undefined) {
      rotateX.set(initialAngle.x || 0);
      rotateY.set(initialAngle.y || 0);
    }
  }, [initialAngle, rotateX, rotateY]);

  return (
    <>
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
              id={`3dcube-face-${face}`}
              className={`face ${face}`}
              // style={{ background: CubeFaceColors[face] }}
              onClick={() => handleFaceClick(face)}
            >
              {faceProps[face].icon}
              {faceProps[face].label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
