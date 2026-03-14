import { type ReactElement } from "react";
import ThemeSelector from "./ThemeSelector";
import AboutCube from "./AboutCube";
import ApplicationVersion from "./ApplicationVersion";

export default function Appheader(): ReactElement {
  return (
    <header
      className="relative flex flex-row justify-between items-center
        w-full h-fit py-2 px-4
        z-[100]"
    >
      <div>
        <AboutCube />
        <ApplicationVersion />
      </div>
      <ThemeSelector />
    </header>
  );
}
