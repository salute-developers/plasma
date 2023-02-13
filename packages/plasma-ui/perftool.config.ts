import type { Config } from '@salutejs/perftool';

const config: Config = {
    jobs: 2,
    retries: 30,
    metricConfiguration: {
        median: {
            failOnSignificantChanges: false,
        },
    },
    include: ['src/**/*.perftest.tsx'],
    outputFilePath: 'perftest/result.json',
    displayIntermediateCalculations: false,
    failOnSignificantChanges: false,
    stabilizers: ['staticTask'],
    absoluteError: 1,
    modifyWebpackConfig: function (config) {
        const babelLoaderOpts = config.module.rules.find(
            (rule) => typeof rule === 'object' && rule.loader === 'babel-loader',
        );

        if (typeof babelLoaderOpts == 'object' && typeof babelLoaderOpts?.options === 'object') {
            babelLoaderOpts?.options?.plugins?.push('babel-plugin-styled-components');
        }

        config.resolve.alias = {
            react: '/node_modules/react',
            'react-dom': '/node_modules/react-dom',
            'styled-components': '/node_modules/styled-components',
        };

        return config;
    },
};

export default config;
