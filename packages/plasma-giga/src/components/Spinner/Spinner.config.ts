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
        size: {
            xxs: css`
                ${tokens.size}: 1rem;
            `,
            xs: css`
                ${tokens.size}: 1.5rem;
            `,
            s: css`
                ${tokens.size}: 2.25rem;
            `,
            m: css`
                ${tokens.size}: 3rem;
            `,
            l: css`
                ${tokens.size}: 3.5rem;
            `,
            xl: css`
                ${tokens.size}: 5.5rem;
            `,
            xxl: css`
                ${tokens.size}: 8rem;
            `,
        },
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
