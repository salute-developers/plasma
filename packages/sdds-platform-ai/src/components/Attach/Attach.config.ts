import { css, attachTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        helperTextView: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${attachTokens.buttonColor}: var(--inverse-text-primary);
                ${attachTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--inverse-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${attachTokens.buttonColorActive}: var(--inverse-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--inverse-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-solid-default);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--inverse-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${attachTokens.iconButtonColorActive}: var(--inverse-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-solid-default-active);

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

                ${attachTokens.moreIconColor}: var(--text-primary);
            `,
        },
        helperTextView: {
            default: css`
                ${attachTokens.helperTextColor}: var(--text-secondary);
            `,
            negative: css`
                ${attachTokens.helperTextColor}: var(--text-negative);
            `,
        },
        size: {
            m: css`
                ${attachTokens.horizontalGap}: 1.25rem;
                ${attachTokens.verticalGap}: 0.5rem;
                ${attachTokens.verticalGapWithHelperText}: 1.625rem;

                ${attachTokens.filenameWrapperHeight}: 3rem;
                ${attachTokens.filenameDropdownWrapperHeight}: 2rem;
                ${attachTokens.buttonHeight}: 3rem;
                ${attachTokens.buttonWidth}: 11.25rem;
                ${attachTokens.buttonPadding}: 1.25rem;
                ${attachTokens.buttonRadius}: 0.75rem;
                ${attachTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${attachTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.buttonSpinnerSize}: 1.375rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.375rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.375rem;
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

                ${attachTokens.iconButtonHeight}: 3rem;
                ${attachTokens.iconButtonWidth}: 3rem;
                ${attachTokens.iconButtonPadding}: 1.25rem;
                ${attachTokens.iconButtonRadius}: 0.75rem;
                ${attachTokens.iconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.iconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.iconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.iconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${attachTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.iconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

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

                ${attachTokens.moreIconPadding}: 0.5rem;

                ${attachTokens.dropdownBorderRadius}: 0.75rem;
                ${attachTokens.dropdownPadding}: 0.125rem;
                ${attachTokens.dropdownItemPadding}: 0.5rem 0.875rem;
            `,
        },
    },
};
