export type Theme = "galaxy" | "forest";

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

  variables: Record<string, string>;
};
