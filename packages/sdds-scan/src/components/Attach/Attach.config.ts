import {
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    inverseTextPrimary,
    inverseTextSecondary,
    surfaceAccent,
    surfaceClear,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    textNegative,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_scan';
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
                ${attachTokens.buttonColor}: ${inverseTextPrimary};
                ${attachTokens.buttonValueColor}: ${inverseTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${inverseTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${attachTokens.buttonColorActive}: ${inverseTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${inverseTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceSolidDefault};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${inverseTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${attachTokens.iconButtonColorActive}: ${inverseTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
        },
        helperTextView: {
            default: css`
                ${attachTokens.helperTextColor}: ${textSecondary};
            `,
            negative: css`
                ${attachTokens.helperTextColor}: ${textNegative};
            `,
        },
        size: {
            s: css`
                ${attachTokens.horizontalGap}: 1rem;
                ${attachTokens.verticalGap}: 0.375rem;
                ${attachTokens.verticalGapWithHelperText}: 1.5rem;

                ${attachTokens.filenameWrapperHeight}: 2.5rem;
                ${attachTokens.filenameDropdownWrapperHeight}: 2rem;
                ${attachTokens.buttonHeight}: 2.5rem;
                ${attachTokens.buttonWidth}: 11.25rem;
                ${attachTokens.buttonPadding}: 1rem;
                ${attachTokens.buttonRadius}: 0.625rem;
                ${attachTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.buttonFontSize}: ${bodyS.fontSize};
                ${attachTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${attachTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.buttonLineHeight}: ${bodyS.lineHeight};

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

                ${attachTokens.cellLabelFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.cellLabelFontSize}: ${bodyXS.fontSize};
                ${attachTokens.cellLabelFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.cellLabelFontWeight}: ${bodyXS.fontWeight};
                ${attachTokens.cellLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.cellLabelLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${attachTokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${attachTokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.cellTitleLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.cellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.cellSubtitleFontSize}: ${bodyXS.fontSize};
                ${attachTokens.cellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.cellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${attachTokens.cellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.cellSubtitleLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonHeight}: 2.5rem;
                ${attachTokens.iconButtonWidth}: 2.5rem;
                ${attachTokens.iconButtonPadding}: 1rem;
                ${attachTokens.iconButtonRadius}: 0.625rem;
                ${attachTokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${attachTokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${attachTokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.iconButtonCancelFontSize}: ${bodyXS.fontSize};
                ${attachTokens.iconButtonCancelFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.iconButtonCancelFontWeight}: ${bodyXSBold.fontWeight};
                ${attachTokens.iconButtonCancelLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.iconButtonCancelLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;

                ${attachTokens.moreIconPadding}: 0.25rem;

                ${attachTokens.dropdownBorderRadius}: 0.625rem;
                ${attachTokens.dropdownPadding}: 0.125rem;
                ${attachTokens.dropdownItemPadding}: 0.25rem 0.75rem;
            `,
        },
    },
};
