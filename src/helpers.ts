import Vue from 'vue'

export const start = (game: Phaser.Game) => {
    Vue.prototype.$phaser.game = game
}
