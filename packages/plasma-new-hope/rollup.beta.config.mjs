import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import styles from '@ironkinoko/rollup-plugin-styles';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const sourceDir = path.resolve(dirname, 'src');

export default {
    input: {
        index: path.join(sourceDir, 'components/_beta/index.ts'),
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
            assetFileNames: '[name][extname]',
        },
        {
            preserveModules: true,
            dir: 'dist/beta/cjs',
            format: 'cjs',
            freeze: false,
            esModule: true,
            sourcemap: false,
            exports: 'named',
            assetFileNames: '[name][extname]',
            interop: 'auto',
        },
    ],
    external: (id) => {
        if (id.startsWith('regenerator-runtime') || id === 'tslib') {
            return false;
        }
        if (id === 'src' || id.startsWith('src/')) {
            return false;
        }
        return !id.startsWith('.') && !path.isAbsolute(id);
    },
    plugins: [
        sourceAliasPlugin(),
        nodeResolve({
            extensions: ['.tsx', '.ts'],
        }),
        styles({
            mode: 'extract',
            modules: true,
        }),
        importCssModulesPlugin(),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.ts', '.tsx'],
        }),
    ],
};

function sourceAliasPlugin() {
    return {
        name: 'sourceAliasPlugin',
        resolveId(source) {
            if (source === 'src') {
                return resolveSourceAlias(sourceDir);
            }

            if (source.startsWith('src/')) {
                return resolveSourceAlias(path.resolve(dirname, source));
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

function importCssModulesPlugin() {
    return {
        name: 'importCssModulesPlugin',
        generateBundle: {
            order: 'post',
            handler(options, bundle) {
                if (!bundle['index.css'] || !bundle['index.js']) {
                    return;
                }

                const statement = options.format === 'cjs' ? `require('./index.css');\n` : `import './index.css';\n`;

                bundle['index.js'].code = statement + bundle['index.js'].code;
            },
        },
    };
}
