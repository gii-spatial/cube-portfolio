import { type ReactElement, type ReactNode } from "react";
import type { CubeFace } from "../../cube.interface";

interface TabProps {
  face: CubeFace;
  children: ReactNode;
  onPress: (face: CubeFace, el: HTMLLIElement) => void;
  registerRef: (face: CubeFace, el: HTMLLIElement) => void;
}

export default function Tab(props: TabProps): ReactElement {
  const { face, children, onPress, registerRef } = props;

  /**
   * Callback ref: runs when the <li> mounts/unmounts.
   * Sends the DOM element to the parent immediately on mount.
   */
  const refCallback = (el: HTMLLIElement) => {
    if (!el) return;
    registerRef(face, el);
  };

  const handlePress = (el: HTMLLIElement) => {
    if (!el) return;
    onPress(face, el);
  };

  return (
    <li
      ref={refCallback}
      onContextMenu={(e) => e.preventDefault()}
      onTouchStart={(e) => {
        if (!e.currentTarget) return;
        handlePress(e.currentTarget);
      }}
      onClick={(e) => {
        if (!e.currentTarget) return;
        handlePress(e.currentTarget);
      }}
      className="
        relative block
        px-3 py-1.5
        z-10
        text-xs uppercase text-white mix-blend-difference
        md:px-5 md:py-3 md:text-base
        cursor-pointer
        user-select-none"
    >
      {children}
    </li>
  );
}
