import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    textAccent,
    textInfo,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_finai';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
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
        },
    },
};
