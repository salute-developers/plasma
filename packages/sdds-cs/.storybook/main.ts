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
    addons: ['@storybook/addon-docs'],
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
            plugins: [
                /* Plugin that fixes a bug in Storybook@10 - https://github.com/storybookjs/storybook/issues/21716 */
                {
                    name: 'fix-mdx-react-shim',
                    enforce: 'pre',
                    resolveId(source) {
                        if (source.startsWith('file://') && source.includes('mdx-react-shim.js')) {
                            // Convert file:///... path to normal filesystem path for Vite
                            return new URL(source).pathname;
                        }
                        return null;
                    },
                },
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
