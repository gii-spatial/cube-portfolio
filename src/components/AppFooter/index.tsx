import { type ReactElement } from "react";
export default function AppFooter(): ReactElement {
  return (
    <footer className="relative flex flex-col items-center text-xs mt-1 w-full h-fit pt-1 pb-3 px-6">
      <small className="text-gray-400">
        © 2026 GII-Spatial. All rights reserved.
      </small>
    </footer>
  );
}
