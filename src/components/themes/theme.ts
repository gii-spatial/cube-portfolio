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
      "--background": "235 40% 6%",
      "--foreground": "0 0% 100%",
      "--border": "240 20% 18%",
      "--accent": "258 90% 66%",
    },
  },

  forest: {
    id: "forest",
    title: "Forest",

    background: "#1B3A2F",
    foreground: "#E8FFF3",
    foregroundBody: "rgba(232, 255, 243, 0.95)", // stronger than 0.85
    border: "#2A5A44",

    particleColor: "rgba(144, 238, 144, 0.8)", // like galaxy
    gridColor: "rgba(144, 238, 144, 0.08)", // keep subtle
    accent: "#4CAF50",

    variables: {
      "--background": "150 35% 16%",
      "--foreground": "140 100% 96%",
      "--border": "150 30% 22%",
      "--accent": "145 50% 50%",
    },
  },
};

export const themes = Object.values(ThemePaletteRecord).map((t) => ({
  id: t.id,
  title: t.title,
  accent: t.accent,
}));
