import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';
import { white } from '../../constants';
import { ThemeConfig, TokensByType } from '../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Непрозрачный фон поверхности/контрола по умолчанию',
    onDark: 'Непрозрачный фон поверхности/контрола по умолчанию на темном фоне',
    onLight: 'Непрозрачный фон поверхности/контрола по умолчанию на светлом фоне',
    inverse: 'Инвертированный непрозрачный фон поверхности/контрола по умолчанию',
};

export const getSurfaceSolidDefaultTokens = (config: ThemeConfig) => {
    const darkValue = white;
    const lightValue = humanizeColor(generalColors[config.grayscale][1000]);

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
