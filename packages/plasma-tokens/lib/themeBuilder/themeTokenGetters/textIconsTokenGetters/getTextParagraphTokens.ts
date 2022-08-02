import { ThemeConfig } from '../../types';
import { getGreyTokenData } from '../../utils';

export const getTextParagraphTokens = (config: ThemeConfig) => {
    const { opacity, grayscale } = config;

    const darkValue = getGreyTokenData({ saturation: opacity ? 100 : 150, grayscale, opacity: 0.8 });
    const lightValue = getGreyTokenData({ saturation: opacity ? 1000 : 900, grayscale, opacity: 0.8 });

    return {
        dark: {
            default: {
                value: darkValue,
            },
            onDark: {
                value: darkValue,
            },
            onLight: {
                value: lightValue,
            },
            inverse: {
                value: lightValue,
            },
        },
        light: {
            default: {
                value: lightValue,
            },
            onDark: {
                value: darkValue,
            },
            onLight: {
                value: lightValue,
            },
            inverse: {
                value: darkValue,
            },
        },
    };
};
