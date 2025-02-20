const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-annotate-pure-calls',
    '@babel/plugin-transform-react-constant-elements',
    [
        'babel-plugin-styled-components',
        {
            displayName: false,
            namespace: 'plasma',
        },
    ],
];
const ignore = ['**/*.d.ts', '**/helpers', '**/__helpers', '**/*.stories.tsx'];

module.exports = {
    env: {
        cjs: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
                [
                    '@linaria/babel-preset',
                    {
                        evaluate: true,
                        displayName: true,
                    },
                ],
            ],
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
                [
                    '@linaria/babel-preset',
                    {
                        evaluate: true,
                        displayName: true,
                    },
                ],
            ],
            plugins,
            ignore,
        },
    },
};
