import {
  type ReactElement,
  type ReactNode,
  useRef,
  useState,
  useEffect,
} from "react";
import { motion } from "framer-motion";
import type { CubeFace } from "../..";
import type { BaseCubeNavigationProps, CapsulePosition } from "./_interface";
import CubeAtom from "../../_atoms";
import { useAtomValue } from "jotai";
import { CubeFaces } from "../../_interface";

function Capsule({ position }: { position: CapsulePosition }): ReactElement {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className="absolute z-0 md:h-12 rounded-md bg-black"
    />
  );
}

function Tab(props: {
  face: CubeFace;
  children: ReactNode;
  onPress: (face: CubeFace, el: HTMLLIElement) => void;
  registerRef: (face: CubeFace, el: HTMLLIElement | null) => void;
}): ReactElement {
  const { face, children, onPress, registerRef } = props;

  const refCallback = (el: HTMLLIElement | null) => {
    registerRef(face, el);
  };

  const handlePress = (el: HTMLLIElement) => {
    onPress(face, el);
  };

  return (
    <li
      ref={refCallback}
      onClick={(e) => e.currentTarget && handlePress(e.currentTarget)}
      onTouchStart={(e) => e.currentTarget && handlePress(e.currentTarget)}
      onContextMenu={(e) => e.preventDefault()}
      className="
        relative block
        px-3 py-1.5
        z-10
        text-xs uppercase text-white mix-blend-difference
        md:px-5 md:py-3 md:text-base
        cursor-pointer
        select-none
      "
    >
      {children}
    </li>
  );
}

export default function DesktopCubeNavigation(
  props: BaseCubeNavigationProps,
): ReactElement {
  const { faceLabel, onChange, hideFaces = [], navs } = props;
  const currentCubeFace = useAtomValue(CubeAtom.currentFace);

  // Use same availableNavs logic as mobile
  const availableNavs =
    navs && navs.length > 0
      ? navs
      : CubeFaces.filter((f) => !hideFaces.includes(f));

  const [position, setPosition] = useState<CapsulePosition>({
    left: 0,
    width: 0,
    height: 0,
  });

  const tabRefs = useRef<Record<CubeFace, HTMLLIElement | null>>(
    {} as Record<CubeFace, HTMLLIElement | null>,
  );

  const registerTabRef = (face: CubeFace, el: HTMLLIElement | null) => {
    tabRefs.current[face] = el;
  };

  const updateCapsule = (face: CubeFace) => {
    const el = tabRefs.current[face];
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    const left = el.offsetLeft;

    setPosition((prev) => {
      if (
        prev.left === left &&
        prev.width === width &&
        prev.height === height
      ) {
        return prev; // no change → prevents infinite loop
      }
      return { left, width, height };
    });
  };

  const handleTabPress = (face: CubeFace) => {
    if (hideFaces.includes(face)) return;
    updateCapsule(face);
    onChange(face);
  };

  // Sync capsule to currentCubeFace whenever it changes
  useEffect(() => {
    if (currentCubeFace) updateCapsule(currentCubeFace);
  }, [currentCubeFace, hideFaces, availableNavs]);

  return (
    <ul className="relative flex w-fit mx-auto p-1 bg-white border-2 border-black rounded-md">
      {availableNavs.map((face) => (
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
