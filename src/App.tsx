import { type ReactElement } from "react";
import {
  GridPattern,
  FloatingParticles,
} from "@/components/features/backgrounds";
import { useApplyTheme, useTheme } from "@/components/themes";
import Root from "@/components/views/root";
import "./App.css";
import { useTailwindBreakpoint } from "./hooks/useTailwindBreakpoint";

export default function App(): ReactElement {
  useApplyTheme();

  const { palette } = useTheme();
  const { isTWsm } = useTailwindBreakpoint();

  const particleColor = palette.particleColor;
  const particleCount = isTWsm ? 50 : 25;

  return (
    <div className="appContainer size-full flex flex-col overflow-hidden">
      <FloatingParticles count={particleCount} particleColor={particleColor} />
      <GridPattern />
      <Root />
    </div>
  );
}
