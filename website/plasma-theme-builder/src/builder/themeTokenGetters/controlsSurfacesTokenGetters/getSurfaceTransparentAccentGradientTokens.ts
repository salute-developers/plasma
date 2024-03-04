import { alphenColor, getRestoredColorFromPalette } from '@salutejs/plasma-tokens-utils';
import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

export const transparentAccentGradientCreator = (comment: Record<keyof TokensByType, string>) => {
    return (config: ThemeConfig) => {
        const opacityDegrees = -0.88;
        const colorDark = alphenColor(getRestoredColorFromPalette(config.accentColor.dark), opacityDegrees);
        const colorLight = alphenColor(getRestoredColorFromPalette(config.accentColor.light), opacityDegrees);
        const darkValue = `linear-gradient(135deg, black 0%, ${colorDark} 100%)`;
        const lightValue = `linear-gradient(135deg, white 0%, ${colorLight} 100%)`;

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
    default: 'Прозрачный акцентный фон поверхности/контрола с градиентом',
    onDark: 'Прозрачный акцентный фон поверхности/контрола с градиентом на темном фоне',
    onLight: 'Прозрачный акцентный фон поверхности/контрола с градиентом на светлом фоне',
    inverse: 'Прозрачный инвертированный акцентный фон поверхности/контрола с градиентом',
};

export const getSurfaceTransparentAccentGradientTokens = transparentAccentGradientCreator(comment);
