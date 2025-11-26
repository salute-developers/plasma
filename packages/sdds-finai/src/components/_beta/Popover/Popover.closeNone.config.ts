import { css, _beta_popoverTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.boxShadow}: var(--shadow-down-hard-m);
            `,
            info: css`
                ${tokens.backgroundColor}: var(--surface-accent);
                ${tokens.boxShadow}: var(--shadow-down-hard-m);
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem 0.5rem 0.5rem 0.5rem;
            `,
            s: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.5rem 0.375rem 0.375rem 0.375rem;
            `,
        },
    },
};
