import { PaletteIcon } from "lucide-react";
import { useTheme } from "@/components/themes";
import { themes } from "@/components/themes/theme";
import DropdownBase from "../_core/dropdowns/DropdownBase";

export default function ThemeSelector() {
  const { theme, setTheme, palette } = useTheme();

  const items = themes.map((t) => ({
    id: t.id,
    label: t.title,
    color: t.accent,
  }));

  return (
    <DropdownBase
      items={items}
      selectedId={theme}
      onSelect={setTheme}
      startIcon={<PaletteIcon size={18} style={{ color: palette.accent }} />}
      buttonClassName="flex-row items-center"
      dropdownClassName=""
    />
  );
}
