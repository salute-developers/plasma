import type { TokensByType } from '@salutejs/plasma-tokens-utils';

export const transparentWarningTokensCreator = (comment: Record<keyof TokensByType, string>) => {
    const opacityDegrees = -0.88;
    const darkValue = `[general.orange.500][${opacityDegrees}]`;
    const lightValue = `[general.orange.600][${opacityDegrees}]`;

    return () => ({
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
    });
};

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный цвет фона поверхности/контрола предупреждение',
    onDark: 'Прозрачный цвет фона поверхности/контрола предупреждение на темном фоне',
    onLight: 'Прозрачный цвет фона поверхности/контрола предупреждение на светлом фоне',
    inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола предупреждение',
};

export const getSurfaceTransparentWarningTokens = transparentWarningTokensCreator(comment);
