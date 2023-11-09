import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import linaria from '@linaria/vite';

const USE_STYLED_COMPONENTS = process.env.USE_STYLED_COMPONENTS || false;

const config: StorybookConfig = {
    staticDirs: ['public'],
    addons: ['@storybook/addon-essentials'],
    stories: USE_STYLED_COMPONENTS ? ['../src-sc/**/*.stories.tsx'] : ['../src/**/*.stories.tsx'],
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
            },
            build: {
                sourcemap: false,
            },
            plugins: [
                linaria({
                    exclude: ['../../../'],
                    babelOptions: {
                        presets: ['@babel/preset-typescript', '@babel/preset-react'],
                    },
                }),
            ],
        });
    },
};

export default config;
