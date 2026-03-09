import vue from '@vitejs/plugin-vue'
import pugPlugin from 'vite-plugin-pug'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: '~/assets/css/index.scss',
  },
  app: {
    cdnURL: 'https://test.test/assets',
  },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  fonts: {
    families: [
    {
      name: 'IBM Plex Sans',
      preload: true,
      provider: 'google',
      weights: ['100 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      providerOptions: {
        google: {
          experimental: {
            variableAxis: {
              wdth: [['75', '100']],
            },
          },
        },
      },
    },
    {
      name: 'Lora',
      preload: true,
      provider: 'google',
      weights: ['400 700'],
      subsets: ['latin', 'latin-ext'],
    },
    ],
  },
  features: {
    inlineStyles: true,
  },
  compatibilityDate: '2025-08-07',
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    clientFallback: true,
    componentIslands: {
      selectiveClient: 'deep',
    },
    defaults: {
      nuxtLink: {
        prefetch: true,
        prefetchOn: { visibility: false, interaction: true },
      },
    },
  },
  nitro: {
    rollupConfig: {
      plugins: [vue({ exclude: '.nuxt/**' })],
    },
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },
  vite: {
    plugins: [
      pugPlugin(),
    ],
    build: {
      rollupOptions: {
        output: {
          // Rollup will try and merge small chuks
          // experimentalMinChunkSize: 15_000,
          manualChunks(id) {
            // 1) Always keep Vue runtime in its own chunk so that changes to our code do not ivalidate this
            if (id.includes('/node_modules/vue/')) return 'framework'
            if (id.includes('/node_modules/@vue/')) return 'framework'
            if (id.includes('/node_modules/vue-router/')) return 'framework'

            // 2) Coarse bucket for your app code, usually utils and composables are small so it makes sense to keep then on one chunk
            if (/(?:^|\/)app\/util(?:\/|$)/.test(id)) return 'app-common'
            if (/(?:^|\/)app\/composables(?:\/|$)/.test(id)) return 'app-common'

            // 3) Everything else: default behavior
            return undefined
          },
        },
      },
    },
  },
})