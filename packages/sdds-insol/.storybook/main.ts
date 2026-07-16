import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import linaria from '@linaria/vite';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

// @ts-ignore
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const stories = ['../README.mdx', '../src/**/*.stories.tsx'];

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
            resolve: {
                dedupe: ['react', 'react-dom', 'styled-components'],
                alias: {
                    '@salutejs/plasma-sb-utils': path.resolve('../../utils/plasma-sb-utils/src'),
                    // Токены sdds-themes собраны и в CJS (tokens/*), и в ESM (es/tokens/*), но у
                    // пакета нет exports-мапы, поэтому глубокий подпуть по умолчанию резолвится в
                    // CJS. Vite (нативный ESM) отдаёт CJS как есть -> "does not provide an export
                    // named 'bodyS'" / "exports is not defined". Перенаправляем подпуть на ESM-сборку.
                    '@salutejs/sdds-themes/tokens': path.resolve(__dirname, '../../themes/sdds-themes/es/tokens'),
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
