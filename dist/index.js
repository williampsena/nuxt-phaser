import 'phaser';
import { getEventEmitter } from './events';
const initialize = (game) => {
    const eventEmitter = getEventEmitter(game);
    window.VuePhaser.game = game;
    window.VuePhaser.eventEmitter = eventEmitter;
};
export const VuePhaserPlugin = {
    install(app, _options) {
        window.VuePhaser = { initialize };
        app.provide('phaser', window.VuePhaser);
    },
};
export default VuePhaserPlugin;
