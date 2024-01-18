import { css } from '@linaria/core';

import { counterTokens } from '../../../../components/Counter';

export const config = {
    defaults: {
        view: 'primary',
        size: 'xs',
    },
    variations: {
        view: {
            primary: css`
                ${counterTokens.color}: var(--inverse-text-primary);
                ${counterTokens.background}: var(--surface-solid-default);
            `,
            accent: css`
                ${counterTokens.color}: var(--on-dark-text-primary);
                ${counterTokens.background}: var(--surface-accent);
            `,
            positive: css`
                ${counterTokens.color}: var(--on-dark-text-primary);
                ${counterTokens.background}: var(--surface-positive);
            `,
            warning: css`
                ${counterTokens.color}: var(--on-dark-text-primary);
                ${counterTokens.background}: var(--surface-warning);
            `,
            negative: css`
                ${counterTokens.color}: var(--on-dark-text-primary);
                ${counterTokens.background}: var(--surface-negative);
            `,
            dark: css`
                ${counterTokens.color}: var(--on-dark-text-primary);
                ${counterTokens.background}: var(--on-light-surface-solid-default);
            `,
            light: css`
                ${counterTokens.color}: var(--on-light-text-primary);
                ${counterTokens.background}: var(--on-dark-surface-solid-default);
            `,
        },
        size: {
            xs: css`
                ${counterTokens.borderRadius}: 0.5rem;
                ${counterTokens.height}: 1rem;
                ${counterTokens.paddingRight}: 0.25rem;
                ${counterTokens.paddingLeft}: 0.25rem;
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${counterTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            xxs: css`
                ${counterTokens.borderRadius}: 0.5rem;
                ${counterTokens.height}: 0.75rem;
                ${counterTokens.paddingRight}: 0.25rem;
                ${counterTokens.paddingLeft}: 0.25rem;
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${counterTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
