import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Основной фон для карточек',
    onDark: 'Основной фон для карточек на темном фоне',
    onLight: 'Основной фон для карточек на светлом фоне',
    inverse: 'Инвертированный основной фон для карточек',
};

export const getSurfaceSolidCardTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${950}]`;
    const lightValue = `[general.${config.grayscale.light}.${50}]`;

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
