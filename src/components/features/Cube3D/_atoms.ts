import { atom } from "jotai";
import type { CubeFace, FaceRectangle } from "./_interface";
import { motionValue } from "framer-motion";

const currentFaceAtom = atom<CubeFace>("top");
const faceZoomAtom = atom<CubeFace | null>(null);
const isAutoRotatingAtom = atom<boolean>(false);
const isZoomingAtom = atom<boolean>(false);
const faceRectangleAtom = atom<FaceRectangle>({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
});

export const rotateXAtom = atom(motionValue(0));
export const rotateYAtom = atom(motionValue(0));

const CubeAtom = {
  currentFace: currentFaceAtom,
  faceZoom: faceZoomAtom,
  faceRectangle: faceRectangleAtom,
  isAutoRotating: isAutoRotatingAtom,
  isZooming: isZoomingAtom,
  rotateX: rotateXAtom,
  rotateY: rotateYAtom,
};

export default CubeAtom;
