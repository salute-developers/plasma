const namespace = process.env.SC_NAMESPACE;

const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-annotate-pure-calls',
    '@babel/plugin-transform-react-constant-elements',
    [
        'babel-plugin-styled-components',
        {
            displayName: false,
            namespace,
        },
    ],
];
const ignore = ['**/*.d.ts', '**/helpers', '**/__helpers', '**/*.stories.tsx'];

!process.env.INCLUDE_TEST_FILES && ignore.push('**/*.component-test.tsx');

process.env.COVERAGE && plugins.push(['babel-plugin-istanbul']);

module.exports = {
    env: {
        cjs: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins,
            ignore,
        },
        esm: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                    },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
            ],
            plugins,
            ignore,
        },
    },
};
