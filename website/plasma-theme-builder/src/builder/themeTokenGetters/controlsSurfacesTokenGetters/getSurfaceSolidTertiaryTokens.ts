import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Третичный непрозрачный фон поверхности/контрола',
    onDark: 'Третичный непрозрачный фон поверхности/контрола на темном фоне',
    onLight: 'Третичный непрозрачный фон поверхности/контрола на светлом фоне',
    inverse: 'Инвертированный третичный непрозрачный фон поверхности/контрола',
};

export const getSurfaceSolidTertiaryTokens = (config: ThemeConfig) => {
    const darkValue = humanizeColor(generalColors[config.grayscale.dark][850]);
    const lightValue = humanizeColor(generalColors[config.grayscale.light][200]);

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
