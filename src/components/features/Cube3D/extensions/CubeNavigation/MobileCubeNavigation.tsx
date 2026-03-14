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
        items={items}
        selectedId={selectedFace}
        onSelect={handleSelect}
        className=""
        buttonClassName="
          w-full p-2 pr-3 text-white text-base rounded-sm
          outline outline-1 outline-white/60 focus:outline-2 focus:outline-white
          bg-transparent cursor-pointer appearance-none transition hover:bg-white/10
        "
        dropdownClassName="
          bg-gray-900 border border-white/60 rounded-sm shadow-lg
          text-white text-base
        "
      />
    </div>
  );
}
