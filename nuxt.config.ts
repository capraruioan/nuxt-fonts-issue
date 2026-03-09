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
})