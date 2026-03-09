import { type ReactElement, useEffect } from "react";
import { ThemePaletteRecord } from "@/global.constant";
import { useAtom } from "jotai";
import { type Theme } from "@/global.interface";
import globalStore from "@/global.store";

export default function ThemeSwitcher(): ReactElement {
  const [currTheme, setCurrTheme] = useAtom(globalStore.currentTheme);

  useEffect(() => {
    const themeVars = ThemePaletteRecord[currTheme].variables;
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [currTheme]);

  return (
    <div className="flex flex-row gap-3" aria-label="theme-switcher">
      {Object.entries(ThemePaletteRecord).map(([key, { bgClass }]) => (
        <button
          key={key}
          onClick={() => setCurrTheme(key as Theme)}
          className={`
              w-6 h-6 p-0 
              ${bgClass}
              border border-border/30
              rounded-full
              hover:scale-105 transition-transform
              focus-visible:outline-none
            `}
        />
      ))}
    </div>
  );
}
