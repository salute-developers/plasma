const getPackageSourceGlobs = (packages) =>
    packages.map((packageName) => `packages/${packageName}/src/**/*.{js,ts,tsx}`);

const getPlasmaNewHopeRootRestriction = (styleEngine) => ({
    name: '@salutejs/plasma-new-hope',
    message: `Value imports must use the explicit /${styleEngine} entrypoint`,
    allowTypeImports: true,
});

const styledComponentsPackages = [
    'plasma-web',
    'plasma-b2c',
    'plasma-giga',
    'plasma-homeds',
    'plasma-asdk',
    'sdds-serv',
    'sdds-dfa',
    'sdds-finai',
    'sdds-insol',
    'sdds-insol-next',
    'sdds-netology',
    'sdds-os',
    'sdds-platform-ai',
    'sdds-sbcom',
    'sdds-scan',
    'sdds-bizcom',
];

module.exports = {
    extends: ['@salutejs/eslint-config'],
    rules: {
        camelcase: 'warn',
        'no-irregular-whitespace': 'warn',
        'no-restricted-imports': 'warn', // NOTE: https://eslint.org/docs/latest/rules/no-restricted-imports
        radix: 'warn',

        'no-use-before-define': 'off',
        'padding-line-between-statements': 'off',

        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ], // NOTE: https://eslint.org/docs/latest/rules/space-before-function-paren

        'react/jsx-wrap-multilines': 'off', // NOTE: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-closing-tag-location': 'off', // NOTE: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        'react/jsx-no-leaked-render': 'off',
        'react/display-name': 'off', // NOTE: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',

        'react-hooks/exhaustive-deps': 'off', // TODO: вернуть на warn, а затем  https://github.com/salute-developers/plasma/issues/160

        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/ban-types': [
            'warn',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                    object: false,
                },
            },
        ], // NOTE: If you want a type meaning "empty object", you probably want `Record<string, never>` instead

        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-void': ['error', { allowAsStatement: true }],
        'wrap-iife': 'off',
        'func-call-spacing': 'off',
        'no-spaced-func': 'off',
    },
    overrides: [
        {
            files: getPackageSourceGlobs(['sdds-cs']),
            rules: {
                '@typescript-eslint/no-restricted-imports': [
                    'error',
                    {
                        paths: [getPlasmaNewHopeRootRestriction('emotion')],
                        patterns: [
                            {
                                group: [
                                    '@salutejs/plasma-new-hope/styled-components',
                                    '@salutejs/plasma-new-hope/styled-components/*',
                                    '@salutejs/plasma-new-hope/css',
                                    '@salutejs/plasma-new-hope/css/*',
                                    '@salutejs/plasma-new-hope/linaria',
                                    '@salutejs/plasma-new-hope/linaria/*',
                                    'styled-components',
                                    'styled-components/*',
                                    '@linaria/*',
                                ],
                                message: 'sdds-cs uses Emotion; import from plasma-new-hope/emotion and @emotion/*',
                            },
                        ],
                    },
                ],
            },
        },
        {
            files: getPackageSourceGlobs(styledComponentsPackages),
            rules: {
                '@typescript-eslint/no-restricted-imports': [
                    'error',
                    {
                        paths: [getPlasmaNewHopeRootRestriction('styled-components')],
                        patterns: [
                            {
                                group: [
                                    '@salutejs/plasma-new-hope/emotion',
                                    '@salutejs/plasma-new-hope/emotion/*',
                                    '@salutejs/plasma-new-hope/css',
                                    '@salutejs/plasma-new-hope/css/*',
                                    '@salutejs/plasma-new-hope/linaria',
                                    '@salutejs/plasma-new-hope/linaria/*',
                                    '@emotion/*',
                                    '@linaria/*',
                                ],
                                message: 'Source files in this package use styled-components',
                            },
                            {
                                group: ['styled-components/*'],
                                message: 'Build transforms only the styled-components package root',
                            },
                        ],
                    },
                ],
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
