import { atom } from "jotai";
import type { Theme } from "./global.interface";

const currentThemeAtom = atom<Theme>("white");

const globalStore = {
  currentTheme: currentThemeAtom,
};

export default globalStore;
