import type { ReactElement, ReactNode } from "react";
import useCubeFaceZoom from "@/components/features/Cube/extensions/CubeFaceZoom/useCubeFaceZoom";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const { isZooming } = useCubeFaceZoom();

  return (
    <div
      className="relative w-full h-full
      flex flex-col flex-1 items-start
      bg-white text-black cursor-pointer "
    >
      {isZooming ? (
        <div className="mx-auto my-auto">Please wait... </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
