import { Provider } from "jotai";

interface CubeProviderProps {
  children: React.ReactNode;
}

export default function CubeProvider({ children }: CubeProviderProps) {
  return <Provider>{children}</Provider>;
}
