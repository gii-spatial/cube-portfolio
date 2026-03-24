import { type ReactElement } from "react";
import Appheader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint";
import Motto from "./_modules/Motto";
import Cube from "./_modules/Cube";
import StatusBadge from "./_modules/StatusBadge";
import SocialLinks from "./_modules/SocialLinks";
import Tagline from "./_modules/Tagline";

export default function Root(): ReactElement {
  const { isTWmd } = useTailwindBreakpoint();
  return (
    <div className="relative flex flex-col flex-1 overflow-hidden">
      <Appheader />
      <main className="relative flex flex-col flex-1 overflow-auto px-6">
        <div
          className="relative flex flex-col flex-1 gap-8 h-full
          md:flex-row md:items-start"
        >
          <section
            className="flex flex-col gap-4 items-center 
            md:items-start md:max-w-[500px] h-fit"
          >
            <div
              className="relative flex flex-col text-center pt-6 
                md:text-left md:pt-16"
            >
              <Tagline />
              <Motto />
            </div>
            <StatusBadge />
            {isTWmd && (
              <SocialLinks className="absolute bottom-0 translate-y-[-50%]" />
            )}
          </section>
          <section className="flex flex-1 flex-col h-full items-center  md:pt-8">
            <Cube />
          </section>
        </div>
        {!isTWmd && (
          <SocialLinks className="flex-row items-center justify-center" />
        )}
      </main>
      <AppFooter />
    </div>
  );
}
