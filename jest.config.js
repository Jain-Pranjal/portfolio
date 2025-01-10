const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './', // Path to your Next.js app
});

const customJestConfig = {
    setupFilesAfterEnv: ['./jest.setup.js'], // Uncomment and adjust the path if you have setup files
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Adjust based on your Next.js aliases
    },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};

module.exports = createJestConfig(customJestConfig);

