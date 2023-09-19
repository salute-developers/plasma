import { getRestoredColorFromPalette } from '@salutejs/plasma-tokens-utils';
import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

export const accentGradientCreator = (comment: Record<keyof TokensByType, string>) => {
    return (config: ThemeConfig) => {
        const colorDark = getRestoredColorFromPalette(config.accentColor.dark);
        const colorLight = getRestoredColorFromPalette(config.accentColor.light);
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
    default: 'Акцентный цвет с градиентом',
    onDark: 'Акцентный цвет с градиентом на темном фоне',
    onLight: 'Акцентный цвет с градиентом на светлом фоне',
    inverse: 'Инвертированный акцентный цвет с градиентом',
};

export const getTextAccentGradientTokens = accentGradientCreator(comment);
