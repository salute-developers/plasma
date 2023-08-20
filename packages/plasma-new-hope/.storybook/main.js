const linaria = require('@linaria/vite').default;

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
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
            plugins: [
                ...config.plugins,
                linaria({
                    exclude: ['../../../'],
                }),
            ],
        };
    },
};
