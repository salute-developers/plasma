const commonScope = [
    'plasma-icons',
    'plasma-sb-utils',
    'plasma-tokens',
    'plasma-tokens-utils',
    'core-themes',
    'plasma-typo',
    'plasma-new-hope',
];

module.exports = {
    'plasma-asdk': {
        scope: [...commonScope, 'plasma-tokens-b2b', 'plasma-themes', 'plasma-core'],
    },
    'plasma-b2c': {
        scope: [
            ...commonScope,
            'plasma-core',
            'plasma-hope',
            'plasma-tokens-b2c',
            'plasma-tokens-web',
            'plasma-themes',
            'plasma-docs-ui',
            'plasma-b2c-docs',
        ],
    },
    'plasma-new-hope': {
        scope: [...commonScope, 'plasma-themes', 'plasma-core', 'plasma-core'],
    },
    'plasma-ui': {
        scope: [
            'plasma-icons',
            'plasma-sb-utils',
            'plasma-tokens',
            'plasma-tokens-utils',
            'plasma-core',
            'plasma-typo',
            'plasma-docs-ui',
            'plasma-ui-docs',
        ],
    },
    'plasma-web': {
        scope: [
            ...commonScope,
            'plasma-core',
            'plasma-hope',
            'plasma-tokens-b2c',
            'plasma-tokens-b2b',
            'plasma-tokens-web',
            'plasma-themes',
            'plasma-docs-ui',
            'plasma-web-docs',
        ],
    },
    'sdds-serv': {
        scope: [...commonScope, 'sdds-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-serv-docs'],
    },
    'sdds-dfa': {
        scope: [...commonScope, 'sdds-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-dfa-docs'],
    },
    'sdds-cs': {
        scope: [...commonScope, 'sdds-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-cs-docs'],
    },
    'sdds-finportal': {
        scope: [...commonScope, 'sdds-themes', 'plasma-core'],
    },
    'sdds-insol': {
        scope: [...commonScope, 'sdds-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-insol-docs'],
    },
};
