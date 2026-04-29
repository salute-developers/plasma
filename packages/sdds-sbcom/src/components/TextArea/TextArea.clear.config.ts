import { css, textAreaTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    surfaceAccent,
    surfaceNegative,
    surfacePositive,
    surfaceSolidCardBrightness,
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXxs
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.inputBackgroundColor}: transparent;
                ${tokens.inputBackgroundColorHover}: transparent;
                ${tokens.inputBackgroundColorActive}: transparent;
                ${tokens.inputBackgroundColorFocus}: transparent;

                ${tokens.helpersBackgroundColor}: transparent;
                ${tokens.helpersBackgroundColorHover}: transparent;
                ${tokens.helpersBackgroundColorActive}: transparent;
                ${tokens.helpersBackgroundColorFocus}: transparent;

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

                ${tokens.labelOuterColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceTransparentTertiary};
                ${tokens.dividerColorHover}: ${textSecondary};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
            `,
            positive: css`
                ${tokens.inputBackgroundColor}: transparent;
                ${tokens.inputBackgroundColorHover}: transparent;
                ${tokens.inputBackgroundColorActive}: transparent;
                ${tokens.inputBackgroundColorFocus}: transparent;

                ${tokens.helpersBackgroundColor}: transparent;
                ${tokens.helpersBackgroundColorHover}: transparent;
                ${tokens.helpersBackgroundColorActive}: transparent;
                ${tokens.helpersBackgroundColorFocus}: transparent;

                ${tokens.inputColor}: ${textPositive};
                ${tokens.inputColorFocus}: ${textPositive};
                ${tokens.inputCaretColor}: ${textAccent};

                ${tokens.placeholderColor}: ${textPositive};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textPositive};
                ${tokens.rightHelperColor}: ${textSecondary};

                ${tokens.rightContentColor}: ${textSecondary};
                ${tokens.rightContentColorHover}: ${textSecondaryHover};
                ${tokens.rightContentColorActive}: ${textSecondaryActive};

                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};

                ${tokens.labelOuterColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfacePositive};
                ${tokens.dividerColorHover}: ${surfacePositive};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
            `,
            warning: css`
                ${tokens.inputBackgroundColor}: transparent;
                ${tokens.inputBackgroundColorHover}: transparent;
                ${tokens.inputBackgroundColorActive}: transparent;
                ${tokens.inputBackgroundColorFocus}: transparent;

                ${tokens.helpersBackgroundColor}: transparent;
                ${tokens.helpersBackgroundColorHover}: transparent;
                ${tokens.helpersBackgroundColorActive}: transparent;
                ${tokens.helpersBackgroundColorFocus}: transparent;

                ${tokens.inputColor}: ${textWarning};
                ${tokens.inputColorFocus}: ${textWarning};
                ${tokens.inputCaretColor}: ${textAccent};

                ${tokens.placeholderColor}: ${textWarning};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textWarning};
                ${tokens.rightHelperColor}: ${textSecondary};

                ${tokens.rightContentColor}: ${textSecondary};
                ${tokens.rightContentColorHover}: ${textSecondaryHover};
                ${tokens.rightContentColorActive}: ${textSecondaryActive};

                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};

                ${tokens.labelOuterColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceWarning};
                ${tokens.dividerColorHover}: ${surfaceWarning};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
            `,
            negative: css`
                ${tokens.inputBackgroundColor}: transparent;
                ${tokens.inputBackgroundColorHover}: transparent;
                ${tokens.inputBackgroundColorActive}: transparent;
                ${tokens.inputBackgroundColorFocus}: transparent;

                ${tokens.helpersBackgroundColor}: transparent;
                ${tokens.helpersBackgroundColorHover}: transparent;
                ${tokens.helpersBackgroundColorActive}: transparent;
                ${tokens.helpersBackgroundColorFocus}: transparent;

                ${tokens.inputColor}: ${textNegative};
                ${tokens.inputColorFocus}: ${textNegative};
                ${tokens.inputCaretColor}: ${textAccent};

                ${tokens.placeholderColor}: ${textNegative};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.leftHelperColor}: ${textNegative};
                ${tokens.rightHelperColor}: ${textSecondary};

                ${tokens.rightContentColor}: ${textSecondary};
                ${tokens.rightContentColorHover}: ${textSecondaryHover};
                ${tokens.rightContentColorActive}: ${textSecondaryActive};

                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};

                ${tokens.labelOuterColor}: ${textPrimary};

                ${tokens.dividerColor}: ${surfaceNegative};
                ${tokens.dividerColorHover}: ${surfaceNegative};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
            `,
        },
        size: {
            xl: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 6.812rem;
                ${tokens.inputMinHeight}: 1.375rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.borderRadiusWithHelpers}: 1rem 1rem 0 0;

                ${tokens.inputPaddingTop}: 1.313rem;
                ${tokens.inputPaddingRight}: 0;
                ${tokens.inputPaddingRightWithRightContent}: 2.25rem;
                ${tokens.inputPaddingBottom}: 1.313rem;
                ${tokens.inputPaddingBottomWithHelpers}: 1.313rem;
                ${tokens.inputPaddingLeft}: 0;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 1.25rem;
                ${tokens.rightContentRight}: 0;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerTop}: 0.813rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.25rem;

                ${tokens.inputFontFamily}: ${bodyL.fontFamily};
                ${tokens.inputFontSize}: ${bodyL.fontSize};
                ${tokens.inputFontStyle}: ${bodyL.fontStyle};
                ${tokens.inputFontWeight}: ${bodyL.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyL.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 1.75rem auto auto -0.875rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 1.75rem -0.875rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.75rem -2.488rem auto auto;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.82rem -2.188rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 6.812rem;
                ${tokens.inputMinHeight}: 1.375rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.borderRadiusWithHelpers}: 1rem 1rem 0 0;

                ${tokens.inputPaddingTop}: 1.063rem;
                ${tokens.inputPaddingRight}: 0;
                ${tokens.inputPaddingRightWithRightContent}: 2.25rem;
                ${tokens.inputPaddingBottom}: 1.063rem;
                ${tokens.inputPaddingBottomWithHelpers}: 1.063rem;
                ${tokens.inputPaddingLeft}: 0;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 1rem;
                ${tokens.rightContentRight}: 0;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerTop}: 0.5625rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.125rem;

                ${tokens.inputFontFamily}: ${bodyL.fontFamily};
                ${tokens.inputFontSize}: ${bodyL.fontSize};
                ${tokens.inputFontStyle}: ${bodyL.fontStyle};
                ${tokens.inputFontWeight}: ${bodyL.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyL.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.563rem -2.188rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 7rem;
                ${tokens.inputMinHeight}: 1.125rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderRadiusWithHelpers}: 0.75rem 0.75rem 0 0;

                ${tokens.inputPaddingTop}: 0.875rem;
                ${tokens.inputPaddingRight}: 0;
                ${tokens.inputPaddingRightWithRightContent}: 2.125rem;
                ${tokens.inputPaddingBottom}: 0.875rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0.875rem;
                ${tokens.inputPaddingLeft}: 0;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.75rem;
                ${tokens.rightContentRight}: 0;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerTop}: 0.375rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.125rem;

                ${tokens.inputFontFamily}: ${bodyM.fontFamily};
                ${tokens.inputFontSize}: ${bodyM.fontSize};
                ${tokens.inputFontStyle}: ${bodyM.fontStyle};
                ${tokens.inputFontWeight}: ${bodyM.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyM.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.6875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 7.187rem;
                ${tokens.inputMinHeight}: 0.625rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0 0;

                ${tokens.inputPaddingTop}: 0.688rem;
                ${tokens.inputPaddingRight}: 0;
                ${tokens.inputPaddingRightWithRightContent}: 2rem;
                ${tokens.inputPaddingBottom}: 0.688rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0.688rem;
                ${tokens.inputPaddingLeft}: 0;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.5rem;
                ${tokens.rightContentRight}: 0;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerTop}: 0.375rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.125rem;

                ${tokens.inputFontFamily}: ${bodyS.fontFamily};
                ${tokens.inputFontSize}: ${bodyS.fontSize};
                ${tokens.inputFontStyle}: ${bodyS.fontStyle};
                ${tokens.inputFontWeight}: ${bodyS.fontWeight};
                ${tokens.inputLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.inputLineHeight}: ${bodyS.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.063rem -2.238rem auto auto;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.188rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xs: css`
                ${tokens.inputWidth}: 100%;
                ${tokens.inputHeight}: 7.312rem;
                ${tokens.inputMinHeight}: 0.625rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.borderRadiusWithHelpers}: 0.5rem 0.5rem 0 0;

                ${tokens.inputPaddingTop}: 0.563rem;
                ${tokens.inputPaddingRight}: 0;
                ${tokens.inputPaddingRightWithRightContent}: 1.5rem;
                ${tokens.inputPaddingBottom}: 0.563rem;
                ${tokens.inputPaddingBottomWithHelpers}: 0.563rem;
                ${tokens.inputPaddingLeft}: 0;

                ${tokens.helpersPaddingTop}: 0.25rem;
                ${tokens.helpersPaddingRight}: 0;
                ${tokens.helpersPaddingBottom}: 0;
                ${tokens.helpersPaddingLeft}: 0;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.5rem;
                ${tokens.rightContentRight}: 0;
                ${tokens.rightContentHeight}: 1rem;

                ${tokens.labelMarginBottom}: 0.25rem;

                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.labelInnerTop}: 0rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.inputFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.inputFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.inputFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.inputFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.inputLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.inputLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.6875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 0.813rem -1.875rem auto auto;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.tooltipBoxShadow}: var(
                    --shadow-down-hard-m,
                    0px 4px 12px 0px rgba(0, 0, 0, 0.16),
                    0px 1px 4px 0px rgba(0, 0, 0, 0.08)
                );
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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

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
            `,
        },
        readOnly: {
            true: css`
                ${tokens.inputColorReadOnly}: ${textPrimary};
                ${tokens.titleCaptionColorReadOnly}: ${textSecondary};
                ${tokens.dividerColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.contentSlotRightOpacityReadOnly}: 0.4;
            `,
        },
    },
};
