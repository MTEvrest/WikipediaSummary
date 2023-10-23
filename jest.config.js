const merge = require('merge');
const tsPreset = require('ts-jest/jest-preset');
const cloudscapePreset = require('@cloudscape-design/jest-preset');

module.exports = merge.recursive(tsPreset, cloudscapePreset, {
    //transformIgnorePatterns: ['node_modules/(?!(@cloudscape-design)/)'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/styleMock.js',
      },
    testEnvironment: 'jsdom',
  });