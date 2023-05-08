import { defineNuxtPlugin } from 'nuxt/dist/app'
import VuePhaserPlugin from './vue.index'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VuePhaserPlugin)
})
