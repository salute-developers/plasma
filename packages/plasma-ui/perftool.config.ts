import type { Config } from '@salutejs/perftool';

const config: Config = {
    jobs: 2,
    retries: 30,
    include: ['src/**/*.perftest.tsx'],
    outputFilePath: 'perftest/result.json',
    displayIntermediateCalculations: false,
    failOnSignificantChanges: false,
    modifyWebpackConfig: function (config) {
        const babelLoaderOpts = config.module.rules.find(
            (rule) => typeof rule === 'object' && rule.loader === 'babel-loader',
        );

        if (typeof babelLoaderOpts == 'object' && typeof babelLoaderOpts?.options === 'object') {
            babelLoaderOpts?.options?.plugins?.push('babel-plugin-styled-components');
        }

        return config;
    },
};

export default config;
