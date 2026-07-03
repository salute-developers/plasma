import { mergeConfig } from 'vite';
import type { Plugin } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import linaria from '@linaria/vite';
import { AsyncLocalStorage } from 'node:async_hooks';
import { createRequire } from 'node:module';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

// @ts-ignore
const require = createRequire(import.meta.url);
// @ts-ignore
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PLASMA_NEW_HOPE_SC = '@salutejs/plasma-new-hope/styled-components';
const PLASMA_NEW_HOPE_CSS = '@salutejs/plasma-new-hope/css';
const PLASMA_NEW_HOPE_SRC = path.resolve(__dirname, '../../plasma-new-hope/src/index.ts');
const SDDS_SERV_TOKENS = '@salutejs/sdds-themes/tokens/sdds_serv';
const nodeModulesRegExp = /[\\/]node_modules[\\/]/;
const storybookViteDepsRegExp = /[\\/]node_modules[\\/]\.cache[\\/]storybook[\\/].*[\\/]sb-vite[\\/]deps[\\/]/;
const hasImportOrExport = (code: string) => /(?:^|\*\/|;|})\s*(?:export|import)\s/m.test(code);
const linariaResolveStorage = new AsyncLocalStorage<boolean>();

const replaceAllImports = (code: string) => code.split(PLASMA_NEW_HOPE_SC).join(PLASMA_NEW_HOPE_CSS);

const transformToCssComponents = (): Plugin => ({
    name: 'sdds-serv-css-components',
    enforce: 'pre' as const,
    transform(code: string, id: string) {
        const [filename] = id.split('?', 1);

        if (!filename.includes(`${path.sep}src${path.sep}`)) {
            return null;
        }

        let nextCode = replaceAllImports(code);

        if (filename.endsWith(`${path.sep}components${path.sep}Spinner${path.sep}Spinner.tsx`)) {
            nextCode = nextCode
                .replace("import styled from 'styled-components';\n", '')
                .replace(
                    'export const Spinner = styled(SpinnerComponent)``;',
                    'export const Spinner = SpinnerComponent;',
                );
        }

        if (nextCode === code) {
            return null;
        }

        return {
            code: nextCode,
            map: null,
        };
    },
});

const resolveForLinariaEvaluation = (): Plugin => ({
    name: 'sdds-serv-linaria-cjs-resolver',
    enforce: 'pre' as const,
    resolveId(source: string, importer?: string) {
        if (!linariaResolveStorage.getStore()) {
            return null;
        }

        if (source === PLASMA_NEW_HOPE_CSS) {
            return PLASMA_NEW_HOPE_SRC;
        }

        if (source === SDDS_SERV_TOKENS) {
            return require.resolve(source, {
                paths: [__dirname],
            });
        }

        if (
            importer?.includes(
                `${path.sep}packages${path.sep}plasma-new-hope${path.sep}dist${path.sep}css${path.sep}cjs${path.sep}`,
            )
        ) {
            return require.resolve(source, {
                paths: [path.dirname(importer)],
            });
        }

        return null;
    },
});

const useCjsResolverInsideLinaria = (plugin: Plugin): Plugin => {
    const originalTransform = plugin.transform;

    if (!originalTransform || typeof originalTransform !== 'function') {
        return plugin;
    }

    return {
        ...plugin,
        transform(...args) {
            return linariaResolveStorage.run(true, () => originalTransform.apply(this, args));
        },
    };
};

const linariaPlugin = useCjsResolverInsideLinaria(
    linaria({
        exclude: ['../../../'],
        rules: [
            {
                action: require.resolve('@linaria/shaker'),
            },
            {
                test: nodeModulesRegExp,
                action: 'ignore',
            },
            {
                test: (filename, code) =>
                    nodeModulesRegExp.test(filename) &&
                    !storybookViteDepsRegExp.test(filename) &&
                    hasImportOrExport(code),
                action: require.resolve('@linaria/shaker'),
            },
            {
                test: storybookViteDepsRegExp,
                action: 'ignore',
            },
        ],
        tagResolver: (source, tag) => {
            if (source === PLASMA_NEW_HOPE_CSS) {
                if (tag === 'css') {
                    return require.resolve('@linaria/core/processors/css');
                }

                if (tag === 'styled') {
                    return require.resolve('@linaria/react/processors/styled');
                }
            }

            return null;
        },
        displayName: true,
        babelOptions: {
            presets: ['@babel/preset-typescript', '@babel/preset-react'],
        },
    }),
);

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
                preserveSymlinks: true,
                alias: [
                    {
                        find: '@salutejs/plasma-sb-utils',
                        replacement: path.resolve('../../utils/plasma-sb-utils/src'),
                    },
                ],
            },
            build: {
                sourcemap: false,
            },
            optimizeDeps: {
                include: ['@salutejs/plasma-new-hope/css'],
            },
            plugins: [
                transformToCssComponents(),
                resolveForLinariaEvaluation(),
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
                linariaPlugin,
            ],
        });
    },
};

export default config;
