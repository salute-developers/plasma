/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        // In a monorepo, nested packages may bundle their own copies of react and
        // styled-components. Force webpack to resolve all imports to the single
        // copy that lives in this app's node_modules so hooks share one dispatcher.
        config.resolve.alias = {
            ...config.resolve.alias,
            react: path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
            'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
        };
        return config;
    },
};

module.exports = nextConfig;
