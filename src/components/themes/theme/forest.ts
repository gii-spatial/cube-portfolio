import type { ThemePalette } from "../theme.interface";

const forest: ThemePalette = {
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
};

export default forest;
