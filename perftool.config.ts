import type { Config } from '@salutejs/perftool';

const config: Config = {
    jobs: 2,
    retries: 30,
    taskConfiguration: {
        render: {
            renderWaitTimeout: 500,
        },
        rerender: {
            renderWaitTimeout: 500,
        },
    },
    metricConfiguration: {
        median: {
            failOnSignificantChanges: false,
        },
    },
    include: ['packages/**/*.perftest.tsx'],
    exclude: ['**/node_modules/**'],
    outputFilePath: 'perftest/result.json',
    displayIntermediateCalculations: false,
    failOnSignificantChanges: true,
    stabilizers: ['staticTask'],
    absoluteError: 1,
    modifyWebpackConfig(config) {
        const babelLoaderOpts = config.module?.rules?.find(
            (rule) => typeof rule === 'object' && rule.loader === 'babel-loader',
        );

        if (typeof babelLoaderOpts === 'object' && typeof babelLoaderOpts?.options === 'object') {
            babelLoaderOpts?.options?.plugins?.push('babel-plugin-styled-components');
            babelLoaderOpts?.options?.plugins?.push(['const-enum', { transform: 'constObject' }]);
        }

        (config.resolve = config.resolve || {}).alias = {
            react: '/packages/plasma-ui/node_modules/react',
            'react-dom': '/packages/plasma-ui/node_modules/react-dom',
            'styled-components': '/packages/plasma-ui/node_modules/styled-components',
        };

        return config;
    },
};

export default config;
