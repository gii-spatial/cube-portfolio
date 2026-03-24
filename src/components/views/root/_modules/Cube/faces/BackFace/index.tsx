import { type ReactElement } from "react";
import CharacterThinking from "@/components/features/animated-svgs/CharacterThinking";
import { Layout, Header, Introduction } from "../_shared";
import BrewingIdeas from "./BrewingIdeas";
import { introduction } from "./constants";

export default function BackFace(): ReactElement {
  return (
    <Layout>
      <Header title="Projects" />
      <div className="relative flex flex-col flex-1 items-center w-full p-5 pt-0 text-center">
        <Introduction text={introduction} />

        <div className="relative flex justify-center w-full max-w-[520px] min-w-[330px]">
          <CharacterThinking className="-mt-12" />

          <div className="absolute bottom-0 left-0 w-full flex justify-center">
            <BrewingIdeas />
          </div>
        </div>
      </div>
    </Layout>
  );
}
