const shelljs = require('shelljs')
const fs = require('fs')

const loadPackageJson = () =>
    JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf8' }))

function cleanPackageJson(packageJson) {
    delete packageJson.scripts
    delete packageJson.prettier
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

const packageJson = loadPackageJson()

cleanPackageJson(packageJson)
savePackageJson(packageJson)

shelljs.cp('./src/phaserGame.vue', './dist')
shelljs.rm('-rf', ['./dist/*.spec.js', './__mocks__'])
