import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Split rarely-changing vendor code into separately cached chunks
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('gsap') || id.includes('lenis')) return 'animation'
          if (id.includes('react')) return 'react'
          return 'vendor'
        },
      },
    },
  },
})
