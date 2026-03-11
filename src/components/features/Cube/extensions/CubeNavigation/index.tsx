import { type ReactElement, useState, useEffect } from "react";
import { type BaseCubeNavigationProps } from "./_interface";
import MobileCubeNavigation from "./MobileCubeNavigation";
import DesktopCubeNavigation from "./DesktopCubeNavigation";
import "./cube-navigation.css";

export default function CubeNavigation(
  props: BaseCubeNavigationProps,
): ReactElement {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 660 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 660);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return <MobileCubeNavigation {...props} />;

  return <DesktopCubeNavigation {...props} />;
}

export type { BaseCubeNavigationProps } from "./_interface";
