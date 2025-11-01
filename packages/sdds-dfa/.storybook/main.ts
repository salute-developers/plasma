import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'node:path';

const config: StorybookConfig = {
    staticDirs: ['public'],
    stories: ['../src/**/*.stories.tsx', '../README.mdx'],
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
                alias: {
                    '@salutejs/plasma-sb-utils': path.resolve('../../utils/plasma-sb-utils/src'),
                },
            },
            build: {
                sourcemap: false,
            },
        });
    },
};

export default config;
