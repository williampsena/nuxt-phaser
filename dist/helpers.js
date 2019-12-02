import { getEventEmitter } from './events';
export const initialize = (game) => {
    const eventEmitter = getEventEmitter(game);
    window.PhaserNuxt.game = game;
    window.PhaserNuxt.eventEmitter = eventEmitter;
};
