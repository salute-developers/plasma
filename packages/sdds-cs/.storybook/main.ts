import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

const stories = ['../README.stories.mdx', '../src/**/*.stories.tsx'];

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
    async viteFinal(config) {
        return mergeConfig(config, {
            base: '',
            plugins: [
                viteCommonjs({
                    include: ['@salutejs/sdds-themes/tokens/sdds_cs'],
                }),
            ],
            resolve: {
                dedupe: ['react', 'react-dom', 'styled-components'],
            },
            build: {
                sourcemap: false,
            },
        });
    },
};

export default config;
