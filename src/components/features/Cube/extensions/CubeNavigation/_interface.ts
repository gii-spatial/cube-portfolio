import type { CubeFace } from "../../_interface";

export type CapsulePosition = {
  left: number;
  width: number;
  height: number;
};

export interface BaseCubeNavigationProps {
  onChange: (face: CubeFace) => void;
  navs?: CubeFace[];

  // ! unknown
  value: CubeFace;
  hideFaces?: CubeFace[];
  faceLabel?: Partial<Record<CubeFace, string>>;
}
