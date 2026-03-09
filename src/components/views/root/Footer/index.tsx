import { type ReactElement } from "react";
import ApplicationVersion from "./ApplicationVersion";
import Copyright from "./Copyright";

export default function Footer(): ReactElement {
  return (
    <footer className="relative flex flex-col items-center text-xs text-foreground/70 mt-1">
      <Copyright />
      <div className="flex flex-row gap-1">
        <p>Cube portfolio -</p>
        <ApplicationVersion />
      </div>
    </footer>
  );
}
