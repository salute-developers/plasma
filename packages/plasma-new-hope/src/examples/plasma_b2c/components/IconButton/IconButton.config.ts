import { css } from '@linaria/core';

import { iconButtonTokens } from '../../../../components/IconButton';

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
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--inverse-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--inverse-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-solid-default-active);
            `,
            accent: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-accent);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);
            `,
            secondary: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);
            `,
            clear: css`
                ${iconButtonTokens.iconButtonColor}: var(--text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--text-primary-hover);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${iconButtonTokens.iconButtonColorActive}: var(--text-primary-active);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-clear);
            `,
            success: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-positive);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-positive-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-positive-active);
            `,
            warning: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-warning);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-warning-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-warning-active);
            `,
            critical: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-negative);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-negative-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-negative-active);
            `,
            dark: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);
            `,
            black: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-light-surface-solid-default);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--on-light-surface-solid-default-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--on-light-surface-solid-default-active);
            `,
            white: css`
                ${iconButtonTokens.iconButtonColor}: var(--on-light-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonColorHover}: var(--on-light-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${iconButtonTokens.iconButtonColorActive}: var(--on-light-text-primary);
                ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);
            `,
        },
        size: {
            xl: css`
                ${iconButtonTokens.iconButtonHeight}: 4rem;
                ${iconButtonTokens.iconButtonWidth}: 4rem;
                ${iconButtonTokens.iconButtonPadding}: 1.75rem;
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
            xlr: css`
                ${iconButtonTokens.iconButtonHeight}: 4rem;
                ${iconButtonTokens.iconButtonWidth}: 4rem;
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
                ${iconButtonTokens.iconButtonPadding}: 1.5rem;
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
            lr: css`
                ${iconButtonTokens.iconButtonHeight}: 3.5rem;
                ${iconButtonTokens.iconButtonWidth}: 3.5rem;
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
                ${iconButtonTokens.iconButtonPadding}: 1.25rem;
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
            mr: css`
                ${iconButtonTokens.iconButtonHeight}: 3rem;
                ${iconButtonTokens.iconButtonWidth}: 3rem;
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
                ${iconButtonTokens.iconButtonPadding}: 1rem;
                ${iconButtonTokens.iconButtonRadius}: 0.625rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            sr: css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.375rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            xs: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonPadding}: 0.75rem;
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
            xsr: css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${iconButtonTokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${iconButtonTokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${iconButtonTokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${iconButtonTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${iconButtonTokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
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
