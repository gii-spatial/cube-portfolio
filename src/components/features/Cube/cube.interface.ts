export const CubeFaceColors: Record<CubeFace, string> = {
  front: "rgba(0,150,255,1)",
  back: "rgba(255,50,50,1)",
  left: "rgba(0,200,100,1)",
  right: "rgba(255,200,0,1)",
  top: "rgba(150,0,255,1)",
  bottom: "rgba(0,255,200,1)",
};

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
