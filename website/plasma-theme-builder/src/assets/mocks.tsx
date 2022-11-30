import React from 'react';

export const accentColors = [
    {
        value: 'red',
        label: 'red',
        contentLeft: <div style={{ width: '30px', height: '30px', background: 'red', borderRadius: '8px' }} />,
    },
    {
        value: 'green',
        label: 'green',
        contentLeft: <div style={{ width: '30px', height: '30px', background: 'green', borderRadius: '8px' }} />,
    },
    {
        value: 'blue',
        label: 'blue',
        contentLeft: <div style={{ width: '30px', height: '30px', background: 'blue', borderRadius: '8px' }} />,
    },
];

export const saturations = [
    {
        value: '100',
        label: '100',
    },
    {
        value: '150',
        label: '150',
    },
    {
        value: '200',
        label: '200',
    },
    {
        value: '250',
        label: '250',
    },
];

export const shade = [
    {
        value: 'gray',
        label: 'gray',
    },
    {
        value: 'coolGray',
        label: 'coolGray',
    },
];

export const theme = {
    config: {
        name: 'TestTheme',
        accentColor: {
            light: '#21A038',
            dark: '#2EE850',
        },
        grayscale: {
            light: 'coolGray',
            dark: 'coolGray',
        },
        opacity: {
            textIcons: true,
            surfaces: false,
        },
    },
    dark: {
        textIcons: {
            default: {
                textPrimary: {
                    value: '#F2F5F7',
                    comment: 'Основной цвет текста',
                    enabled: true,
                },
                textSecondary: {
                    value: '#8C959C',
                    comment: 'Вторичный цвет текста',
                    enabled: true,
                },
                textTertiary: {
                    value: '#BEC9D1',
                    comment: 'Третичный цвет текста',
                    enabled: true,
                },
                textParagraph: {
                    value: '#24282B',
                    comment: 'Сплошной наборный текст',
                    enabled: true,
                },
                textAccent: {
                    value: '#E0A11B',
                    comment: 'Акцентный цвет',
                    enabled: true,
                },
            },
            onDark: {
                textPrimary: {
                    value: 'rgba(242, 245, 247, 0.96)',
                    comment: 'Основной цвет текста на темном фоне',
                    enabled: true,
                },
                textSecondary: {
                    value: '#8C959C',
                    comment: 'Вторичный цвет текста',
                    enabled: true,
                },
                textTertiary: {
                    value: '#BEC9D1',
                    comment: 'Третичный цвет текста',
                    enabled: true,
                },
                textParagraph: {
                    value: '#24282B',
                    comment: 'Сплошной наборный текст',
                    enabled: true,
                },
                textAccent: {
                    value: '#E0A11B',
                    comment: 'Акцентный цвет',
                    enabled: true,
                },
            },
            onLight: {
                textPrimary: {
                    value: '#24282B',
                    comment: 'Основной цвет текста на светлом фоне',
                    enabled: true,
                },
                textSecondary: {
                    value: '#8C959C',
                    comment: 'Вторичный цвет текста',
                    enabled: true,
                },
                textTertiary: {
                    value: '#BEC9D1',
                    comment: 'Третичный цвет текста',
                    enabled: true,
                },
                textParagraph: {
                    value: '#24282B',
                    comment: 'Сплошной наборный текст',
                    enabled: true,
                },
                textAccent: {
                    value: '#E0A11B',
                    comment: 'Акцентный цвет',
                    enabled: true,
                },
            },
            inverse: {
                textPrimary: {
                    value: '#24282B',
                    comment: 'Инвертированный основной цвет текста',
                    enabled: false,
                },
            },
        },
        controlsSurfaces: {
            default: {
                surfaceSolidSecondary: {
                    // value: '#24282B',
                    value: 'rgba(242, 245, 247, 0.96)',
                    comment: 'Вторичный непрозрачный фон поверхности/контрола',
                    enabled: true,
                },
                surfaceAccentGradient: {
                    value: {
                        origin: 'linear-gradient(122.62deg, #4817C1 0%, #C505D6 100%)',
                        linearGradient: {
                            colors: ['#4817C1', '#C505D6'],
                            angle: 123,
                        },
                    },
                    comment: 'Акцентный фон поверхности/контрола с градиентом',
                    enabled: true,
                },
                surfaceNegative: {
                    value: '#FF2E43',
                    comment: 'Цвет фона поверхности/контрола ошибка',
                    enabled: true,
                },
            },
            onDark: {
                surfaceSolidSecondary: {
                    value: '#24282B',
                    comment: 'Вторичный непрозрачный фон поверхности/контрола',
                    enabled: true,
                },
                surfaceAccentGradient: {
                    value: {
                        origin: 'linear-gradient(122.62deg, #4817C1 0%, #C505D6 100%)',
                        linearGradient: {
                            colors: ['#4817C1', '#C505D6'],
                            angle: 123,
                        },
                    },
                    comment: 'Акцентный фон поверхности/контрола с градиентом',
                    enabled: true,
                },
                surfaceNegative: {
                    value: '#FF2E43',
                    comment: 'Цвет фона поверхности/контрола ошибка',
                    enabled: true,
                },
            },
            onLight: {
                surfaceSolidSecondary: {
                    value: '#24282B',
                    comment: 'Вторичный непрозрачный фон поверхности/контрола',
                    enabled: false,
                },
                surfaceAccentGradient: {
                    value: {
                        origin: 'linear-gradient(122.62deg, #4817C1 0%, #C505D6 100%)',
                        linearGradient: {
                            colors: ['#4817C1', '#C505D6'],
                            angle: 123,
                        },
                    },
                    comment: 'Акцентный фон поверхности/контрола с градиентом',
                    enabled: false,
                },
                surfaceNegative: {
                    value: '#FF2E43',
                    comment: 'Цвет фона поверхности/контрола ошибка',
                    enabled: true,
                },
                // enabled: false,
            },
        },
        customSection: {
            default: {
                customSectionPrimary: {
                    value: '#F2F5F7',
                    comment: 'Кастомный цвет текста',
                    enabled: true,
                },
            },
            // enabled: false,
        },
    },
    light: {
        textIcons: {
            default: {
                textPrimary: {
                    value: '#F2F5F7',
                    comment: 'Основной цвет текста',
                    enabled: true,
                },
                textSecondary: {
                    value: '#8C959C',
                    comment: 'Вторичный цвет текста',
                    enabled: true,
                },
                textTertiary: {
                    value: '#BEC9D1',
                    comment: 'Третичный цвет текста',
                    enabled: true,
                },
                textParagraph: {
                    value: '#24282B',
                    comment: 'Сплошной наборный текст',
                    enabled: true,
                },
                textAccent: {
                    value: '#148F2B',
                    comment: 'Акцентный цвет',
                    enabled: true,
                },
            },
            onDark: {
                textPrimary: {
                    value: 'rgba(242, 245, 247, 0.96)',
                    comment: 'Основной цвет текста на темном фоне',
                    enabled: true,
                },
                textSecondary: {
                    value: '#8C959C',
                    comment: 'Вторичный цвет текста',
                    enabled: true,
                },
                textTertiary: {
                    value: '#BEC9D1',
                    comment: 'Третичный цвет текста',
                    enabled: true,
                },
                textParagraph: {
                    value: '#24282B',
                    comment: 'Сплошной наборный текст',
                    enabled: true,
                },
                textAccent: {
                    value: '#148F2B',
                    comment: 'Акцентный цвет',
                    enabled: true,
                },
            },
            onLight: {
                textPrimary: {
                    value: '#24282B',
                    comment: 'Основной цвет текста на светлом фоне',
                    enabled: true,
                },
                textSecondary: {
                    value: '#8C959C',
                    comment: 'Вторичный цвет текста',
                    enabled: true,
                },
                textTertiary: {
                    value: '#BEC9D1',
                    comment: 'Третичный цвет текста',
                    enabled: true,
                },
                textParagraph: {
                    value: '#24282B',
                    comment: 'Сплошной наборный текст',
                    enabled: true,
                },
                textAccent: {
                    value: '#148F2B',
                    comment: 'Акцентный цвет',
                    enabled: true,
                },
            },
            inverse: {
                textPrimary: {
                    value: '#24282B',
                    comment: 'Инвертированный основной цвет текста',
                    enabled: false,
                },
            },
        },
        controlsSurfaces: {
            default: {
                surfaceSolidSecondary: {
                    value: '#24282B',
                    comment: 'Вторичный непрозрачный фон поверхности/контрола',
                    enabled: true,
                },
                surfaceAccentGradient: {
                    value: {
                        origin: 'linear-gradient(122.62deg, #4817C1 0%, #C505D6 100%)',
                        linearGradient: {
                            colors: ['#4817C1', '#C505D6'],
                            angle: 123,
                        },
                    },
                    comment: 'Акцентный фон поверхности/контрола с градиентом',
                    enabled: true,
                },
                surfaceNegative: {
                    value: '#FF2E43',
                    comment: 'Цвет фона поверхности/контрола ошибка',
                    enabled: true,
                },
            },
            onDark: {
                surfaceSolidSecondary: {
                    value: '#24282B',
                    comment: 'Вторичный непрозрачный фон поверхности/контрола',
                    enabled: true,
                },
                surfaceAccentGradient: {
                    value: {
                        origin: 'linear-gradient(122.62deg, #4817C1 0%, #C505D6 100%)',
                        linearGradient: {
                            colors: ['#4817C1', '#C505D6'],
                            angle: 123,
                        },
                    },
                    comment: 'Акцентный фон поверхности/контрола с градиентом',
                    enabled: true,
                },
                surfaceNegative: {
                    value: '#FF2E43',
                    comment: 'Цвет фона поверхности/контрола ошибка',
                    enabled: true,
                },
            },
            onLight: {
                surfaceSolidSecondary: {
                    value: '#24282B',
                    comment: 'Вторичный непрозрачный фон поверхности/контрола',
                    enabled: false,
                },
                surfaceAccentGradient: {
                    value: {
                        origin: 'linear-gradient(122.62deg, #4817C1 0%, #C505D6 100%)',
                        linearGradient: {
                            colors: ['#4817C1', '#C505D6'],
                            angle: 123,
                        },
                    },
                    comment: 'Акцентный фон поверхности/контрола с градиентом',
                    enabled: false,
                },
                surfaceNegative: {
                    value: '#FF2E43',
                    comment: 'Цвет фона поверхности/контрола ошибка',
                    enabled: true,
                },
                // enabled: false,
            },
        },
        customSection: {
            default: {
                customSectionPrimary: {
                    value: '#F2F5F7',
                    comment: 'Кастомный цвет текста',
                    enabled: true,
                },
            },
            // enabled: false,
        },
    },
};
