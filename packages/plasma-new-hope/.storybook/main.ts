import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import linaria from '@linaria/vite';

const USE_STYLED_COMPONENTS = process.env.USE_STYLED_COMPONENTS || false;
const USE_EMOTION_COMPONENTS = process.env.USE_EMOTION_COMPONENTS || false;

const storyMap = {
    linaria: ['../src/**/*.stories.tsx'],
    'styled-components': ['../src-sc/**/*.stories.tsx'],
    emotion: ['../src-emotion/**/*.stories.tsx'],
};

const stories = [];

if (USE_STYLED_COMPONENTS) {
    stories.push(...storyMap['styled-components']);
} else if (USE_EMOTION_COMPONENTS) {
    stories.push(...storyMap['emotion']);
} else {
    // default
    stories.push(...storyMap['linaria']);
}

const config: StorybookConfig = {
    staticDirs: ['public'],
    addons: ['@storybook/addon-essentials'],
    stories,
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
