import { type ReactElement } from "react";
import Introduction from "../_shared/Introduction";
import Layout from "../_shared/Layout";
import Header from "../_shared/Header";
import Arsenal from "./Arsenal";
import { introduction } from "./constants";

export default function TopFace(): ReactElement {
  return (
    <Layout>
      <Header title="Arsenal" />
      <div className="flex flex-col gap-6 p-5 pt-0 overflow-auto overflow-x-hidden">
        <Introduction text={introduction} />
        <Arsenal />
      </div>
    </Layout>
  );
}
