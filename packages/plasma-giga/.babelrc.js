module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-annotate-pure-calls',
        '@babel/plugin-transform-react-constant-elements',
    ],
    ignore: ['**/*.d.ts', '**/helpers', '**/__helpers', '**/*.stories.tsx'],
};
