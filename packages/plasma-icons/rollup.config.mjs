import path from 'path';
import { createFilter } from '@rollup/pluginutils';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import linaria from '@linaria/rollup';
import { babel } from '@rollup/plugin-babel';

import styles from '@ironkinoko/rollup-plugin-styles';

const inputDir = 'src-build';

export default {
    input: path.join(inputDir, 'index.ts'),
    treeshake: {
        propertyReadSideEffects: true,
    },
    output: [
        {
            preserveModules: true,
            dir: 'css/es',
            format: 'es',
            freeze: false,
            esModule: true,
            sourcemap: false,
            exports: 'named',
            assetFileNames: '[name][extname]',
        },
        {
            preserveModules: true,
            dir: 'css/cjs',
            format: 'cjs',
            freeze: false,
            esModule: true,
            sourcemap: false,
            exports: 'named',
            assetFileNames: '[name][extname]',
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
            sourceMap: process.env.NODE_ENV !== 'production',
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
        babel({
            babelHelpers: 'bundled',
            extensions: ['.ts', '.tsx'],
        }),
    ],
};

function importCssPlugin() {
    const filter = createFilter(['**/*.css']);
    const styles = {};

    return {
        name: 'importCssPlugin',
        transform(code, id) {
            if (!filter(id)) {
                return;
            }

            if (styles[id] !== code && (styles[id] || code)) {
                styles[path.relative(inputDir, id)] = code;
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
                    // linaria
                    const cssFiles = modules.importedIds
                        .filter((a) => a.includes(inputDir))
                        .filter((a) => !a.endsWith('.module.css') && a.endsWith('.css'))
                        .map((a) => path.relative(inputDir, a));

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
                            source: styles[cssFile],
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
