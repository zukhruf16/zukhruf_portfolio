import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("framer-motion") || id.includes("/motion/")) {
            return "motion";
          }
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("sonner")) return "ui";
          if (id.includes("react-dom") || id.includes("/react/")) {
            return "react";
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
