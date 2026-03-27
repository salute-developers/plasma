import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    outlineAccent,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    outlineTransparentNegative,
    outlineTransparentNegativeHover,
    outlineTransparentPositive,
    outlineTransparentPositiveHover,
    outlineTransparentWarning,
    outlineTransparentWarningHover,
    shadowDownHardM,
    surfaceAccent,
    surfaceNegative,
    surfacePositive,
    surfaceSolidCardBrightness,
    surfaceTransparentCard,
    surfaceTransparentCardActive,
    surfaceTransparentCardHover,
    surfaceTransparentNegative,
    surfaceTransparentNegativeActive,
    surfaceTransparentNegativeHover,
    surfaceTransparentPositive,
    surfaceTransparentPositiveActive,
    surfaceTransparentPositiveHover,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryActive,
    surfaceTransparentPrimaryHover,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryActive,
    surfaceTransparentTertiaryHover,
    surfaceTransparentWarning,
    surfaceTransparentWarningActive,
    surfaceTransparentWarningHover,
    surfaceWarning,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_finai';
import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${textAreaTokens.backgroundColor}: ${surfaceTransparentCard};
                ${textAreaTokens.backgroundColorHover}: ${surfaceTransparentCardHover};
                ${textAreaTokens.backgroundColorActive}: ${surfaceTransparentCardActive};
                ${textAreaTokens.backgroundColorFocus}: ${surfaceTransparentCard};
                ${textAreaTokens.borderColor}: ${outlineSolidPrimary};
                ${textAreaTokens.borderColorHover}: ${outlineSolidPrimaryHover};
                ${textAreaTokens.borderColorFocus}: ${outlineAccent};
                ${textAreaTokens.inputColor}: ${textPrimary};
                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.inputCaretColor}: ${textAccent};
                ${textAreaTokens.placeholderColor}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textTertiary};

                ${textAreaTokens.leftHelperColor}: ${textSecondary};
                ${textAreaTokens.leftHelperColorFocus}: ${textSecondary};
                ${textAreaTokens.rightHelperColor}: ${textSecondary};
                ${textAreaTokens.indicatorColor}: ${surfaceNegative};
                ${textAreaTokens.optionalColor}: ${textTertiary};

                ${textAreaTokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${textAreaTokens.dividerColor}: ${surfaceTransparentTertiary};
                ${textAreaTokens.dividerColorHover}: ${textSecondary};
                ${textAreaTokens.dividerColorFocus}: ${surfaceAccent};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
            positive: css`
                ${textAreaTokens.backgroundColor}: ${surfaceTransparentPositive};
                ${textAreaTokens.backgroundColorHover}: ${surfaceTransparentPositiveHover};
                ${textAreaTokens.backgroundColorActive}: ${surfaceTransparentPositiveActive};
                ${textAreaTokens.backgroundColorFocus}: ${surfaceTransparentCard};
                ${textAreaTokens.borderColor}: ${outlineTransparentPositive};
                ${textAreaTokens.borderColorHover}: ${outlineTransparentPositiveHover};
                ${textAreaTokens.borderColorFocus}: ${outlineAccent};
                ${textAreaTokens.inputColor}: ${textPrimary};

                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.inputCaretColor}: ${textAccent};
                ${textAreaTokens.placeholderColor}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textTertiary};

                ${textAreaTokens.leftHelperColor}: ${textPositive};
                ${textAreaTokens.leftHelperColorFocus}: ${textSecondary};
                ${textAreaTokens.rightHelperColor}: ${textSecondary};
                ${textAreaTokens.indicatorColor}: ${surfaceNegative};
                ${textAreaTokens.optionalColor}: ${textTertiary};

                ${textAreaTokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${textAreaTokens.dividerColor}: ${surfacePositive};
                ${textAreaTokens.dividerColorHover}: ${surfacePositive};
                ${textAreaTokens.dividerColorFocus}: ${surfaceAccent};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
            /**
             * @deprecated
             * Использовать `default`
             */
            primary: css`
                ${textAreaTokens.backgroundColor}: ${surfaceTransparentCard};
                ${textAreaTokens.backgroundColorHover}: ${surfaceTransparentCardHover};
                ${textAreaTokens.backgroundColorActive}: ${surfaceTransparentCardActive};
                ${textAreaTokens.backgroundColorFocus}: ${surfaceTransparentCard};
                ${textAreaTokens.borderColor}: ${outlineSolidPrimary};
                ${textAreaTokens.borderColorHover}: ${outlineSolidPrimaryHover};
                ${textAreaTokens.borderColorFocus}: ${outlineAccent};
                ${textAreaTokens.inputColor}: ${textPrimary};
                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.inputCaretColor}: ${textAccent};
                ${textAreaTokens.placeholderColor}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textTertiary};

                ${textAreaTokens.leftHelperColor}: ${textSecondary};
                ${textAreaTokens.leftHelperColorFocus}: ${textSecondary};
                ${textAreaTokens.rightHelperColor}: ${textSecondary};
                ${textAreaTokens.indicatorColor}: ${surfaceNegative};
                ${textAreaTokens.optionalColor}: ${textTertiary};

                ${textAreaTokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${textAreaTokens.dividerColor}: ${surfaceTransparentTertiary};
                ${textAreaTokens.dividerColorHover}: ${textSecondary};
                ${textAreaTokens.dividerColorFocus}: ${surfaceAccent};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
            warning: css`
                ${textAreaTokens.backgroundColor}: ${surfaceTransparentWarning};
                ${textAreaTokens.backgroundColorHover}: ${surfaceTransparentWarningHover};
                ${textAreaTokens.backgroundColorActive}: ${surfaceTransparentWarningActive};
                ${textAreaTokens.backgroundColorFocus}: ${surfaceTransparentCard};
                ${textAreaTokens.borderColor}: ${outlineTransparentWarning};
                ${textAreaTokens.borderColorHover}: ${outlineTransparentWarningHover};
                ${textAreaTokens.borderColorFocus}: ${outlineAccent};
                ${textAreaTokens.inputColor}: ${textPrimary};

                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.inputCaretColor}: ${textAccent};
                ${textAreaTokens.placeholderColor}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textTertiary};

                ${textAreaTokens.leftHelperColor}: ${textWarning};
                ${textAreaTokens.leftHelperColorFocus}: ${textSecondary};
                ${textAreaTokens.rightHelperColor}: ${textSecondary};
                ${textAreaTokens.indicatorColor}: ${surfaceNegative};
                ${textAreaTokens.optionalColor}: ${textTertiary};

                ${textAreaTokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${textAreaTokens.dividerColor}: ${surfaceWarning};
                ${textAreaTokens.dividerColorHover}: ${surfaceWarning};
                ${textAreaTokens.dividerColorFocus}: ${surfaceAccent};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
            negative: css`
                ${textAreaTokens.backgroundColor}: ${surfaceTransparentNegative};
                ${textAreaTokens.backgroundColorHover}: ${surfaceTransparentNegativeHover};
                ${textAreaTokens.backgroundColorActive}: ${surfaceTransparentNegativeActive};
                ${textAreaTokens.backgroundColorFocus}: ${surfaceTransparentCard};
                ${textAreaTokens.borderColor}: ${outlineTransparentNegative};
                ${textAreaTokens.borderColorHover}: ${outlineTransparentNegativeHover};
                ${textAreaTokens.borderColorFocus}: ${outlineAccent};
                ${textAreaTokens.inputColor}: ${textPrimary};

                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.inputCaretColor}: ${textAccent};
                ${textAreaTokens.placeholderColor}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textTertiary};

                ${textAreaTokens.leftHelperColor}: ${textNegative};
                ${textAreaTokens.leftHelperColorFocus}: ${textSecondary};
                ${textAreaTokens.rightHelperColor}: ${textSecondary};
                ${textAreaTokens.indicatorColor}: ${surfaceNegative};
                ${textAreaTokens.optionalColor}: ${textTertiary};

                ${textAreaTokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};

                ${textAreaTokens.dividerColor}: ${surfaceNegative};
                ${textAreaTokens.dividerColorHover}: ${surfaceNegative};
                ${textAreaTokens.dividerColorFocus}: ${surfaceAccent};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
        },
        size: {
            xl: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 6.812rem;
                ${textAreaTokens.inputMinHeight}: 1.625rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 1rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 1rem 1rem 1rem 1rem;
                ${textAreaTokens.inputPaddingTop}: 1.313rem;
                ${textAreaTokens.inputPaddingRight}: 1.25rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.5rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1.25rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 1.25rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 1.25rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 1.25rem;
                ${textAreaTokens.rightContentRight}: 1.25rem;
                ${textAreaTokens.rightContentHeight}: 1.5rem;
                ${textAreaTokens.labelMarginBottom}: 0.75rem;
                ${textAreaTokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.labelInnerLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.labelInnerTop}: 0.813rem;
                ${textAreaTokens.labelInnerTopHelper}: -0.313rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.25rem;
                ${textAreaTokens.inputFontFamily}: ${bodyL.fontFamily};
                ${textAreaTokens.inputFontSize}: ${bodyL.fontSize};
                ${textAreaTokens.inputFontStyle}: ${bodyL.fontStyle};
                ${textAreaTokens.inputFontWeight}: ${bodyL.fontWeight};
                ${textAreaTokens.inputLetterSpacing}: ${bodyL.letterSpacing};
                ${textAreaTokens.inputLineHeight}: ${bodyL.lineHeight};
                ${textAreaTokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.helpersFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.helpersLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.indicatorSizeInner}: 0.5rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${textAreaTokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: 0.751rem -2.938rem auto auto;
                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
            l: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 6.812rem;
                ${textAreaTokens.inputMinHeight}: 1.625rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 0.875rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.875rem 0.875rem 0.875rem 0.875rem;
                ${textAreaTokens.inputPaddingTop}: 1.063rem;
                ${textAreaTokens.inputPaddingRight}: 1.125rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.625rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1.125rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 1.125rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 1.125rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 1.063rem;
                ${textAreaTokens.rightContentRight}: 1rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.75rem;
                ${textAreaTokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.labelInnerLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.labelInnerTop}: 0.563rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: ${bodyL.fontFamily};
                ${textAreaTokens.inputFontSize}: ${bodyL.fontSize};
                ${textAreaTokens.inputFontStyle}: ${bodyL.fontStyle};
                ${textAreaTokens.inputFontWeight}: ${bodyL.fontWeight};
                ${textAreaTokens.inputLetterSpacing}: ${bodyL.letterSpacing};
                ${textAreaTokens.inputLineHeight}: ${bodyL.lineHeight};
                ${textAreaTokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.helpersFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.helpersLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.indicatorSizeInner}: 0.5rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;

                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
            m: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7rem;
                ${textAreaTokens.inputMinHeight}: 1.125rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 0.75rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.75rem 0.75rem 0.75rem 0.75rem;
                ${textAreaTokens.inputPaddingTop}: 0.875rem;
                ${textAreaTokens.inputPaddingRight}: 1rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.375rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 1rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 1rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.875rem;
                ${textAreaTokens.rightContentRight}: 0.875rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.625rem;
                ${textAreaTokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.labelInnerLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: ${bodyM.fontFamily};
                ${textAreaTokens.inputFontSize}: ${bodyM.fontSize};
                ${textAreaTokens.inputFontStyle}: ${bodyM.fontStyle};
                ${textAreaTokens.inputFontWeight}: ${bodyM.fontWeight};
                ${textAreaTokens.inputLetterSpacing}: ${bodyM.letterSpacing};
                ${textAreaTokens.inputLineHeight}: ${bodyM.lineHeight};
                ${textAreaTokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.helpersFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.helpersLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.indicatorSizeInner}: 0.5rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.4375rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.1875rem -0.625rem auto auto;

                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}:0.312rem -2.813rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.187rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 0.625rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0.625rem 0.625rem;
                ${textAreaTokens.inputPaddingTop}: 0.688rem;
                ${textAreaTokens.inputPaddingRight}: 0.875rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0.875rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.688rem;
                ${textAreaTokens.rightContentRight}: 0.75rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.5rem;
                ${textAreaTokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.labelInnerLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: ${bodyS.fontFamily};
                ${textAreaTokens.inputFontSize}: ${bodyS.fontSize};
                ${textAreaTokens.inputFontStyle}: ${bodyS.fontStyle};
                ${textAreaTokens.inputFontWeight}: ${bodyS.fontWeight};
                ${textAreaTokens.inputLetterSpacing}: ${bodyS.letterSpacing};
                ${textAreaTokens.inputLineHeight}: ${bodyS.lineHeight};
                ${textAreaTokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.helpersFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.helpersLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;

                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.063rem -2.238rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: 0.062rem -2.688rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
            xs: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.312rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 0.5rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.5rem 0.5rem 0.5rem 0.5rem;
                ${textAreaTokens.inputPaddingTop}: 0.563rem;
                ${textAreaTokens.inputPaddingRight}: 0.625rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 2.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.563rem;
                ${textAreaTokens.inputPaddingLeft}: 0.625rem;
                ${textAreaTokens.helpersPaddingTop}: 0.5rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0.625rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.563rem;
                ${textAreaTokens.helpersPaddingLeft}: 0.625rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.563rem;
                ${textAreaTokens.rightContentRight}: 0.5rem;
                ${textAreaTokens.rightContentHeight}: 1rem;
                ${textAreaTokens.labelMarginBottom}: 0.375rem;
                ${textAreaTokens.labelInnerFontFamily}: ${bodyXXS.fontFamily};
                ${textAreaTokens.labelInnerFontSize}: ${bodyXXS.fontSize};
                ${textAreaTokens.labelInnerFontStyle}: ${bodyXXS.fontStyle};
                ${textAreaTokens.labelInnerFontWeight}: ${bodyXXS.fontWeight};
                ${textAreaTokens.labelInnerLetterSpacing}: ${bodyXXS.letterSpacing};
                ${textAreaTokens.labelInnerLineHeight}: ${bodyXXS.lineHeight};
                ${textAreaTokens.labelInnerTop}: 0rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0rem;
                ${textAreaTokens.inputFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.inputFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.inputFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.inputFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.inputLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.inputLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.helpersFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.helpersFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.helpersFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.helpersFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.helpersLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.helpersLineHeight}: ${bodyXS.lineHeight};
                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.675rem auto auto;

                ${textAreaTokens.clearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;

                ${textAreaTokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: -0.188rem -2.188rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};
            `,
        },
        hintView: {
            default: css`
                ${textAreaTokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${textAreaTokens.tooltipBoxShadow}: ${shadowDownHardM};
                ${textAreaTokens.tooltipColor}: ${textPrimary};
                ${textAreaTokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        hintSize: {
            m: css`
                ${textAreaTokens.tooltipPaddingTop}: 0.688rem;
                ${textAreaTokens.tooltipPaddingRight}: 0.875rem;
                ${textAreaTokens.tooltipPaddingBottom}: 0.688rem;
                ${textAreaTokens.tooltipPaddingLeft}: 0.875rem;

                ${textAreaTokens.tooltipMinHeight}: 2.5rem;
                ${textAreaTokens.tooltipBorderRadius}: 0.625rem;

                ${textAreaTokens.tooltipTextFontFamily}: ${bodyS.fontFamily};
                ${textAreaTokens.tooltipTextFontSize}: ${bodyS.fontSize};
                ${textAreaTokens.tooltipTextFontStyle}: ${bodyS.fontStyle};
                ${textAreaTokens.tooltipTextFontWeight}: ${bodyS.fontWeight};
                ${textAreaTokens.tooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${textAreaTokens.tooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${textAreaTokens.tooltipContentLeftMargin}: 0.375rem;

                ${textAreaTokens.tooltipArrowMaskWidth}: 1.25rem;
                ${textAreaTokens.tooltipArrowMaskHeight}: 1.25rem;
                /* stylelint-disable-next-line */
                ${textAreaTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${textAreaTokens.tooltipArrowHeight}: 0.5rem;
                ${textAreaTokens.tooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${textAreaTokens.tooltipPaddingTop}: 0.5rem;
                ${textAreaTokens.tooltipPaddingRight}: 0.75rem;
                ${textAreaTokens.tooltipPaddingBottom}: 0.5rem;
                ${textAreaTokens.tooltipPaddingLeft}: 0.75rem;

                ${textAreaTokens.tooltipMinHeight}: 2rem;
                ${textAreaTokens.tooltipBorderRadius}: 0.5rem;

                ${textAreaTokens.tooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${textAreaTokens.tooltipTextFontSize}: ${bodyXS.fontSize};
                ${textAreaTokens.tooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${textAreaTokens.tooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${textAreaTokens.tooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${textAreaTokens.tooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${textAreaTokens.tooltipContentLeftMargin}: 0.25rem;

                ${textAreaTokens.tooltipArrowMaskWidth}: 1rem;
                ${textAreaTokens.tooltipArrowMaskHeight}: 1rem;
                /* stylelint-disable-next-line */
                ${textAreaTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${textAreaTokens.tooltipArrowHeight}: 0.375rem;
                ${textAreaTokens.tooltipArrowEdgeMargin}: 0.563rem;
            `,
        },
        readOnly: {
            true: css`
                ${textAreaTokens.backgroundColorReadOnly}: ${surfaceTransparentCard};
                ${textAreaTokens.inputColorReadOnly}: ${textPrimary};
                ${textAreaTokens.dividerColorReadOnly}: ${surfaceTransparentPrimary};
                ${textAreaTokens.contentSlotRightOpacityReadOnly}: 1;
                ${textAreaTokens.rightContentColor}: ${textSecondary};
                ${textAreaTokens.backgroundColor}: ${surfaceTransparentCard};
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 1;
                ${textAreaTokens.inputColorDisabled}: ${textSecondary};
                ${textAreaTokens.dividerColorReadOnly}: ${surfaceTransparentPrimary};
                ${textAreaTokens.titleCaptionColorReadOnly}: ${textSecondary};
                ${textAreaTokens.rightContentColor}: ${textSecondary};
                ${textAreaTokens.backgroundColor}: ${surfaceTransparentSecondary};
                ${textAreaTokens.borderColor}: transparent;
            `,
        },
    },
};
