module.exports = {
    stories: [
        '../src/**/*.stories.@(mdx|tsx)',
        '../README.stories.mdx',
        '../Tokens.stories.mdx',
        '../environment.stories.mdx',
    ],
    addons: ['@storybook/addon-essentials'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    async viteFinal(config) {
        return {
            ...config,
            base: '',
            resolve: {
                ...config.resolve,
                dedupe: ['react', 'react-dom', 'styled-components'],
            },
            build: {
                ...config.build,
                sourcemap: false,
            },
        };
    },
};
