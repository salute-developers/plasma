
import path from 'path';
import { createFilter } from '@rollup/pluginutils'

import { nodeResolve } from '@rollup/plugin-node-resolve';

import linaria from '@linaria/rollup';
import { babel } from '@rollup/plugin-babel';

import styles from "@ironkinoko/rollup-plugin-styles";

// import pkg from './package.json' assert { type: "json" };



const inputDir = 'src';


export default {
    input: path.join(inputDir, 'index.ts'),
    treeshake: {
        propertyReadSideEffects: false,
    },
    output: [{
        preserveModules: true,
        dir: 'es',
        format: 'es',
        freeze: false,
        esModule: true,
        sourcemap: true,
        exports: 'named',
        assetFileNames: "[name][extname]",
    }, {
        preserveModules: true,
        dir: 'cjs',
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
            exclude: ['plasma-core/src/collectPackageInfo.ts']
        }),
        nodeResolve({
            extensions: ['.tsx', '.ts'],
        }),
        importCssPlugin(),
        // TODO: how to remove this plugin ??
        styles({
            mode: "extract",
            modules: true,
        }),
        babel({ babelHelpers: 'bundled', extensions: ['.ts', '.tsx'], }),
    ],
};




function importCssPlugin() {
    // const filter = createFilter(options.include || ['**/*.css'], options.exclude)

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

            // console.log(file);
            const root = bundle[file].facadeModuleId
            const modules = this.getModuleInfo(root);

            if(file == ('components/Button/Button.js')) {
                // console.log(bundle[file]);
                // console.log(modules);
            }

            // ADD IMPORT FOR CSS MODULES
            if (file.endsWith('.css.js')) {
                const { code } = bundle[file];
                // TODO: cjs modules => require('./file.css');
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
  
