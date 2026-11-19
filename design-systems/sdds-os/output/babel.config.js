const namespace = process.env.SC_NAMESPACE;

const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-annotate-pure-calls',
    '@babel/plugin-transform-react-constant-elements',
];
const ignore = ['**/*.d.ts'];

plugins.push([
    'babel-plugin-styled-components',
    {
        displayName: false,
        namespace,
    },
]);

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
