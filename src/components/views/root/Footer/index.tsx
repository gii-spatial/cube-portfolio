import { type ReactElement } from "react";
import AppVersion from "@/components/AppVersion";
import Copyright from "./Copyright";

export default function Footer(): ReactElement {
  return (
    <footer className="relative flex flex-col items-center text-xs mt-1  w-full h-fit py-3 px-6">
      <Copyright />
      <div className="flex flex-row gap-1">
        <p>Cube portfolio -</p>
        <AppVersion />
      </div>
    </footer>
  );
}
