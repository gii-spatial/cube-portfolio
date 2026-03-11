import type { ReactElement, ReactNode } from "react";
import useCubeFaceZoom from "@/components/features/Cube/extensions/CubeFaceZoom/useCubeFaceZoom";
import FloatingParticles from "@/components/features/backgrounds/FloatingParticles";

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
    bg-black text-white cursor-default z-[1000px]"
    >
      <FloatingParticles />
      {isZooming ? (
        <div className="mx-auto my-auto">Please wait... </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
