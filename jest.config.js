module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).+(ts)'],
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '.*\\.(vue)$': '@vue/vue3-jest',
    },
    moduleNameMapper: {
        '~/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        url: 'http://localhost/',
        customExportConditions: ['node', 'node-addons'],
    },
    setupFiles: ['jest-canvas-mock'],
}
