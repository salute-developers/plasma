import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonTextColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonIconColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary-hover);
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary-active);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            accent: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-accent);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonTextColor}: var(--text-primary);
                ${buttonTokens.buttonIconColor}: var(--text-primary);
                ${buttonTokens.buttonValueColor}: var(--text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonTextColor}: var(--text-primary);
                ${buttonTokens.buttonIconColor}: var(--text-primary);
                ${buttonTokens.buttonValueColor}: var(--text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            positive: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-positive);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-positive-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-positive-active);
            `,
            warning: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-warning);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-warning-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-warning-active);
            `,
            negative: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-negative);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-negative-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-negative-active);
            `,
            dark: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${buttonTokens.buttonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--on-light-surface-solid-default);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${buttonTokens.buttonBackgroundColorHover}: var(--on-light-surface-solid-default-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${buttonTokens.buttonColor}: var(--on-light-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-light-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-light-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-light-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: var(--on-light-text-primary-hover);
                ${buttonTokens.buttonColorActive}: var(--on-light-text-primary-active);
                ${buttonTokens.buttonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);
            `,
        },
        size: {
            s: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1rem;
                ${buttonTokens.buttonRadius}: 0.625rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.375rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.375rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
            xs: css`
                ${buttonTokens.buttonHeight}: 2rem;
                ${buttonTokens.buttonWidth}: 10rem;
                ${buttonTokens.buttonPadding}: 0.75rem;
                ${buttonTokens.buttonRadius}: 0.5rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.275rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.275rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.125rem;
            `,
            xxs: css`
                ${buttonTokens.buttonHeight}: 1.5rem;
                ${buttonTokens.buttonWidth}: 8.75rem;
                ${buttonTokens.buttonPadding}: 0.625rem;
                ${buttonTokens.buttonRadius}: 0.375rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${buttonTokens.buttonSpinnerSize}: 0.75rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.125rem;
            `,
        },
        disabled: {
            true: css`
                ${buttonTokens.buttonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${buttonTokens.buttonFocusColor}: var(--surface-accent);
            `,
        },
        stretching: {
            auto: css``,
            filled: css``,
            fixed: css``,
        },
    },
};
