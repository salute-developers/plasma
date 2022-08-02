import { humanizeColor } from '@salutejs/plasma-tokens-utils';

import { ThemeConfig, TokensByType } from '../../types';

export const accentTokenCreator = (comment: Record<keyof TokensByType, string>) => {
    return (config: ThemeConfig) => {
        const accentColor = humanizeColor(config.accentColor);

        return {
            dark: {
                default: {
                    value: accentColor,
                    comment: comment.default,
                },
                onDark: {
                    value: accentColor,
                    comment: comment.onDark,
                },
                onLight: {
                    value: accentColor,
                    comment: comment.onLight,
                },
                inverse: {
                    value: accentColor,
                    comment: comment.inverse,
                },
            },
            light: {
                default: {
                    value: accentColor,
                    comment: comment.default,
                },
                onDark: {
                    value: accentColor,
                    comment: comment.onDark,
                },
                onLight: {
                    value: accentColor,
                    comment: comment.onLight,
                },
                inverse: {
                    value: accentColor,
                    comment: comment.inverse,
                },
            },
        };
    };
};

const comment: Record<keyof TokensByType, string> = {
    default: 'Акцентный цвет',
    onDark: 'Акцентный цвет на темном фоне',
    onLight: 'Акцентный цвет на светлом фоне',
    inverse: 'Инвертированный акцентный цвет',
};

export const getTextAccentTokens = accentTokenCreator(comment);
