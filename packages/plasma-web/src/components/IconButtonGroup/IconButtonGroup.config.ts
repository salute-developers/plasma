import { css, iconButtonGroupTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${iconButtonGroupTokens.buttonColor}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${iconButtonGroupTokens.buttonColor}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--inverse-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            accent: css`
                ${iconButtonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--surface-accent);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${iconButtonGroupTokens.buttonColor}: var(--text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${iconButtonGroupTokens.buttonColor}: var(--text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--surface-clear);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--text-primary-hover);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--surface-clear);
                ${iconButtonGroupTokens.buttonColorActive}: var(--text-primary-active);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--surface-clear);
            `,
            success: css`
                ${iconButtonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--surface-positive);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--surface-positive-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--surface-positive-active);
            `,
            warning: css`
                ${iconButtonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--surface-warning);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--surface-warning-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--surface-warning-active);
            `,
            critical: css`
                ${iconButtonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--surface-negative);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--surface-negative-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--surface-negative-active);
            `,
            dark: css`
                ${iconButtonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${iconButtonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--on-light-surface-solid-default);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--on-light-surface-solid-default-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${iconButtonGroupTokens.buttonColor}: var(--on-light-text-primary);
                ${iconButtonGroupTokens.buttonTextColor}: var(--on-light-text-primary);
                ${iconButtonGroupTokens.buttonIconColor}: var(--on-light-text-primary);
                ${iconButtonGroupTokens.buttonValueColor}: var(--on-light-text-secondary);
                ${iconButtonGroupTokens.buttonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${iconButtonGroupTokens.buttonLoadingBackgroundColor}: var(${iconButtonGroupTokens.buttonBackgroundColor});
                ${iconButtonGroupTokens.buttonColorHover}: var(--on-light-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${iconButtonGroupTokens.buttonColorActive}: var(--on-light-text-primary);
                ${iconButtonGroupTokens.buttonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);
            `,
        },
        size: {
            xl: css`
                ${iconButtonGroupTokens.buttonDefaultRadius}: 1rem;
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.5rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 1rem;

                ${iconButtonGroupTokens.buttonHeight}: 4rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.75rem;
                ${iconButtonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${iconButtonGroupTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${iconButtonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${iconButtonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${iconButtonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${iconButtonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            l: css`
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.875rem;

                ${iconButtonGroupTokens.buttonHeight}: 3.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.5rem;
                ${iconButtonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${iconButtonGroupTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${iconButtonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${iconButtonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${iconButtonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${iconButtonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.75rem;

                ${iconButtonGroupTokens.buttonHeight}: 3rem;
                ${iconButtonGroupTokens.buttonPadding}: 1.25rem;

                ${iconButtonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${iconButtonGroupTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${iconButtonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${iconButtonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${iconButtonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${iconButtonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.625rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.625rem;

                ${iconButtonGroupTokens.buttonHeight}: 2.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 1rem;
                ${iconButtonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${iconButtonGroupTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${iconButtonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${iconButtonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${iconButtonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${iconButtonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.5rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.5rem;

                ${iconButtonGroupTokens.buttonHeight}: 2rem;
                ${iconButtonGroupTokens.buttonPadding}: 0.75rem;
                ${iconButtonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${iconButtonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${iconButtonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${iconButtonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${iconButtonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${iconButtonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${iconButtonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${iconButtonGroupTokens.buttonDefaultRadius}: 0.375rem;
                ${iconButtonGroupTokens.buttonSideRadius}: 0.375rem;

                ${iconButtonGroupTokens.buttonHeight}: 1.5rem;
                ${iconButtonGroupTokens.buttonPadding}: 0.625rem;
                ${iconButtonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${iconButtonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${iconButtonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${iconButtonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${iconButtonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${iconButtonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        orientation: {
            horizontal: css`
                ${iconButtonGroupTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${iconButtonGroupTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${iconButtonGroupTokens.buttonGroupItemsGap}: 0.5rem;
            `,
        },
        shape: {
            segmented: css``,
            default: css``,
            pilled: css``,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
