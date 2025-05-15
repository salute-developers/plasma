const commonScope = [
    'plasma-icons',
    'plasma-sb-utils',
    'plasma-tokens',
    'plasma-tokens-utils',
    'plasma-themes',
    'core-themes',
    'plasma-colors',
];

module.exports = {
    'plasma-giga': {
        scope: [...commonScope, 'plasma-themes', 'plasma-new-hope'],
        required: ['plasma-sb-utils', 'plasma-new-hope', 'plasma-core', 'core-themes'],
        themes: 'plasma-themes',
    },
    'plasma-asdk': {
        scope: [...commonScope, 'plasma-tokens-b2b', 'plasma-typo', 'plasma-themes', 'plasma-new-hope'],
        required: ['plasma-core'],
        themes: 'plasma-themes',
    },
    'plasma-b2c': {
        scope: [
            ...commonScope,
            'plasma-core',
            'plasma-hope',
            'plasma-new-hope',
            'plasma-tokens-b2c',
            'plasma-tokens-web',
            'plasma-typo',
        ],
        required: ['plasma-sb-utils', 'plasma-new-hope', 'plasma-core'],
        themes: 'plasma-themes',
    },
    'plasma-new-hope': {
        scope: [...commonScope, 'plasma-themes', 'plasma-core'],
        required: ['plasma-sb-utils', 'plasma-core', 'core-themes', 'plasma-themes'],
    },
    'plasma-ui': {
        scope: [
            'plasma-icons',
            'plasma-sb-utils',
            'plasma-tokens',
            'plasma-tokens-utils',
            'plasma-core',
            'plasma-typo',
            'plasma-colors',
        ],
        required: ['plasma-icons', 'plasma-core'],
        themes: '',
    },
    'plasma-web': {
        scope: [
            ...commonScope,
            'plasma-core',
            'plasma-hope',
            'plasma-new-hope',
            'plasma-tokens-b2c',
            'plasma-tokens-b2b',
            'plasma-tokens-web',
            'plasma-typo',
        ],
        required: ['plasma-sb-utils', 'plasma-new-hope', 'plasma-core'],
        themes: 'plasma-themes',
    },
    'sdds-serv': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-sb-utils', 'plasma-new-hope', 'plasma-core', 'core-themes'],
        themes: 'sdds-themes',
    },
    'sdds-dfa': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-sb-utils', 'plasma-core', 'plasma-new-hope', 'core-themes'],
        themes: 'sdds-themes',
    },
    'sdds-cs': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-sb-utils', 'plasma-core', 'plasma-new-hope', 'core-themes'],
        themes: 'sdds-themes',
    },
    'sdds-finportal': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-sb-utils', 'plasma-core', 'plasma-new-hope', 'core-themes'],
        themes: 'sdds-themes',
    },
    'sdds-insol': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-sb-utils', 'plasma-new-hope', 'plasma-core', 'sdds-themes'],
        themes: 'sdds-themes',
    },
    'sdds-crm': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-sb-utils', 'plasma-new-hope', 'plasma-core', 'core-themes'],
        themes: 'sdds-themes',
    },
};
