import 'phaser'
import Vue from 'vue'
import { PhaserPlugin } from './@types'
import { start } from './helpers'

export default function() {
    Vue.prototype.$phaser = {
        start,
    } as PhaserPlugin
}
