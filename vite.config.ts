import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  build: {
    outDir: "build",
  },
  plugins: [react()],
  server: {
    port: 3002,
    strictPort: true,
    host: true,
  },
});
