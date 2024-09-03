const commonScope = ['plasma-icons', 'plasma-sb-utils', 'plasma-tokens', 'plasma-tokens-utils'];

module.exports = {
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
        required: ['plasma-new-hope', 'plasma-core'],
        themes: '',
    },
    'plasma-new-hope': {
        scope: [...commonScope, 'plasma-core'],
        required: ['plasma-core'],
    },
    'plasma-ui': {
        scope: [...commonScope, 'plasma-core', 'plasma-typo'],
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
        required: ['plasma-new-hope', 'plasma-core'],
        themes: '',
    },
    'sdds-serv': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-core'],
        themes: 'sdds-themes',
    },
    'sdds-dfa': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-core'],
        themes: 'sdds-themes',
    },
    'sdds-cs': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-core'],
        themes: 'sdds-themes',
    },
    'sdds-finportal': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: ['plasma-core'],
        themes: 'sdds-themes',
    },
};
