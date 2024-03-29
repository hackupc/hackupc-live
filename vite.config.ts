import vue, { type Options as PluginVueOptions } from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import ViteFonts, { type VitePluginFontsOptions } from 'vite-plugin-fonts'
import generateFile, {
  type Options as PluginGenerateFileOptions,
} from 'vite-plugin-generate-file'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import { VitePWA } from 'vite-plugin-pwa'
import ViteRadar, { type VitePluginRadarOptions } from 'vite-plugin-radar'
import { schedule } from './src/data/schedule'

const pluginVueOptions: PluginVueOptions = {}

const pluginVitePWAOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  includeAssets: [
    'favicon.svg',
    'favicon.ico',
    'robots.txt',
    'favicon/apple-touch-icon.png',
  ],
  devOptions: {
    enabled: true,
  },
  manifest: {
    name: 'HackUPC Live',
    id: '/',
    short_name: 'HackUPC',
    description: 'Upcoming events information and more info',
    display: 'minimal-ui',
    orientation: 'any',
    theme_color: '#1f143a',
    background_color: '#1f143a',
    icons: [
      {
        src: './favicon/android-chrome-512x512.png',
        sizes: '512x512',
        purpose: 'any',
      },
      {
        src: './favicon/android-chrome-192x192.png',
        sizes: '192x192',
        purpose: 'any',
      },
      {
        src: './favicon/maskable_icon.png',
        sizes: '1024x1024',
        purpose: 'maskable',
      },
    ],
    start_url: '.',
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

const pluginViteFontsOptions: VitePluginFontsOptions = {
  google: {
    families: [
      {
        name: 'Montserrat',
        styles: 'ital,wght@0,100..900;1,100..900',
      },
    ],
  },
}

const pluginViteRadarOptions: VitePluginRadarOptions = {
  analytics: {
    id: 'UA-69542332-6',
  },
}

const pluginGenerateFileOptions: PluginGenerateFileOptions = [
  {
    type: 'json',
    output: './data/schedule.json',
    data: schedule,
  },
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(pluginVueOptions),
    VitePWA(pluginVitePWAOptions),
    ViteFonts(pluginViteFontsOptions),
    ViteRadar(pluginViteRadarOptions),
    generateFile(pluginGenerateFileOptions),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
