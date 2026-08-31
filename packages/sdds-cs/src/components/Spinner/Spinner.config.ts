import {
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

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
            tertiary: css`
                ${tokens.color}: ${textTertiary};
            `,
            paragraph: css`
                ${tokens.color}: var(--text-paragraph);
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
        },
    },
};
