import { css, iconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);

                ${iconButtonTokens.iconButtonBorderColor}: var(--outline-solid-default);
                ${iconButtonTokens.iconButtonBorderColorHover}: var(--outline-solid-default-hover);
                ${iconButtonTokens.iconButtonBorderColorActive}: var(--outline-solid-default-active);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-clear);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(--surface-transparent-clear);
            `,
            accent: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-accent);

                ${iconButtonTokens.iconButtonBorderColor}: var(--outline-accent);
                ${iconButtonTokens.iconButtonBorderColorHover}: var(--outline-accent-hover);
                ${iconButtonTokens.iconButtonBorderColorActive}: var(--outline-accent-active);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-clear);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(--surface-transparent-clear);
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-secondary);

                ${iconButtonTokens.iconButtonBorderColor}: var(--outline-solid-primary);
                ${iconButtonTokens.iconButtonBorderColorHover}: var(--outline-solid-primary-hover);
                ${iconButtonTokens.iconButtonBorderColorActive}: var(--outline-solid-primary-active);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-clear);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(--surface-transparent-clear);
            `,
            positive: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-positive);

                ${iconButtonTokens.iconButtonBorderColor}: var(--outline-positive);
                ${iconButtonTokens.iconButtonBorderColorHover}: var(--outline-positive-hover);
                ${iconButtonTokens.iconButtonBorderColorActive}: var(--outline-positive-active);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-clear);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(--surface-transparent-clear);
            `,
            warning: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-warning);

                ${iconButtonTokens.iconButtonBorderColor}: var(--outline-warning);
                ${iconButtonTokens.iconButtonBorderColorHover}: var(--outline-warning-hover);
                ${iconButtonTokens.iconButtonBorderColorActive}: var(--outline-warning-active);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-clear);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(--surface-transparent-clear);
            `,
            negative: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-negative);

                ${iconButtonTokens.iconButtonBorderColor}: var(--outline-negative);
                ${iconButtonTokens.iconButtonBorderColorHover}: var(--outline-negative-hover);
                ${iconButtonTokens.iconButtonBorderColorActive}: var(--outline-negative-active);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-clear);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-clear);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(--surface-transparent-clear);
            `,
        },
        size: {
            xl: css`
                ${iconButtonTokens.iconButtonHeight}: 4rem;
                ${iconButtonTokens.iconButtonWidth}: 4rem;
                ${iconButtonTokens.iconButtonPadding}: 1.25rem;
                ${iconButtonTokens.iconButtonRadius}: 1rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.5rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            l: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;
                ${iconButtonTokens.iconButtonPadding}: 1rem;
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
            m: css`
                ${iconButtonTokens.iconButtonHeight}: 3rem;
                ${iconButtonTokens.iconButtonWidth}: 3rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
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
            s: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
                ${iconButtonTokens.iconButtonRadius}: 0.625rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xs: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonPadding}: 0.5rem;
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
            xxs: css`
                ${iconButtonTokens.iconButtonHeight}: 1.5rem;
                ${iconButtonTokens.iconButtonWidth}: 1.5rem;
                ${iconButtonTokens.iconButtonPadding}: 0.375rem;
                ${iconButtonTokens.iconButtonRadius}: 0.375rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 0.75rem;
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
