import 'phaser'
import { initialize } from './helpers'

type AnyFunction = (...args: any[]) => void

export default (_context: any, inject: AnyFunction) => {
    window.PhaserNuxt = {
        initialize,
    }
    inject('phaser', window.PhaserNuxt)
}
