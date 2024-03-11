import { VitePWA } from 'vite-plugin-pwa'

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
        registerType: 'autoUpdate',
        manifest: {
            name: "Cotizador de Criptomonedas con Vue, Vite y Sass",
            short_name: "CriptoCotizador",
            description: "Cotizador de Criptomonedas hecho con Vue.js 3, Vite y Sass",
            theme_color: "#F60DE3",
            icons: [
                {
                  src: 'logo.svg',
                  sizes: '192x192',
                  type: 'image/svg'
                },
                {
                  src: 'logo.svg',
                  sizes: '512x512',
                  type: 'image/svg'
                }
            ],
        }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
