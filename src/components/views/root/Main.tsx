import { type ReactElement, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cube, { CubeProvider } from "@/components/features/Cube";
import SVG from "@/assets/svg-icons";

export default function Main(): ReactElement {
  return (
    <Fragment>
      <Header />
      <main className="flex flex-1 bg-green-400 overflow-auto">
        <CubeProvider>
          <Cube
            initialAngle={{ x: -15, y: -40 }}
            faceProps={{
              top: {
                label: "Arsenal",
                icon: <SVG.SwordIcon width={32} height={32} />,
              },
              bottom: {
                label: "Bottom",
              },
              left: {
                label: "Left",
              },
              right: {
                label: "Journey",
                icon: <SVG.JournalIcon width={32} height={32} />,
              },
              back: {
                label: "Projects",
                icon: <SVG.RepoSubModuleIcon width={32} height={32} />,
              },
              front: {
                label: "Front",
              },
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
