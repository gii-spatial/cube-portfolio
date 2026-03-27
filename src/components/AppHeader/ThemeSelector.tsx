import { PaletteIcon } from "lucide-react";
import { ThemePaletteRecord, useTheme } from "@/components/themes";
import DropdownBase from "../_core/dropdowns/DropdownBase";

export default function ThemeSelector() {
  const { theme, setTheme, palette } = useTheme();

  /**
   * No need to memoize.
   * Just incase there's a perf issue, we can move this to a useMemo,
   * but I doubt there will be one since the number of themes is small
   */
  const options = Object.entries(ThemePaletteRecord).map(([_k, t]) => ({
    id: t.id,
    label: t.title,
    color: t.accent,
  }));

  return (
    <DropdownBase
      options={options}
      value={theme}
      onSelect={setTheme}
      startIcon={<PaletteIcon size={18} style={{ color: palette.accent }} />}
    />
  );
}
