import { type ReactElement } from "react";
import {
  GridPattern,
  FloatingParticles,
} from "@/components/features/backgrounds";
import { useApplyTheme } from "@/components/themes";
import Root from "@/components/views/root";
import "./App.css";

export default function App(): ReactElement {
  useApplyTheme();

  return (
    <div className="appContainer size-full flex flex-col overflow-hidden">
      <FloatingParticles />
      <GridPattern />
      <Root />
    </div>
  );
}
