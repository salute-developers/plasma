/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const packagesInfo = require('./getPackageInfo');

const { PR_NAME } = process.env;

const basePath = PR_NAME ? `/pr/${PR_NAME}` : '';

module.exports = {
    basePath,
    assetPrefix: basePath,
    reactStrictMode: true,
    trailingSlash: true,
    env: {
        BASE_PATH: basePath,
        PACKAGES_INFO: packagesInfo,
    },
    output: 'export',
    webpack: (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    react: path.resolve(__dirname, 'node_modules', 'react'),
                    'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
                    'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
                },
            },
        };
    },
};
