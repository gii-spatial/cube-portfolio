export const CubeFaceRotation: Record<CubeFace, { x: number; y: number }> = {
  front: { x: 0, y: 0 },
  back: { x: 0, y: 180 },
  right: { x: 0, y: -90 },
  left: { x: 0, y: 90 },
  top: { x: -90, y: 0 },
  bottom: { x: 90, y: 0 },
};

export const CubeFaces = [
  "front",
  "back",
  "left",
  "right",
  "top",
  "bottom",
] as const;

export type CubeFace = (typeof CubeFaces)[number];

export type FaceRectangle = {
  top: number;
  left: number;
  width: number;
  height: number;
};
