import { css, linkButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${linkButtonTokens.linkButtonColor}: var(--text-primary);
                ${linkButtonTokens.linkButtonIconColor}: var(--text-primary);
                ${linkButtonTokens.linkButtonTextColor}: var(--text-primary);
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: var(--text-primary-hover);
                ${linkButtonTokens.linkButtonColorActive}: var(--text-primary-active);
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: var(--text-primary-hover);
                ${linkButtonTokens.linkButtonTextColorActive}: var(--text-primary-active);
            `,
            accent: css`
                ${linkButtonTokens.linkButtonColor}: var(--text-accent);
                ${linkButtonTokens.linkButtonIconColor}: var(--text-accent);
                ${linkButtonTokens.linkButtonTextColor}: var(--text-accent);
                ${linkButtonTokens.linkButtonBackgroundColor}: var(---surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: var(--text-accent-hover);
                ${linkButtonTokens.linkButtonColorActive}: var(--text-accent-active);
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: var(--text-accent-hover);
                ${linkButtonTokens.linkButtonTextColorActive}: var(--text-accent-active);
            `,
            secondary: css`
                ${linkButtonTokens.linkButtonColor}: var(--text-secondary);
                ${linkButtonTokens.linkButtonIconColor}: var(--text-secondary);
                ${linkButtonTokens.linkButtonTextColor}: var(--text-secondary);
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: var(--text-secondary-hover);
                ${linkButtonTokens.linkButtonColorActive}: var(--text-secondary-active);
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: var(--text-secondary-hover);
                ${linkButtonTokens.linkButtonTextColorActive}: var(--text-secondary-active);
            `,
            positive: css`
                ${linkButtonTokens.linkButtonColor}: var(--text-positive);
                ${linkButtonTokens.linkButtonIconColor}: var(--text-positive);
                ${linkButtonTokens.linkButtonTextColor}: var(--text-positive);
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: var(--text-positive-hover);
                ${linkButtonTokens.linkButtonColorActive}: var(--text-positive-active);
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: var(--text-positive-hover);
                ${linkButtonTokens.linkButtonTextColorActive}: var(--text-positive-active);
            `,
            warning: css`
                ${linkButtonTokens.linkButtonColor}: var(--text-warning);
                ${linkButtonTokens.linkButtonIconColor}: var(--text-warning);
                ${linkButtonTokens.linkButtonTextColor}: var(--text-warning);
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: var(--text-warning-hover);
                ${linkButtonTokens.linkButtonColorActive}: var(--text-warning-active);
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: var(--text-warning-hover);
                ${linkButtonTokens.linkButtonTextColorActive}: var(--text-warning-active);
            `,
            negative: css`
                ${linkButtonTokens.linkButtonColor}: var(--text-negative);
                ${linkButtonTokens.linkButtonIconColor}: var(--text-negative);
                ${linkButtonTokens.linkButtonTextColor}: var(--text-negative);
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: var(--text-negative-hover);
                ${linkButtonTokens.linkButtonColorActive}: var(--text-negative-active);
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: var(--text-negative-hover);
                ${linkButtonTokens.linkButtonTextColorActive}: var(--text-negative-active);
            `,
            info: css`
                ${linkButtonTokens.linkButtonColor}: var(--text-info);
                ${linkButtonTokens.linkButtonIconColor}: var(--text-info);
                ${linkButtonTokens.linkButtonTextColor}: var(--text-info);
                ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
                ${linkButtonTokens.linkButtonColorHover}: var(--text-info-hover);
                ${linkButtonTokens.linkButtonColorActive}: var(--text-info-active);
                ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);
                ${linkButtonTokens.linkButtonTextColorHover}: var(--text-info-hover);
                ${linkButtonTokens.linkButtonTextColorActive}: var(--text-info-active);
            `,
        },
        size: {
            l: css`
                ${linkButtonTokens.linkButtonHeight}: 3.5rem;
                ${linkButtonTokens.linkButtonPadding}: 1rem 0;
                ${linkButtonTokens.linkButtonRadius}: 0.875rem;
                ${linkButtonTokens.linkButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${linkButtonTokens.linkButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${linkButtonTokens.linkButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${linkButtonTokens.linkButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${linkButtonTokens.linkButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${linkButtonTokens.linkButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.375rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.063rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.5rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.5rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.5rem;
            `,
            m: css`
                ${linkButtonTokens.linkButtonHeight}: 3rem;
                ${linkButtonTokens.linkButtonPadding}: 0.75rem 0;
                ${linkButtonTokens.linkButtonRadius}: 0.75rem;
                ${linkButtonTokens.linkButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${linkButtonTokens.linkButtonFontSize}: var(--plasma-typo-body-m-font-size);
                ${linkButtonTokens.linkButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${linkButtonTokens.linkButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${linkButtonTokens.linkButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${linkButtonTokens.linkButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.375rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.125rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.375rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.375rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.375rem;
            `,
            s: css`
                ${linkButtonTokens.linkButtonHeight}: 2.5rem;
                ${linkButtonTokens.linkButtonPadding}: 0.5rem 0;
                ${linkButtonTokens.linkButtonRadius}: 0.625rem;
                ${linkButtonTokens.linkButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${linkButtonTokens.linkButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${linkButtonTokens.linkButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${linkButtonTokens.linkButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${linkButtonTokens.linkButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${linkButtonTokens.linkButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${linkButtonTokens.linkButtonSpinnerSize}: 1.375rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.063rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.25rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.25rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.25rem;
            `,
            xs: css`
                ${linkButtonTokens.linkButtonHeight}: 2rem;
                ${linkButtonTokens.linkButtonPadding}: 0.5rem 0;
                ${linkButtonTokens.linkButtonRadius}: 0.5rem;
                ${linkButtonTokens.linkButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${linkButtonTokens.linkButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${linkButtonTokens.linkButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${linkButtonTokens.linkButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${linkButtonTokens.linkButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${linkButtonTokens.linkButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${linkButtonTokens.linkButtonSpinnerSize}: 1rem;
                ${linkButtonTokens.linkButtonSpinnerColor}: inherit;

                ${linkButtonTokens.linkButtonTextPadding}: 0.063rem 0;
                ${linkButtonTokens.linkButtonLeftContentMargin}: 0 0.25rem 0 0;
                ${linkButtonTokens.linkButtonRightContentMargin}: 0 0 0 0.25rem;
                ${linkButtonTokens.linkButtonAdditionalContentMargin}: 0 0 0 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${linkButtonTokens.linkButtonDisabledOpacity}: 0.4;
            `,
        },
    },
};
