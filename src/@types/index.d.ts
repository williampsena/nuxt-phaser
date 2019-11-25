export interface PhaserPlugin {
    game?: Phaser.Game
    start: (game: Phaser.Game) => void
}

declare module 'vue/types/vue' {
    export interface Vue {
        $phaser: PhaserPlugin
    }
}
