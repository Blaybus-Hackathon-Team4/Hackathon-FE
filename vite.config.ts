import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   headers: {
  //     "Cross-Origin-Opener-Policy": "unsafe-none",
  //     "Cross-Origin-Embedder-Policy": "unsafe-none",
  //   },
  // },
  // server: {
  //   proxy: {
  //     "/oauth2": {
  //       target: "http://43.202.67.52:8080",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/oauth2/, ""), // /oauth2 제거
  //     },
  //   },
  // },
  // server: {
  //   proxy: {
  //     "/oauth2": {
  //       target: "http://43.202.67.52:8080",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
