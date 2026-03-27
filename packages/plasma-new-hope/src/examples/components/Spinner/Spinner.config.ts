import {
    textAccent,
    textNegative,
    textParagraph,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { spinnerTokens } from '../../../components/Spinner';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        size: {
            s: css`
                ${spinnerTokens.size}: 16px;
            `,
            m: css`
                ${spinnerTokens.size}: 24px;
            `,
            l: css`
                ${spinnerTokens.size}: 36px;
            `,
        },
        view: {
            default: css`
                ${spinnerTokens.color}: ${textPrimary};
            `,
            secondary: css`
                ${spinnerTokens.color}: ${textSecondary};
            `,
            tertiary: css`
                ${spinnerTokens.color}: ${textTertiary};
            `,
            paragraph: css`
                ${spinnerTokens.color}: ${textParagraph};
            `,
            accent: css`
                ${spinnerTokens.color}: ${textAccent};
            `,
            positive: css`
                ${spinnerTokens.color}: ${textPositive};
            `,
            warning: css`
                ${spinnerTokens.color}: ${textWarning};
            `,
            negative: css`
                ${spinnerTokens.color}: ${textNegative};
            `,
        },
    },
};
