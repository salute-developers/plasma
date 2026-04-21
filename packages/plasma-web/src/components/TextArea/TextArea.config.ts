import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    outlineNegative,
    outlineNegativeActive,
    outlineNegativeHover,
    outlinePositive,
    outlinePositiveActive,
    outlinePositiveHover,
    outlineReadOnly,
    outlineTransparentPrimary,
    outlineTransparentPrimaryActive,
    outlineTransparentPrimaryHover,
    outlineWarning,
    outlineWarningActive,
    outlineWarningHover,
    shadowDownHardM,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfacePositive,
    surfaceSolidCardBrightness,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryActive,
    surfaceTransparentPrimaryHover,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryActive,
    surfaceTransparentTertiaryHover,
    surfaceWarning,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_web';
import { css, textAreaTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${tokens.inputBorderColor}: ${outlineTransparentPrimary};
                ${tokens.inputBorderColorHover}: ${outlineTransparentPrimaryHover};
                ${tokens.inputBorderColorActive}: ${outlineTransparentPrimaryActive};
                ${tokens.inputBorderColorFocus}: ${textAccent};

                ${tokens.inputColor}: ${textPrimary};
                ${tokens.inputColorFocus}: ${textPrimary};
                ${tokens.inputCaretColor}: ${textAccent};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.rightHelperColor}: ${textSecondary};

                ${tokens.rightContentColor}: ${textSecondary};
                ${tokens.rightContentColorHover}: ${textSecondaryHover};
                ${tokens.rightContentColorActive}: ${textSecondaryActive};

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
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${tokens.inputBorderColor}: ${outlineTransparentPrimary};
                ${tokens.inputBorderColorHover}: ${outlineTransparentPrimaryHover};
                ${tokens.inputBorderColorActive}: ${outlineTransparentPrimaryActive};
                ${tokens.inputBorderColorFocus}: ${textAccent};

                ${tokens.inputColor}: ${textPrimary};
                ${tokens.inputColorFocus}: ${textPrimary};
                ${tokens.inputCaretColor}: ${textAccent};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.rightHelperColor}: ${textSecondary};

                ${tokens.rightContentColor}: ${textSecondary};
                ${tokens.rightContentColorHover}: ${textSecondaryHover};
                ${tokens.rightContentColorActive}: ${textSecondaryActive};

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
            `,
            positive: css`
                ${tokens.inputBorderColor}: ${outlinePositive};
                ${tokens.inputBorderColorHover}: ${outlinePositiveHover};
                ${tokens.inputBorderColorActive}: ${outlinePositiveActive};
                ${tokens.inputBorderColorFocus}: ${textPositive};

                ${tokens.inputColor}: ${textPrimary};
                ${tokens.inputColorFocus}: ${textPrimary};
                ${tokens.inputCaretColor}: ${textPositive};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textPositive};
                ${tokens.rightHelperColor}: ${textSecondary};

                ${tokens.rightContentColor}: ${textSecondary};
                ${tokens.rightContentColorHover}: ${textSecondaryHover};
                ${tokens.rightContentColorActive}: ${textSecondaryActive};

                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${tokens.dividerColor}: ${surfacePositive};
                ${tokens.dividerColorHover}: ${surfacePositive};
                ${tokens.dividerColorFocus}: ${surfaceAccent};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
            `,
            warning: css`
                ${tokens.inputBorderColor}: ${outlineWarning};
                ${tokens.inputBorderColorHover}: ${outlineWarningHover};
                ${tokens.inputBorderColorActive}: ${outlineWarningActive};
                ${tokens.inputBorderColorFocus}: ${textWarning};

                ${tokens.inputColor}: ${textPrimary};
                ${tokens.inputColorFocus}: ${textPrimary};
                ${tokens.inputCaretColor}: ${textWarning};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textWarning};
                ${tokens.rightHelperColor}: ${textSecondary};

                ${tokens.rightContentColor}: ${textSecondary};
                ${tokens.rightContentColorHover}: ${textSecondaryHover};
                ${tokens.rightContentColorActive}: ${textSecondaryActive};

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
            `,
            negative: css`
                ${tokens.inputBorderColor}: ${outlineNegative};
                ${tokens.inputBorderColorHover}: ${outlineNegativeHover};
                ${tokens.inputBorderColorActive}: ${outlineNegativeActive};
                ${tokens.inputBorderColorFocus}: ${textNegative};

                ${tokens.inputColor}: ${textPrimary};
                ${tokens.inputColorFocus}: ${textPrimary};
                ${tokens.inputCaretColor}: ${textNegative};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textNegative};
                ${tokens.rightHelperColor}: ${textSecondary};

                ${tokens.rightContentColor}: ${textSecondary};
                ${tokens.rightContentColorHover}: ${textSecondaryHover};
                ${tokens.rightContentColorActive}: ${textSecondaryActive};

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
            `,
        },
        size: {
            xl: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 6.812rem;
                ${tokens.inputMinHeight}: 1.625rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.borderRadiusWithHelpers}: 1rem 1rem;

                ${tokens.inputPaddingTop}: 1.313rem;
                ${tokens.inputPaddingRight}: 1.25rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.5rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${tokens.inputPaddingLeft}: 1.25rem;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0rem;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0.375rem;

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
                ${tokens.inputHeight}: 6.812rem;
                ${tokens.inputMinHeight}: 1.625rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.borderRadiusWithHelpers}: 0.875rem;

                ${tokens.inputPaddingTop}: 1.063rem;
                ${tokens.inputPaddingRight}: 1.125rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.625rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${tokens.inputPaddingLeft}: 1.125rem;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0rem;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0.375rem;

                ${tokens.rightContentTop}: 1.063rem;
                ${tokens.rightContentRight}: 1rem;
                ${tokens.rightContentHeight}: 1.25rem;

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
                ${tokens.inputHeight}: 7rem;
                ${tokens.inputMinHeight}: 1.125rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderRadiusWithHelpers}: 0.75rem;

                ${tokens.inputPaddingTop}: 0.875rem;
                ${tokens.inputPaddingRight}: 1rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.375rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${tokens.inputPaddingLeft}: 1rem;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0rem;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0.375rem;

                ${tokens.rightContentTop}: 0.875rem;
                ${tokens.rightContentRight}: 0.875rem;
                ${tokens.rightContentHeight}: 1.25rem;

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
                ${tokens.inputHeight}: 7.187rem;
                ${tokens.inputMinHeight}: 0.625rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderRadiusWithHelpers}: 0.625rem;

                ${tokens.inputPaddingTop}: 0.688rem;
                ${tokens.inputPaddingRight}: 0.875rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${tokens.inputPaddingLeft}: 0.875rem;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0rem;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0.375rem;

                ${tokens.rightContentTop}: 0.688rem;
                ${tokens.rightContentRight}: 0.75rem;
                ${tokens.rightContentHeight}: 1.25rem;

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
                ${tokens.inputHeight}: 7.312rem;
                ${tokens.inputMinHeight}: 0.625rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.borderRadiusWithHelpers}: 0.5rem;

                ${tokens.inputPaddingTop}: 0.563rem;
                ${tokens.inputPaddingRight}: 0.625rem;
                ${tokens.inputPaddingRightWithRightContent}: 2.125rem;
                ${tokens.inputPaddingBottom}: 0.563rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0.563rem;
                ${tokens.inputPaddingLeft}: 0.625rem;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0rem;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0.375rem;

                ${tokens.rightContentTop}: 0.563rem;
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
        clear: {
            true: css``,
        },
        readOnly: {
            true: css`
                ${tokens.readOnlyOpacity}: 0.1;
                ${tokens.backgroundColorReadOnly}: ${surfaceClear};
                ${tokens.inputColorReadOnly}: ${textPrimary};
                ${tokens.borderColorReadOnly}: ${outlineReadOnly};
                ${tokens.dividerColorReadOnly}: ${outlineReadOnly};
                ${tokens.contentSlotRightOpacityReadOnly}: 0.4;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
                ${tokens.inputColorDisabled}: ${textSecondary};
                ${tokens.dividerColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.titleCaptionColorReadOnly}: ${textSecondary};
            `,
        },
    },
};
