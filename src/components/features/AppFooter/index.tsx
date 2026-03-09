import { type ReactElement } from "react";
import Copyright from "./Copyright";

export default function AppFooter(): ReactElement {
  return (
    <footer
      className="
        fixed bottom-0 left-0 right-0
        flex flex-col justify-center items-center gap-2
        p-2
        z-20"
    >
      <Copyright />
    </footer>
  );
}
