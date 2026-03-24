import type { Theme, ThemePalette } from "./theme.interface";

export const ThemePaletteRecord: Record<Theme, ThemePalette> = {
  galaxy: {
    id: "galaxy",
    title: "Galaxy",

    background: "#050816",
    foreground: "#FFFFFF",
    foregroundBody: "rgba(255,255,255,0.85)",
    border: "#1A1A2E",

    particleColor: "rgba(255,255,255,0.8)",
    gridColor: "rgba(255,255,255,0.08)",
    accent: "#8B5CF6",

    variables: {
      "--background": "235 40% 5%",
      "--foreground": "0 0% 100%",
      "--border": "240 20% 18%",
      "--accent": "258 90% 66%",

      "--cube-border": "#525252",
    },
  },

  forest: {
    id: "forest",
    title: "Forest",

    background: "#1F3D32",
    foreground: "#E8FFF3",
    foregroundBody: "rgba(232, 255, 243, 0.9)",
    border: "#2C4A3F",

    particleColor: "rgba(144, 238, 144, 0.75)",
    gridColor: "rgba(144, 238, 144, 0.06)",
    accent: "#4CAF50",

    variables: {
      "--background": "150 35% 28%",
      "--foreground": "140 100% 96%",
      "--border": "150 15% 22%",
      "--accent": "145 55% 52%",

      "--cube-border": "#E8E8E8",
    },
  },
};

export const themes = Object.values(ThemePaletteRecord).map((t) => ({
  id: t.id,
  title: t.title,
  accent: t.accent,
}));
