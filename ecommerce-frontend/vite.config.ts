import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // This ensures it listens on all network interfaces
    port: 5173, // The port you are using for the frontend
  },
});
