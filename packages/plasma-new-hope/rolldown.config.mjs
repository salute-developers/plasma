import fs from 'fs';
import path from 'path';
import { defineConfig } from 'rolldown';
import { createFilter } from '@rollup/pluginutils';
import linaria from '@linaria/rollup';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const inputDir = 'src-css';
const inputDirPath = path.resolve(dirname, inputDir);

export default defineConfig({
    input: path.join(inputDir, 'index.ts'),
    treeshake: {
        propertyReadSideEffects: false,
    },
    checks: {
        pluginTimings: false,
    },
    logLevel: 'warn',
    transform: {
        jsx: 'react',
        target: 'es2015',
    },
    output: {
        preserveModules: true,
        dir: 'dist/css/es',
        format: 'es',
        esModule: true,
        sourcemap: false,
        exports: 'named',
        assetFileNames: '[name][extname]',
    },
    external: (id) => {
        if (id.startsWith('regenerator-runtime') || id === 'tslib') {
            return false;
        }
        if (id === inputDir || id.startsWith(`${inputDir}/`)) {
            return false;
        }
        return !id.startsWith('.') && !path.isAbsolute(id);
    },
    plugins: [
        sourceAliasPlugin(),
        linaria({
            exclude: ['plasma-core/src/collectPackageInfo.ts'],
            babelOptions: {
                plugins: [
                    [
                        'module-resolver',
                        {
                            alias: {
                                'src-css': path.resolve(dirname, 'src-css'),
                            },
                            extensions: ['.js', '.jsx', '.ts', '.tsx'],
                        },
                    ],
                ],
            },
        }),
        importCssPlugin(),
    ],
});

function sourceAliasPlugin() {
    return {
        name: 'sourceAliasPlugin',
        resolveId(source, importer) {
            if (source === inputDir) {
                return resolveSourceAlias(inputDirPath);
            }

            if (source.startsWith(`${inputDir}/`)) {
                return resolveSourceAlias(path.resolve(dirname, source));
            }

            if (importer?.startsWith(inputDirPath) && source.startsWith('src/')) {
                return resolveSourceAlias(path.resolve(dirname, source.replace(/^src\//, `${inputDir}/`)));
            }

            return null;
        },
    };
}

function resolveSourceAlias(resolvedPath) {
    const extensions = ['', '.ts', '.tsx', '.js', '.jsx'];

    for (const extension of extensions) {
        const filePath = `${resolvedPath}${extension}`;

        if (isFile(filePath)) {
            return filePath;
        }
    }

    for (const extension of ['.ts', '.tsx', '.js', '.jsx']) {
        const indexPath = path.join(resolvedPath, `index${extension}`);

        if (isFile(indexPath)) {
            return indexPath;
        }
    }

    return resolvedPath;
}

function isFile(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch {
        return false;
    }
}

function isCssFile(id) {
    return getCssFileId(id).endsWith('.css');
}

function getCssFileId(id) {
    return id.split('?')[0];
}

function importCssPlugin() {
    const filter = createFilter(['**/*.css']);
    const styles = {};

    return {
        name: 'importCssPlugin',
        transform: {
            filter: {
                id: /\.css(?:\?.*)?$/,
            },
            handler(code, id) {
                const cssFileId = getCssFileId(id);

                if (!isCssFile(id) || !filter(cssFileId)) {
                    return;
                }

                const cssFile = path.relative(inputDir, cssFileId);

                if (styles[cssFile] !== code && (styles[cssFile] || code)) {
                    styles[cssFile] = code;
                }

                return {
                    code: 'export default {};',
                    moduleType: 'js',
                };
            },
        },
        generateBundle(options, bundle) {
            const files = Object.keys(bundle);

            files.forEach((file) => {
                const root = bundle[file].facadeModuleId;
                if (!root) {
                    return;
                }

                const modules = this.getModuleInfo(root);
                if (!modules) {
                    return;
                }

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
                        .filter((a) => !getCssFileId(a).endsWith('.module.css') && isCssFile(a))
                        .map((a) => path.relative(inputDir, getCssFileId(a)));

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
