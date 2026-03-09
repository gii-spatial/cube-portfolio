import type { Theme } from "./global.interface";

export const MyInformation = {
  yearsOfExperience: "4 years",
};

type ThemePalette = {
  bgClass: string;
  title: string;
  variables: Record<string, string>;
};

export const ThemePaletteRecord: Record<Theme, ThemePalette> = {
  white: {
    bgClass: "bg-[#FDFDFF]",
    title: "White theme",
    variables: {
      "--background": "240 100% 99.6%",
      "--foreground": "0 0% 3.9%",
      "--border": "0 0% 89.8%",
    },
  },
  black: {
    bgClass: "bg-[#0A0A0A]",
    title: "Black theme",
    variables: {
      "--background": "0 0% 3.9%",
      "--foreground": "0 0% 98%",
      "--border": "0 0% 30%",
    },
  },
  peaceful_green: {
    bgClass: "bg-[#C7EABB]",
    title: "Green theme",
    variables: {
      "--background": "106 50% 85%",
      "--foreground": "0 0% 10%",
      "--border": "106 30% 65%",
    },
  },
  navy_blue: {
    bgClass: "bg-[#393D7E]",
    title: "Navy blue theme",
    variables: {
      "--background": "240 38% 30%",
      "--foreground": "0 0% 98%",
      "--border": "240 40% 45%",
    },
  },
};
