import { css, buttonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            accent: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-accent-main);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-accent-main-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary-active);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-accent-main-active);
            `,
            secondary: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonValueColor}: var(--text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${buttonTokens.buttonColorHover}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${buttonTokens.buttonColorActive}: var(--text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonValueColor}: var(--text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonTokens.buttonColorHover}: var(--text-primary-hover);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-clear);
                ${buttonTokens.buttonColorActive}: var(--text-primary-active);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-clear);
            `,
            success: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-positive);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-positive-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-positive-active);
            `,
            warning: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-warning);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-warning-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-warning-active);
            `,
            critical: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-negative);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-negative-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-negative-active);
            `,
            dark: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--on-light-surface-solid-default);
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorHover}: var(--on-light-surface-solid-default-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonTokens.buttonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${buttonTokens.buttonColor}: var(--on-light-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-light-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${buttonTokens.buttonColorHover}: var(--on-light-text-primary-hover);
                ${buttonTokens.buttonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${buttonTokens.buttonColorActive}: var(--on-light-text-primary-active);
                ${buttonTokens.buttonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);
            `,
        },
        size: {
            l: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.5rem;
                ${buttonTokens.buttonRadius}: 0.875rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.5rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.5rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
            lr: css`
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.5rem 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
            m: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonPadding}: 1.25rem;
                ${buttonTokens.buttonRadius}: 0.75rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.375rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.375rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
            mr: css`
                ${buttonTokens.buttonHeight}: 3rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.375rem 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
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

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
            sr: css`
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 11.25rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.375rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
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

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
            `,
            xsr: css`
                ${buttonTokens.buttonHeight}: 2rem;
                ${buttonTokens.buttonWidth}: 10rem;
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.25rem 0 0;
                ${buttonTokens.buttonRightContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
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
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
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
