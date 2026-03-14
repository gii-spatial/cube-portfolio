import { type ReactElement } from "react";
import useCubeFaceZoom from "../../Cube3D/extensions/CubeFaceZoom/useCubeFaceZoom";
import Introduction from "../_shared/Introduction";
import Layout from "../_shared/Layout";
import Header from "../_shared/Header";
import Arsenal from "./Arsenal";
import { introduction } from "./constants";

export default function FaceTop(): ReactElement {
  const {} = useCubeFaceZoom();

  return (
    <Layout>
      <Header title="Arsenal" />
      {/* Scrollable content */}
      <div className="flex flex-col gap-6 p-5 pt-0 overflow-auto">
        <Introduction text={introduction} />
        <Arsenal />
      </div>
    </Layout>
  );
}
