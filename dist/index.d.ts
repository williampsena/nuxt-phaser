import { Game } from 'phaser';
interface PhaserPluginOptions {
    game: string;
}
export declare const start: (options: PhaserPluginOptions) => () => Game;
export default function (options: PhaserPluginOptions): void;
export {};
