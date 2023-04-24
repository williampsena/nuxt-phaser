export interface PhaserPlugin {
    game?: Phaser.Game
    initialize: (game: Phaser.Game) => void
    eventEmitter?: Phaser.Events.EventEmitter
}

declare module 'vue/types/vue' {
    interface Context {
        $phaser: PhaserPlugin
    }
}

declare global {
    var VuePhaser: PhaserPlugin
}
