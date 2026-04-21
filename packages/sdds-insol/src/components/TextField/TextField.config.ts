import {
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    inverseTextPrimary,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onDarkTextSecondaryHover,
    outlineClear,
    outlineNegativeMinor,
    outlineNegativeMinorActive,
    outlineNegativeMinorHover,
    outlinePositiveMinor,
    outlinePositiveMinorActive,
    outlinePositiveMinorHover,
    outlineSolidSecondary,
    outlineWarningMinor,
    outlineWarningMinorActive,
    outlineWarningMinorHover,
    shadowDownHardM,
    shadowDownSoftS,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceNegative,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfacePositive,
    surfacePositiveActive,
    surfacePositiveHover,
    surfaceSolidCardBrightness,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceSolidSecondary,
    surfaceTransparentCard,
    surfaceTransparentCardActive,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_insol';
import { css, textFieldTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
        chipView: 'secondary',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.clearPlaceholderColor}: ${textSecondary};
                ${tokens.clearPlaceholderColorFocus}: ${textTertiary};
                ${tokens.backgroundColor}: ${surfaceTransparentCard};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentCardActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};
                ${tokens.dividerColorHover}: ${textSecondary};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.borderColor}: ${outlineClear};
                ${tokens.borderColorFocus}: ${outlineSolidSecondary};
                ${tokens.borderColorHover}: ${outlineClear};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
                ${tokens.boxShadow}: ${shadowDownSoftS};
            `,
            positive: css`
                ${tokens.color}: color-mix(in oklab, ${textPositive} 70%, transparent);
                ${tokens.clearPlaceholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.clearPlaceholderColorFocus}: ${textTertiary};
                ${tokens.backgroundColor}: ${surfaceTransparentCard};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentCardActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: color-mix(in oklab, ${textPositive} 70%, transparent);
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfacePositive};
                ${tokens.dividerColorHover}: ${surfacePositive};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.borderColor}: ${outlinePositiveMinor};
                ${tokens.borderColorFocus}: ${outlinePositiveMinorActive};
                ${tokens.borderColorHover}: ${outlinePositiveMinorHover};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
                ${tokens.boxShadow}: ${shadowDownSoftS};
            `,
            warning: css`
                ${tokens.color}: color-mix(in oklab, ${textWarning} 70%, transparent);
                ${tokens.clearPlaceholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.clearPlaceholderColorFocus}: ${textTertiary};
                ${tokens.backgroundColor}: ${surfaceTransparentCard};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentCardActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: color-mix(in oklab, ${textWarning} 70%, transparent);
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfaceWarning};
                ${tokens.dividerColorHover}: ${surfaceWarning};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.borderColor}: ${outlineWarningMinor};
                ${tokens.borderColorFocus}: ${outlineWarningMinorActive};
                ${tokens.borderColorHover}: ${outlineWarningMinorHover};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
                ${tokens.boxShadow}: ${shadowDownSoftS};
            `,
            negative: css`
                ${tokens.color}: color-mix(in oklab, ${textNegative} 70%, transparent);
                ${tokens.clearPlaceholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.clearPlaceholderColorFocus}: ${textTertiary};
                ${tokens.backgroundColor}: ${surfaceTransparentCard};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentCardActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: color-mix(in oklab, ${textNegative} 70%, transparent);
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfaceNegative};
                ${tokens.dividerColorHover}: ${surfaceNegative};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.borderColor}: ${outlineNegativeMinor};
                ${tokens.borderColorFocus}: ${outlineNegativeMinorActive};
                ${tokens.borderColorHover}: ${outlineNegativeMinorHover};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
                ${tokens.boxShadow}: ${shadowDownSoftS};
            `,
        },
        size: {
            xl: css`
                ${tokens.height}: 4rem;
                ${tokens.padding}: 1.375rem 1.25rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.leftContentMargin}: -0.125rem 0.625rem -0.125rem 0rem;
                ${tokens.rightContentMargin}: -0.125rem 0rem -0.125rem 0.75rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyM.fontFamily};
                ${tokens.labelFontSize}: ${bodyM.fontSize};
                ${tokens.labelFontStyle}: ${bodyM.fontStyle};
                ${tokens.labelFontWeight}: ${bodyM.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyM.lineHeight};

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.82rem -2.938rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.82rem -2.063rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerPadding}: 0.8125rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.938rem 0 0.813rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.125rem;
                ${tokens.chipMarginRight}: 1rem;
                ${tokens.chipBorderRadius}: 0.625rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 3.25rem;
                ${tokens.chipPadding}: 0 0.75rem 0 1rem;
                ${tokens.chipClearContentMarginLeft}: 0.625rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1.5rem;
                ${tokens.chipFontFamily}: ${bodyM.fontFamily};
                ${tokens.chipFontSize}: ${bodyM.fontSize};
                ${tokens.chipFontStyle}: ${bodyM.fontStyle};
                ${tokens.chipFontWeight}: ${bodyM.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyM.lineHeight};

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorLabelPlacementInner}: 1.75rem auto auto -0.875rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 1.75rem -0.875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.75rem -2.488rem auto auto;
            `,
            l: css`
                ${tokens.height}: 3.5rem;
                ${tokens.padding}: 1rem 1.125rem 1rem 1.125rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.leftContentMargin}: -0.0625rem 0.625rem -0.0625rem 0rem;
                ${tokens.rightContentMargin}: -0.0625rem 0rem -0.0625rem 0.75rem;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.125rem;
                ${tokens.chipMarginRight}: 0.875rem;
                ${tokens.chipBorderRadius}: 0.5rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.75rem;
                ${tokens.chipPadding}: 0 0.75rem 0 1rem;
                ${tokens.chipClearContentMarginLeft}: 0.625rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1.25rem;
                ${tokens.chipFontFamily}: ${bodyS.fontFamily};
                ${tokens.chipFontSize}: ${bodyS.fontSize};
                ${tokens.chipFontStyle}: ${bodyS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyS.lineHeight};

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;
                ${tokens.clearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.5rem -2.25rem auto auto;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;
            `,
            m: css`
                ${tokens.height}: 3rem;
                ${tokens.padding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.leftContentMargin}: -0.125rem 0.625rem -0.125rem 0rem;
                ${tokens.rightContentMargin}: -0.125rem 0rem -0.125rem 0.75rem;

                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.125rem;
                ${tokens.chipMarginRight}: 0.75rem;
                ${tokens.chipBorderRadius}: 0.375rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.25rem;
                ${tokens.chipPadding}: 0 0.625rem 0 0.875rem;
                ${tokens.chipClearContentMarginLeft}: 0.5rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1rem;
                ${tokens.chipFontFamily}: ${bodyXS.fontFamily};
                ${tokens.chipFontSize}: ${bodyXS.fontSize};
                ${tokens.chipFontStyle}: ${bodyXS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyXS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;
                ${tokens.clearIndicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.25rem -2.25rem auto auto;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;
            `,
            s: css`
                ${tokens.height}: 2.5rem;
                ${tokens.padding}: 0.75rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.leftContentMargin}: -0.1875rem 0.5rem -0.1875rem 0rem;
                ${tokens.rightContentMargin}: -0.1875rem 0rem -0.1875rem 0.75rem;

                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.125rem;
                ${tokens.chipMarginRight}: 0.625rem;
                ${tokens.chipBorderRadius}: 0.25rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.75rem;
                ${tokens.chipPadding}: 0 0.5rem 0 0.75rem;
                ${tokens.chipClearContentMarginLeft}: 0.375rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1rem;
                ${tokens.chipFontFamily}: ${bodyXS.fontFamily};
                ${tokens.chipFontSize}: ${bodyXS.fontSize};
                ${tokens.chipFontStyle}: ${bodyXS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyXS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.6875rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;
                ${tokens.clearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;

                ${tokens.hintCustomIconTargetSize}: 1rem;
                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.1875rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.062rem -1.938rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.063rem -1.988rem auto auto;
            `,
            xs: css`
                ${tokens.height}: 2rem;
                ${tokens.padding}: 0.5rem 0.625rem 0.5rem 0.625rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.leftContentMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${tokens.rightContentMargin}: -0.0625rem 0rem -0.0625rem 0.625rem;

                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelOffset}: 0.375rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.125rem;
                ${tokens.chipMarginRight}: 0.375rem;
                ${tokens.chipBorderRadius}: 0.125rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.25rem;
                ${tokens.chipPadding}: 0 0.25rem 0 0.5rem;
                ${tokens.chipClearContentMarginLeft}: 0.25rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 0.75rem;
                ${tokens.chipFontFamily}: ${bodyXS.fontFamily};
                ${tokens.chipFontSize}: ${bodyXS.fontSize};
                ${tokens.chipFontStyle}: ${bodyXS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyXS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.375rem;
                ${tokens.clearIndicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 0.813rem -1.875rem auto auto;

                ${tokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.placeholderColor}: ${textSecondary};
            `,
            outer: css``,
        },
        clear: {
            true: css``,
        },
        chipView: {
            default: css`
                ${tokens.chipColor}: ${inverseTextPrimary};
                ${tokens.chipBackground}: ${surfaceSolidDefault};
                ${tokens.chipColorHover}: ${inverseTextPrimary};
                ${tokens.chipBackgroundHover}: ${surfaceSolidDefaultHover};
                ${tokens.chipColorActive}: ${inverseTextPrimary};
                ${tokens.chipBackgroundActive}: ${surfaceSolidDefaultActive};
                ${tokens.chipBackgroundReadOnly}: ${surfaceSolidDefault};
                ${tokens.chipColorReadOnly}: ${inverseTextPrimary};
                ${tokens.chipBackgroundReadOnlyHover}: ${surfaceSolidDefault};
                ${tokens.chipColorReadOnlyHover}: ${inverseTextPrimary};

                ${tokens.chipCloseIconColor}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.chipOpacityReadonly}: 1;
            `,
            secondary: css`
                ${tokens.chipColor}: ${textPrimary};
                ${tokens.chipBackground}: ${surfaceTransparentSecondary};
                ${tokens.chipColorHover}: ${textPrimary};
                ${tokens.chipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.chipColorActive}: ${textPrimary};
                ${tokens.chipBackgroundActive}: ${surfaceTransparentSecondaryActive};
                ${tokens.chipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.chipColorReadOnly}: ${textPrimary};
                ${tokens.chipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${tokens.chipColorReadOnlyHover}: ${textPrimary};

                ${tokens.chipCloseIconColor}: ${textSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${textSecondary};
                ${tokens.chipCloseIconColorHover}: ${textSecondaryHover};
                ${tokens.chipOpacityReadonly}: 1;
            `,
            accent: css`
                ${tokens.chipColor}: ${onDarkTextPrimary};
                ${tokens.chipBackground}: ${surfaceAccent};
                ${tokens.chipColorHover}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundHover}: ${surfaceAccentHover};
                ${tokens.chipColorActive}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundActive}: ${surfaceAccentActive};
                ${tokens.chipBackgroundReadOnly}: ${surfaceAccent};
                ${tokens.chipColorReadOnly}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundReadOnlyHover}: ${surfaceAccent};
                ${tokens.chipColorReadOnlyHover}: ${onDarkTextPrimary};

                ${tokens.chipCloseIconColor}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.chipOpacityReadonly}: 1;
            `,
            positive: css`
                ${tokens.chipColor}: ${onDarkTextPrimary};
                ${tokens.chipBackground}: ${surfacePositive};
                ${tokens.chipColorHover}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundHover}: ${surfacePositiveHover};
                ${tokens.chipColorActive}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundActive}: ${surfacePositiveActive};
                ${tokens.chipBackgroundReadOnly}: ${surfacePositive};
                ${tokens.chipColorReadOnly}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundReadOnlyHover}: ${surfacePositive};
                ${tokens.chipColorReadOnlyHover}: ${onDarkTextPrimary};

                ${tokens.chipCloseIconColor}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.chipOpacityReadonly}: 1;
            `,
            warning: css`
                ${tokens.chipColor}: ${onDarkTextPrimary};
                ${tokens.chipBackground}: ${surfaceWarning};
                ${tokens.chipColorHover}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundHover}: ${surfaceWarningHover};
                ${tokens.chipColorActive}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundActive}: ${surfaceWarningActive};
                ${tokens.chipBackgroundReadOnly}: ${surfaceWarning};
                ${tokens.chipColorReadOnly}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundReadOnlyHover}: ${surfaceWarning};
                ${tokens.chipColorReadOnlyHover}: ${onDarkTextPrimary};

                ${tokens.chipCloseIconColor}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.chipOpacityReadonly}: 1;
            `,
            negative: css`
                ${tokens.chipColor}: ${onDarkTextPrimary};
                ${tokens.chipBackground}: ${surfaceNegative};
                ${tokens.chipColorHover}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundHover}: ${surfaceNegativeHover};
                ${tokens.chipColorActive}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundActive}: ${surfaceNegativeActive};
                ${tokens.chipBackgroundReadOnly}: ${surfaceNegative};
                ${tokens.chipColorReadOnly}: ${onDarkTextPrimary};
                ${tokens.chipBackgroundReadOnlyHover}: ${surfaceNegative};
                ${tokens.chipColorReadOnlyHover}: ${onDarkTextPrimary};

                ${tokens.chipCloseIconColor}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${onDarkTextSecondary};
                ${tokens.chipCloseIconColorHover}: ${onDarkTextSecondaryHover};
                ${tokens.chipOpacityReadonly}: 1;
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.tooltipBoxShadow}: ${shadowDownHardM}, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.tooltipColor}: ${textPrimary};
                ${tokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        hintSize: {
            m: css`
                ${tokens.tooltipPaddingTop}: 0.6875rem;
                ${tokens.tooltipPaddingRight}: 0.875rem;
                ${tokens.tooltipPaddingBottom}: 0.6875rem;
                ${tokens.tooltipPaddingLeft}: 0.875rem;

                ${tokens.tooltipMinHeight}: 2.5rem;
                ${tokens.tooltipBorderRadius}: 0.625rem;

                ${tokens.tooltipTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.tooltipTextFontSize}: ${bodyS.fontSize};
                ${tokens.tooltipTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.tooltipTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.tooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.tooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.tooltipContentLeftMargin}: 0.375rem;

                ${tokens.tooltipArrowMaskWidth}: 1.25rem;
                ${tokens.tooltipArrowMaskHeight}: 1.25rem;
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.tooltipArrowHeight}: 0.5rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.tooltipPaddingTop}: 0.5rem;
                ${tokens.tooltipPaddingRight}: 0.75rem;
                ${tokens.tooltipPaddingBottom}: 0.5rem;
                ${tokens.tooltipPaddingLeft}: 0.75rem;

                ${tokens.tooltipMinHeight}: 2rem;
                ${tokens.tooltipBorderRadius}: 0.5rem;

                ${tokens.tooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.tooltipTextFontSize}: ${bodyXS.fontSize};
                ${tokens.tooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.tooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.tooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.tooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.tooltipContentLeftMargin}: 0.25rem;

                ${tokens.tooltipArrowMaskWidth}: 1rem;
                ${tokens.tooltipArrowMaskHeight}: 1rem;
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.tooltipArrowHeight}: 0.375rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
                ${tokens.borderColor}: transparent;
                ${tokens.color}: ${textPrimary};
                ${tokens.placeholderColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.dividerColor}: ${surfaceTransparentPrimary};
                ${tokens.boxShadow}: inset 0 0 0 0 transparent;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.readOnlyOpacity}: 1;
                ${tokens.contentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.colorReadOnly}: ${textPrimary};
                ${tokens.backgroundColorReadOnly}: ${surfaceSolidSecondary};
                ${tokens.placeholderColorReadOnly}: ${textSecondary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};
                ${tokens.titleCaptionColorReadOnly}: ${textSecondary};
                ${tokens.labelColorReadOnly}: ${textPrimary};
                ${tokens.dividerColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.borderColor}: transparent;
                ${tokens.borderWidth}: 0;
            `,
        },
    },
};
