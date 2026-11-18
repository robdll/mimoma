import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

const isGhPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!/\/src\/.*\.js$/.test(id)) {
          return null;
        }
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  base: isGhPages ? "/mimoma/" : "/",
  build: {
    outDir: "build",
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});