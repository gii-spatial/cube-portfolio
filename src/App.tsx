import { type ReactElement } from "react";
import Cube, { CubeProvider } from "./components/features/Cube";
import { CubeFaceZoom } from "@/components/features/Cube/extensions";
import {
  CubeFaceFront,
  CubeFaceLeft,
  CubeFaceBack,
  CubeFaceBottom,
  CubeFaceRight,
  CubeFaceTop,
} from "@/components/features/CubeFaces";
import Header from "./components/views/root/Header";
import Footer from "./components/views/root/Footer";
import AboutCube from "./components/views/root/Header/AboutCubeDialog";
import Main from "./components/views/root/Main";

export default function App(): ReactElement {
  return (
    <div className="relative flex flex-col w-full h-full">
      <Main />
    </div>
  );
}
