import { type ReactElement } from "react";
import AppLogo from "../../AppLogo";
import AboutCube from "./AboutCube";

export default function AppHeader(): ReactElement {
  return (
    <header
      className="
        relative flex flex-row items-center
        w-full
        py-3 px-6
        text-foreground
        z-[100]"
    >
      <AppLogo />
      <AboutCube />
    </header>
  );
}
