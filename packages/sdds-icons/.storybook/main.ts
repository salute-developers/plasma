import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../stories/**/*.stories.tsx'],
    staticDirs: [{ from: '../svg', to: '/svg' }],
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
                            return new URL(source).pathname;
                        }

                        return null;
                    },
                },
            ],
            resolve: {
                dedupe: ['react', 'react-dom'],
            },
        });
    },
};

export default config;
