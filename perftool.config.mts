import type { Config } from '@salutejs/perftool';

const config: Config = {
    jobs: 1,
    retries: 2,
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
    cache: {
        taskState: true,
        testSubjectsDeps: true,
    },
    // Remove cache files older than 30 days
    cacheExpirationTime: 1000 * 60 * 60 * 24 * 30,
    modifyWebpackConfig(config) {
        const babelLoaderOpts = config.module?.rules?.find(
            (rule) => typeof rule === 'object' && rule.loader?.includes('babel-loader'),
        );

        if (typeof babelLoaderOpts === 'object' && typeof babelLoaderOpts?.options === 'object') {
            babelLoaderOpts?.options?.plugins?.push('babel-plugin-styled-components');
            babelLoaderOpts?.options?.plugins?.push(['const-enum', { transform: 'constObject' }]);
        }

        config.module?.rules?.push({
            loader: 'url-loader',
            test: /\.(jpg|jpeg|ico|webp|jp2|avif|png|gif|woff|eot|ttf|svg)$/,
            options: {
                limit: 100000,
            },
        });

        (config.resolve = config.resolve || {}).alias = {
            react: '/packages/plasma-ui/node_modules/react',
            'react-dom': '/packages/plasma-ui/node_modules/react-dom',
            'styled-components': '/packages/plasma-ui/node_modules/styled-components',
        };

        return config;
    },
};

export default config;
