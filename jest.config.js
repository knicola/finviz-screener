'use strict'

module.exports = {
    testMatch: [
        '<rootDir>/tests/**/*.spec.js'
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 0,
        }
    }
}
