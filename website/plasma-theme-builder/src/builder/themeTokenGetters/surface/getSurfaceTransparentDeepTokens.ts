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
    const lightValue = alphenColor(baseColors.white.value, opacityDegrees);
    const darkValue = alphenColor(baseColors.black.value, opacityDegrees);

    return {
        dark: {
            default: {
                value: lightValue,
                comment: comment.default,
            },
            onDark: {
                value: lightValue,
                comment: comment.onDark,
            },
            onLight: {
                value: darkValue,
                comment: comment.onLight,
            },
            inverse: {
                value: darkValue,
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value: darkValue,
                comment: comment.default,
            },
            onDark: {
                value: lightValue,
                comment: comment.onDark,
            },
            onLight: {
                value: darkValue,
                comment: comment.onLight,
            },
            inverse: {
                value: lightValue,
                comment: comment.inverse,
            },
        },
    };
};
