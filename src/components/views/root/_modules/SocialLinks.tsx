import type { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import SVG from "@/assets/svg-icons";
import LinkIcon from "@/components/_core/links/LinkIcon";
import { LINKEDIN_URL, GITHUB_URL } from "@/global.constants";

interface Props {
  className?: string;
}

export default function SocialLinks({ className }: Props): ReactElement {
  return (
    <div
      className={twMerge(clsx("flex flex-col items-center gap-2", className))}
    >
      <LinkIcon
        href={LINKEDIN_URL}
        ariaLabel="LinkedIn"
        IconComponent={SVG.LinkedInIcon}
        slotProps={{ icon: { className: "w-10 h-10" } }}
      />
      <LinkIcon
        href={GITHUB_URL}
        ariaLabel="Github"
        IconComponent={SVG.GithubIcon}
        slotProps={{ icon: { className: "w-7 h-7" } }}
      />
    </div>
  );
}
