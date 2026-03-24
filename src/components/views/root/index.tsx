import { type ReactElement } from "react";
import Appheader from "@/components/AppHeader";
import StatusBadge from "./StatusBadge";
import Tagline from "./Tagline";
import Cube from "./Cube";
import AppFooter from "@/components/AppFooter";
import Motto from "./Motto";

export default function Root(): ReactElement {
  return (
    <div className="relative flex flex-col flex-1 overflow-hidden">
      <Appheader />
      <main className="relative flex flex-col flex-1 overflow-auto px-6 py-2">
        <div
          className="relative flex flex-col flex-1 gap-14 h-full
          md:flex-row md:items-start"
        >
          <section
            className="h-fit flex flex-col gap-4 items-center 
            md:items-start md:max-w-[500px]"
          >
            <div
              className="flex flex-col text-center pt-6 
                md:text-left md:pt-16"
            >
              <Tagline />
              <Motto />
            </div>
            <StatusBadge />
          </section>
          <section className="flex flex-1 flex-col h-full items-center  md:pt-8">
            <Cube />
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
