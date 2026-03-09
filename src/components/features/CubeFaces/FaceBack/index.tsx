import { type ReactElement } from "react";
import CharacterThinking from "../../animated-svgs/CharacterThinking";
import BrewingIdeas from "./BrewingIdeas";
import Introduction from "../_shared/Introduction";
import Layout from "../_shared/Layout";
import Header from "../_shared/Header";
import { introduction } from "./constants";

export default function FaceBack(): ReactElement {
  return (
    <Layout>
      <Header title="Projects" />
      <div className="relative flex flex-col flex-1 items-center w-full p-5 pt-0 text-center">
        <Introduction text={introduction} />
        <CharacterThinking className="w-full max-w-[520px] min-w-[330px]" />

        <div className="absolute bottom-20">
          <BrewingIdeas />
        </div>
      </div>
    </Layout>
  );
}
