import type { CubeFace } from "@/components/features/Cube";

export type SupportedCubeFace = Extract<CubeFace, "top" | "right" | "back">;
export const CubeFaceLabels: Record<SupportedCubeFace, string> = {
  top: "Arsenal",
  right: "Journey",
  back: "Projects",
};
