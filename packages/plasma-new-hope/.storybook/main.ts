import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const USE_AI_COMPONENTS = process.env.USE_AI_COMPONENTS || false;

const getStories = () => {
    if (USE_AI_COMPONENTS) {
        return ['../src/examples/components/_ai/**/*.stories.tsx'];
    } else {
        return ['../src/**/*.stories.tsx'];
    }
};

const config: StorybookConfig = {
    staticDirs: ['public'],
    addons: ['@storybook/addon-docs'],
    stories: getStories(),
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    core: {
        disableTelemetry: true,
    },
    docs: {
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
                alias: {
                    src: path.resolve(__dirname, '../src'),
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
