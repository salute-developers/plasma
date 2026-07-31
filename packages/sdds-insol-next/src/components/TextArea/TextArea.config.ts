import { css, textAreaTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    outlineNegative,
    outlineNegativeActive,
    outlineNegativeHover,
    outlineSolidSecondary,
    outlineTransparentPrimary,
    outlineTransparentPrimaryHover,
    outlineWarning,
    outlineWarningActive,
    outlineWarningHover,
    shadowDownHardM,
    surfaceAccent,
    surfaceNegative,
    surfaceSolidCardBrightness,
    surfaceSolidSecondary,
    surfaceTransparentCard,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryActive,
    surfaceTransparentPrimaryHover,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryActive,
    surfaceTransparentTertiaryHover,
    surfaceWarning,
    textAccent,
    textNegative,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

export const config = {
    defaults: {
        view: 'default',
        size: 'xl',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${tokens.borderColor}: ${outlineTransparentPrimary};
                ${tokens.borderColorFocus}: ${outlineSolidSecondary};
                ${tokens.borderColorHover}: ${outlineTransparentPrimaryHover};

                ${tokens.backgroundColor}: ${surfaceTransparentCard};
                ${tokens.backgroundColorHover}: ${surfaceTransparentCard};
                ${tokens.backgroundColorActive}: ${surfaceTransparentCard};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentCard};

                ${tokens.labelOuterColor}: ${textPrimary};
                ${tokens.inputColor}: ${textPrimary};
                ${tokens.inputColorFocus}: ${textPrimary};
                ${tokens.inputCaretColor}: ${textAccent};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.rightHelperColor}: ${textSecondary};
                ${tokens.rightContentColor}: ${textSecondary};

                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};
                ${tokens.dividerColorHover}: ${textSecondary};
                ${tokens.dividerColorFocus}: ${surfaceAccent};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.boxShadowSecondary}: 0 0 0 0.25rem #E8EEF2;
            `,
            warning: css`
                ${tokens.borderColor}: ${outlineWarning};
                ${tokens.borderColorFocus}: ${outlineWarningActive};
                ${tokens.borderColorHover}: ${outlineWarningHover};

                ${tokens.backgroundColor}: ${surfaceTransparentCard};
                ${tokens.backgroundColorHover}: ${surfaceTransparentCard};
                ${tokens.backgroundColorActive}: ${surfaceTransparentCard};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentCard};

                ${tokens.labelOuterColor}: ${textPrimary};
                ${tokens.inputColor}: ${textWarning};
                ${tokens.inputColorFocus}: ${textWarning};
                ${tokens.inputCaretColor}: ${textAccent};

                ${tokens.placeholderColor}: ${textWarning};
                ${tokens.placeholderColorFocus}: ${textWarning};

                ${tokens.leftHelperColor}: ${textWarning};
                ${tokens.rightHelperColor}: ${textSecondary};
                ${tokens.rightContentColor}: ${textSecondary};

                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${tokens.dividerColor}: ${surfaceWarning};
                ${tokens.dividerColorHover}: ${surfaceWarning};
                ${tokens.dividerColorFocus}: ${surfaceAccent};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.boxShadowSecondary}: 0 0 0 0.25rem #E8EEF2;
            `,
            negative: css`
                ${tokens.borderColor}: ${outlineNegative};
                ${tokens.borderColorFocus}: ${outlineNegativeActive};
                ${tokens.borderColorHover}: ${outlineNegativeHover};

                ${tokens.backgroundColor}: ${surfaceTransparentCard};
                ${tokens.backgroundColorHover}: ${surfaceTransparentCard};
                ${tokens.backgroundColorActive}: ${surfaceTransparentCard};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentCard};

                ${tokens.labelOuterColor}: ${textPrimary};
                ${tokens.inputColor}: ${textNegative};
                ${tokens.inputColorFocus}: ${textNegative};
                ${tokens.inputCaretColor}: ${textAccent};

                ${tokens.placeholderColor}: ${textNegative};
                ${tokens.placeholderColorFocus}: ${textNegative};

                ${tokens.leftHelperColor}: ${textNegative};
                ${tokens.rightHelperColor}: ${textSecondary};
                ${tokens.rightContentColor}: ${textSecondary};

                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${tokens.dividerColor}: ${surfaceNegative};
                ${tokens.dividerColorHover}: ${surfaceNegative};
                ${tokens.dividerColorFocus}: ${surfaceAccent};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.boxShadowSecondary}: 0 0 0 0.25rem #E8EEF2;
            `,
        },
        size: {
            xl: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 5rem;
                ${tokens.inputMinHeight}: 1.625rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.borderSize}: 0.063rem;
                ${tokens.borderRadiusWithHelpers}: 1rem 1rem 0 0;

                ${tokens.inputPaddingTop}: 1.25rem;
                ${tokens.inputPaddingRight}: 1.25rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.5rem;
                ${tokens.inputPaddingBottom}: 0.875rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0rem;
                ${tokens.inputPaddingLeft}: 1.25rem;

                ${tokens.helpersPaddingTop}: 0.75rem;
                ${tokens.helpersPaddingRight}: 1.375rem;
                ${tokens.helpersPaddingBottom}: 0.875rem;
                ${tokens.helpersPaddingLeft}: 1.25rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 1.25rem;
                ${tokens.rightContentRight}: 1.25rem;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.75rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerTop}: 0.813rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.25rem;

                ${tokens.inputFontFamily}: ${bodyL.fontFamily};
                ${tokens.inputFontSize}: ${bodyL.fontSize};
                ${tokens.inputFontStyle}: ${bodyL.fontStyle};
                ${tokens.inputFontWeight}: ${bodyL.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyL.lineHeight};

                ${tokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helpersFontSize}: ${bodyXS.fontSize};
                ${tokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helpersLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.675rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.751rem -2.938rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
            l: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 5rem;
                ${tokens.inputMinHeight}: 1.625rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.borderSize}: 0.063rem;
                ${tokens.borderRadiusWithHelpers}: 0.875rem 0.875rem 0 0;

                ${tokens.inputPaddingTop}: 1rem;
                ${tokens.inputPaddingRight}: 1.125rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.375rem;
                ${tokens.inputPaddingBottom}: 0.875rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0rem;
                ${tokens.inputPaddingLeft}: 1.125rem;

                ${tokens.helpersPaddingTop}: 0.75rem;
                ${tokens.helpersPaddingRight}: 1.25rem;
                ${tokens.helpersPaddingBottom}: 0.875rem;
                ${tokens.helpersPaddingLeft}: 1.125rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 1rem;
                ${tokens.rightContentRight}: 1.125rem;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.75rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerTop}: 0.5625rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.125rem;

                ${tokens.inputFontFamily}: ${bodyL.fontFamily};
                ${tokens.inputFontSize}: ${bodyL.fontSize};
                ${tokens.inputFontStyle}: ${bodyL.fontStyle};
                ${tokens.inputFontWeight}: ${bodyL.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyL.lineHeight};

                ${tokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helpersFontSize}: ${bodyXS.fontSize};
                ${tokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helpersLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.675rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
            m: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 5rem;
                ${tokens.inputMinHeight}: 1.125rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderSize}: 0.063rem;
                ${tokens.borderRadiusWithHelpers}: 0.75rem 0.75rem 0 0;

                ${tokens.inputPaddingTop}: 0.75rem;
                ${tokens.inputPaddingRight}: 0.875rem;
                ${tokens.inputPaddingRightWithRightContent}: 2.875rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0rem;
                ${tokens.inputPaddingLeft}: 1rem;

                ${tokens.helpersPaddingTop}: 0.75rem;
                ${tokens.helpersPaddingRight}: 1rem;
                ${tokens.helpersPaddingBottom}: 0.75rem;
                ${tokens.helpersPaddingLeft}: 1rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.75rem;
                ${tokens.rightContentRight}: 0.875rem;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.625rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerTop}: 0.375rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.125rem;

                ${tokens.inputFontFamily}: ${bodyM.fontFamily};
                ${tokens.inputFontSize}: ${bodyM.fontSize};
                ${tokens.inputFontStyle}: ${bodyM.fontStyle};
                ${tokens.inputFontWeight}: ${bodyM.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyM.lineHeight};

                ${tokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helpersFontSize}: ${bodyXS.fontSize};
                ${tokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helpersLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.438rem auto auto -0.675rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.188rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
            s: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 5rem;
                ${tokens.inputMinHeight}: 0.625rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderSize}: 0.063rem;
                ${tokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0 0;

                ${tokens.inputPaddingTop}: 0.5rem;
                ${tokens.inputPaddingRight}: 0.75rem;
                ${tokens.inputPaddingRightWithRightContent}: 2.625rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0rem;
                ${tokens.inputPaddingLeft}: 0.875rem;

                ${tokens.helpersPaddingTop}: 0.75rem;
                ${tokens.helpersPaddingRight}: 0.875rem;
                ${tokens.helpersPaddingBottom}: 0.75rem;
                ${tokens.helpersPaddingLeft}: 0.875rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.5rem;
                ${tokens.rightContentRight}: 0.75rem;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.5rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.labelInnerTop}: 0.375rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.125rem;

                ${tokens.inputFontFamily}: ${bodyS.fontFamily};
                ${tokens.inputFontSize}: ${bodyS.fontSize};
                ${tokens.inputFontStyle}: ${bodyS.fontStyle};
                ${tokens.inputFontWeight}: ${bodyS.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyS.lineHeight};

                ${tokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helpersFontSize}: ${bodyXS.fontSize};
                ${tokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helpersLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.675rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.688rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
            xs: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 5rem;
                ${tokens.inputMinHeight}: 0.625rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.borderSize}: 0.063rem;
                ${tokens.borderRadiusWithHelpers}: 0.5rem 0.5rem 0 0;

                ${tokens.inputPaddingTop}: 0.5rem;
                ${tokens.inputPaddingRight}: 0.5rem;
                ${tokens.inputPaddingRightWithRightContent}: 1.75rem;
                ${tokens.inputPaddingBottom}: 0.5rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0rem;
                ${tokens.inputPaddingLeft}: 0.625rem;

                ${tokens.helpersPaddingTop}: 0.5rem;
                ${tokens.helpersPaddingRight}: 0.625rem;
                ${tokens.helpersPaddingBottom}: 0.5rem;
                ${tokens.helpersPaddingLeft}: 0.625rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.5rem;
                ${tokens.rightContentRight}: 0.5rem;
                ${tokens.rightContentHeight}: 1rem;

                ${tokens.labelMarginBottom}: 0.375rem;

                ${tokens.labelInnerFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.labelInnerTop}: 0rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0rem;

                ${tokens.inputFontFamily}: ${bodyXS.fontFamily};
                ${tokens.inputFontSize}: ${bodyXS.fontSize};
                ${tokens.inputFontStyle}: ${bodyXS.fontStyle};
                ${tokens.inputFontWeight}: ${bodyXS.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyXS.lineHeight};

                ${tokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helpersFontSize}: ${bodyXS.fontSize};
                ${tokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helpersLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.675rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.tooltipBoxShadow}: ${shadowDownHardM};
                ${tokens.tooltipColor}: ${textPrimary};
                ${tokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        hintSize: {
            m: css`
                ${tokens.tooltipPaddingTop}: 0.688rem;
                ${tokens.tooltipPaddingRight}: 0.875rem;
                ${tokens.tooltipPaddingBottom}: 0.688rem;
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
                /* stylelint-disable-next-line */
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
                /* stylelint-disable-next-line */
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.tooltipArrowHeight}: 0.375rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.563rem;
            `,
        },
        clear: {
            true: css``,
        },
        disabled: {
            true: css`
                ${tokens.boxShadow}: none;
                ${tokens.disabledOpacity}: 0.4;
                ${tokens.disabledInnerContentOpacity}: 0.4;
                ${tokens.disabledBackgroundOpacity}: 1;

                ${tokens.borderColor}: var(--outline-transparent-clear);
                ${tokens.borderColorHover}: var(--outline-transparent-clear);
                ${tokens.borderColorFocus}: var(--outline-transparent-clear);

                ${tokens.backgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.helpersBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.inputBackgroundColor}: ${surfaceTransparentPrimary};

                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.inputColorDisabled}: ${textPrimary};
                ${tokens.titleCaptionColorReadOnly}: ${textSecondary};
                ${tokens.dividerColorReadOnly}: ${surfaceTransparentPrimary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.readOnlyOpacity}: 1;
                ${tokens.contentSlotRightOpacityReadOnly}: 0.4;

                ${tokens.borderColor}: var(--outline-transparent-clear);
                ${tokens.borderColorHover}: var(--outline-transparent-clear);
                ${tokens.borderColorFocus}: var(--outline-transparent-clear);

                ${tokens.inputBackgroundColor}: ${surfaceSolidSecondary};
                ${tokens.backgroundColorReadOnly}: ${surfaceSolidSecondary};
                ${tokens.helpersBackgroundColor}: ${surfaceSolidSecondary};

                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.inputColorReadOnly}: ${textPrimary};
                ${tokens.inputColor}: ${textPrimary};
                ${tokens.inputColorFocus}: ${textPrimary};
                ${tokens.placeholderColorFocus}: ${textPrimary};
                ${tokens.labelOuterColor}: ${textPrimary};

                ${tokens.boxShadow}: none;
            `,
        },
    },
};
