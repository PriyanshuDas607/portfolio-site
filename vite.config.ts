import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000, // Client build limit
    rollupOptions: {
      onwarn(warning, warn) {
        // SSR / Client ke large chunk size warnings ko filter out karta hai
        if (warning.code === 'LARGE_BUNDLE' || warning.message.includes('Some chunks are larger')) {
          return
        }
        warn(warning)
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'three-vendor'
            }
            return 'vendor'
          }
        },
      },
    },
  },
  ssr: {
    // SSR environment build ke warning thresholds override karta hai
    build: {
      chunkSizeWarningLimit: 3000,
    },
  },
})