import { getEventEmitter } from './events'

export const initialize = (game: Phaser.Game) => {
    const eventEmitter = getEventEmitter(game)

    window.PhaserNuxt.game = game
    window.PhaserNuxt.eventEmitter = eventEmitter
}
