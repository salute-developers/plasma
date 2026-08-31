import path from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import styles from '@ironkinoko/rollup-plugin-styles';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const betaSourceDir = path.resolve(dirname, 'src/components/_beta');
const extractedCssModules = new Map();

export default {
    input: {
        index: path.join(betaSourceDir, 'index.ts'),
    },
    treeshake: {
        propertyReadSideEffects: false,
    },
    output: [
        {
            preserveModules: true,
            dir: 'dist/beta/es',
            format: 'es',
            freeze: false,
            esModule: true,
            sourcemap: false,
            exports: 'named',
        },
        {
            preserveModules: true,
            dir: 'dist/beta/cjs',
            format: 'cjs',
            freeze: false,
            esModule: true,
            sourcemap: false,
            exports: 'named',
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
        nodeResolve({
            extensions: ['.tsx', '.ts'],
        }),
        styles({
            mode: 'extract',
            modules: {
                generateScopedName(localName, file, css) {
                    const relativePath = path.relative(betaSourceDir, file).split(path.sep).join('/');
                    const componentName = relativePath.split('/')[0];
                    const fileName = path.basename(file, '.module.css');
                    const hash = createHash('sha256')
                        .update(`${relativePath}:${localName}:${css}`)
                        .digest('hex')
                        .slice(0, 8);

                    return `${componentName}_${fileName}_${localName}__${hash}`;
                },
            },
            onExtract({ name, css }) {
                const moduleName = name.replace(/\.css$/, '');

                if (moduleName.endsWith('.module.css')) {
                    extractedCssModules.set(moduleName, css);
                }

                return false;
            },
        }),
        emitCssModulesPlugin(),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.ts', '.tsx'],
        }),
    ],
};

function emitCssModulesPlugin() {
    return {
        name: 'emitCssModulesPlugin',
        generateBundle: {
            order: 'post',
            handler(options, bundle) {
                Object.values(bundle).forEach((file) => {
                    if (file.type !== 'chunk' || !file.fileName.endsWith('.module.css.js')) {
                        return;
                    }

                    const moduleName = file.fileName.replace(/\.js$/, '');
                    const css = extractedCssModules.get(moduleName);

                    if (css === undefined) {
                        this.error(`Processed CSS Module was not found for ${file.fileName}`);
                    }

                    const cssFileName = file.fileName.replace(/\.module\.css\.js$/, '.css');
                    const relativeCssPath = `./${path.posix.relative(path.posix.dirname(file.fileName), cssFileName)}`;
                    const importCss =
                        options.format === 'cjs'
                            ? `require('${relativeCssPath}');\n`
                            : `import '${relativeCssPath}';\n`;

                    file.code = importCss + file.code;

                    this.emitFile({
                        type: 'asset',
                        fileName: cssFileName,
                        source: css,
                    });
                });
            },
        },
    };
}
