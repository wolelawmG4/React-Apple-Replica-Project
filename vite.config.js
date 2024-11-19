import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs"; // Keep if necessary

export default defineConfig({
  plugins: [react(), commonjs()],
  base: "/React-Apple-Replica-Project/",

  optimizeDeps: {
    exclude: ["jquery", "popper.js"], // Exclude from pre-bundling
  },

  build: {
    rollupOptions: {
      external: ["jquery", "popper.js"], // Mark these as external dependencies
      output: {
        globals: {
          jquery: "jQuery", // Needed for jQuery globals
          "popper.js": "Popper", // Needed for Popper.js globals
        },
      },
    },
  },
});
