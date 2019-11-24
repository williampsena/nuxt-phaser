'use strict'
exports.__esModule = true
var vue_1 = require('vue')
exports.start = function(options) {
    return function() {
        return require(options.game)
    }
}
function default_1(options) {
    vue_1['default'].prototype.$phaser = {
        start: exports.start(options),
    }
}
exports['default'] = default_1
