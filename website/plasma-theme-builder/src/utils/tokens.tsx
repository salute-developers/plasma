import { ThemeMode, getRestoredColorFromPalette } from '@salutejs/plasma-tokens-utils';
import type { FormulaMode, OperationKind, TokenData, TokensCreator } from '../types';
import { getStateColor } from './color';

export const getBrightnessTokens = [
    'surfaceSolidCard',
    'surfaceSolidPrimary',
    'textPrimary',
    'backgroundPrimary',
    'surfaceTransparentCard',
];

export const getStateToken = (section: FormulaMode, mode: ThemeMode, data: TokenData) => {
    const newData = { ...data };
    const restoredValue = getRestoredColorFromPalette(newData.value as string);

    return (state: OperationKind) => {
        newData.value = getStateColor(restoredValue, section, mode)(state);
        return { ...newData };
    };
};

export const tokensCreator = ({
    comment,
    darkValue,
    lightValue,
    darkSubGroup = 'onDark',
    lightSubGroup = 'onLight',
    enabledAll,
}: TokensCreator) => ({
    dark: {
        default: {
            value: darkValue,
            comment: comment.default,
            enabled: enabledAll,
        },
        [darkSubGroup]: {
            value: darkValue,
            comment: comment.onDark,
            enabled: enabledAll,
        },
        [lightSubGroup]: {
            value: lightValue,
            comment: comment.onLight,
            enabled: enabledAll,
        },
        inverse: {
            value: lightValue,
            comment: comment.inverse,
            enabled: enabledAll,
        },
    },
    light: {
        default: {
            value: lightValue,
            comment: comment.default,
            enabled: enabledAll,
        },
        [darkSubGroup]: {
            value: darkValue,
            comment: comment.onDark,
            enabled: enabledAll,
        },
        [lightSubGroup]: {
            value: lightValue,
            comment: comment.onLight,
            enabled: enabledAll,
        },
        inverse: {
            value: darkValue,
            comment: comment.inverse,
            enabled: enabledAll,
        },
    },
});
