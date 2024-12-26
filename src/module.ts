import { defineNuxtModule, createResolver, addServerImportsDir } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-pdf-utils',
    configKey: 'nuxtPdfUtils',
  },
  defaults: {},
  setup(_options, nuxt: Nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.nitro.experimental = nuxt.options.nitro.experimental || {}
    nuxt.options.nitro.experimental.asyncContext = true
    addServerImportsDir(resolver.resolve('./runtime/server/utils'))
  },
})
