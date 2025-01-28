import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/dist/'],
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/*.test.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy', // Para arquivos CSS
        '\\.(jpg|jpeg|png|gif|mp3|wav)$': '<rootDir>/src/__mocks__/fileMock.js', // Para arquivos de mídia
    },
};

export default config;
