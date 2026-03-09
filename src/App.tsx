import { type ReactElement } from "react";
import AppHeader from "./components/features/AppHeader";
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

export default function App(): ReactElement {
  return (
    <div className="relative flex flex-col flex-1 w-full">
      <AppHeader />
      <div className="relative flex flex-1 justify-center ">
        <CubeProvider>
          <Cube
            initialAngle={{ x: -15, y: -40 }}
            faceLabels={{
              front: "FRONT",
              back: "BACK",
              left: "LEFT",
              right: "Journey",
              bottom: "BOTTOM",
              top: "Arsenal",
            }}
          />
          <CubeFaceZoom
            FaceFrontComponent={CubeFaceFront}
            FaceLeftComponent={CubeFaceLeft}
            FaceBackComponent={CubeFaceBack}
            FaceBottomComponent={CubeFaceBottom}
            FaceRightComponent={CubeFaceRight}
            FaceTopComponent={CubeFaceTop}
          />
        </CubeProvider>
      </div>
    </div>
  );
}
