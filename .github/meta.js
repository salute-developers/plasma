const commonScope = ['plasma-icons', 'plasma-sb-utils'];

module.exports = {
    caldera: {
        scope: [...commonScope, 'caldera-online-themes', 'plasma-new-hope'],
        'required-deps': [],
        themes: 'caldera-online-themes',
    },
    'caldera-online': {
        scope: ['caldera-online-themes', 'plasma-new-hope'],
        themes: 'caldera-online-themes',
    },
    'plasma-asdk': {
        scope: [...commonScope, 'plasma-tokens', 'plasma-tokens-b2b', 'plasma-typo', 'plasma-themes'],
        'required-deps': ['plasma-core'],
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
        'required-deps': ['plasma-new-hope'],
        themes: '',
    },
    'plasma-new-hope': {
        scope: [...commonScope, 'plasma-core'],
        'required-deps': [],
    },
    'plasma-ui': {
        scope: [...commonScope, 'plasma-core', 'plasma-typo'],
        'required-deps': ['plasma-icons'],
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
        'required-deps': ['plasma-new-hope'],
        themes: '',
    },
    'sdds-serv': {
        scope: [...commonScope, 'sdds-themes', 'plasma-new-hope'],
        'required-deps': [],
        themes: 'sdds-themes',
    },
};
