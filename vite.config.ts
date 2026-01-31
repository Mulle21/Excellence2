import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path/win32";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/excellence"
}));
