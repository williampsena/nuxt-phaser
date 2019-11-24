import { Game } from 'phaser'

declare module 'vue/types/vue' {
    export interface Vue {
        $phaser: {
            start: () => Game
        }
    }
}
