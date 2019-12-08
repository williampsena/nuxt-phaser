export interface PhaserPlugin {
    game?: Phaser.Game
    initialize: (game: Phaser.Game) => void
    eventEmitter?: Phaser.Events.EventEmitter
}

declare module 'vue/types/vue' {
    export interface Vue {
        $phaser: PhaserPlugin
    }
}

declare global {
    var PhaserNuxt: PhaserPlugin
}
