import type { Config } from '@salutejs/perftool';

const config: Config = {
    jobs: 1,
    taskConfiguration: {
        render: {
            renderWaitTimeout: 500,
        },
        rerender: {
            renderWaitTimeout: 500,
        },
    },
    include: ['packages/**/*.perftest.tsx'],
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
