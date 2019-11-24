import { Game } from 'phaser'

export type StartPhaserEvent = () => Game

export interface PhaserPlugin {
    start: StartPhaserEvent
}

export interface PhaserPluginOptions {
    game: string
}

declare module 'vue/types/vue' {
    export interface Vue {
        $phaser: PhaserPlugin
    }
}