import NuxtPdfUtils from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    NuxtPdfUtils,
  ],
  nitro: {
    experimental: {
      asyncContext: true,
    },
  },
})
