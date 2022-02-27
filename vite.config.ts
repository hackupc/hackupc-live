import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue, { type Options as PluginVueOptions } from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import ViteFonts, { type VitePluginFontsOptions } from 'vite-plugin-fonts'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import ViteRadar, { type VitePluginRadarOptions } from 'vite-plugin-radar'

const pluginVueOptions: PluginVueOptions = {}

const pluginVitePWAOptions: Partial<VitePWAOptions> = {
  includeAssets: [],
  manifest: {
    name: 'HackUPC Live',
    short_name: 'HackUPC',
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
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
    start_url: '.',
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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(pluginVueOptions),
    VitePWA(pluginVitePWAOptions),
    ViteFonts(pluginViteFontsOptions),
    ViteRadar(pluginViteRadarOptions),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: /* scss */ `@import "@/styles/index.scss";`,
      },
    },
  },
})
