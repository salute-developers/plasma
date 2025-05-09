import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import linaria from '@linaria/vite';

const USE_EMOTION_COMPONENTS = process.env.USE_EMOTION_COMPONENTS || false;

const storyMap = {
    linaria: ['../src/**/*.stories.tsx'],
    emotion: ['../src-emotion/**/*.stories.tsx'],
};

const stories = ['../README.stories.mdx'];

if (USE_EMOTION_COMPONENTS) {
    stories.push(...storyMap['emotion']);
} else {
    // default
    stories.push(...storyMap['linaria']);
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
            plugins: [
                linaria({
                    exclude: ['../../../'],
                    displayName: true,
                    babelOptions: {
                        presets: ['@babel/preset-typescript', '@babel/preset-react'],
                    },
                }),
            ],
        });
    },
};

export default config;
