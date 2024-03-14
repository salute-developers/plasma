import type { TokensCreator } from '../types';

export const tokensCreator = ({ comment, darkValue, lightValue, enabledAll }: TokensCreator) => ({
    dark: {
        default: {
            value: darkValue,
            comment: comment.default,
            enabled: enabledAll,
        },
        onDark: {
            value: darkValue,
            comment: comment.onDark,
            enabled: enabledAll,
        },
        onLight: {
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
        onDark: {
            value: darkValue,
            comment: comment.onDark,
            enabled: enabledAll,
        },
        onLight: {
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
