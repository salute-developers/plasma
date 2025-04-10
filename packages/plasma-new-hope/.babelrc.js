const namespace = process.env.SC_NAMESPACE;

const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-annotate-pure-calls',
    '@babel/plugin-transform-react-constant-elements',
];
const ignore = ['**/*.d.ts', '**/helpers', '**/__helpers', '**/*.stories.tsx'];

if (process.env.EMOTION) {
    plugins.push([
        '@emotion/babel-plugin',
        {
            autoLabel: 'always',
            labelFormat: `${namespace}__[local]`,
        },
    ]);

    plugins.push([
        'module-resolver',
        {
            'root': ['./src'],
            alias: {
                src: './src-emotion'
            }
        }
    ]);
} else if (process.env.SC) {
    plugins.push([
        'babel-plugin-styled-components',
        {
            displayName: false,
            namespace,
        },
    ]);

    plugins.push([
        'module-resolver',
        {
            'root': ['./src'],
            alias: {
                src: './src-sc'
            }
        }
    ]);
} else {
    plugins.push([
        'module-resolver',
        {
            'root': ['./src'],
            alias: {
                src: './src'
            }
        }
    ])
}

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
