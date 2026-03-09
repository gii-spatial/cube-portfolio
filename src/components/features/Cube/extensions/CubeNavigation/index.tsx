import { type ReactElement, useRef, useState, useEffect } from "react";
import { useAtomValue } from "jotai";
import type { CapsulePosition } from "./cube-navigation.interface";
import { CubeFaces, type CubeFace } from "../../cube.interface";
import Capsule from "./Capsule";
import Tab from "./Tab";
import CubeAtom from "../../cube.atoms";
import "./CubeNavigation.css";

export interface CubeNavigationProps {
  onNavigate: (face: CubeFace) => void;
}

export default function CubeNavigation(
  props: CubeNavigationProps,
): ReactElement {
  const { onNavigate } = props;
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
          {face}
        </Tab>
      ))}
      <Capsule position={position} />
    </ul>
  );
}
