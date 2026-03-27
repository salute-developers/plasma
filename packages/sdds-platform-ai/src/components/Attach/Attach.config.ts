import {
    bodyM,
    bodyMBold,
    bodyS,
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
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
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
                ${attachTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.buttonFontSize}: ${bodyM.fontSize};
                ${attachTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${attachTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.buttonLineHeight}: ${bodyM.lineHeight};

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

                ${attachTokens.cellLabelFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.cellLabelFontSize}: ${bodyS.fontSize};
                ${attachTokens.cellLabelFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.cellLabelFontWeight}: ${bodyS.fontWeight};
                ${attachTokens.cellLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.cellLabelLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.cellTitleFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.cellTitleFontSize}: ${bodyM.fontSize};
                ${attachTokens.cellTitleFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.cellTitleFontWeight}: ${bodyM.fontWeight};
                ${attachTokens.cellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.cellTitleLineHeight}: ${bodyM.lineHeight};

                ${attachTokens.cellSubtitleFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.cellSubtitleFontSize}: ${bodyS.fontSize};
                ${attachTokens.cellSubtitleFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.cellSubtitleFontWeight}: ${bodyS.fontWeight};
                ${attachTokens.cellSubtitleLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.cellSubtitleLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.iconButtonHeight}: 3rem;
                ${attachTokens.iconButtonWidth}: 3rem;
                ${attachTokens.iconButtonPadding}: 1.25rem;
                ${attachTokens.iconButtonRadius}: 0.75rem;
                ${attachTokens.iconButtonFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.iconButtonFontSize}: ${bodyM.fontSize};
                ${attachTokens.iconButtonFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.iconButtonFontWeight}: ${bodyMBold.fontWeight};
                ${attachTokens.iconButtonLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.iconButtonLineHeight}: ${bodyM.lineHeight};

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

                ${attachTokens.moreIconPadding}: 0.5rem;

                ${attachTokens.dropdownBorderRadius}: 0.75rem;
                ${attachTokens.dropdownPadding}: 0.125rem;
                ${attachTokens.dropdownItemPadding}: 0.5rem 0.875rem;
            `,
        },
    },
};
