import { useAtom } from "jotai";
import { useAtomValue } from "jotai";
import themeStore from "./theme.atom";

export default function useTheme() {
  const [theme, setTheme] = useAtom(themeStore.theme);
  const palette = useAtomValue(themeStore.palette);

  return {
    theme,
    palette,
    setTheme,
  };
}
