import type { ThemePalette } from "../theme.interface";

const snow: ThemePalette = {
  id: "snow",
  title: "Snow",

  background: "#CFEFFF",
  foreground: "#0A1A2B",
  foregroundBody: "rgba(10, 26, 43, 0.72)",
  border: "#A9D6EE",

  particleColor: "rgba(80, 120, 160, 0.85)",
  gridColor: "rgba(10, 26, 43, 0.06)",
  accent: "#4FC3F7",

  variables: {
    "--background": "200 85% 88%",
    "--foreground": "210 55% 12%",
    "--border": "200 55% 78%",
    "--accent": "195 90% 65%",

    "--comp-footer-text-color": "210 10% 40%",

    "--comp-cube-corner-accents": "#1B3B5A",
    "--comp-cube-border-color": "#1B3B5A",

    "--comp-motto-font-color": "210 25% 18%",
    "--comp-motto-shine-color": "200 50% 95%",
  },
};

export default snow;
