import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import { generateSitemap } from './src/utils/generateSitemap'

export default defineConfig(({ command }) => {
  // Only generate sitemap during production build
  if (command === 'build') {
    generateSitemap()
  }

  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: 'Global Shark Attack Tracker',
            description: 'Comprehensive shark attack data and analysis from around the world',
            themeColor: '#1a73e8',
            ogImage: 'https://www.thesharksattacks.com/og-image.jpg'
          }
        }
      })
    ],
    build: {
      manifest: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  }
})
