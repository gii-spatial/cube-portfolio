export const Themes = ["galaxy", "forest", "snow"] as const;
export type Theme = (typeof Themes)[number];

type CSSVariables = [
  "--background",
  "--foreground",
  "--border",
  "--accent",

  // TODO: Add JS Docs
  "--comp-footer-text-color",

  "--comp-cube-corner-accents",
  "--comp-cube-border-color",

  "--comp-motto-font-color",
  "--comp-motto-shine-color",
];

export type ThemePalette = {
  id: Theme;
  title: string;

  background: string;
  foreground: string;
  foregroundBody: string;
  border: string;

  particleColor: string;
  gridColor: string;
  accent: string;

  variables: Record<CSSVariables[number], string>;
};
