import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: var(--inverse-text-primary);
                ${badgeTokens.background}: var(--surface-solid-default);

                ${badgeTokens.colorClear}: var(--text-primary);
            `,
            accent: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-accent);

                ${badgeTokens.colorTransparent}: var(--text-accent);
                ${badgeTokens.colorClear}: var(--text-accent);
            `,
            positive: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-positive);

                ${badgeTokens.colorTransparent}: var(--text-positive);
                ${badgeTokens.colorClear}: var(--text-positive);
            `,
            negative: css`
                ${badgeTokens.color}: var(--on-dark-text-primary);
                ${badgeTokens.background}: var(--surface-negative);

                ${badgeTokens.colorTransparent}: var(--text-negative);
                ${badgeTokens.colorClear}: var(--text-negative);
            `,
        },
        size: {
            s: css`
                ${badgeTokens.borderRadius}: 0.375rem;
                ${badgeTokens.height}: 1.5rem;
                ${badgeTokens.paddingRight}: 0.5625rem;
                ${badgeTokens.paddingLeft}: 0.5625rem;

                ${badgeTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${badgeTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-s-line-height);

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
        clear: {
            true: css``,
        },
    },
};
