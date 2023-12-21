import path from 'path';
import { createRequire } from 'module'
import { createFilter } from '@rollup/pluginutils'

import { nodeResolve } from '@rollup/plugin-node-resolve';

import linaria from '@linaria/rollup';
import { babel } from '@rollup/plugin-babel';

import styles from "@ironkinoko/rollup-plugin-styles";


const inputDir = 'src-css';
const require = createRequire(import.meta.url)

export default {
    input: path.join(inputDir, 'index.ts'),
    treeshake: {
        propertyReadSideEffects: false,
    },
    output: [{
        preserveModules: true,
        dir: 'css/es',
        format: 'es',
        freeze: false,
        esModule: true,
        sourcemap: true,
        exports: 'named',
        assetFileNames: "[name][extname]",
    }, {
        preserveModules: true,
        dir: 'css/cjs',
        format: 'cjs',
        freeze: false,
        esModule: true,
        sourcemap: true,
        exports: 'named',
        assetFileNames: "[name][extname]",
    }],
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
                if (source === '@salutejs/plasma-new-hope') {
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
            mode: "extract",
            modules: true,
        }),
        babel({ babelHelpers: 'bundled', extensions: ['.ts', '.tsx'], }),
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
          styles[path.relative(inputDir, id)] = code
        }
  
        return { code };
      },
      generateBundle(options, bundle) {
        const files = Object.keys(bundle);
        files.forEach((file) => {
            const root = bundle[file].facadeModuleId
            const modules = this.getModuleInfo(root);

            // ADD IMPORT FOR CSS MODULES
            if (file.endsWith('.css.js')) {
                const { code } = bundle[file];
                // TODO: #718 cjs modules => require('./file.css');
                const importString = `import './${file.replace('.css.js', '.css.css')}';\n`;
                this.emitFile({
                    type: 'asset',
                    fileName: file,
                    source: importString + code,
                });
            } else if (file.endsWith('.js')) {
                // ADD IMPORT FOR LINARIA
                // linaria
                const cssFiles = modules.importedIds
                    .filter(a => a.includes(inputDir))
                    .filter(a => !a.endsWith('.module.css') && a.endsWith('.css'))
                    .map(a => path.relative(inputDir, a))

                if (!cssFiles.length) {
                    return;
                }
                const imports = [];
                cssFiles.forEach(cssFile => {
                    imports.push(`import './${path.relative(path.dirname(file), cssFile)}';`);
                    this.emitFile({
                        type: 'asset',
                        fileName: cssFile,
                        source: styles[cssFile],
                    });
                })
                if (imports.length) {
                    const { code } = bundle[file];
                    this.emitFile({
                        type: 'asset',
                        fileName: file,
                        source: imports.join('\n') + '\n' + code,
                    });

                    console.log(`Added css: ${cssFiles} for ${file}`);
                }
            }
        });
      },
    };
  }
