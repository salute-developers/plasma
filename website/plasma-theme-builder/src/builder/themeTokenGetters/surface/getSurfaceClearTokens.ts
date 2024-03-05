import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Фон поверхности/контрола без заливки',
    onDark: 'Фон поверхности/контрола без заливки на темном фоне',
    onLight: 'Фон поверхности/контрола без заливки на светлом фоне',
    inverse: 'Инвертированный фон поверхности/контрола без заливки',
};

export const getSurfaceClearTokens = () => {
    return {
        dark: {
            default: {
                value: baseColors.clear.value,
                comment: comment.default,
            },
            onDark: {
                value: baseColors.clear.value,
                comment: comment.onDark,
            },
            onLight: {
                value: baseColors.clear.value,
                comment: comment.onLight,
            },
            inverse: {
                value: baseColors.clear.value,
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value: baseColors.clear.value,
                comment: comment.default,
            },
            onDark: {
                value: baseColors.clear.value,
                comment: comment.onDark,
            },
            onLight: {
                value: baseColors.clear.value,
                comment: comment.onLight,
            },
            inverse: {
                value: baseColors.clear.value,
                comment: comment.inverse,
            },
        },
    };
};
