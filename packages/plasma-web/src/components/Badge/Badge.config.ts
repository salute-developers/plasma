import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${badgeTokens.color}: var(--inverse-text-primary);
                ${badgeTokens.background}: var(--surface-solid-default);

                ${badgeTokens.colorTransparent}: var(--text-primary);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-secondary);
            `,
            accent: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-accent);

                ${badgeTokens.colorTransparent}: var(--text-accent);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-secondary);
            `,
            positive: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-positive);

                ${badgeTokens.colorTransparent}: var(--text-positive);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-positive);
            `,
            warning: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-warning);

                ${badgeTokens.colorTransparent}: var(--text-warning);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-warning);
            `,
            negative: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-negative);

                ${badgeTokens.colorTransparent}: var(--text-negative);
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-negative);
            `,
            dark: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--on-light-surface-solid-default);

                ${badgeTokens.colorTransparent}: var(--on-dark-text-primary);
                ${badgeTokens.backgroundTransparent}: var(--on-light-surface-transparent-deep);
            `,
            light: css`
                ${badgeTokens.color}: var(--on-light-text-primary);
                ${badgeTokens.background}: var(--on-dark-surface-solid-default);

                ${badgeTokens.colorTransparent}: var(--on-light-text-primary);
                ${badgeTokens.backgroundTransparent}: var(--on-dark-surface-transparent-deep);
            `,
        },
        size: {
            l: css`
                ${badgeTokens.borderRadius}: 0.5rem;
                ${badgeTokens.height}: 1.75rem;
                ${badgeTokens.paddingRight}: 0.6875rem;
                ${badgeTokens.paddingLeft}: 0.6875rem;

                ${badgeTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${badgeTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
                ${badgeTokens.leftContentMarginRight}: 0.25rem;

                ${badgeTokens.rightContentMarginLeft}: 0.25rem;
                ${badgeTokens.rightContentMarginRight}: -0.0625rem;
            `,
            m: css`
                ${badgeTokens.borderRadius}: 0.375rem;
                ${badgeTokens.height}: 1.5rem;
                ${badgeTokens.paddingRight}: 0.5625rem;
                ${badgeTokens.paddingLeft}: 0.5625rem;

                ${badgeTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${badgeTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
                ${badgeTokens.leftContentMarginRight}: 0.1875rem;

                ${badgeTokens.rightContentMarginLeft}: 0.1875rem;
                ${badgeTokens.rightContentMarginRight}: -0.0625rem;
            `,
            s: css`
                ${badgeTokens.borderRadius}: 0.375rem;
                ${badgeTokens.height}: 1.25rem;
                ${badgeTokens.paddingRight}: 0.4375rem;
                ${badgeTokens.paddingLeft}: 0.4375rem;

                ${badgeTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${badgeTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
                ${badgeTokens.leftContentMarginRight}: 0.125rem;

                ${badgeTokens.rightContentMarginLeft}: 0.125rem;
                ${badgeTokens.rightContentMarginRight}: -0.0625rem;
            `,
        },
        pilled: {
            true: css`
                ${badgeTokens.pilledBorderRadius}: 1.25rem;
            `,
        },
        transparent: {
            true: css``,
        },
    },
};
