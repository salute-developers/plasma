import path from 'path';
import fs from 'fs-extra';
import { NormalModuleReplacementPlugin } from 'webpack';

import babelrc from '../.babelrc';
import { generateTestRuntime } from '../scripts/cy-test-runtime';

const resolveModule = (...fromPaths) => (...pathSegments) => path.resolve(...fromPaths, ...pathSegments);

const rootPath = path.resolve(__dirname, '..');
const packsPath = path.join(rootPath, 'packages');
const resolveInsidePackage = resolveModule(packsPath, process.env.PACKAGE_NAME, 'node_modules');

const resolveFromRoot = (moduleName: string) =>
    path.dirname(
        require.resolve(path.join(moduleName, 'package.json'), {
            paths: [rootPath],
        }),
    );

const resolveInsidePackageOrRoot = (...pathSegments: string[]) => {
    const packagePath = resolveInsidePackage(...pathSegments);

    if (fs.existsSync(packagePath)) {
        return packagePath;
    }

    return resolveFromRoot(path.join(...pathSegments));
};

export const getWebpackConfig = () => {
    const babelOpts = { ...babelrc.env.cjs, plugins: ['@emotion/babel-plugin'] };

    const browser = process.env.BROWSER || 'chromium';
    const cache = Boolean(process.env.WEBPACK_CACHE_ENABLED);
    const runtime = generateTestRuntime({ packageName: process.env.PACKAGE_NAME });
    const utilityDir = resolveFromRoot('@salutejs/plasma-cy-utils');

    console.log('BROWSER', browser);
    console.log('WEBPACK_CACHE_ENABLED', cache);

    return {
        cache,
        mode: 'development',
        target: 'web',
        devtool: false,
        plugins: [
            new NormalModuleReplacementPlugin(/^\.\/testRuntime(?:\.js)?$/, (resource) => {
                if (['src', 'lib'].some((directory) => resource.context === path.join(utilityDir, directory))) {
                    resource.request = runtime;
                }
            }),
            {
                apply(compiler) {
                    compiler.options.devtool = false;
                },
            },
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            modules: ['node_modules'],
            alias: {
                'styled-components': resolveInsidePackageOrRoot('styled-components'),
                react: resolveInsidePackageOrRoot('react'),
                'react-dom': resolveInsidePackageOrRoot('react-dom'),
                '@salutejs/plasma-icons': resolveInsidePackageOrRoot('@salutejs', 'plasma-icons'),
                '@salutejs/plasma-cy-utils': resolveFromRoot('@salutejs/plasma-cy-utils'),
                // Переопределение путей для тестов внутри plasma-new-hope
                'src/examples/components': resolveModule(packsPath, process.env.PACKAGE_NAME, 'src', 'components')(),
                'override/_Icon': resolveInsidePackageOrRoot('@salutejs', 'plasma-icons'),
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
