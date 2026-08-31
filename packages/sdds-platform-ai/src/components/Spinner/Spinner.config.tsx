import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';

// TODO: Добавить view info
export const config = {
    defaults: {
        view: 'accent',
        size: 'xxs',
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
        },
    },
};
