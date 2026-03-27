import { type ReactElement, useState } from "react";
import DropdownBase from "@/components/_core/dropdowns/DropdownBase";
import type { BaseCubeNavigationProps } from "./_interface";
import { CubeFaces, type CubeFace } from "../../_interface";

export default function MobileNavigation(
  props: BaseCubeNavigationProps,
): ReactElement {
  const { navs, faceLabel, onChange } = props;
  const availableNavs: CubeFace[] =
    navs && navs.length > 0 ? navs : [...CubeFaces];

  // internal state track currently selected face for dropdown
  const [selectedFace, setSelectedFace] = useState<CubeFace>(availableNavs[0]);

  const items = availableNavs.map((face) => ({
    id: face,
    label: faceLabel?.[face] ?? face,
  }));

  const handleSelect = (id: string | CubeFace) => {
    setSelectedFace(id as CubeFace);
    onChange(id as CubeFace);
  };

  return (
    <div className="relative w-full max-w-xs h-fit">
      <DropdownBase
        options={items}
        value={selectedFace}
        onSelect={handleSelect}
      />
    </div>
  );
}
