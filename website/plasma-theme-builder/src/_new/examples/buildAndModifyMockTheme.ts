import { buildMockTheme } from '../themes';
import { AndroidGradient, GradientToken, IOSGradient, WebGradient } from '../tokens';

const fixture = {
    name: 'mock',
    version: '0.1.0',
    tokens: {
        color: [
            {
                type: 'color',
                name: 'color.name.new.test',
                tags: ['color', 'name'],
                displayName: 'colorName',
                description: 'Description',
                enabled: true,
                platforms: {
                    web: {
                        value: '#aboba1',
                    },
                    ios: {
                        value: '#aboba2',
                    },
                    android: {
                        value: '#hehehaha',
                    },
                },
            },
        ],
        gradient: [
            {
                type: 'gradient',
                name: 'gradient.name',
                tags: ['gradient', 'name'],
                displayName: 'gradientName',
                description: 'Description',
                enabled: true,
                platforms: {
                    web: {
                        value: [],
                    },
                    ios: {
                        value: [
                            {
                                kind: 'linear',
                                angle: 90,
                                colors: [],
                                locations: [],
                            },
                        ],
                    },
                    android: {
                        value: [
                            {
                                kind: 'linear',
                                angle: 90,
                                colors: [],
                                locations: [],
                            },
                        ],
                    },
                },
            },
            {
                type: 'gradient',
                name: 'new.gradient.name',
                tags: ['new', 'gradient', 'name'],
                displayName: 'newGradientName',
                description: 'New Description',
                enabled: false,
                platforms: {
                    web: {
                        value: [],
                    },
                    ios: {
                        value: [
                            {
                                kind: 'linear',
                                angle: 90,
                                colors: [],
                                locations: [],
                            },
                        ],
                    },
                    android: {
                        value: [
                            {
                                kind: 'linear',
                                angle: 90,
                                colors: [],
                                locations: [],
                            },
                        ],
                    },
                },
            },
        ],
        shadow: [
            {
                type: 'shadow',
                name: 'shadow.name',
                tags: ['shadow', 'name'],
                displayName: 'shadowName',
                description: 'Description',
                enabled: true,
                platforms: {
                    web: {
                        value: [],
                    },
                    ios: {
                        value: {
                            color: '#FFF',
                            offset: {
                                width: 0,
                                height: 0,
                            },
                            opacity: 0,
                            radius: 9,
                        },
                    },
                    android: {
                        value: {
                            color: 'red',
                            elevation: 0,
                        },
                    },
                },
            },
        ],
        shape: [
            {
                type: 'shape',
                name: 'shape.name',
                tags: ['shape', 'name'],
                displayName: 'shapeName',
                description: 'Description',
                enabled: true,
                platforms: {
                    web: {
                        value: '777',
                    },
                    ios: {
                        value: {
                            cornerRadius: -999,
                            kind: 'round',
                        },
                    },
                    android: {
                        value: {
                            cornerRadius: 999,
                            kind: 'round',
                        },
                    },
                },
            },
        ],
        typography: [],
        fontFamily: [
            {
                type: 'fontFamily',
                name: 'fontFamily.name',
                tags: ['fontFamily', 'name'],
                displayName: 'fontFamilyName',
                description: 'Description',
                enabled: true,
                platforms: {
                    web: {
                        value: {
                            name: '',
                            fonts: [
                                {
                                    src: [],
                                    fontWeight: '100',
                                    fontStyle: 'normal',
                                },
                            ],
                        },
                    },
                    ios: {
                        value: {
                            name: '',
                            fonts: [
                                {
                                    link: '',
                                    weight: 'bold',
                                    style: 'normal',
                                },
                            ],
                        },
                    },
                    android: {
                        value: {
                            name: '',
                            fonts: [
                                {
                                    link: '',
                                    fontWeight: 100,
                                    fontStyle: 'normal',
                                },
                            ],
                        },
                    },
                },
            },
        ],
    },
};

export const buildAndModifyMockTheme = async () => {
    const mockTheme = buildMockTheme();

    const beforeModify = JSON.parse(JSON.stringify(mockTheme));
    console.log('BEFORE mockTheme', beforeModify);

    mockTheme.setTokenValue('color.name', 'color', 'android', '#aboba');
    mockTheme.setTokenValue('color.name', 'color', 'web', '#aboba1');
    mockTheme.setTokenValue('color.name', 'color', 'ios', '#aboba2');

    mockTheme.addToken(
        'gradient',
        new GradientToken(
            {
                displayName: 'newGradientName',
                enabled: false,
                name: 'new.gradient.name',
                tags: ['new', 'gradient', 'name'],
                description: 'New Description',
            },
            {
                web: new WebGradient([]),
                ios: new IOSGradient([
                    {
                        kind: 'linear',
                        angle: 90,
                        colors: [],
                        locations: [],
                    },
                ]),
                android: new AndroidGradient([
                    {
                        kind: 'linear',
                        angle: 90,
                        colors: [],
                        locations: [],
                    },
                ]),
            },
        ),
    );

    const token = mockTheme.getToken('color.name', 'color');
    token?.setName('color.name.new.test');
    token?.setValue('android', '#hehehaha');

    mockTheme.setTokenValue('shape.name', 'shape', {
        web: '777',
        android: {
            cornerRadius: 999,
            kind: 'round',
        },
        ios: {
            cornerRadius: -999,
            kind: 'round',
        },
    });

    mockTheme.setTokenValue('shadow.name', 'shadow', 'android', { color: 'red', elevation: 0 });

    const value = mockTheme.getTokenValue('shape.name', 'shape', 'ios');
    const values = mockTheme.getTokenValue('shape.name', 'shape');
    console.log('VALUE', value);
    console.log('VALUES', values);

    mockTheme.removeToken('typography.name', 'typography');

    const afterModify = JSON.parse(JSON.stringify(mockTheme));
    console.log('AFTER mockTheme', afterModify);

    if (JSON.stringify(afterModify) === JSON.stringify(fixture)) {
        console.log('they are same');
    } else {
        console.error('they are different');
    }
};
