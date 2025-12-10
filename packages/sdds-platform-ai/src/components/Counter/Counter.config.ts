import { css, counterTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
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
            l: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1.75rem;
                ${counterTokens.padding}: 0 0.625rem;
                ${counterTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${counterTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${counterTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${counterTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${counterTokens.lineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            m: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1.5rem;
                ${counterTokens.padding}: 0 0.5rem;
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${counterTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1.25rem;
                ${counterTokens.padding}: 0 0.375rem;
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${counterTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            xs: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1rem;
                ${counterTokens.padding}: 0 0.25rem;
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${counterTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            xxs: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 0.75rem;
                ${counterTokens.padding}: 0 0.125rem;
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
