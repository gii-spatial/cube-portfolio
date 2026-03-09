// vite.config.ts
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  base: process.env.VITE_BASE_PATH || "/cube-portfolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
