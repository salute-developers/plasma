import { css, iconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-accent);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-solid-primary);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-solid-primary-active);
            `,
            clear: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-accent);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(--surface-transparent-accent);
                ${iconButtonTokens.iconButtonColorHover}: var(--text-accent);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-accent);
                ${iconButtonTokens.iconButtonColorActive}: var(--text-accent);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-clear);
            `,
        },
        size: {
            l: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1.5rem;
                ${iconButtonTokens.iconButtonRadius}: 0.875rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            lr: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            m: css`
                ${iconButtonTokens.iconButtonHeight}: 3rem;
                ${iconButtonTokens.iconButtonWidth}: 3rem;
                ${iconButtonTokens.iconButtonPadding}: 1.25rem;
                ${iconButtonTokens.iconButtonRadius}: 0.75rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            mr: css`
                ${iconButtonTokens.iconButtonHeight}: 3rem;
                ${iconButtonTokens.iconButtonWidth}: 3rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            s: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1rem;
                ${iconButtonTokens.iconButtonRadius}: 0.625rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            sr: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xs: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
                ${iconButtonTokens.iconButtonRadius}: 0.5rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xsr: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${iconButtonTokens.iconButtonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${iconButtonTokens.iconButtonFocusColor}: var(--surface-accent);
            `,
        },
    },
};
