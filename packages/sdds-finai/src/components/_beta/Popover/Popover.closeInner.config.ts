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
                ${tokens.iconColor}: var(--text-secondary);
                ${tokens.iconColorHover}: var(--text-secondary-hover);
                ${tokens.iconColorActive}: var(--text-secondary-active);
            `,
            info: css`
                ${tokens.backgroundColor}: var(--surface-accent);
                ${tokens.boxShadow}: var(--shadow-down-hard-m);
                ${tokens.iconColor}: var(--on-dark-text-secondary);
                ${tokens.iconColorHover}: var(--on-dark-text-secondary-hover);
                ${tokens.iconColorActive}: var(--on-dark-text-secondary-active);
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem 0.5rem 0.5rem 0.5rem;
                ${tokens.iconOffset}: 0.625rem;
            `,
            s: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.5rem 0.375rem 0.375rem 0.375rem;
                ${tokens.iconOffset}: 0.5rem;
            `,
        },
    },
};
