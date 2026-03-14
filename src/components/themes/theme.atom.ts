import { atomWithStorage } from "jotai/utils";
import type { Theme } from "./theme.interface";
import { ThemePaletteRecord } from "./theme";
import { atom } from "jotai";

const themeAtom = atomWithStorage<Theme>("theme", "galaxy");
const themePaletteAtom = atom((get) => {
  const theme = get(themeAtom);
  return ThemePaletteRecord[theme];
});

const themeStore = {
  theme: themeAtom,
  palette: themePaletteAtom,
};

export default themeStore;
