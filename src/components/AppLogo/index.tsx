import type { ReactElement } from "react";

export default function AppLogo(): ReactElement {
  return (
    <p
      className="
        relative 
        font-adlam text-[24px] 
        after:content-[''] after:inline-block after:w-[10px] after:h-[10px] after:bg-[#ff4136] after:rounded-full after:ml-1"
    >
      gii
    </p>
  );
}
