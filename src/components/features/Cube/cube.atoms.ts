import { atom } from "jotai";
import type { CubeFace, FaceRectangle } from "./cube.interface";

const currentFaceAtom = atom<CubeFace>("front");
const faceZoomAtom = atom<CubeFace | null>(null);
const isAutoRotatingAtom = atom<boolean>(false);
const isZoomingAtom = atom<boolean>(false);
const faceRectangleAtom = atom<FaceRectangle>({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
});

const CubeAtom = {
  currentFace: currentFaceAtom,
  faceZoom: faceZoomAtom,
  faceRectangle: faceRectangleAtom,
  isAutoRotating: isAutoRotatingAtom,
  isZooming: isZoomingAtom,
};

export default CubeAtom;
