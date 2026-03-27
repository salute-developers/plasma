import {
    bodyS,
    bodyXS,
    onLightSurfaceSolidCard,
    outlineAccent,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    surfaceAccent,
    surfaceSolidCard,
    surfaceSolidCardActive,
    surfaceSolidDefault,
    surfaceSolidPrimary,
    surfaceSolidTertiary,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, sliderTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${sliderTokens.labelColor}: ${textPrimary};

                ${sliderTokens.rangeValueColor}: ${textSecondary};

                ${sliderTokens.thumbBorderColor}: ${surfaceSolidTertiary};
                ${sliderTokens.thumbBackgroundColor}: ${onLightSurfaceSolidCard};
                ${sliderTokens.thumbFocusBorderColor}: ${surfaceSolidDefault};

                ${sliderTokens.railBackgroundColor}: ${surfaceSolidPrimary};

                ${sliderTokens.fillColor}: ${surfaceSolidDefault};

                ${sliderTokens.textFieldCaretColor}: ${textAccent};
                ${sliderTokens.textFieldColor}: ${textPrimary};
                ${sliderTokens.textFiledFocusColor}: ${textPrimary};
                ${sliderTokens.textFieldPlaceholderColor}: ${textSecondary};

                ${sliderTokens.textFieldBorderColor}: ${outlineSolidPrimary};
                ${sliderTokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${sliderTokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};

                ${sliderTokens.textFieldBackgroundColor}: ${surfaceSolidCard};
                ${sliderTokens.textFieldBackgroundColorHover}: ${surfaceSolidCard};
                ${sliderTokens.textFieldBackgroundColorFocus}: ${surfaceSolidCardActive};
            `,
            accent: css`
                ${sliderTokens.labelColor}: ${textPrimary};

                ${sliderTokens.rangeValueColor}: ${textSecondary};

                ${sliderTokens.thumbBorderColor}: ${surfaceSolidTertiary};
                ${sliderTokens.thumbBackgroundColor}: ${onLightSurfaceSolidCard};
                ${sliderTokens.thumbFocusBorderColor}: ${surfaceAccent};

                ${sliderTokens.railBackgroundColor}: ${surfaceSolidPrimary};

                ${sliderTokens.fillColor}: ${surfaceAccent};

                ${sliderTokens.textFieldColor}: ${textSecondary};

                ${sliderTokens.textFieldCaretColor}: ${textAccent};
                ${sliderTokens.textFieldColor}: ${textPrimary};
                ${sliderTokens.textFiledFocusColor}: ${textPrimary};
                ${sliderTokens.textFieldPlaceholderColor}: ${textSecondary};

                ${sliderTokens.textFieldBorderColor}: ${outlineSolidPrimary};
                ${sliderTokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${sliderTokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};

                ${sliderTokens.textFieldBackgroundColor}: ${surfaceSolidCard};
                ${sliderTokens.textFieldBackgroundColorHover}: ${surfaceSolidCard};
                ${sliderTokens.textFieldBackgroundColorFocus}: ${surfaceSolidCardActive};
            `,
        },
        size: {
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

                ${sliderTokens.textFieldWrapperGap}: 0.063rem;
                ${sliderTokens.textFieldBorderWidth}: 0.125rem;

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
