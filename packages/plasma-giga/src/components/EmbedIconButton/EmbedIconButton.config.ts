import { css, embedIconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-primary);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-primary-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-primary-active);
            `,
            accent: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-accent);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-accent-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-accent-active);
            `,
            secondary: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-secondary);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-secondary-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-secondary-active);
            `,
            positive: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-positive);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-positive-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-positive-active);
            `,
            warning: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-warning);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-warning-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-warning-active);
            `,
            negative: css`
                ${embedIconButtonTokens.embedIconButtonColor}: var(--text-negative);
                ${embedIconButtonTokens.embedIconButtonBackgroundColor}: var(--surface-transparent-clear);
                ${embedIconButtonTokens.embedIconButtonLoadingBackgroundColor}: var(${embedIconButtonTokens.embedIconButtonBackgroundColor});
                ${embedIconButtonTokens.embedIconButtonColorHover}: var(--text-negative-hover);
                ${embedIconButtonTokens.embedIconButtonColorActive}: var(--text-negative-active);
            `,
        },
        size: {
            xl: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 4rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 4rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 1.75rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 1rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${embedIconButtonTokens.embedIconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${embedIconButtonTokens.embedIconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${embedIconButtonTokens.embedIconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${embedIconButtonTokens.embedIconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            l: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 3.5rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 3.5rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.875rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${embedIconButtonTokens.embedIconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${embedIconButtonTokens.embedIconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${embedIconButtonTokens.embedIconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${embedIconButtonTokens.embedIconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            m: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 3rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 3rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 1.25rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.75rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${embedIconButtonTokens.embedIconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                ${embedIconButtonTokens.embedIconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${embedIconButtonTokens.embedIconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${embedIconButtonTokens.embedIconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            s: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 2.5rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 2.5rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 1rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.625rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${embedIconButtonTokens.embedIconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${embedIconButtonTokens.embedIconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${embedIconButtonTokens.embedIconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${embedIconButtonTokens.embedIconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            xs: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 2rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 2rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 0.75rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.5rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${embedIconButtonTokens.embedIconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${embedIconButtonTokens.embedIconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${embedIconButtonTokens.embedIconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${embedIconButtonTokens.embedIconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
            xxs: css`
                ${embedIconButtonTokens.embedIconButtonHeight}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonWidth}: 1.5rem;
                ${embedIconButtonTokens.embedIconButtonPadding}: 0.5rem;
                ${embedIconButtonTokens.embedIconButtonRadius}: 0.375rem;
                ${embedIconButtonTokens.embedIconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${embedIconButtonTokens.embedIconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${embedIconButtonTokens.embedIconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${embedIconButtonTokens.embedIconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${embedIconButtonTokens.embedIconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${embedIconButtonTokens.embedIconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${embedIconButtonTokens.embedIconButtonSpinnerSize}: 1rem;
                ${embedIconButtonTokens.embedIconButtonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${embedIconButtonTokens.embedIconButtonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${embedIconButtonTokens.embedIconButtonFocusColor}: var(--surface-accent);
            `,
        },
    },
};
