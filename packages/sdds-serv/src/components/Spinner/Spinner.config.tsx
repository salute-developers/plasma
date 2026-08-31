import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    textAccent,
    textNegative,
    textParagraph,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_serv';

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
                ${tokens.color}: ${textParagraph};
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
