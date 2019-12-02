export function getEventEmitter(game) {
    const emitter = new Phaser.Events.EventEmitter();
    emitter.on('restart', restartGame(game));
    emitter.on('pause', pauseGame(game));
    emitter.on('resume', resumeGame(game));
    return emitter;
}
const restartGame = (game) => (scene) => game.scene.getScene(scene).scene.restart();
const pauseGame = (game) => (scene) => game.scene.pause(scene);
const resumeGame = (game) => (scene) => game.scene.resume(scene);
export default {
    getEventEmitter,
};
