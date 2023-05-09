const shelljs = require('shelljs')
const fs = require('fs')

const loadPackageJson = () =>
    JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf8' }))

function cleanPackageJson(packageJson) {
    delete packageJson.scripts
    delete packageJson.prettier
}

function fixPaths(packageJson) {
    packageJson['module'] = 'index.js'
    packageJson['types'] = '@types/index.d.ts'
}

function savePackageJson(packageJson) {
    fs.writeFileSync(
        './dist/package.json',
        JSON.stringify(packageJson, null, 4),
        {
            encoding: 'utf8',
        }
    )
}

function copyAssets() {
    shelljs.cp('./src/types/*', './dist/@types')
    shelljs.cp('./src/phaserGame.vue', './dist')
}

function removeAssets() {
    shelljs.rm('-rf', ['./dist/*.spec.js', './__mocks__'])
}

const packageJson = loadPackageJson()

cleanPackageJson(packageJson)
fixPaths(packageJson)
savePackageJson(packageJson)

copyAssets()
removeAssets()
