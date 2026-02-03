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
                ${iconButtonTokens.iconButtonColor}: var(--inverse-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-solid-default);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-solid-default-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            accent: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-accent);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            clear: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            positive: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-positive);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-positive-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-positive-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            warning: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-warning);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-warning-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-warning-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            negative: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-negative);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-negative-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-negative-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            dark: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            black: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-light-surface-solid-default);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            white: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-light-text-primary);


                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
            `,
            green: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-accent);

                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);

                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
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
