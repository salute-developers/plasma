import { css, buttonTokens, getResponsiveCSS } from '@salutejs/plasma-new-hope/styled-components';

// INFO: Rounded radius. Should be removed after token will be added in theme
const roundedRadius = '1000px';

const sizeXL = `
                ${buttonTokens.buttonHeight}: 4rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.75rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
                ${buttonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${buttonTokens.buttonSpinnerSize}: 1.5rem;
                ${buttonTokens.buttonSpinnerColor}: inherit;

                ${buttonTokens.buttonLeftContentMargin}: 0 0.625rem 0 -0.125rem;
                ${buttonTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.625rem;
                ${buttonTokens.buttonValueMargin}: 0 0 0 0.25rem;
                ${buttonTokens.buttonAdditionalContentMargin}: 0 0 0 0.5rem;
                ${buttonTokens.buttonAdditionalContentMarginRightWidthValue}: 0.375rem;
`;

const sizeL = `
                ${buttonTokens.buttonHeight}: 3.5rem;
                ${buttonTokens.buttonWidth}: 12.5rem;
                ${buttonTokens.buttonPadding}: 1.5rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
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
            `;

const sizeM = `
                ${buttonTokens.buttonHeight}: 2.5rem;
                ${buttonTokens.buttonWidth}: 10.5rem;
                ${buttonTokens.buttonPadding}: 1.5rem;
                ${buttonTokens.buttonRadius}: ${roundedRadius};
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
            `;

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'xl',
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
                ${buttonTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonTextColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonIconColor}: var(--inverse-text-primary);
                ${buttonTokens.buttonValueColor}: var(--inverse-text-secondary);
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
            success: css`
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
            critical: css`
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
            xl: css`
                ${sizeXL};
            `,
            l: css`
                ${sizeL};
            `,
            m: css`
                ${sizeM};
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
    responsive: css`
        ${getResponsiveCSS([
            { from: 0, to: 559, size: sizeM },
            { from: 560, to: 789, size: sizeL },
            { from: 1023, to: undefined, size: sizeXL },
        ])}
    `,
};
