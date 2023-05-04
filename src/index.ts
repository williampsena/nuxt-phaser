import { defineNuxtPlugin } from '#app'
import VuePhaserPlugin from './vue.index'
export * as PhaserGame from './phaserGame.vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VuePhaserPlugin)
})
