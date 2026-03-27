import useAppGlobal from "@/hooks/useAppGlobal";
import { type ReactElement } from "react";

export default function ApplicationVersion(): ReactElement {
  const { version } = useAppGlobal();

  return (
    <p className="text-xs" style={{ color: "hsl(var(--foreground))" }}>
      {version}
    </p>
  );
}
