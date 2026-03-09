import { type ReactElement, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cube, { CubeProvider } from "@/components/features/Cube";

export default function Main(): ReactElement {
  return (
    <Fragment>
      <Header />
      <main className="flex flex-1 bg-green-400 overflow-auto">
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
        </CubeProvider>
      </main>
      <Footer />
    </Fragment>
  );
  // return (
  //   <CubeProvider>
  //     <Cube
  //       initialAngle={{ x: -15, y: -40 }}
  //       faceLabels={{
  //         front: "FRONT",
  //         back: "BACK",
  //         left: "LEFT",
  //         right: "Journey",
  //         bottom: "BOTTOM",
  //         top: "Arsenal",
  //       }}
  //     />
  //   </CubeProvider>
  // );
}
