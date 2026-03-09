import { type ReactElement } from "react";
import Main from "./components/views/root/Main";

export default function App(): ReactElement {
  return (
    <div className="relative flex flex-col w-full h-full">
      <Main />
    </div>
  );
}
