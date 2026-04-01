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
