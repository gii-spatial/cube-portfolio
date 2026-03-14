import { useEffect } from "react";
import { useAtomValue } from "jotai";
import themeStore from "./theme.atom";

export default function useApplyTheme(): void {
  const palette = useAtomValue(themeStore.palette);

  useEffect(() => {
    Object.entries(palette.variables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [palette]);
}
