import { ThemeConfig, TokensByType } from '../../types';
import { getGreyTokenData } from '../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Вторичный цвет текста',
    onDark: 'Вторичный цвет текста на темном фоне',
    onLight: 'Вторичный цвет текста на светлом фоне',
    inverse: 'Инвертированный вторичный цвет текста',
};

export const getTextSecondaryTokens = (config: ThemeConfig) => {
    const { opacity, grayscale } = config;

    const darkValue = getGreyTokenData({ saturation: opacity ? 100 : 300, grayscale, opacity: 0.56 });
    const lightValue = getGreyTokenData({ saturation: opacity ? 1000 : 800, grayscale, opacity: 0.56 });

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
