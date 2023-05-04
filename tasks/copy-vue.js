const shelljs = require('shelljs')

shelljs.cp('./src/phaserGame.vue', './dist')
shelljs.rm('./dist/*/*.spec.js')