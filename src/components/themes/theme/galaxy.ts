import type { ThemePalette } from "../theme.interface";

const galaxy: ThemePalette = {
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

    "--comp-cube-corner-accents": "#1B3B5A",
    "--comp-cube-border-color": "#1B3B5A",

    "--comp-motto-font-color": "210 40% 25%",
    "--comp-motto-shine-color": "200 50% 95%",
  },
};

export default galaxy;
