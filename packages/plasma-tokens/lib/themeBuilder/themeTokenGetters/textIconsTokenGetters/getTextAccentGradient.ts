import { ThemeConfig, TokensByType } from '../../types';

export const accentGradientCreator = (comment: Record<keyof TokensByType, string>) => {
    const value = 'TODO: необходимо указать вручную';

    return () => ({
        dark: {
            default: {
                value,
                comment: comment.default,
            },
            onDark: {
                value,
                comment: comment.onDark,
            },
            onLight: {
                value,
                comment: comment.onLight,
            },
            inverse: {
                value,
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value,
                comment: comment.default,
            },
            onDark: {
                value,
                comment: comment.onDark,
            },
            onLight: {
                value,
                comment: comment.onLight,
            },
            inverse: {
                value,
                comment: comment.inverse,
            },
        },
    });
};

const comment: Record<keyof TokensByType, string> = {
    default: 'Акцентный цвет с градиентом',
    onDark: 'Акцентный цвет с градиентом на темном фоне',
    onLight: 'Акцентный цвет с градиентом на светлом фоне',
    inverse: 'Инвертированный акцентный цвет с градиентом',
};

export const getTextAccentGradient = accentGradientCreator(comment);
