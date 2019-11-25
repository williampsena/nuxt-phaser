import 'phaser';
import Vue from 'vue';
import { start } from './helpers';
export default function () {
    Vue.prototype.$phaser = {
        start,
    };
}
