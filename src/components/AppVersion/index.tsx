import { type ReactElement } from "react";
import { version } from "../../../package.json";

export default function AppVersion(): ReactElement {
  return <p>v{version}</p>;
}
