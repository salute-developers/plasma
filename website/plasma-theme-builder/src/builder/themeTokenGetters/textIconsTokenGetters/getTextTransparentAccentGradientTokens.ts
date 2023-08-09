import { humanizeColor, alphenColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

export const transparentAccentGradientCreator = (comment: Record<keyof TokensByType, string>) => {
    return (config: ThemeConfig) => {
        const opacityDegrees = -0.88;
        const darkValue = `linear-gradient(135deg, black 0%, ${alphenColor(
            humanizeColor(config.accentColor.dark),
            opacityDegrees,
        )} 100%)`;
        const lightValue = `linear-gradient(135deg, white 0%, ${alphenColor(
            humanizeColor(config.accentColor.light),
            opacityDegrees,
        )} 100%)`;

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
};

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный акцентный цвет с градиентом',
    onDark: 'Прозрачный акцентный цвет с градиентом на темном фоне',
    onLight: 'Прозрачный акцентный цвет с градиентом на светлом фоне',
    inverse: 'Прозрачный инвертированный акцентный цвет с градиентом',
};

export const getTextTransparentAccentGradientTokens = transparentAccentGradientCreator(comment);
