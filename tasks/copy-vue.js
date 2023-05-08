const shelljs = require('shelljs')

shelljs.cp('./src/phaserGame.vue', './dist/esm')
shelljs.cp('./src/phaserGame.vue', './dist/umd')
shelljs.cp('./src/phaserGame.vue', './dist/cjs')
shelljs.rm('./dist/*/*.spec.js')