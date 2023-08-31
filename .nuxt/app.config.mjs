
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/guillaumem/Documents/GitHub/nuxt-mdr/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
