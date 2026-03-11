import { type ReactElement } from "react";
import Main from "./components/views/root/Main";
import FloatingParticles from "./components/features/backgrounds/FloatingParticles";

export default function App(): ReactElement {
  return (
    <div className="size-full flex flex-col bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="size-full"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content proper */}
      <Main />

      <FloatingParticles />
    </div>
  );
}
