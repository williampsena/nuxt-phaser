export function getEventEmitter(game: Phaser.Game) {
    const emitter = new Phaser.Events.EventEmitter()

    emitter.on('restart', restartGame(game))
    emitter.on('pause', pauseGame(game))
    emitter.on('resume', resumeGame(game))

    return emitter
}

const restartGame = (game: Phaser.Game) => (scene: string) =>
    game.scene.getScene(scene).scene.restart()

const pauseGame = (game: Phaser.Game) => (scene: string) =>
    game.scene.pause(scene)

const resumeGame = (game: Phaser.Game) => (scene: string) =>
    game.scene.resume(scene)

export default {
    getEventEmitter,
}
