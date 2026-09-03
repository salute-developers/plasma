// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
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
        PACKAGES_INFO: JSON.stringify(packagesInfo),
    },
    output: 'export',
    transpilePackages: ['@salutejs/sdds-icons'],
    experimental: {
        esmExternals: 'loose',
    },
    compiler: {
        styledComponents: true,
    },
    distDir: 'build',
    webpack: (config, { isServer }) => {
        config.resolve.conditionNames = isServer ? ['import', 'node', 'default'] : ['import', 'browser', 'default'];

        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    react: path.dirname(require.resolve('react/package.json')),
                    'react-dom': path.dirname(require.resolve('react-dom/package.json')),
                    'styled-components': path.dirname(require.resolve('styled-components/package.json')),
                },
            },
        };
    },
};
