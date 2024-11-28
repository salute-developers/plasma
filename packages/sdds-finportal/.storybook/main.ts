import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const USE_EMOTION_COMPONENTS = process.env.USE_EMOTION_COMPONENTS || false;

const storyMap = {
    'styled-components': ['../src/**/*.stories.tsx'],
    emotion: ['../src-emotion/**/*.stories.tsx'],
};

const stories = ['../README.stories.mdx'];
const CSS_IN_JS = USE_EMOTION_COMPONENTS ? 'emotion' : 'styled-components';

stories.push(...storyMap[CSS_IN_JS]);

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
        autodocs: true,
        defaultName: 'Docs',
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
