import { css, buttonGroupTokens, buttonGroupClasses } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${buttonGroupTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${buttonGroupTokens.buttonColor}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--inverse-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            accent: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-accent);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${buttonGroupTokens.buttonColor}: var(--text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${buttonGroupTokens.buttonColor}: var(--text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-clear);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--text-primary-hover);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-clear);
                ${buttonGroupTokens.buttonColorActive}: var(--text-primary-active);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-clear);
            `,
            success: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-positive);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-positive-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-positive-active);
            `,
            warning: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-warning);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-warning-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-warning-active);
            `,
            critical: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--surface-negative);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--surface-negative-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--surface-negative-active);
            `,
            dark: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${buttonGroupTokens.buttonColor}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--on-light-surface-solid-default);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--on-light-surface-solid-default-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${buttonGroupTokens.buttonColor}: var(--on-light-text-primary);
                ${buttonGroupTokens.buttonValueColor}: var(--on-light-text-secondary);
                ${buttonGroupTokens.buttonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${buttonGroupTokens.buttonLoadingBackgroundColor}: var(${buttonGroupTokens.buttonBackgroundColor});
                ${buttonGroupTokens.buttonColorHover}: var(--on-light-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${buttonGroupTokens.buttonColorActive}: var(--on-light-text-primary);
                ${buttonGroupTokens.buttonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);
            `,
        },
        size: {
            l: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.875rem;

                ${buttonGroupTokens.buttonHeight}: 3.5rem;
                ${buttonGroupTokens.buttonPadding}: 1.5rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            lr: css`
                ${buttonGroupTokens.buttonDefaultRadius}: 0.875rem;
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.875rem;

                ${buttonGroupTokens.buttonHeight}: 3.5rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.75rem;

                ${buttonGroupTokens.buttonHeight}: 3rem;
                ${buttonGroupTokens.buttonPadding}: 1.25rem;

                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            mr: css`
                &.${buttonGroupClasses.segmented} {
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.75rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.75rem;

                ${buttonGroupTokens.buttonHeight}: 3rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.625rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.625rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonPadding}: 1rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            sr: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.25rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.625rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.625rem;

                ${buttonGroupTokens.buttonHeight}: 2.5rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.5rem;

                ${buttonGroupTokens.buttonHeight}: 2rem;
                ${buttonGroupTokens.buttonPadding}: 0.75rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xsr: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.5rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.5rem;

                ${buttonGroupTokens.buttonHeight}: 2rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${buttonGroupTokens.buttonSegmentedRadius}: 0.125rem;
                ${buttonGroupTokens.buttonDefaultRadius}: 0.375rem;
                ${buttonGroupTokens.buttonSideRadius}: 0.375rem;

                ${buttonGroupTokens.buttonHeight}: 1.5rem;
                ${buttonGroupTokens.buttonPadding}: 0.625rem;
                ${buttonGroupTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${buttonGroupTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${buttonGroupTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${buttonGroupTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${buttonGroupTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${buttonGroupTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
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
