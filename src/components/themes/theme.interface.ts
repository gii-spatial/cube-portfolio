export const Themes = ["galaxy", "forest", "snow"] as const;
export type Theme = (typeof Themes)[number];

type CSSVariables = [
  "--background",
  "--foreground",
  "--border",
  "--accent",
  "--cube-border",
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
