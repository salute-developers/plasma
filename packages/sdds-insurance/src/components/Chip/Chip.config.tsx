import { css, chipTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${chipTokens.color}: var(--inverse-text-primary);
                ${chipTokens.background}: var(--surface-solid-default);
                ${chipTokens.colorHover}: var(--inverse-text-primary);
                ${chipTokens.backgroundHover}: var(--surface-solid-default-hover);
                ${chipTokens.colorActive}: var(--inverse-text-primary);
                ${chipTokens.backgroundActive}: var(--surface-solid-default-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-solid-default);
                ${chipTokens.colorReadOnly}: var(--inverse-text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-solid-default);
                ${chipTokens.colorReadOnlyHover}: var(--inverse-text-primary);
            `,
            secondary: css`
                ${chipTokens.color}: var(--text-primary);
                ${chipTokens.background}: var(--surface-transparent-secondary);
                ${chipTokens.colorHover}: var(--text-primary);
                ${chipTokens.backgroundHover}: var(--surface-transparent-secondary-hover);
                ${chipTokens.colorActive}: var(--text-primary);
                ${chipTokens.backgroundActive}: var(--surface-transparent-secondary-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-transparent-secondary);
                ${chipTokens.colorReadOnly}: var(--text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${chipTokens.colorReadOnlyHover}: var(--text-primary);
            `,
            accent: css`
                ${chipTokens.color}: var(--on-dark-text-primary);
                ${chipTokens.background}: var(--surface-accent);
                ${chipTokens.colorHover}: var(--on-dark-text-primary);
                ${chipTokens.backgroundHover}: var(--surface-accent-hover);
                ${chipTokens.colorActive}: var(--on-dark-text-primary);
                ${chipTokens.backgroundActive}: var(--surface-accent-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-accent);
                ${chipTokens.colorReadOnly}: var(--on-dark-text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-accent);
                ${chipTokens.colorReadOnlyHover}: var(--on-dark-text-primary);
            `,
        },
        size: {
            l: css`
                ${chipTokens.borderRadius}: 0.75rem;
                ${chipTokens.pilledBorderRadius}: 1.5rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 3rem;
                ${chipTokens.paddingRight}: 1rem;
                ${chipTokens.paddingLeft}: 1rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.5rem;
                ${chipTokens.clearContentMarginLeft}: 0.625rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;

                ${chipTokens.scaleHover}: 1.02;
                ${chipTokens.scaleActive}: 0.98;

                ${chipTokens.closeIconSize}: 1.5rem;
            `,
            m: css`
                ${chipTokens.borderRadius}: 0.625rem;
                ${chipTokens.pilledBorderRadius}: 1.25rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2.5rem;
                ${chipTokens.paddingRight}: 0.875rem;
                ${chipTokens.paddingLeft}: 0.875rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.375rem;
                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;

                ${chipTokens.scaleHover}: 1.02;
                ${chipTokens.scaleActive}: 0.98;

                ${chipTokens.closeIconSize}: 1.25rem;
            `,
            s: css`
                ${chipTokens.borderRadius}: 0.5rem;
                ${chipTokens.pilledBorderRadius}: 1rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2rem;
                ${chipTokens.paddingRight}: 0.875rem;
                ${chipTokens.paddingLeft}: 0.875rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.clearContentMarginLeft}: 0.375rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;

                ${chipTokens.scaleHover}: 1.02;
                ${chipTokens.scaleActive}: 0.98;

                ${chipTokens.closeIconSize}: 1rem;
            `,
            xs: css`
                ${chipTokens.borderRadius}: 0.375rem;
                ${chipTokens.pilledBorderRadius}: 0.75rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.5rem;
                ${chipTokens.paddingRight}: 0.625rem;
                ${chipTokens.paddingLeft}: 0.625rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;

                ${chipTokens.scaleHover}: 1.02;
                ${chipTokens.scaleActive}: 0.98;

                ${chipTokens.closeIconSize}: 1rem;
            `,
        },
        disabled: {
            true: css`
                ${chipTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${chipTokens.focusColor}: var(--text-accent);
            `,
        },
        pilled: {
            true: css``,
        },
    },
};
