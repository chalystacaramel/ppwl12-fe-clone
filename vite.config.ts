import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'exclude-server-files',
      resolveId(id) {
        if (
          id.includes('/server/trpc/') ||
          id.includes('routes/api/') ||
          id === '@trpc/server' ||
          id.startsWith('@trpc/server/')
        ) {
          return { id: 'virtual:empty', external: false };
        }
      },
      load(id) {
        if (id === 'virtual:empty') {
          return 'export default {}';
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['@trpc/server'],
  },
});
