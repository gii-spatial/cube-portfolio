import { useEffect, useState } from "react";

/**
 * Tailwind default breakpoints:
 * sm: 640px
 * md: 768px
 * lg: 1024px
 * xl: 1280px
 * 2xl: 1536px
 *
 * ⚠️ Note:
 * These values match Tailwind's default config.
 * If your Tailwind config is customized, update these values accordingly.
 */

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

interface UseTailwindBreakpointReturnType {
  width: number;
  isTWsm: boolean;
  isTWmd: boolean;
  isTWlg: boolean;
  isTWxl: boolean;
  isTW2xl: boolean;
  isBelowSm: boolean;
  isBelowMd: boolean;
  isBelowLg: boolean;
  isBelowXl: boolean;
  isBelow2xl: boolean;
}

export function useTailwindBreakpoint(): UseTailwindBreakpointReturnType {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isTWsm: width >= breakpoints.sm,
    isTWmd: width >= breakpoints.md,
    isTWlg: width >= breakpoints.lg,
    isTWxl: width >= breakpoints.xl,
    isTW2xl: width >= breakpoints["2xl"],
    isBelowSm: width < breakpoints.sm,
    isBelowMd: width < breakpoints.md,
    isBelowLg: width < breakpoints.lg,
    isBelowXl: width < breakpoints.xl,
    isBelow2xl: width < breakpoints["2xl"],
  };
}
