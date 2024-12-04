import { css, counterTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
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
            negative: css`
                ${counterTokens.color}: var(--on-dark-text-primary);
                ${counterTokens.background}: var(--surface-negative);
            `,
        },
        size: {
            s: css`
                ${counterTokens.borderRadius}: 1.25rem;
                ${counterTokens.height}: 1.25rem;
                ${counterTokens.padding}: 0 0.375rem;
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
