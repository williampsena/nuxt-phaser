export const getEventEmitter = (game: Phaser.Game) =>
    new Phaser.Events.EventEmitter()

export default {
    getEventEmitter: getEventEmitter,
}
