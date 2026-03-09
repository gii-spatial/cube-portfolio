import { type ReactElement } from "react";
import AboutCubeDialog from "./AboutCubeDialog";

export default function Header(): ReactElement {
  return (
    <header
      className=" relative flex flex-row items-center
        w-full h-fit py-3 px-6
        text-foreground
        z-[100]"
    >
      <AboutCubeDialog />
    </header>
  );
}
