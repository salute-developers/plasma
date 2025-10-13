import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import * as path from 'node:path';

const USE_EMOTION_COMPONENTS = process.env.USE_EMOTION_COMPONENTS || false;

const storyMap = {
    'styled-components': ['../src/**/*.stories.tsx'],
    emotion: ['../src-emotion/**/*.stories.tsx'],
};

const stories = ['../README.mdx'];

if (USE_EMOTION_COMPONENTS) {
    stories.push(...storyMap['emotion']);
} else {
    // default
    stories.push(...storyMap['styled-components']);
}

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
            plugins: [
                viteCommonjs({
                    include: ['@salutejs/sdds-themes/tokens/sdds_cs'],
                }),
            ],
            resolve: {
                dedupe: ['react', 'react-dom', 'styled-components'],
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
