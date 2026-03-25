import { css, buttonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${buttonGroupTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonTextColor}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--inverse-text-primary-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--inverse-text-primary-active);
            `,
            accent: css`
                ${buttonGroupTokens.buttonColor}: var(--text-primary);
                ${buttonGroupTokens.buttonTextColor}: var(--text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--text-primary);

                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);

                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-accent-gradient);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            secondary: css`
                ${buttonGroupTokens.buttonColor}: var(--text-primary);
                ${buttonGroupTokens.buttonTextColor}: var(--text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--text-primary);

                ${buttonGroupTokens.buttonValueColor}: var(--text-secondary);

                ${buttonGroupTokens.buttonBackgroundColor}: transparent;
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});

                ${buttonGroupTokens.buttonBorderColor}: var(--outline-solid-default);
                ${buttonGroupTokens.buttonBorderColorHover}: var(--outline-solid-default);
                ${buttonGroupTokens.buttonBorderColorActive}: var(--outline-solid-default);
            `,
            clear: css`
                ${buttonGroupTokens.buttonColor}: var(--text-primary);
                ${buttonGroupTokens.buttonTextColor}: var(--text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--text-secondary);

                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            positive: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-positive);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-positive-hover);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-positive-active);
            `,
            warning: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-warning);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-warning-hover);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-warning-active);
            `,
            negative: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-negative);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-negative-hover);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-negative-active);
            `,
            dark: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary-active);
            `,
            black: css`
                ${buttonGroupTokens.buttonColor}: var(--text-accent);
                ${buttonGroupTokens.buttonTextColor}: var(--text-accent);
                ${buttonGroupTokens.buttonIconColor}: var(--text-accent);

                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);

                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-solid-default);

                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
            white: css`
                ${buttonGroupTokens.buttonColor}: var(--on-light-text-primary);
                ${buttonGroupTokens.buttonColorHover}: var(--on-light-text-primary-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-light-text-primary-active);

                ${buttonGroupTokens.buttonTextColor}: var(--on-light-text-primary);
                ${buttonGroupTokens.buttonIconColor}: var(--on-light-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-light-text-secondary);

                ${buttonGroupTokens.buttonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
            `,
        },
        size: {
            xl: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 2rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 2rem;

                ${buttonGroupTokens.buttonHeight}: 4rem;
                ${buttonGroupTokens.buttonPadding}: 1.75rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            l: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 1.75rem;
                ${buttonGroupTokens.buttonSideRadius}: 1.75rem;

                ${buttonGroupTokens.buttonHeight}: 3.5rem;
                ${buttonGroupTokens.buttonPadding}: 1.75rem;

                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 1.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 1.5rem;

                ${buttonGroupTokens.buttonHeight}: 3rem;
                ${buttonGroupTokens.buttonPadding}: 1.25rem;

                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonSideRadius}: 1.375rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 1.375rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonPadding}: 1rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        orientation: {
            horizontal: css`
                ${buttonGroupTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${buttonGroupTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${buttonGroupTokens.buttonGroupItemsGap}: 0.5rem;
            `,
        },
        shape: {
            segmented: css``,
            default: css``,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
