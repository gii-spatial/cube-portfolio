import type { Theme, ThemePalette } from "../theme.interface";
import forest from "./forest";
import galaxy from "./galaxy";
import snow from "./snow";

export const ThemePaletteRecord: Record<Theme, ThemePalette> = {
  galaxy,
  forest,
  snow,
};
