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
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
