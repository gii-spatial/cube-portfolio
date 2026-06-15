import { useEffect, useState } from "react";
import LoadingCube from "@/components/ui/loaders/LoadingCube";
import rootStyles from "./root.module.css";
import Root from "@/components/views/root";

export default function RootPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={rootStyles.rootContainer}>
      <LoadingCube in={isLoading} message="Preparing..." />
      {!isLoading && <Root />}
    </div>
  );
}
