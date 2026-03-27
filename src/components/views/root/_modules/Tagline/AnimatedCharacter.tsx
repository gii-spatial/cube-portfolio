import type { ReactElement } from "react";
import { useAtomValue } from "jotai";
import AstronautRocket from "@/components/features/animated-svgs/AstronautRocket";
import PersonYoga from "@/components/features/animated-svgs/PersonYoga";
import { themeStore, type Theme } from "@/components/themes";
import PersonSnowBoard from "@/components/features/animated-svgs/PersonSnowBoard";

const baseProps = {
  className: "absolute -top-[20px] -left-[10px] w-full h-full",
  style: { transform: "scale(1.5)", transformOrigin: "top left" as const },
};

const characterMap: Record<Theme, React.ComponentType<any>> = {
  galaxy: AstronautRocket,
  forest: PersonYoga,
  snow: PersonSnowBoard,
} as const;

export default function AnimatedCharacter(): ReactElement {
  const theme = useAtomValue(themeStore.theme);
  const Component = characterMap[theme as keyof typeof characterMap];

  return (
    <div className="relative w-full h-full">
      {Component ? <Component {...baseProps} /> : null}
    </div>
  );
}
