import { alphenColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Цвет фона паранжи темный',
    onDark: 'Цвет фона паранжи темный на темном фоне',
    onLight: 'Цвет фона паранжи темный на светлом фоне',
    inverse: 'Инвертированный цвет фона паранжи темный',
};

export const getOverlayHardTokens = () => {
    const value = alphenColor(baseColors.black.value, -0.1);

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
