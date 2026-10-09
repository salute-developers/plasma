import { css } from 'styled-components';

import { groupIconButtonTokens } from '../../../components/GroupIconButton';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${groupIconButtonTokens.buttonColor}: var(--inverse-text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--inverse-text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--inverse-text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--inverse-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--inverse-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            accent: css`
                ${groupIconButtonTokens.buttonColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--surface-accent);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${groupIconButtonTokens.buttonColor}: var(--text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${groupIconButtonTokens.buttonColor}: var(--text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--surface-clear);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--text-primary-hover);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--surface-clear);
                ${groupIconButtonTokens.buttonColorActive}: var(--text-primary-active);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--surface-clear);
            `,
            positive: css`
                ${groupIconButtonTokens.buttonColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--surface-positive);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--surface-positive-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--surface-positive-active);
            `,
            warning: css`
                ${groupIconButtonTokens.buttonColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--surface-warning);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--surface-warning-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--surface-warning-active);
            `,
            negative: css`
                ${groupIconButtonTokens.buttonColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--surface-negative);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--surface-negative-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--surface-negative-active);
            `,
            dark: css`
                ${groupIconButtonTokens.buttonColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${groupIconButtonTokens.buttonColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--on-light-surface-solid-default);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--on-light-surface-solid-default-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${groupIconButtonTokens.buttonColor}: var(--on-light-text-primary);
                ${groupIconButtonTokens.buttonTextColor}: var(--on-light-text-primary);
                ${groupIconButtonTokens.buttonIconColor}: var(--on-light-text-primary);
                ${groupIconButtonTokens.buttonValueColor}: var(--on-light-text-secondary);
                ${groupIconButtonTokens.buttonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${groupIconButtonTokens.buttonLoadingBackgroundColor}: var(${groupIconButtonTokens.buttonBackgroundColor});
                ${groupIconButtonTokens.buttonColorHover}: var(--on-light-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${groupIconButtonTokens.buttonColorActive}: var(--on-light-text-primary);
                ${groupIconButtonTokens.buttonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);
            `,
        },
        size: {
            xl: css`
                ${groupIconButtonTokens.buttonDefaultRadius}: 1rem;
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.5rem;
                ${groupIconButtonTokens.buttonSideRadius}: 1rem;

                ${groupIconButtonTokens.buttonHeight}: 4rem;
                ${groupIconButtonTokens.buttonPadding}: 1.75rem;
                ${groupIconButtonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${groupIconButtonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${groupIconButtonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${groupIconButtonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${groupIconButtonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${groupIconButtonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            l: css`
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.875rem;
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.375rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.875rem;

                ${groupIconButtonTokens.buttonHeight}: 3.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1.5rem;
                ${groupIconButtonTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${groupIconButtonTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${groupIconButtonTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${groupIconButtonTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${groupIconButtonTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${groupIconButtonTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.75rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.75rem;

                ${groupIconButtonTokens.buttonHeight}: 3rem;
                ${groupIconButtonTokens.buttonPadding}: 1.25rem;

                ${groupIconButtonTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${groupIconButtonTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${groupIconButtonTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${groupIconButtonTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${groupIconButtonTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${groupIconButtonTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.25rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.625rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.625rem;

                ${groupIconButtonTokens.buttonHeight}: 2.5rem;
                ${groupIconButtonTokens.buttonPadding}: 1rem;
                ${groupIconButtonTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${groupIconButtonTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${groupIconButtonTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${groupIconButtonTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${groupIconButtonTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${groupIconButtonTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.125rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.5rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.5rem;

                ${groupIconButtonTokens.buttonHeight}: 2rem;
                ${groupIconButtonTokens.buttonPadding}: 0.75rem;
                ${groupIconButtonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${groupIconButtonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${groupIconButtonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${groupIconButtonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${groupIconButtonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${groupIconButtonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${groupIconButtonTokens.buttonSegmentedRadius}: 0.125rem;
                ${groupIconButtonTokens.buttonDefaultRadius}: 0.375rem;
                ${groupIconButtonTokens.buttonSideRadius}: 0.375rem;

                ${groupIconButtonTokens.buttonHeight}: 1.5rem;
                ${groupIconButtonTokens.buttonPadding}: 0.625rem;
                ${groupIconButtonTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${groupIconButtonTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${groupIconButtonTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${groupIconButtonTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${groupIconButtonTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${groupIconButtonTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        orientation: {
            horizontal: css`
                ${groupIconButtonTokens.buttonGroupOrientation}: row;
            `,
            vertical: css`
                ${groupIconButtonTokens.buttonGroupOrientation}: column;
            `,
        },
        gap: {
            none: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0;
            `,
            dense: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0.125rem;
            `,
            wide: css`
                ${groupIconButtonTokens.buttonGroupItemsGap}: 0.5rem;
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
