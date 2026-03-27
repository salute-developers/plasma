import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    inverseSurfaceTransparentSecondary,
    inverseTextPrimary,
    inverseTextPrimaryActive,
    inverseTextPrimaryHover,
    inverseTextTertiary,
    onDarkSurfaceTransparentSecondary,
    onDarkTextPrimary,
    onDarkTextPrimaryActive,
    onDarkTextPrimaryHover,
    onDarkTextTertiary,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentNegative,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    textAccent,
    textNegative,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, numberInputTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        shape: 'cornered',
        inputBackgroundType: 'fill',
    },
    variations: {
        view: {
            default: css`
                ${tokens.caretColor}: ${textAccent};
                ${tokens.errorColor}: ${textNegative};
                ${tokens.backgroundErrorColor}: ${surfaceTransparentNegative};

                ${tokens.color}: ${textPrimary};
                ${tokens.colorSolid}: ${inverseTextPrimary};
                ${tokens.additionalTextColor}: ${textTertiary};
                ${tokens.additionalTextColorSolid}: ${inverseTextTertiary};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.backgroundColorSolidFocus}: ${inverseSurfaceTransparentSecondary};
                ${tokens.backgroundColorSolid}: ${surfaceSolidDefault};

                ${tokens.iconButtonColor}: ${inverseTextPrimary};
                ${tokens.iconButtonBackgroundColor}: ${surfaceSolidDefault};
                ${tokens.iconButtonColorHover}: ${inverseTextPrimary};
                ${tokens.iconButtonColorSolidHover}: ${inverseTextPrimaryHover};
                ${tokens.iconButtonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${tokens.iconButtonColorActive}: ${inverseTextPrimary};
                ${tokens.iconButtonColorSolidActive}: ${inverseTextPrimaryActive};
                ${tokens.iconButtonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
            secondary: css`
                ${tokens.caretColor}: ${textAccent};
                ${tokens.errorColor}: ${textNegative};
                ${tokens.backgroundErrorColor}: ${surfaceTransparentNegative};

                ${tokens.color}: ${textPrimary};
                ${tokens.colorSolid}: ${textPrimary};
                ${tokens.additionalTextColor}: ${textTertiary};
                ${tokens.additionalTextColorSolid}: ${textTertiary};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.backgroundColorSolidFocus}: ${surfaceTransparentSecondary};
                ${tokens.backgroundColorSolid}: ${surfaceTransparentSecondary};

                ${tokens.iconButtonColor}: ${textPrimary};
                ${tokens.iconButtonBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.iconButtonColorHover}: ${textPrimary};
                ${tokens.iconButtonColorSolidHover}: ${textPrimaryHover};
                ${tokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.iconButtonColorActive}: ${textPrimary};
                ${tokens.iconButtonColorSolidActive}: ${textPrimaryActive};
                ${tokens.iconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
            accent: css`
                ${tokens.caretColor}: ${textAccent};
                ${tokens.caretColorSolid}: ${inverseTextPrimary};
                ${tokens.errorColor}: ${textNegative};
                ${tokens.backgroundErrorColor}: ${surfaceTransparentNegative};

                ${tokens.color}: ${textPrimary};
                ${tokens.colorSolid}: ${onDarkTextPrimary};
                ${tokens.additionalTextColor}: ${textTertiary};
                ${tokens.additionalTextColorSolid}: ${onDarkTextTertiary};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.backgroundColorSolidFocus}: ${onDarkSurfaceTransparentSecondary};
                ${tokens.backgroundColorSolid}: ${surfaceAccent};

                ${tokens.iconButtonColor}: ${onDarkTextPrimary};
                ${tokens.iconButtonBackgroundColor}: ${surfaceAccent};
                ${tokens.iconButtonColorHover}: ${inverseTextPrimary};
                ${tokens.iconButtonColorSolidHover}: ${onDarkTextPrimaryHover};
                ${tokens.iconButtonBackgroundColorHover}: ${surfaceAccentHover};
                ${tokens.iconButtonColorActive}: ${inverseTextPrimary};
                ${tokens.iconButtonColorSolidActive}: ${onDarkTextPrimaryActive};
                ${tokens.iconButtonBackgroundColorActive}: ${surfaceAccentActive};

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
            clear: css`
                ${tokens.caretColor}: ${textAccent};
                ${tokens.caretColorSolid}: ${textAccent};
                ${tokens.errorColor}: ${textNegative};
                ${tokens.backgroundErrorColor}: ${surfaceTransparentNegative};

                ${tokens.color}: ${textPrimary};
                ${tokens.colorSolid}: ${textPrimary};
                ${tokens.iconButtonColorSolidHover}: ${textPrimaryHover};
                ${tokens.additionalTextColor}: ${textTertiary};
                ${tokens.additionalTextColorSolid}: ${textTertiary};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.backgroundColorSolidFocus}: ${surfaceTransparentSecondary};
                ${tokens.backgroundColorSolid}: transparent;

                ${tokens.iconButtonColor}: ${textPrimary};
                ${tokens.iconButtonBackgroundColor}: transparent;
                ${tokens.iconButtonColorHover}: ${textPrimaryHover};
                ${tokens.iconButtonBackgroundColorHover}: transparent;
                ${tokens.iconButtonColorActive}: ${textPrimaryActive};
                ${tokens.iconButtonBackgroundColorActive}: transparent;

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
        },
        size: {
            l: css`
                ${tokens.rootMinWidth}: 11.75rem;
                ${tokens.iconButtonHeight}: 3.5rem;
                ${tokens.iconButtonWidth}: 3.5rem;
                ${tokens.iconButtonPadding}: 1.5rem;
                ${tokens.iconButtonFontFamily}: ${bodyL.fontFamily};
                ${tokens.iconButtonFontSize}: ${bodyL.fontSize};
                ${tokens.iconButtonFontStyle}: ${bodyL.fontStyle};
                ${tokens.iconButtonFontWeight}: ${bodyLBold.fontWeight};
                ${tokens.iconButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.iconButtonLineHeight}: ${bodyL.lineHeight};

                ${tokens.iconButtonRadius}: 0.875rem;
                ${tokens.iconButtonSegmentationRadius}: 0.375rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.875rem;
                ${tokens.textWrapperHeight}: 3.5rem;
                ${tokens.textWrapperPadding}: 1.063rem 1.125rem;

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1.375rem;
            `,
            m: css`
                ${tokens.rootMinWidth}: 10.25rem;
                ${tokens.iconButtonHeight}: 3rem;
                ${tokens.iconButtonWidth}: 3rem;
                ${tokens.iconButtonPadding}: 1.25rem;
                ${tokens.iconButtonFontFamily}: ${bodyM.fontFamily};
                ${tokens.iconButtonFontSize}: ${bodyM.fontSize};
                ${tokens.iconButtonFontStyle}: ${bodyM.fontStyle};
                ${tokens.iconButtonFontWeight}: ${bodyMBold.fontWeight};
                ${tokens.iconButtonLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.iconButtonLineHeight}: ${bodyM.lineHeight};

                ${tokens.iconButtonRadius}: 0.75rem;
                ${tokens.iconButtonSegmentationRadius}: 0.25rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.75rem;
                ${tokens.textWrapperHeight}: 3rem;
                ${tokens.textWrapperPadding}: 0.875rem 1rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1.375rem;
            `,
            s: css`
                ${tokens.rootMinWidth}: 8.75rem;
                ${tokens.iconButtonHeight}: 2.5rem;
                ${tokens.iconButtonWidth}: 2.5rem;
                ${tokens.iconButtonPadding}: 1rem;
                ${tokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${tokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${tokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${tokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${tokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${tokens.iconButtonRadius}: 0.625rem;
                ${tokens.iconButtonSegmentationRadius}: 0.25rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.625rem;
                ${tokens.textWrapperHeight}: 2.5rem;
                ${tokens.textWrapperPadding}: 0.688rem 0.875rem;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1.375rem;
            `,
            xs: css`
                ${tokens.rootMinWidth}: 6.875rem;
                ${tokens.iconButtonHeight}: 2rem;
                ${tokens.iconButtonWidth}: 2rem;
                ${tokens.iconButtonPadding}: 0.75rem;
                ${tokens.iconButtonFontFamily}: ${bodyXS.fontFamily};
                ${tokens.iconButtonFontSize}: ${bodyXS.fontSize};
                ${tokens.iconButtonFontStyle}: ${bodyXS.fontStyle};
                ${tokens.iconButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.iconButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.iconButtonLineHeight}: ${bodyXS.lineHeight};

                ${tokens.iconButtonRadius}: 0.5rem;
                ${tokens.iconButtonSegmentationRadius}: 0.125rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.5rem;
                ${tokens.textWrapperHeight}: 2rem;
                ${tokens.textWrapperPadding}: 0.563rem 0.625rem;

                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXS.lineHeight};

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1rem;
            `,
        },
        shape: {
            cornered: css``,
            pilled: css`
                ${tokens.iconButtonRadius}: 50%;
            `,
        },
        inputBackgroundType: {
            fill: css`
                ${tokens.backgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.backgroundColorHover}: ${surfaceTransparentPrimary};
            `,
            clear: css`
                ${tokens.backgroundColor}: transparent;
                ${tokens.backgroundColorHover}: transparent;
            `,
        },
        segmentation: {
            default: css``,
            segmented: css``,
            solid: css`
                ${tokens.iconButtonSegmentationRadius}: 0;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
