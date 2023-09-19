import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Вторичный непрозрачный фон поверхности/контрола',
    onDark: 'Вторичный непрозрачный фон поверхности/контрола на темном фоне',
    onLight: 'Вторичный непрозрачный фон поверхности/контрола на светлом фоне',
    inverse: 'Инвертированный вторичный непрозрачный фон поверхности/контрола',
};

export const getSurfaceSolidSecondaryTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${900}]`;
    const lightValue = `[general.${config.grayscale.light}.${150}]`;

    return {
        dark: {
            default: {
                value: darkValue,
                comment: comment.default,
            },
            onDark: {
                value: darkValue,
                comment: comment.onDark,
            },
            onLight: {
                value: lightValue,
                comment: comment.onLight,
            },
            inverse: {
                value: lightValue,
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value: lightValue,
                comment: comment.default,
            },
            onDark: {
                value: darkValue,
                comment: comment.onDark,
            },
            onLight: {
                value: lightValue,
                comment: comment.onLight,
            },
            inverse: {
                value: darkValue,
                comment: comment.inverse,
            },
        },
    };
};
