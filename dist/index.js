"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
exports.start = function (options) { return function () {
    return require(options.game);
}; };
function default_1(options) {
    vue_1.default.prototype.$phaser = {
        start: exports.start(options),
    };
}
exports.default = default_1;
