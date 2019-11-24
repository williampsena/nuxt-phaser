import Vue from 'vue'
import { PhaserPluginOptions } from './types'
import { Game } from 'phaser'

export const start = (options: PhaserPluginOptions) => () => 
    require(options.game) as Game

export default function (options: PhaserPluginOptions) {
    Vue.prototype.$phaser = {
        start: start(options)
    }
}