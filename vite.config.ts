import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    tanstackStart({
      server: { 
        entry: "server",
        preset: "vercel",
      },
    }),
    nitro(),
    react(),
    tsConfigPaths(),
    tailwindcss(),
  ],
});
