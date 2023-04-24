import { mount, config } from '@vue/test-utils';
import { Game } from 'phaser';
import PhaserGame from '~/phaserGame.vue';
import VuePhaserPlugin from './';
config.plugins.VueWrapper.install(() => VuePhaserPlugin);
describe('PhaserGame.vue', () => {
    test('should mount component', () => {
        const createGame = () => new Game({
            parent: 'phaser',
        });
        const wrapper = mount(PhaserGame, {
            propsData: {
                createGame,
            },
        });
        expect(wrapper.html()).toMatch('phaser');
    });
});
