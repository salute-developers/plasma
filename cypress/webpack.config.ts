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

    return {
        mode: 'development',
        entry: 'src/index.ts',
        devtool: 'inline-source-map',
        devServer: { contentBase: './public' },
        resolve: {
            extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.jsx', '.json', '.map'],
            modules: ['node_modules'],
            alias: {
                'styled-components': resolveInsidePackage('styled-components'),
                react: resolveInsidePackage('react'),
                'react-dom': resolveInsidePackage('react-dom'),
                '@salutejs/plasma-icons': resolveInsidePackage('@salutejs', 'plasma-icons'),
            },
        },
        optimization: {
            minimize: false,
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.tsx$|\.ts$/,
                    exclude: [/node_modules/],
                    use: {
                        loader: 'babel-loader',
                        options: babelOpts,
                    },
                },
                {
                    test: /\.svg$/,
                    use: 'file-loader',
                },
                {
                    test: /\.(png|jpe?g)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                mimetype: 'image/png',
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
    };
};
