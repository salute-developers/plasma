import path from 'path';
import { createRequire } from 'module';
import { createFilter } from '@rollup/pluginutils';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import linaria from '@linaria/rollup';
import { babel } from '@rollup/plugin-babel';
import styles from '@ironkinoko/rollup-plugin-styles';

const inputDir = 'src-css';
const require = createRequire(import.meta.url);

const createConfig = (inputFile, outputDir) => ({
    input: {
        index: path.join(inputDir, inputFile),
    },
    treeshake: {
        propertyReadSideEffects: false,
    },
    output: [
        {
            preserveModules: true,
            dir: `${outputDir}/es`,
            format: 'es',
            freeze: false,
            esModule: true,
            sourcemap: true,
            exports: 'named',
            assetFileNames: '[name][extname]',
        },
        {
            preserveModules: true,
            dir: `${outputDir}/cjs`,
            format: 'cjs',
            freeze: false,
            esModule: true,
            sourcemap: true,
            exports: 'named',
            assetFileNames: '[name][extname]',
            interop: 'auto',
        },
    ],
    external: (id) => {
        if (id.startsWith('regenerator-runtime') || id === 'tslib') {
            return false;
        }

        return !id.startsWith('.') && !path.isAbsolute(id);
    },
    plugins: [
        linaria({
            exclude: ['plasma-core/src/collectPackageInfo.ts'],
            tagResolver: (source, tag) => {
                if (source === '@salutejs/plasma-new-hope/css') {
                    if (tag === 'css') {
                        // TODO: move to node@20
                        // return import.meta.resolve('@linaria/core/processors/css');
                        return require.resolve('@linaria/core/processors/css');
                    }

                    if (tag === 'styled') {
                        return require.resolve('@linaria/react/processors/styled');
                    }
                }

                return null;
            },
        }),
        nodeResolve({
            extensions: ['.tsx', '.ts'],
        }),
        importCssPlugin(),
        // TODO: #717 remove this plugin: it generates index.css but we don't need it
        styles({
            mode: 'extract',
            modules: true,
        }),
        babel({ babelHelpers: 'bundled', extensions: ['.ts', '.tsx'] }),
    ],
});

export default [createConfig('index.ts', 'dist/css'), createConfig('beta.ts', 'dist/beta/css')];

function importCssPlugin() {
    const filter = createFilter(['**/*.css']);
    const collectedStyles = {};

    return {
        name: 'importCssPlugin',
        transform(code, id) {
            if (!filter(id)) {
                return;
            }

            if (collectedStyles[id] !== code && (collectedStyles[id] || code)) {
                collectedStyles[path.relative(inputDir, id)] = code;
            }

            return { code };
        },
        generateBundle(options, bundle) {
            const files = Object.keys(bundle);

            files.forEach((file) => {
                const root = bundle[file].facadeModuleId;
                const modules = this.getModuleInfo(root);

                // ADD IMPORT FOR CSS MODULES
                if (file.endsWith('.css.js')) {
                    const { code } = bundle[file];
                    const data = file.replace('.css.js', '.css.css');
                    const requireString =
                        options.format === 'cjs' ? `require('./${data}');\n` : `import './${data}';\n`;

                    this.emitFile({
                        type: 'asset',
                        fileName: file,
                        source: requireString + code,
                    });
                } else if (file.endsWith('.js')) {
                    // ADD IMPORT FOR LINARIA
                    const cssFiles = modules.importedIds
                        .filter((id) => id.includes(inputDir))
                        .filter((id) => !id.endsWith('.module.css') && id.endsWith('.css'))
                        .map((id) => path.relative(inputDir, id));

                    if (!cssFiles.length) {
                        return;
                    }

                    const imports = [];

                    cssFiles.forEach((cssFile) => {
                        const data = path.relative(path.dirname(file), cssFile);
                        const importStatement =
                            options.format === 'cjs' ? `require('./${data}');` : `import './${data}';`;

                        imports.push(importStatement);

                        this.emitFile({
                            type: 'asset',
                            fileName: cssFile,
                            source: collectedStyles[cssFile],
                        });
                    });

                    if (imports.length) {
                        const { code } = bundle[file];

                        this.emitFile({
                            type: 'asset',
                            fileName: file,
                            source: `${imports.join('\n')}\n${code}`,
                        });
                    }
                }
            });
        },
    };
}
