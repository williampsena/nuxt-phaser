module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/**/*.+(ts|vue)',
        '**/?(*.)+(spec|test).+(ts|vue)',
    ],
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
    moduleNameMapper: {
        '~/(.*)$': '<rootDir>/src/$1',
    },
    testURL: 'http://localhost/',
    setupFiles: ['jest-canvas-mock'],
}
