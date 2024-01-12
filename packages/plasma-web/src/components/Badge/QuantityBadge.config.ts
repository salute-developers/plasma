import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'xs',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: var(--inverse-text-primary);
                ${badgeTokens.background}: var(--surface-solid-default);
            `,
            accent: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-accent);
            `,
            positive: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-positive);
            `,
            warning: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-warning);
            `,
            negative: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-negative);
            `,
            dark: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--on-light-surface-solid-default);
            `,
            light: css`
                ${badgeTokens.color}: var(--on-light-text-primary);
                ${badgeTokens.background}: var(--on-dark-surface-solid-default);
            `,
        },
        size: {
            xs: css`
                ${badgeTokens.borderRadius}: 0.5rem;
                ${badgeTokens.height}: 1rem;
                ${badgeTokens.paddingRight}: 0.25rem;
                ${badgeTokens.paddingLeft}: 0.25rem;

                ${badgeTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${badgeTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            xxs: css`
                ${badgeTokens.borderRadius}: 0.5rem;
                ${badgeTokens.height}: 0.75rem;
                ${badgeTokens.paddingRight}: 0.25rem;
                ${badgeTokens.paddingLeft}: 0.25rem;

                ${badgeTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${badgeTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
