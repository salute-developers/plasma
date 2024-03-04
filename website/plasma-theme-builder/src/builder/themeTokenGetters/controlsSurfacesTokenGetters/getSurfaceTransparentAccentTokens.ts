import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

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
    default: 'Прозрачный акцентный фон поверхности/контрола',
    onDark: 'Прозрачный акцентный фон поверхности/контрола на темном фоне',
    onLight: 'Прозрачный акцентный фон поверхности/контрола на светлом фоне',
    inverse: 'Прозрачный инвертированный акцентный фон поверхности/контрола',
};

export const getSurfaceTransparentAccentTokens = transparentAccentTokenCreator(comment);
