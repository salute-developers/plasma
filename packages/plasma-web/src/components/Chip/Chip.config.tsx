import { css, chipTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${chipTokens.color}: var(--plasma-colors-inverse);
                ${chipTokens.background}: var(--plasma-colors-primary);
                ${chipTokens.colorHover}: var(--plasma-colors-inverse);
                ${chipTokens.backgroundHover}: var(--plasma-colors-button-checked-hover);
                ${chipTokens.colorActive}: var(--plasma-colors-inverse);
                ${chipTokens.backgroundActive}: var(--plasma-colors-button-checked-active);
                ${chipTokens.backgroundReadOnly}: var(--plasma-colors-primary);
                ${chipTokens.colorReadOnly}: var(--plasma-colors-inverse);
                ${chipTokens.backgroundReadOnlyHover}: var(--plasma-colors-primary);
                ${chipTokens.colorReadOnlyHover}: var(--plasma-colors-inverse);
            `,
            secondary: css`
                ${chipTokens.color}: var(--plasma-colors-text);
                ${chipTokens.background}: var(--plasma-colors-surface-liquid02);
                ${chipTokens.colorHover}: var(--plasma-colors-text);
                ${chipTokens.backgroundHover}: var(--plasma-colors-button-secondary-hover);
                ${chipTokens.colorActive}: var(--plasma-colors-text);
                ${chipTokens.backgroundActive}: var(--plasma-colors-button-secondary-active);
                ${chipTokens.backgroundReadOnly}: var(--plasma-colors-surface-liquid02);
                ${chipTokens.colorReadOnly}: var(--plasma-colors-text);
                ${chipTokens.backgroundReadOnlyHover}: var(--plasma-colors-surface-liquid02);
                ${chipTokens.colorReadOnlyHover}: var(--plasma-colors-text);
            `,
            positive: css`
                ${chipTokens.color}: var(--plasma-colors-white-primary);
                ${chipTokens.background}: var(--plasma-colors-success);
                ${chipTokens.colorHover}: var(--plasma-colors-white-primary);
                ${chipTokens.backgroundHover}: var(--plasma-colors-button-success-hover);
                ${chipTokens.colorActive}: var(--plasma-colors-white-primary);
                ${chipTokens.backgroundActive}: var(--plasma-colors-button-success-active);
                ${chipTokens.backgroundReadOnly}: var(--plasma-colors-success);
                ${chipTokens.colorReadOnly}: var(--plasma-colors-white-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--plasma-colors-success);
                ${chipTokens.colorReadOnlyHover}: var(--plasma-colors-white-primary);
            `,
        },
        size: {
            l: css`
                ${chipTokens.borderRadius}: 0.75rem;
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
                ${chipTokens.focusColor}: var(--plasma-colors-accent);
            `,
        },
    },
};
