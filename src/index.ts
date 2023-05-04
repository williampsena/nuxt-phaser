import { defineNuxtPlugin } from '#app'
import VuePhaserPlugin from './vue.index'
import PhaserGame from './phaserGame.vue'

export { PhaserGame, VuePhaserPlugin }

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VuePhaserPlugin)
})
