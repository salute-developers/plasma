import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceNegative,
    surfaceSolidDefault,
    surfaceTransparentDeep,
    textParagraph,
    textPositive,
    textTertiary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${surfaceSolidDefault};
            `,
            secondary: css`
                ${tokens.color}: ${surfaceTransparentDeep};
            `,
            tertiary: css`
                ${tokens.color}: ${textTertiary};
            `,
            paragraph: css`
                ${tokens.color}: ${textParagraph};
            `,
            accent: css`
                ${tokens.color}: ${surfaceSolidDefault};
            `,
            positive: css`
                ${tokens.color}: ${textPositive};
            `,
            warning: css`
                ${tokens.color}: ${textWarning};
            `,
            negative: css`
                ${tokens.color}: ${surfaceNegative};
            `,
        },
    },
};
