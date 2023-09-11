const linaria = require('@linaria/vite').default;

const USE_STYLED_COMPONENTS = process.env.USE_STYLED_COMPONENTS || false;

module.exports = {
    stories: USE_STYLED_COMPONENTS ? ['../src-sc/**/*.stories.tsx'] : ['../src/**/*.stories.tsx'],
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
