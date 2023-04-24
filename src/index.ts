import 'phaser'
import { App, Plugin } from 'vue'
import { getEventEmitter } from './events'

const initialize = (game: Phaser.Game) => {
    const eventEmitter = getEventEmitter(game)

    globalThis.VuePhaser.game = game
    globalThis.VuePhaser.eventEmitter = eventEmitter
}

export const VuePhaserPlugin: Plugin = {
    install(app: App, _options: Record<string, any>) {
        globalThis.VuePhaser = { initialize }
        app.config.globalProperties.$phaser = globalThis.VuePhaser
    },
}

export default VuePhaserPlugin
