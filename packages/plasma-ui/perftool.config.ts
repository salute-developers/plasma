import type { Config } from '@salutejs/perftool';

const config: Config = {
    jobs: 3,
    retries: 10,
    include: ['src/**/*.perftest.tsx'],
    outputFilePath: 'perftest/plasma-ui/result.json',
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
