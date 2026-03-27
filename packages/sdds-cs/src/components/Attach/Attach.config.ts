import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    onDarkTextPrimary,
    onLightTextAccentMinor,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
    surfaceSolidPrimary,
    surfaceSolidPrimaryActive,
    surfaceSolidPrimaryHover,
    surfaceTransparentAccent,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textNegative,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, attachTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        helperTextView: 'default',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            accent: css`
                ${attachTokens.buttonColor}: ${onDarkTextPrimary};
                ${attachTokens.buttonValueColor}: ${onLightTextAccentMinor};
                ${attachTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${attachTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceAccent};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceAccentHover};
                ${attachTokens.iconButtonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceAccentActive};

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
            `,
            secondary: css`
                ${attachTokens.buttonColor}: ${textAccent};
                ${attachTokens.buttonValueColor}: ${textSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfaceSolidPrimary};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${textAccentMinor};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceSolidPrimaryHover};
                ${attachTokens.buttonColorActive}: ${textAccentActive};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceSolidPrimaryActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${textAccent};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceSolidPrimary};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${textAccentMinor};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceSolidPrimaryHover};
                ${attachTokens.iconButtonColorActive}: ${textAccentMinor};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceSolidPrimaryActive};

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
            `,
            clear: css`
                ${attachTokens.buttonColor}: ${textAccent};
                ${attachTokens.buttonValueColor}: ${textAccentMinor};
                ${attachTokens.buttonBackgroundColor}: ${surfaceClear};
                ${attachTokens.buttonLoadingBackgroundColor}: ${surfaceTransparentAccent};
                ${attachTokens.buttonColorHover}: ${textAccentMinor};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceTransparentAccent};
                ${attachTokens.buttonColorActive}: ${textAccentActive};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${textAccent};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonLoadingBackgroundColor}: ${surfaceTransparentAccent};
                ${attachTokens.iconButtonColorHover}: ${textAccentMinor};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentAccent};
                ${attachTokens.iconButtonColorActive}: ${textAccentActive};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceClear};

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
                ${attachTokens.buttonHeight}: 2.5rem;
                ${attachTokens.buttonWidth}: 11.25rem;
                ${attachTokens.buttonPadding}: 1rem;
                ${attachTokens.buttonRadius}: 0.625rem;
                ${attachTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.buttonFontSize}: ${bodyM.fontSize};
                ${attachTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${attachTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.buttonLineHeight}: ${bodyM.lineHeight};

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
            `,
        },
    },
};
