import path from 'path';

import { nodeResolve } from '@rollup/plugin-node-resolve';

import linaria from '@linaria/rollup';
import { babel } from '@rollup/plugin-babel';

import styles from '@ironkinoko/rollup-plugin-styles';

const inputDir = 'src-build';

export default {
    input: path.join(inputDir, 'index.ts'),
    output: [
        {
            preserveModules: true,
            preserveModulesRoot: inputDir,
            dir: 'css/es',
            format: 'es',
            freeze: false,
            esModule: true,
            sourcemap: false,
            exports: 'named',
            assetFileNames: '[name][extname]',
        }, {
            preserveModules: true,
            preserveModulesRoot: inputDir,
            dir: 'css/cjs',
            format: 'cjs',
            freeze: false,
            esModule: true,
            sourcemap: false,
            exports: 'named',
            assetFileNames: '[name][extname]',
        }],
    external: ['react', 'react-dom', 'styled-components', '@linaria/core'],
    plugins: [
        linaria(),
        nodeResolve({
            extensions: ['.tsx', '.ts'],
        }),
        styles({
            mode: 'extract',
            modules: true,
        }),
        babel({ babelHelpers: 'bundled', extensions: ['.ts', '.tsx'] }),
    ],
};
  
