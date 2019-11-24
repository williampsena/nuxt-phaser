import { Game } from 'phaser'
import Vue from 'vue'
import { PhaserPluginOptions } from './types'

export const start = (options: PhaserPluginOptions) => () =>
    require(options.game) as Game

export default function(options: PhaserPluginOptions) {
    Vue.prototype.$phaser = {
        start: start(options),
    }
}
