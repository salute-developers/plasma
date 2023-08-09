import { alphenColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Непрозрачный фон поверхности/контрола',
    onDark: 'Непрозрачный фон поверхности/контрола на темном фоне',
    onLight: 'Непрозрачный фон поверхности/контрола на светлом фоне',
    inverse: 'Инвертированный непрозрачный фон поверхности/контрола',
};

export const getSurfaceTransparentDeepTokens = () => {
    const opacityDegrees = -0.36;

    return {
        dark: {
            default: {
                value: alphenColor(baseColors.white.value, opacityDegrees),
                comment: comment.default,
            },
            onDark: {
                value: alphenColor(baseColors.white.value, opacityDegrees),
                comment: comment.onDark,
            },
            onLight: {
                value: alphenColor(baseColors.black.value, opacityDegrees),
                comment: comment.onLight,
            },
            inverse: {
                value: alphenColor(baseColors.black.value, opacityDegrees),
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value: alphenColor(baseColors.black.value, opacityDegrees),
                comment: comment.default,
            },
            onDark: {
                value: alphenColor(baseColors.white.value, opacityDegrees),
                comment: comment.onDark,
            },
            onLight: {
                value: alphenColor(baseColors.black.value, opacityDegrees),
                comment: comment.onLight,
            },
            inverse: {
                value: alphenColor(baseColors.white.value, opacityDegrees),
                comment: comment.inverse,
            },
        },
    };
};
