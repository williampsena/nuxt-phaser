import { shallowMount } from '@vue/test-utils'
import PhaserGame from '~/phaserGame.vue'

describe('PhaserGame.vue', () => {
    test('should mount component', () => {
        const wrapper = shallowMount(PhaserGame)
        expect(wrapper.text()).toBeTruthy()
    })
})
