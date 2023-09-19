import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

export const transparentAccentTokenCreator = (comment: Record<keyof TokensByType, string>) => {
    return (config: ThemeConfig) => {
        const opacityDegrees = -0.88;
        const accentColorDark = `${config.accentColor.dark}[${opacityDegrees}]`;
        const accentColorLight = `${config.accentColor.light}[${opacityDegrees}]`;

        return {
            dark: {
                default: {
                    value: accentColorDark,
                    comment: comment.default,
                },
                onDark: {
                    value: accentColorDark,
                    comment: comment.onDark,
                },
                onLight: {
                    value: accentColorLight,
                    comment: comment.onLight,
                },
                inverse: {
                    value: accentColorLight,
                    comment: comment.inverse,
                },
            },
            light: {
                default: {
                    value: accentColorLight,
                    comment: comment.default,
                },
                onDark: {
                    value: accentColorDark,
                    comment: comment.onDark,
                },
                onLight: {
                    value: accentColorLight,
                    comment: comment.onLight,
                },
                inverse: {
                    value: accentColorDark,
                    comment: comment.inverse,
                },
            },
        };
    };
};

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный акцентный цвет',
    onDark: 'Прозрачный акцентный цвет на темном фоне',
    onLight: 'Прозрачный акцентный цвет на светлом фоне',
    inverse: 'Прозрачный инвертированный акцентный цвет',
};

export const getTextTransparentAccentTokens = transparentAccentTokenCreator(comment);
