import { Game } from 'phaser';
import { getEventEmitter } from './events';
class MockScene extends Phaser.Scene {
    constructor() {
        super('MockScene');
    }
}
describe('events', () => {
    let eventEmitter;
    let game;
    beforeEach(() => {
        game = new Game({
            parent: 'phaser',
        });
        game.scene.add('mock', new MockScene());
        eventEmitter = getEventEmitter(game);
    });
    test('should listen and emit event', () => {
        const mockEvent = jest.fn();
        eventEmitter.on('mock', mockEvent);
        eventEmitter.emit('mock');
        expect(mockEvent).toHaveBeenCalledTimes(1);
    });
});
