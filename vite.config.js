import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "CRUD PWA",
        short_name: "CRUD",
        start_url: "/",
        display: "standalone"
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/posts/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-posts",
              cacheableResponse: {
                statuses: [0,200]
              }
            }
          }
        ] 
      }
    })
  ],
})