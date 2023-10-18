import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/shared/assets"),
      "@cart": path.resolve(__dirname, "./src/features/cart"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@constants": path.resolve(__dirname, "./src/shared/constants"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@products": path.resolve(__dirname, "./src/features/products"),
      "@providers": path.resolve(__dirname, "./src/shared/providers"),
      "@services": path.resolve(__dirname, "./src/shared/services"),
      "@src": path.resolve(__dirname, "./src"),
      "@sharedTypes": path.resolve(__dirname, "./src/shared/types"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
    },
  },
  plugins: [react()],
});
