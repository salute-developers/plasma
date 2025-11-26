import { css } from '@linaria/core';
import { _beta_popoverTokens as tokens } from 'src/components/_beta/Popover';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.boxShadow}: var(--shadow-down-soft-m);
                ${tokens.iconColor}: var(--text-secondary);
                ${tokens.iconColorHover}: var(--text-secondary-hover);
                ${tokens.iconColorActive}: var(--text-secondary-active);
            `,
            accent: css`
                ${tokens.backgroundColor}: var(--surface-accent);
                ${tokens.boxShadow}: var(--shadow-down-soft-m);
                ${tokens.iconColor}: var(--on-dark-text-secondary);
                ${tokens.iconColorHover}: var(--on-dark-text-secondary-hover);
                ${tokens.iconColorActive}: var(--on-dark-text-secondary-active);
            `,
        },
        size: {
            l: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem;
                ${tokens.iconOffset}: 0.75rem;
            `,
            m: css`
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.padding}: 0.625rem;
                ${tokens.iconOffset}: 0.625rem;
            `,
            s: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.5rem;
                ${tokens.iconOffset}: 0.5rem;
            `,
        },
    },
};
