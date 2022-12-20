import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration as WebpackConfig } from 'webpack';

import { debug } from '../utils/logger';

import { Config } from './common';

const defaultConfig: WebpackConfig = {
    mode: 'production',
    externals: ['fsevents'],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
        modules: ['node_modules', 'node_modules/@salutejs/perftool/node_modules'],
        fallback: {
            fs: false,
            child_process: false,
            readline: false,
            module: false,
            path: false,
            os: false,
            stream: false,
            vm: false,
            tty: false,
            crypto: false,
            http: false,
            https: false,
            console: false,
            constants: false,
            webpack: false,
            inspector: false,
        },
    },
    output: {
        filename: 'bundle.[chunkhash].js',
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: { chrome: '90', esmodules: true } }],
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                    plugins: [],
                },
            },
            {
                loader: 'url-loader',
                test: /\.(jpg|jpeg|ico|webp|jp2|avif|png|gif|woff|eot|ttf|svg)$/,
                options: {
                    limit: 100000,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.PERFTOOL_CLIENT_RUNTIME': JSON.stringify(true),
        }),
    ],
};

export function getWebpackConfig(entry: string, output: string, config: Config): WebpackConfig {
    debug('creating webpack config');

    const finalConfig = config.modifyWebpackConfig(defaultConfig);

    finalConfig.entry = entry;
    finalConfig.output!.path = output;

    debug('final webpack config', JSON.stringify(finalConfig, null, 2));

    return finalConfig;
}
