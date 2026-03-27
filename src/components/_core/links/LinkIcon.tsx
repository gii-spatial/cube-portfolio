import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import type { ElementType, ComponentPropsWithoutRef } from "react";

type LinkIconProps = {
  href: string;
  ariaLabel: string;
  IconComponent: ElementType;
  slotProps?: {
    root?: ComponentPropsWithoutRef<"a">;
    icon?: ComponentPropsWithoutRef<"svg">;
  };
};

export default function LinkIcon({
  href,
  ariaLabel,
  IconComponent,
  slotProps,
}: LinkIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      {...slotProps?.root}
      className={twMerge(
        clsx("transition-colors duration-200", slotProps?.root?.className),
      )}
      style={{
        color: "hsl(var(--foreground))",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "hsl(var(--foreground) / 0.85)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "hsl(var(--foreground))";
      }}
    >
      <IconComponent
        {...slotProps?.icon}
        className={twMerge(clsx("w-8 h-8", slotProps?.icon?.className))}
      />
    </a>
  );
}
