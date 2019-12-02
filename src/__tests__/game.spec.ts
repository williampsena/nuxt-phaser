import { mount } from '@vue/test-utils'
import { Game } from 'phaser'
import Vue from 'vue'
import PhaserGame from '~/phaserGame.vue'
import startPlugin from '../'

const mockInject = () => (Vue.prototype.$phaser = window.PhaserNuxt)

describe('PhaserGame.vue', () => {
    beforeAll(() => {
        startPlugin(null, mockInject)
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
        expect(wrapper.html()).toMatch('phaser')
    })
})
