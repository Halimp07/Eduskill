// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import the 'path' module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@courses": path.resolve(__dirname, "src/pages/courses"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@": path.resolve(__dirname, "src"),
        },
  },
});
