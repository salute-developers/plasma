import { ThemeConfig, TokensByType } from '../../types';
import { getGreyTokenData } from '../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Основной цвет текста',
    onDark: 'Основной цвет текста на темном фоне',
    onLight: 'Основной цвет текста на светлом фоне',
    inverse: 'Инвертированный основной цвет текста',
};

export const getTextPrimaryTokens = (config: ThemeConfig) => {
    const {
        opacity: { textIcons: opacity },
        grayscale,
    } = config;
    const opacityValue = opacity ? 0.96 : null;

    const darkValue = getGreyTokenData({ saturation: 100, grayscale: grayscale.dark, opacity: opacityValue });
    const lightValue = getGreyTokenData({
        saturation: opacity ? 1000 : 950,
        grayscale: grayscale.light,
        opacity: opacityValue,
    });

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
