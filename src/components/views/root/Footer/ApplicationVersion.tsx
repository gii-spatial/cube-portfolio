import { type ReactElement } from "react";
import { version } from "../../../../../package.json";

export default function ApplicationVersion(): ReactElement {
  return <p>v{version}</p>;
}
