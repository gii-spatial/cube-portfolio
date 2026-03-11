import { type ReactElement } from "react";
import { useAtomValue } from "jotai";
import { ChevronDown } from "lucide-react";
import type { BaseCubeNavigationProps } from "./_interface";
import { CubeFaces, type CubeFace } from "../../_interface";
import CubeAtom from "../../_atoms";

export default function MobileNavigation(
  props: BaseCubeNavigationProps,
): ReactElement {
  const { navs, faceLabel, onChange } = props;
  const currentFace = useAtomValue(CubeAtom.currentFace);
  let availableNavs = navs !== undefined && navs.length > 0 ? navs : CubeFaces;

  return (
    <div className="relative w-full max-w-xs h-fit">
      <select
        className="
          w-full
          p-2 pl-3 pr-10
          bg-transparent
          text-white
          text-base
          rounded-sm
          outline outline-1 outline-white/60
          focus:outline-2 focus:outline-white
          appearance-none
          cursor-pointer
          transition
          hover:bg-white/10
        "
        onChange={(e) => onChange(e.target.value as CubeFace)}
        defaultValue={availableNavs[0]}
      >
        {availableNavs.map((face) => (
          <option key={face} value={face} className="text-black">
            {faceLabel?.[face] ?? face}
          </option>
        ))}
      </select>

      {/* Down arrow */}
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
    </div>
  );
}
