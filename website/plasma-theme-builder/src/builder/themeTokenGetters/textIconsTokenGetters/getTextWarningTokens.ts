import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';

import { TokensByType } from '../../types';

export const warningTokensCreator = (comment: Record<keyof TokensByType, string>) => {
    const darkValue = humanizeColor(generalColors.orange[500]);
    const lightValue = humanizeColor(generalColors.orange[600]);

    return () => ({
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
    });
};

const comment: Record<keyof TokensByType, string> = {
    default: 'Цвет предупреждения',
    onDark: 'Цвет предупреждения на темном фоне',
    onLight: 'Цвет предупреждения на светлом фоне',
    inverse: 'Инвертированный цвет предупреждения',
};

export const getTextWarningTokens = warningTokensCreator(comment);
