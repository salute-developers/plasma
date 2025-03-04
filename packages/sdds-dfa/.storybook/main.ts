import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    staticDirs: ['public'],
    stories: ['../src/**/*.stories.tsx', '../README.stories.mdx'],
    addons: ['@storybook/addon-essentials'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    core: {
        disableTelemetry: true,
    },
    docs: {
        autodocs: false,
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            base: '',
            resolve: {
                dedupe: ['react', 'react-dom', 'styled-components'],
                preserveSymlinks: true,
            },
            build: {
                sourcemap: false,
            },
        });
    },
};

export default config;
