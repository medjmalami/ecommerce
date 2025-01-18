import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000", // Backend server URL
    },
    port: 3000,
    host: "0.0.0.0",
  },
});
