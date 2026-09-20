import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash][extname]'
          } else if (/\.(png|jpg|jpeg|gif|svg)$/.test(assetInfo.name)) {
            return 'img/[name]-[hash][extname]'
          } else {
            return '[name]-[hash][extname]'
          }
        }
      }
    }
  },
  server: {
    port: 3000,
  }
})
