import path from 'path';
import fs from 'fs-extra';

import babelrc from '../.babelrc';

const resolveModule = (...fromPaths) => (...pathSegments) => path.resolve(...fromPaths, ...pathSegments);

const rootPath = path.resolve(__dirname, '..');
const packsPath = path.join(rootPath, 'packages');
const resolveInsidePackage = resolveModule('packages', process.env.PACKAGE_NAME, 'node_modules');

const dummyModule = `
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
`;

['plasma-web', 'plasma-giga', 'plasma-b2c', 'plasma-ui', 'sdds-cs', 'sdds-insol'].forEach((pack) => {
    const packIndexPath = path.join(packsPath, pack, 'index.js');
    if (!fs.ensureFileSync(packIndexPath)) {
        fs.writeFileSync(packIndexPath, dummyModule);
    }
});

export const getWebpackConfig = () => {
    const babelOpts = { ...babelrc.env.cjs };

    const cache = Boolean(process.env.WEBPACK_CACHE_ENABLED);

    console.log('WEBPACK_CACHE_ENABLED', cache);

    return {
        cache,
        mode: 'development',
        target: 'web',
        devtool: 'eval-source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            modules: ['node_modules'],
            alias: {
                'styled-components': resolveInsidePackage('styled-components'),
                react: resolveInsidePackage('react'),
                'react-dom': resolveInsidePackage('react-dom'),
                '@salutejs/plasma-icons': resolveInsidePackage('@salutejs', 'plasma-icons'),
                '@salutejs/plasma-cy-utils': resolveInsidePackage('@salutejs', 'plasma-cy-utils'),
                // Переопределение путей для тестов внутри plasma-new-hope
                'src/examples/components': resolveModule(packsPath, process.env.PACKAGE_NAME, 'src', 'components')(),
                'override/_Icon': resolveInsidePackage('@salutejs', 'plasma-icons'),
            },
            fallback: {
                crypto: false,
                stream: false,
                buffer: false,
                path: false,
                fs: false,
            },
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: babelOpts,
                    },
                },
                {
                    test: /\.svg$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(png|jpe?g)$/i,
                    type: 'asset',
                    parser: {
                        asset: {
                            dataUrlCondition: {
                                maxSize: 8 * 1024,
                            },
                        },
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
    };
};
