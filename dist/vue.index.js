import { getEventEmitter } from './events';
const initialize = (game) => {
    const eventEmitter = getEventEmitter();
    globalThis.NuxtPhaser.game = game;
    globalThis.NuxtPhaser.eventEmitter = eventEmitter;
};
export const VuePhaserPlugin = {
    install(app, _options) {
        globalThis.NuxtPhaser = { initialize };
        app.config.globalProperties.$phaser = globalThis.NuxtPhaser;
    },
};
export default VuePhaserPlugin;
