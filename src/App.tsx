import { Routes, Route } from "react-router-dom";
import NotFoundPage from "@/pages/not-found";
import RootPage from "@/pages/root";
import { useApplyTheme } from "@/components/themes";

function App() {
  useApplyTheme();
  return (
    <Routes>
      <Route path="/" element={<RootPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
