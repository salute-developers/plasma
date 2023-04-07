module.exports = {
    env: {
        cjs: {
            plugins: [
                [
                    '../../scripts/babel-plugin-import-replacer',
                    {
                        alias: {
                            '@pkg': './package.json',
                        },
                    },
                ],
                '../../scripts/babel-plugin-collect-package-info',
            ],
        },
        esm: {
            plugins: [
                [
                    '../../scripts/babel-plugin-import-replacer',
                    {
                        alias: {
                            '@pkg': '../package.json',
                        },
                    },
                ],
                '../../scripts/babel-plugin-collect-package-info',
            ],
        },
    },
};
