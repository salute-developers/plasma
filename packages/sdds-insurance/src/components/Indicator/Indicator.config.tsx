import { css, indicatorTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 's',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--surface-solid-default);
            `,
            accent: css`
                ${tokens.color}: var(--surface-accent);
            `,
            inactive: css`
                ${tokens.color}: var(--surface-solid-tertiary);
            `,
            positive: css`
                ${tokens.color}: var(--surface-positive);
            `,
            warning: css`
                ${tokens.color}: var(--surface-warning);
            `,
            negative: css`
                ${tokens.color}: var(--surface-negative);
            `,
            black: css`
                ${tokens.color}: var(--on-light-surface-solid-default);
            `,
            white: css`
                ${tokens.color}: var(--on-dark-surface-solid-default);
            `,
        },
        size: {
            l: css`
                ${tokens.size}: 0.75rem;
            `,
            m: css`
                ${tokens.size}: 0.5rem;
            `,
            s: css`
                ${tokens.size}: 0.375rem;
            `,
        },
    },
};
