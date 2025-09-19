import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'

// https://vite.dev/config/
export default defineConfig({
  base: '/vite-project/',
  // envPrefix: 'ENV', // по умолчанию префикс - "VITE", но его можно вот так изменить
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 75
      },
      png: {
        quality: 75
      }
    }),
  ],
  publicDir: "static", // переименовали каталог public в static
  build: {
    // minify: true, // это значение по умолчанию
    // cssMinify: 'lightningcss',
    sourcemap: true,
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>=0.50%'))
    }
  }
})
