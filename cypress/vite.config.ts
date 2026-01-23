import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import fs from 'fs-extra';

// import babelrc from '../.babelrc';

const resolveModule = (...fromPaths) => (...pathSegments) => path.resolve(...fromPaths, ...pathSegments);

const rootPath = path.resolve(__dirname, '..');
const packsPath = path.join(rootPath, 'packages');
const resolveInsidePackage = resolveModule('packages', process.env.PACKAGE_NAME, 'node_modules');
//
// const dummyModule = `
// "use strict";
//
// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// `;
//
// ['plasma-web', 'plasma-giga', 'plasma-b2c', 'plasma-ui', 'sdds-cs', 'sdds-insol'].forEach((pack) => {
//     const packIndexPath = path.join(packsPath, pack, 'index.js');
//     if (!fs.ensureFileSync(packIndexPath)) {
//         fs.writeFileSync(packIndexPath, dummyModule);
//     }
// });
//
// const babelOpts = { ...babelrc.env.cjs };

export default defineConfig({
    plugins: [
        react({
            plugins: [
                [
                    '@swc/plugin-styled-components',
                    {
                        displayName: true,
                        ssr: false,
                    },
                ],
            ],
        }),
    ],
    // server: {
    //     port: 3000,
    //     strictPort: false,
    //     fs: {
    //         strict: false,
    //     },
    // },
    // build: {
    //     target: 'esnext',
    //     sourcemap: 'inline',
    //     rollupOptions: {
    //         input: {
    //             main: path.resolve(__dirname, 'support/component.ts'),
    //         },
    //         output: {
    //             entryFileNames: '[name].js',
    //             chunkFileNames: '[name].js',
    //             assetFileNames: '[name].[ext]',
    //             manualChunks: undefined,
    //         },
    //     },
    // },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            'styled-components': resolveInsidePackage('styled-components'),
            react: resolveInsidePackage('react'),
            'react-dom': resolveInsidePackage('react-dom'),
            '@salutejs/plasma-icons': resolveInsidePackage('@salutejs', 'plasma-icons'),
            '@salutejs/plasma-cy-utils': resolveInsidePackage('@salutejs', 'plasma-cy-utils'),
        },
    },
    optimizeDeps: {
        include: [
            'styled-components',
            'react',
            'react-dom',
            // Включите styled-components в оптимизацию зависимостей
        ],
        exclude: ['crypto', 'stream', 'buffer', 'path', 'fs'],
    },
    //
    // define: {
    //     'process.env': {},
    //     // Полифиллы для node.js модулей
    //     global: 'globalThis',
    // },
    //
    // css: {
    //     modules: {
    //         localsConvention: 'camelCase',
    //     },
    //     // Для inline source maps
    //     devSourcemap: true,
    // },
    //
    // assetsInclude: [
    //     '**/*.svg',
    //     '**/*.png',
    //     '**/*.jpg',
    //     '**/*.jpeg',
    //     '**/*.woff',
    //     '**/*.woff2',
    //     '**/*.eot',
    //     '**/*.ttf',
    //     '**/*.otf',
    // ],
});
