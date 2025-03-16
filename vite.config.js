import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/positivus/",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
  plugins: [react(), svgr()],
});
