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
                ${spinnerTokens.color}: var(--text-primary);
            `,
            secondary: css`
                ${spinnerTokens.color}: var(--text-secondary);
            `,
            tertiary: css`
                ${spinnerTokens.color}: var(--text-tertiary);
            `,
            paragraph: css`
                ${spinnerTokens.color}: var(--text-paragraph);
            `,
            accent: css`
                ${spinnerTokens.color}: var(--text-accent);
            `,
            positive: css`
                ${spinnerTokens.color}: var(--text-positive);
            `,
            warning: css`
                ${spinnerTokens.color}: var(--text-warning);
            `,
            negative: css`
                ${spinnerTokens.color}: var(--text-negative);
            `,
        },
    },
};
