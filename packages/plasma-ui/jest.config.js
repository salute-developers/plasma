module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    testMatch: ['**/*.test.tsx'],
    moduleNameMapper: {
        '^react-dom$': '<rootDir>/node_modules/react-dom',
        '^react$': '<rootDir>/node_modules/react',
        '^react-draggable$': '<rootDir>/node_modules/react-draggable',
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.test.json',
        },
    },
};
