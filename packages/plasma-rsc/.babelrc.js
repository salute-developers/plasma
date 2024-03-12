const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-annotate-pure-calls',
    '@babel/plugin-transform-react-constant-elements',
];
const ignore = ['**/*.d.ts', '**/helpers', '**/__helpers', '**/*.stories.tsx', './app'];

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
