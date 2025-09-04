import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const stories = ['../README.mdx', '../src/**/*.stories.tsx'];

const config: StorybookConfig = {
    staticDirs: ['public'],
    stories,
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
        defaultName: 'Docs',
    },
    typescript: {
        reactDocgen: false,
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
            define: {
                'import.meta.env.IS_DRAFT': process.env.IS_DRAFT || false,
            },
        });
    },
};

export default config;
