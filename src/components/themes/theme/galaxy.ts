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

    "--cube-border": "#525252",
  },
};

export default galaxy;
