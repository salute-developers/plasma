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
                ${buttonTokens.buttonTextColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonIconColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: var(--inverse-text-primary-hover);
                ${buttonTokens.buttonColorActive}: var(--inverse-text-primary-active);
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
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-secondary);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-solid-secondary-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-solid-secondary-active);
            `,
            clear: css`
                ${buttonTokens.buttonColor}: var(--text-primary);
                ${buttonTokens.buttonTextColor}: var(--text-primary);
                ${buttonTokens.buttonIconColor}: var(--text-primary);
                ${buttonTokens.buttonValueColor}: var(--text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonBackgroundColorHover}: var(--surface-solid-secondary-hover);
                ${buttonTokens.buttonBackgroundColorActive}: var(--surface-solid-secondary-active);
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
            black: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonTokens.buttonBackgroundColor}: var(--on-light-surface-solid-default);
                ${buttonTokens.buttonLoadingBackgroundColor}: var(${buttonTokens.buttonBackgroundColor});
                ${buttonTokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${buttonTokens.buttonColorActive}: var(--on-dark-text-primary-active);
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
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
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
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.375rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
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
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${buttonTokens.buttonDisabledOpacity}: 1;
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
    intersections: [
        {
            view: 'default',
            disabled: true,
            style: css`
                ${buttonTokens.buttonColor}: var(--text-tertiary);
                ${buttonTokens.buttonTextColor}: var(--text-tertiary);
                ${buttonTokens.buttonIconColor}: var(--text-tertiary);
                ${buttonTokens.buttonValueColor}: var(--text-tertiary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-tertiary);
            `,
        },
        {
            view: 'accent',
            disabled: true,
            style: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-accent-minor);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-accent-minor);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-accent-minor);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-accent-minor);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-accent);
            `,
        },
        {
            view: 'secondary',
            disabled: true,
            style: css`
                ${buttonTokens.buttonColor}: var(--text-tertiary);
                ${buttonTokens.buttonTextColor}: var(--text-tertiary);
                ${buttonTokens.buttonIconColor}: var(--text-tertiary);
                ${buttonTokens.buttonValueColor}: var(--text-tertiary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-secondary);
            `,
        },
        {
            view: 'clear',
            disabled: true,
            style: css`
                ${buttonTokens.buttonColor}: var(--text-tertiary);
                ${buttonTokens.buttonTextColor}: var(--text-tertiary);
                ${buttonTokens.buttonIconColor}: var(--text-tertiary);
                ${buttonTokens.buttonValueColor}: var(--text-tertiary);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
            `,
        },
        {
            view: 'positive',
            disabled: true,
            style: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-positive-minor);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-positive-minor);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-positive-minor);
                ${buttonTokens.buttonValueColor}: var(--on-dark-text-positive-minor);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-positive);
            `,
        },
        {
            view: 'warning',
            disabled: true,
            style: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-warning);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-warning);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-warning);
                ${buttonTokens.buttonValueColor}: var(--text-warning-minor);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-warning-minor);
            `,
        },
        {
            view: 'negative',
            disabled: true,
            style: css`
                ${buttonTokens.buttonColor}: var(--on-dark-text-negative);
                ${buttonTokens.buttonTextColor}: var(--on-dark-text-negative);
                ${buttonTokens.buttonIconColor}: var(--on-dark-text-negative);
                ${buttonTokens.buttonValueColor}: var(--text-negative-minor);
                ${buttonTokens.buttonBackgroundColor}: var(--surface-negative-minor);
            `,
        },
        {
            view: 'black',
            disabled: true,
            style: css`
                ${buttonTokens.buttonBackgroundColor}: var(--surface-solid-tertiary);
            `,
        },
        {
            view: 'white',
            disabled: true,
            style: css`
                ${buttonTokens.buttonColor}: var(--on-light-text-tertiary);
                ${buttonTokens.buttonTextColor}: var(--on-light-text-tertiary);
                ${buttonTokens.buttonIconColor}: var(--on-light-text-tertiary);
                ${buttonTokens.buttonValueColor}: var(--on-light-text-tertiary);
                ${buttonTokens.buttonBackgroundColor}: var(--on-dark-surface-solid-default);
            `,
        },
    ],
};
