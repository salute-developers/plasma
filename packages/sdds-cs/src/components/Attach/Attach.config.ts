import { css, attachTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${attachTokens.buttonColor}: var(--on-dark-text-primary);
                ${attachTokens.buttonValueColor}: var(--on-light-text-accent-minor);
                ${attachTokens.buttonBackgroundColor}: var(--surface-accent);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${attachTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-accent-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-accent);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${attachTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            secondary: css`
                ${attachTokens.buttonColor}: var(--text-primary);
                ${attachTokens.buttonValueColor}: var(--text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-solid-primary);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${attachTokens.buttonColorActive}: var(--text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-solid-primary-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-solid-primary);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${attachTokens.iconButtonColorActive}: var(--text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-solid-primary-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            clear: css`
                ${attachTokens.buttonColor}: var(--text-accent);
                ${attachTokens.buttonValueColor}: var(--text-accent-minor);
                ${attachTokens.buttonBackgroundColor}: var(--surface-clear);
                ${attachTokens.buttonLoadingBackgroundColor}: var(--surface-transparent-accent);
                ${attachTokens.buttonColorHover}: var(--text-accent);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-transparent-accent);
                ${attachTokens.buttonColorActive}: var(--text-accent);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--text-accent);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(--surface-transparent-accent);
                ${attachTokens.iconButtonColorHover}: var(--text-accent);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-accent);
                ${attachTokens.iconButtonColorActive}: var(--text-accent);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${attachTokens.horizontalGap}: 1rem;
                ${attachTokens.verticalGap}: 0.375rem;

                ${attachTokens.buttonHeight}: 2.5rem;
                ${attachTokens.buttonWidth}: 11.25rem;
                ${attachTokens.buttonPadding}: 1rem;
                ${attachTokens.buttonRadius}: 0.625rem;
                ${attachTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${attachTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.buttonSpinnerSize}: 1.375rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.375rem;

                ${attachTokens.cellLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${attachTokens.cellLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${attachTokens.cellLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${attachTokens.cellLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${attachTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${attachTokens.cellLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${attachTokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${attachTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${attachTokens.cellSubtitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${attachTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${attachTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${attachTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${attachTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${attachTokens.iconButtonHeight}: 2.5rem;
                ${attachTokens.iconButtonWidth}: 2.5rem;
                ${attachTokens.iconButtonPadding}: 1rem;
                ${attachTokens.iconButtonRadius}: 0.625rem;
                ${attachTokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${attachTokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${attachTokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${attachTokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${attachTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${attachTokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;
            `,
        },
    },
};
