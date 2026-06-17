import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-primary);
            `,
            secondary: css`
                ${tokens.color}: var(--text-secondary);
            `,
            // deprecated
            tertiary: css`
                ${tokens.color}: var(--text-tertiary);
            `,
            // deprecated
            paragraph: css`
                ${tokens.color}: var(--text-paragraph);
            `,
            accent: css`
                ${tokens.color}: var(--text-accent);
            `,
            positive: css`
                ${tokens.color}: var(--text-positive);
            `,
            warning: css`
                ${tokens.color}: var(--text-warning);
            `,
            negative: css`
                ${tokens.color}: var(--text-negative);
            `,
            info: css`
                ${tokens.color}: var(--text-info);
            `,
        },
    },
};
