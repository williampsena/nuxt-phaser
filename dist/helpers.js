import Vue from 'vue';
export const start = (game) => {
    Vue.prototype.$phaser.game = game;
};
