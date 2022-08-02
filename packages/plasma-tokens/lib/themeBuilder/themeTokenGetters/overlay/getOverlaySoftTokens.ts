import { alphenColor } from '@salutejs/plasma-tokens-utils';

import { black } from '../../constants';
import { ThemeConfig, TokensByType } from '../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Цвет фона паранжи светлый',
    onDark: 'Цвет фона паранжи светлый на темном фоне',
    onLight: 'Цвет фона паранжи светлый на светлом фоне',
    inverse: 'Инвертированный цвет фона паранжи светлый',
};

export const getOverlaySoftTokens = (config: ThemeConfig) => {
    const value = alphenColor(black, -0.44);

    return {
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
    };
};
