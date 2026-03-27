import type { ThemePalette } from "../theme.interface";

const snow: ThemePalette = {
  id: "snow",
  title: "Snow",

  background: "#CFEFFF",
  foreground: "#0A1A2B",
  foregroundBody: "rgba(10, 26, 43, 0.72)",
  border: "#A9D6EE",

  particleColor: "rgba(255,255,255,0.95)",
  gridColor: "rgba(10, 26, 43, 0.06)",
  accent: "#4FC3F7",

  variables: {
    "--background": "200 85% 88%",
    "--foreground": "210 55% 12%",
    "--border": "200 55% 78%",
    "--accent": "195 90% 65%",

    "--cube-border": "#7FBFD9",
  },
};

export default snow;
