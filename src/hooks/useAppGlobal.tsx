import { version } from "../../package.json";

interface UseAppGlobalReturnType {
  version: string;
}
export default function useAppGlobal(): UseAppGlobalReturnType {
  return { version };
}
