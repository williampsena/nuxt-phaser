import { mount } from '@vue/test-utils'
import { Game } from 'phaser'
import PhaserGame from '~/phaserGame.vue'
import startPlugin from '../'

describe('PhaserGame.vue', () => {
    beforeAll(() => {
        startPlugin()
    })

    test('should mount component', () => {
        const createGame = () =>
            new Game({
                parent: 'phaser',
            })
        const wrapper = mount(PhaserGame, {
            propsData: {
                createGame,
            },
        })
        expect(wrapper.html()).toMatch('Phaser')
    })
})
