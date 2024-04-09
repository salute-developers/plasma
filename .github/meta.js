const commonScope = ['plasma-icons', 'plasma-sb-utils', 'plasma-tokens', 'plasma-tokens-utils'];

module.exports = {
    'caldera-online': {
        scope: [...commonScope, 'caldera-online-themes', 'plasma-new-hope'],
        themes: 'caldera-online-themes',
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
        required: ['plasma-new-hope'],
        themes: '',
    },
    'plasma-new-hope': {
        scope: [...commonScope, 'plasma-core'],
        required: [],
    },
    'plasma-ui': {
        scope: [...commonScope, 'plasma-core', 'plasma-typo'],
        required: ['plasma-icons'],
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
        required: ['plasma-new-hope'],
        themes: '',
    },
    'sdds-serv': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        required: [],
        themes: 'sdds-themes',
    },
};
