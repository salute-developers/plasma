import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    textAccent,
    textInfo,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';

export const config = {
    defaults: {
        view: 'accent',
        size: 'xxs',
    },
    variations: {
        size: {
            xxs: css`
                ${tokens.size}: 1rem;
                ${tokens.padding}: 0.063rem;
            `,
            xs: css`
                ${tokens.size}: 1.5rem;
                ${tokens.padding}: 0.125rem;
            `,
            s: css`
                ${tokens.size}: 2.25rem;
                ${tokens.padding}: 0.188rem;
            `,
            m: css`
                ${tokens.size}: 3rem;
                ${tokens.padding}: 0.25rem;
            `,
            l: css`
                ${tokens.size}: 3.5rem;
                ${tokens.padding}: 0.25rem;
            `,
            xl: css`
                ${tokens.size}: 5.5rem;
                ${tokens.padding}: 0.375rem;
            `,
            xxl: css`
                ${tokens.size}: 8rem;
                ${tokens.padding}: 0.5rem;
            `,
        },
        view: {
            default: css`
                ${tokens.color}: ${textPrimary};
            `,
            secondary: css`
                ${tokens.color}: ${textSecondary};
            `,
            accent: css`
                ${tokens.color}: ${textAccent};
            `,
            positive: css`
                ${tokens.color}: ${textPositive};
            `,
            warning: css`
                ${tokens.color}: ${textWarning};
            `,
            negative: css`
                ${tokens.color}: ${textNegative};
            `,
            info: css`
                ${tokens.color}: ${textInfo};
            `,
        },
    },
};
