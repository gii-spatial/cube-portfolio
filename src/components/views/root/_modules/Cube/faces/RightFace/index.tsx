import { type ReactElement } from "react";
import Timeline from "./Timeline";
import Layout from "../_shared/Layout";
import Header from "../_shared/Header";
import Introduction from "../_shared/Introduction";
import { introduction } from "./constants";

export default function RightFace(): ReactElement {
  return (
    <Layout>
      <Header title="Journey" />
      <div className="relative flex gap-8 flex-col flex-1 items-center w-full p-5 pt-0 overflow-auto">
        <Introduction text={introduction} />
        <Timeline />
      </div>
    </Layout>
  );
}
