import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['packages/**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePathIgnorePatterns: [
    '<rootDir>/examples',
    '<rootDir>/tooling/cra-template*',
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': '@swc/jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: ['./scripts/setup-test.ts'],
  testTimeout: 10000,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

export default config;
