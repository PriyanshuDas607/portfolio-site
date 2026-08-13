import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Raises warning limit to 2000 kB (2 MB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'three-vendor'; // Separates Three.js 3D assets
            }
            return 'vendor'; // Separates general npm packages
          }
        },
      },
    },
  },
})