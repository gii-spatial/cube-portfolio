import { Provider } from "jotai";

export default function Cube3DProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
