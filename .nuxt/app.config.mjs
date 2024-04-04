
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "964dc887-2a07-428b-8cef-8a3a46587e92"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "C:/Users/sachini.dulakshi/Documents/Nuxt/Nuxt3-App/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
