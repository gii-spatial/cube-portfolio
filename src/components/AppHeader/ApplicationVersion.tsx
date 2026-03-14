import useAppGlobal from "@/hooks/useAppGlobal";
import { type ReactElement } from "react";

export default function ApplicationVersion(): ReactElement {
  const { version } = useAppGlobal();

  return <p className="text-gray-300 text-xs">{version}</p>;
}
