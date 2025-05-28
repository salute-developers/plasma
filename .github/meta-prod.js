const commonScope = [
    'plasma-icons',
    'plasma-sb-utils',
    'plasma-tokens',
    'plasma-tokens-utils',
    'core-themes',
    'plasma-typo',
    'plasma-new-hope',
    'plasma-colors',
];

module.exports = {
    'plasma-giga': {
        scope: [...commonScope, 'plasma-themes', 'plasma-core', 'plasma-docs-ui', 'plasma-giga-docs'],
    },
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
        scope: [...commonScope, 'plasma-themes', 'plasma-core'],
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
            'plasma-colors',
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
        scope: [...commonScope, 'sdds-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-finportal-docs'],
    },
    'sdds-insol': {
        scope: [...commonScope, 'sdds-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-insol-docs'],
    },
    'sdds-crm': {
        scope: [...commonScope, 'sdds-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-crm-docs'],
    },
    'sdds-netology': {
        scope: [...commonScope, 'plasma-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-netology-docs'],
    },
    'sdds-scan': {
        scope: [...commonScope, 'sdds-themes', 'plasma-core', 'plasma-docs-ui', 'sdds-scan-docs'],
    },
};
