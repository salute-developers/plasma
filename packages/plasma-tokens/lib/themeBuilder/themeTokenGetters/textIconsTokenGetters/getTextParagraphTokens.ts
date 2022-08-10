import { ThemeConfig, TokensByType } from '../../types';
import { getGreyTokenData } from '../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Сплошной наборный текст',
    onDark: 'Сплошной наборный текст на темном фоне',
    onLight: 'Сплошной наборный текст на светлом фоне',
    inverse: 'Инвертированный cплошной наборный текст',
};

export const getTextParagraphTokens = (config: ThemeConfig) => {
    const {
        opacity: { textIcons: opacity },
        grayscale,
    } = config;
    const opacityValue = opacity ? 0.8 : null;

    const darkValue = getGreyTokenData({
        saturation: opacity ? 100 : 150,
        grayscale: grayscale.dark,
        opacity: opacityValue,
    });
    const lightValue = getGreyTokenData({
        saturation: opacity ? 1000 : 900,
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
