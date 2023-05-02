import { getEventEmitter } from './events';
const initialize = (game) => {
    const eventEmitter = getEventEmitter();
    globalThis.VuePhaser.game = game;
    globalThis.VuePhaser.eventEmitter = eventEmitter;
};
export const VuePhaserPlugin = {
    install(app, _options) {
        globalThis.VuePhaser = { initialize };
        app.config.globalProperties.$phaser = globalThis.VuePhaser;
    },
};
export default VuePhaserPlugin;
