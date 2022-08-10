import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../constants';
import { ThemeConfig, TokensByType } from '../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный фон поверхности/контрола по умолчанию',
    onDark: 'Прозрачный фон поверхности/контрола по умолчанию на темном фоне',
    onLight: 'Прозрачный фон поверхности/контрола по умолчанию на светлом фоне',
    inverse: 'Инвертированный прозрачный фон поверхности/контрола по умолчанию',
};

export const getSurfaceTransparentDefaultTokens = (config: ThemeConfig) => {
    const darkValue = baseColors.white.value;
    const lightValue = humanizeColor(generalColors[config.grayscale.light][1000]);

    return {
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
    };
};
