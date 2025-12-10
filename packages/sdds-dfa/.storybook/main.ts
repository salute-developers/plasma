import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'node:path';

const config: StorybookConfig = {
    staticDirs: ['public'],
    stories: ['../src/**/*.stories.tsx', '../README.mdx'],
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
            ],
        });
    },
};

export default config;
