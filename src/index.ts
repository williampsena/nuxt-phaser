import { App } from 'vue'
import VuePhaserPlugin from './vue.index'

interface NuxtApp {
    vueApp: App
}

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    nuxtApp.vueApp.use(VuePhaserPlugin)
})
