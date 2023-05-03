import { App, Plugin } from 'vue'
import { getEventEmitter } from './events'

const initialize = (game: Phaser.Game) => {
    const eventEmitter = getEventEmitter()

    globalThis.NuxtPhaser.game = game
    globalThis.NuxtPhaser.eventEmitter = eventEmitter
}

export const VuePhaserPlugin: Plugin = {
    install(app: App, _options: Record<string, any>) {
        globalThis.NuxtPhaser = { initialize }
        app.config.globalProperties.$phaser = globalThis.NuxtPhaser
    },
}

export default VuePhaserPlugin
