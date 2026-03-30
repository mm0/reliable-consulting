import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const imgRoot = '/home/matt/Documents/Git/server/home-site-images/img'

function serveImagesPlugin() {
  return {
    name: 'serve-images',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/img/')) {
          const filePath = path.join(imgRoot, req.url.slice(4))
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            return res.end(fs.readFileSync(filePath))
          }
        }
        next()
      })
    },
    apply: 'serve'
  }
}

function copyImagesPlugin() {
  return {
    name: 'copy-images',
    apply: 'build',
    closeBundle() {
      const distImgDir = path.join(process.cwd(), 'dist', 'img')
      if (!fs.existsSync(distImgDir)) {
        fs.mkdirSync(distImgDir, { recursive: true })
      }
      try {
        execSync(`cp -r ${imgRoot}/* ${distImgDir}/`, { stdio: 'inherit' })
      } catch (e) {
        console.warn('Warning: Could not copy images to dist', e.message)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), serveImagesPlugin(), copyImagesPlugin()],
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
