import 'phaser';
import { initialize } from './helpers';
export default (_context, inject) => {
    window.PhaserNuxt = {
        initialize,
    };
    inject('phaser', window.PhaserNuxt);
};
