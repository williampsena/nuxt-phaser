"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_utils_1 = require("@vue/test-utils");
var phaserGame_vue_1 = __importDefault(require("~/phaserGame.vue"));
describe('PhaserGame.vue', function () {
    test('should mount component', function () {
        var wrapper = test_utils_1.shallowMount(phaserGame_vue_1.default);
        expect(wrapper.text()).toBeTruthy();
    });
});
