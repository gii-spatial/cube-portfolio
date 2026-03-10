import { type ReactElement, useRef, useState, useEffect } from "react";
import { useAtomValue } from "jotai";
import type { CapsulePosition } from "./cube-navigation.interface";
import { CubeFaces, type CubeFace } from "../../cube.interface";
import Capsule from "./Capsule";
import Tab from "./Tab";
import CubeAtom from "../../cube.atoms";
import "./CubeNavigation.css";
import { ChevronDown } from "lucide-react";
export interface CubeNavigationProps {
  faceLabel?: Partial<Record<CubeFace, string>>;
  onNavigate: (face: CubeFace) => void;
}

function DesktopCubeNavigation(props: CubeNavigationProps): ReactElement {
  const { faceLabel, onNavigate } = props;
  const currentCubeFace = useAtomValue(CubeAtom.currentFace);
  const [position, setPosition] = useState<CapsulePosition>({
    left: 0,
    width: 0,
    height: 0,
  });

  /**
   * Store refs of all navigation tabs to calculate capsule position later.
   * Each ref contains the necessary information to determine the position and size of the capsule.
   * This should allow us later to dynamically position the capsule based on the active tab.
   */
  const tabRefs = useRef<Record<CubeFace, HTMLLIElement | null>>(
    {} as Record<CubeFace, HTMLLIElement | null>,
  );

  const registerTabRef = (face: CubeFace, el: HTMLLIElement | null) => {
    tabRefs.current[face] = el;
  };

  const updateCapsule = (el: HTMLLIElement) => {
    const { width, height } = el.getBoundingClientRect();
    setPosition({ left: el.offsetLeft, width, height });
  };

  const handleTabPress = (face: CubeFace, el: HTMLLIElement) => {
    updateCapsule(el);
    onNavigate(face);
  };

  /**
   * Since the active cube face is interactable (can be changed elsewhere in the app),
   * We need to ensure that the capsule always reflects the current state.
   * This should update and sync the capsule's position to match the corresponding tab.
   */
  useEffect(() => {
    const el = tabRefs.current[currentCubeFace];
    if (!el) return;
    updateCapsule(el);
  }, [currentCubeFace]);

  return (
    <ul
      className="
        relative flex 
        w-fit mx-auto p-1 
        bg-white
        border-2 border-solid border-black rounded-md"
    >
      {CubeFaces.map((face) => (
        <Tab
          key={face}
          face={face}
          registerRef={registerTabRef}
          onPress={handleTabPress}
        >
          {faceLabel?.[face] ?? face}
        </Tab>
      ))}
      <Capsule position={position} />
    </ul>
  );
}

export interface BaseCubeNavigationProps {
  faceLabel?: Partial<Record<CubeFace, string>>;
  onNavigate: (face: CubeFace) => void;
}

function MobileNavigation(props: BaseCubeNavigationProps): ReactElement {
  const { faceLabel, onNavigate } = props;
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
        onChange={(e) => onNavigate(e.target.value as CubeFace)}
        defaultValue={CubeFaces[0]}
      >
        {CubeFaces.map((face) => (
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

export default function CubeNavigation(props: BaseCubeNavigationProps) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 660 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 660);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return <MobileNavigation {...props} />;

  return <DesktopCubeNavigation {...props} />;
}
