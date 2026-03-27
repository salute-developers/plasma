import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    onLightSurfaceSolidCard,
    surfaceAccent,
    surfaceAccentGradient,
    surfaceSolidDefault,
    surfaceSolidTertiary,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryHover,
    surfaceTransparentSecondary,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_bizcom';
import { css, sliderTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${sliderTokens.labelColor}: ${textPrimary};

                ${sliderTokens.rangeValueColor}: ${textSecondary};

                ${sliderTokens.thumbBorderColor}: ${surfaceSolidTertiary};
                ${sliderTokens.thumbBackgroundColor}: ${onLightSurfaceSolidCard};
                ${sliderTokens.thumbFocusBorderColor}: ${surfaceSolidDefault};

                ${sliderTokens.railBackgroundColor}: ${surfaceSolidTertiary};

                ${sliderTokens.fillColor}: ${surfaceSolidDefault};

                ${sliderTokens.textFieldCaretColor}: ${textAccent};
                ${sliderTokens.textFieldColor}: ${textPrimary};
                ${sliderTokens.textFiledFocusColor}: ${textPrimary};
                ${sliderTokens.textFieldPlaceholderColor}: ${textSecondary};

                ${sliderTokens.textFieldBackgroundColor}: ${surfaceTransparentPrimary};
                ${sliderTokens.textFieldBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
                ${sliderTokens.textFieldBackgroundColorFocus}: ${surfaceTransparentSecondary};
            `,
            accent: css`
                ${sliderTokens.labelColor}: ${textPrimary};

                ${sliderTokens.rangeValueColor}: ${textSecondary};

                ${sliderTokens.thumbBorderColor}: ${surfaceSolidTertiary};
                ${sliderTokens.thumbBackgroundColor}: ${onLightSurfaceSolidCard};
                ${sliderTokens.thumbFocusBorderColor}: ${surfaceAccent};

                ${sliderTokens.railBackgroundColor}: ${surfaceSolidTertiary};

                ${sliderTokens.fillColor}: ${surfaceAccent};

                ${sliderTokens.textFieldCaretColor}: ${textAccent};
                ${sliderTokens.textFieldColor}: ${textPrimary};
                ${sliderTokens.textFiledFocusColor}: ${textPrimary};
                ${sliderTokens.textFieldPlaceholderColor}: ${textSecondary};

                ${sliderTokens.textFieldBackgroundColor}: ${surfaceTransparentPrimary};
                ${sliderTokens.textFieldBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
                ${sliderTokens.textFieldBackgroundColorFocus}: ${surfaceTransparentSecondary};
            `,
            gradient: css`
                ${sliderTokens.labelColor}: ${textPrimary};

                ${sliderTokens.rangeValueColor}: ${textSecondary};

                ${sliderTokens.thumbBorderColor}: ${surfaceSolidTertiary};
                ${sliderTokens.thumbBackgroundColor}: ${onLightSurfaceSolidCard};
                ${sliderTokens.thumbFocusBorderColor}: ${surfaceAccentGradient};

                ${sliderTokens.railBackgroundColor}: ${surfaceSolidTertiary};

                ${sliderTokens.fillColor}: ${surfaceAccentGradient};

                ${sliderTokens.textFieldCaretColor}: ${textAccent};
                ${sliderTokens.textFieldColor}: ${textPrimary};
                ${sliderTokens.textFiledFocusColor}: ${textPrimary};
                ${sliderTokens.textFieldPlaceholderColor}: ${textSecondary};

                ${sliderTokens.textFieldBackgroundColor}: ${surfaceTransparentPrimary};
                ${sliderTokens.textFieldBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
                ${sliderTokens.textFieldBackgroundColorFocus}: ${surfaceTransparentSecondary};
            `,
        },
        size: {
            l: css`
                ${sliderTokens.size}: 1.5rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 1rem;
                ${sliderTokens.labelWrapperOnlyIconMarginRight}: 0.625rem;
                ${sliderTokens.labelWrapperVerticalMargin}: 1rem;

                ${sliderTokens.labelFontFamily}: ${bodyL.fontFamily};
                ${sliderTokens.labelFontSize}: ${bodyL.fontSize};
                ${sliderTokens.labelFontStyle}: ${bodyL.fontStyle};
                ${sliderTokens.labelFontWeight}: ${bodyL.fontWeight};
                ${sliderTokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${sliderTokens.labelLineHeight}: ${bodyL.lineHeight};

                ${sliderTokens.rangeValueHorizontalMargin}: 0.75rem;
                ${sliderTokens.rangeValueBottomOffset}: 0.875rem;
                ${sliderTokens.rangeValueHorizontalOffset}: 0.875rem;
                ${sliderTokens.rangeValueVerticalMargin}: 0.75rem;

                ${sliderTokens.valueFontFamily}: ${bodyM.fontFamily};
                ${sliderTokens.valueFontSize}: ${bodyM.fontSize};
                ${sliderTokens.valueFontStyle}: ${bodyM.fontStyle};
                ${sliderTokens.valueFontWeight}: ${bodyM.fontWeight};
                ${sliderTokens.valueLetterSpacing}: ${bodyM.letterSpacing};
                ${sliderTokens.valueLineHeight}: ${bodyM.lineHeight};

                ${sliderTokens.thumbSize}: 1rem;
                ${sliderTokens.thumbSizeLarge}: 1.25rem;
                ${sliderTokens.thumbBorder}: 0.0625rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.625rem;

                ${sliderTokens.railThickness}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.125rem;

                ${sliderTokens.textFieldHeight}: 3.5rem;
                ${sliderTokens.textFieldPadding}: 1.25rem 1rem 1.25rem 1rem;
                ${sliderTokens.textFieldBorderRadius}: 0.75rem;
                ${sliderTokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${sliderTokens.textFieldFontSize}: ${bodyL.fontSize};
                ${sliderTokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${sliderTokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${sliderTokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${sliderTokens.textFieldLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${sliderTokens.size}: 1.5rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 1rem;
                ${sliderTokens.labelWrapperOnlyIconMarginRight}: 0.625rem;
                ${sliderTokens.labelWrapperVerticalMargin}: 0.75rem;

                ${sliderTokens.labelFontFamily}: ${bodyM.fontFamily};
                ${sliderTokens.labelFontSize}: ${bodyM.fontSize};
                ${sliderTokens.labelFontStyle}: ${bodyM.fontStyle};
                ${sliderTokens.labelFontWeight}: ${bodyM.fontWeight};
                ${sliderTokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${sliderTokens.labelLineHeight}: ${bodyM.lineHeight};

                ${sliderTokens.rangeValueHorizontalMargin}: 0.75rem;
                ${sliderTokens.rangeValueBottomOffset}: 0.75rem;
                ${sliderTokens.rangeValueHorizontalOffset}: 0.875rem;
                ${sliderTokens.rangeValueVerticalMargin}: 0.625rem;

                ${sliderTokens.valueFontFamily}: ${bodyS.fontFamily};
                ${sliderTokens.valueFontSize}: ${bodyS.fontSize};
                ${sliderTokens.valueFontStyle}: ${bodyS.fontStyle};
                ${sliderTokens.valueFontWeight}: ${bodyS.fontWeight};
                ${sliderTokens.valueLetterSpacing}: ${bodyS.letterSpacing};
                ${sliderTokens.valueLineHeight}: ${bodyS.lineHeight};

                ${sliderTokens.thumbSize}: 1rem;
                ${sliderTokens.thumbSizeLarge}: 1.25rem;
                ${sliderTokens.thumbBorder}: 0.0625rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.75rem;

                ${sliderTokens.railThickness}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.125rem;

                ${sliderTokens.textFieldHeight}: 3rem;
                ${sliderTokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${sliderTokens.textFieldBorderRadius}: 0.75rem;
                ${sliderTokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${sliderTokens.textFieldFontSize}: ${bodyM.fontSize};
                ${sliderTokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${sliderTokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${sliderTokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${sliderTokens.textFieldLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${sliderTokens.size}: 1rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 1rem;
                ${sliderTokens.labelWrapperOnlyIconMarginRight}: 0.625rem;
                ${sliderTokens.labelWrapperVerticalMargin}: 0.625rem;

                ${sliderTokens.labelFontFamily}: ${bodyS.fontFamily};
                ${sliderTokens.labelFontSize}: ${bodyS.fontSize};
                ${sliderTokens.labelFontStyle}: ${bodyS.fontStyle};
                ${sliderTokens.labelFontWeight}: ${bodyS.fontWeight};
                ${sliderTokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${sliderTokens.labelLineHeight}: ${bodyS.lineHeight};

                ${sliderTokens.rangeValueHorizontalMargin}: 0.5rem;
                ${sliderTokens.rangeValueBottomOffset}: 0.625rem;
                ${sliderTokens.rangeValueHorizontalOffset}: 0.625rem;
                ${sliderTokens.rangeValueVerticalMargin}: 0.5rem;

                ${sliderTokens.valueFontFamily}: ${bodyXS.fontFamily};
                ${sliderTokens.valueFontSize}: ${bodyXS.fontSize};
                ${sliderTokens.valueFontStyle}: ${bodyXS.fontStyle};
                ${sliderTokens.valueFontWeight}: ${bodyXS.fontWeight};
                ${sliderTokens.valueLetterSpacing}: ${bodyXS.letterSpacing};
                ${sliderTokens.valueLineHeight}: ${bodyXS.lineHeight};

                ${sliderTokens.thumbSize}: 1rem;
                ${sliderTokens.thumbSizeLarge}: 1.25rem;
                ${sliderTokens.thumbBorder}: 0.0625rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.25rem;

                ${sliderTokens.railThickness}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.125rem;

                ${sliderTokens.textFieldHeight}: 2.5rem;
                ${sliderTokens.textFieldPadding}: 0.5rem 1rem 0.5rem 1rem;
                ${sliderTokens.textFieldBorderRadius}: 0.625rem;
                ${sliderTokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${sliderTokens.textFieldFontSize}: ${bodyS.fontSize};
                ${sliderTokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${sliderTokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${sliderTokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${sliderTokens.textFieldLineHeight}: ${bodyS.lineHeight};
            `,
        },
        disabled: {
            true: css`
                ${sliderTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
