import { css, textFieldTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    inverseTextPrimary,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onDarkTextSecondaryHover,
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
    textNegativeActive,
    textNegativeHover,
    textPositive,
    textPositiveActive,
    textPositiveHover,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
    textWarning,
    textWarningActive,
    textWarningHover,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textPrimary};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};

                ${tokens.backgroundColor}: transparent;
                ${tokens.backgroundColorHover}: transparent;
                ${tokens.backgroundColorFocus}: transparent;
                ${tokens.caretColor}: ${textAccent};
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
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            positive: css`
                ${tokens.color}: ${textPositive};

                ${tokens.placeholderColor}: ${textPositive};
                ${tokens.placeholderColorFocus}: ${textPositive};

                ${tokens.backgroundColor}: transparent;
                ${tokens.backgroundColorHover}: transparent;
                ${tokens.backgroundColorFocus}: transparent;
                ${tokens.caretColor}: ${textAccent};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textPositive};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textPositive};
                ${tokens.contentSlotColorHover}: ${textPositiveHover};
                ${tokens.contentSlotColorActive}: ${textPositiveActive};

                ${tokens.contentSlotRightColor}: ${textSecondary};
                ${tokens.contentSlotRightColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotRightColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfacePositive};
                ${tokens.dividerColorHover}: ${surfacePositive};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            warning: css`
                ${tokens.color}: ${textWarning};

                ${tokens.placeholderColor}: ${textWarning};
                ${tokens.placeholderColorFocus}: ${textWarning};

                ${tokens.backgroundColor}: transparent;
                ${tokens.backgroundColorHover}: transparent;
                ${tokens.backgroundColorFocus}: transparent;
                ${tokens.caretColor}: ${textAccent};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textWarning};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textWarning};
                ${tokens.contentSlotColorHover}: ${textWarningHover};
                ${tokens.contentSlotColorActive}: ${textWarningActive};

                ${tokens.contentSlotRightColor}: ${textSecondary};
                ${tokens.contentSlotRightColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotRightColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfaceWarning};
                ${tokens.dividerColorHover}: ${surfaceWarning};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            negative: css`
                ${tokens.color}: ${textNegative};

                ${tokens.placeholderColor}: ${textNegative};
                ${tokens.placeholderColorFocus}: ${textNegative};

                ${tokens.backgroundColor}: transparent;
                ${tokens.backgroundColorHover}: transparent;
                ${tokens.backgroundColorFocus}: transparent;
                ${tokens.caretColor}: ${textAccent};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textNegative};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textNegative};
                ${tokens.contentSlotColorHover}: ${textNegativeHover};
                ${tokens.contentSlotColorActive}: ${textNegativeActive};

                ${tokens.contentSlotRightColor}: ${textSecondary};
                ${tokens.contentSlotRightColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotRightColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfaceNegative};
                ${tokens.dividerColorHover}: ${surfaceNegative};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
        },
        size: {
            xl: css`
                ${tokens.height}: 4rem;
                ${tokens.padding}: 1.3125rem 0;
                ${tokens.paddingWithChips}: 0.375rem 0;
                ${tokens.borderRadius}: 0;

                ${tokens.leftContentMargin}: -0.0625rem 0.5rem -0.0625rem 0rem;
                ${tokens.rightContentMargin}: -0.0625rem 0rem -0.0625rem 0.75rem;
                ${tokens.rightContentWithHintMargin}: -0.0625rem -0.438rem -0.0625rem 0.75rem;

                ${tokens.contentRightWrapperGap}: 0.25rem;
                ${tokens.contentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.82rem -2.063rem auto auto;

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

                ${tokens.leftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.8125rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.813rem 0 0.813rem 0;
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
                ${tokens.chipFontFamily}: ${bodyL.fontFamily};
                ${tokens.chipFontSize}: ${bodyL.fontSize};
                ${tokens.chipFontStyle}: ${bodyL.fontStyle};
                ${tokens.chipFontWeight}: ${bodyL.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyL.lineHeight};

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

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 1.75rem auto auto -0.875rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 1.75rem -0.875rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.75rem -2.488rem auto auto;
            `,
            l: css`
                ${tokens.height}: 3.5rem;
                ${tokens.padding}: 1.0625rem 0;
                ${tokens.paddingWithChips}: 0.375rem 0;
                ${tokens.borderRadius}: 0;

                ${tokens.leftContentMargin}: -0.0625rem 0.5rem -0.0625rem 0;
                ${tokens.rightContentMargin}: -0.0625rem 0 -0.0625rem 0.75rem;
                ${tokens.rightContentWithHintMargin}: -0.0625rem -0.438rem -0.0625rem 0.75rem;

                ${tokens.contentRightWrapperGap}: 0.25rem;
                ${tokens.contentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

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

                ${tokens.leftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.5rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.75rem;
                ${tokens.chipPadding}: 0 0.75rem 0 1rem;
                ${tokens.chipClearContentMarginLeft}: 0.625rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1.5rem;
                ${tokens.chipFontFamily}: ${bodyL.fontFamily};
                ${tokens.chipFontSize}: ${bodyL.fontSize};
                ${tokens.chipFontStyle}: ${bodyL.fontStyle};
                ${tokens.chipFontWeight}: ${bodyL.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyL.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.5rem -2.488rem auto auto;
            `,
            m: css`
                ${tokens.height}: 3rem;
                ${tokens.padding}: 0.875rem 0;
                ${tokens.paddingWithChips}: 0.375rem 0;
                ${tokens.borderRadius}: 0;

                ${tokens.leftContentMargin}: -0.125rem 0.375rem -0.125rem 0;
                ${tokens.rightContentMargin}: -0.125rem 0 -0.125rem 0.75rem;
                ${tokens.rightContentWithHintMargin}: -0.125rem -0.438rem -0.125rem 0.75rem;

                ${tokens.contentRightWrapperGap}: 0.25rem;
                ${tokens.contentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyM.fontFamily};
                ${tokens.labelFontSize}: ${bodyM.fontSize};
                ${tokens.labelFontStyle}: ${bodyM.fontStyle};
                ${tokens.labelFontWeight}: ${bodyM.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyM.lineHeight};

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

                ${tokens.leftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.375rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.25rem;
                ${tokens.chipPadding}: 0 0.625rem 0 0.875rem;
                ${tokens.chipClearContentMarginLeft}: 0.5rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1.25rem;
                ${tokens.chipFontFamily}: ${bodyM.fontFamily};
                ${tokens.chipFontSize}: ${bodyM.fontSize};
                ${tokens.chipFontStyle}: ${bodyM.fontStyle};
                ${tokens.chipFontWeight}: ${bodyM.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyM.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.6875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;
            `,
            s: css`
                ${tokens.height}: 2.5rem;
                ${tokens.padding}: 0.6875rem 0;
                ${tokens.paddingWithChips}: 0.375rem 0;
                ${tokens.borderRadius}: 0;

                ${tokens.leftContentMargin}: -0.1875rem 0.25rem -0.1875rem 0;
                ${tokens.rightContentMargin}: -0.1875rem 0 -0.1875rem 0.75rem;
                ${tokens.rightContentWithHintMargin}: -0.1875rem -0.438rem -0.1875rem 0.75rem;

                ${tokens.contentRightWrapperGap}: 0.25rem;
                ${tokens.contentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

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

                ${tokens.leftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.25rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.75rem;
                ${tokens.chipPadding}: 0 0.5rem 0 0.75rem;
                ${tokens.chipClearContentMarginLeft}: 0.375rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1rem;
                ${tokens.chipFontFamily}: ${bodyS.fontFamily};
                ${tokens.chipFontSize}: ${bodyS.fontSize};
                ${tokens.chipFontStyle}: ${bodyS.fontStyle};
                ${tokens.chipFontWeight}: ${bodyS.fontWeight};
                ${tokens.chipLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.chipLineHeight}: ${bodyS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.063rem -2.238rem auto auto;
            `,
            xs: css`
                ${tokens.height}: 2rem;
                ${tokens.padding}: 0.5625rem 0;
                ${tokens.paddingWithChips}: 0.375rem 0;
                ${tokens.borderRadius}: 0;

                ${tokens.leftContentMargin}: -0.0625rem 0.25rem -0.0625rem 0;
                ${tokens.rightContentMargin}: -0.0625rem 0 -0.0625rem 0.75rem;
                ${tokens.rightContentWithHintMargin}: -0.0625rem -0.688rem -0.0625rem 0.75rem;

                ${tokens.contentRightWrapperGap}: 0.25rem;
                ${tokens.contentRightWrapperMargin}: -0.688rem -0.688rem -0.688rem 0;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.leftHelperOffset}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.125rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.25rem;
                ${tokens.chipPadding}: 0 0.375rem 0 0.625rem;
                ${tokens.chipClearContentMarginLeft}: 0.25rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 0.75rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.chipLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${tokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.6875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 0.813rem -1.988rem auto auto;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.placeholderColor}: ${textSecondary};
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
            `,
            outer: css``,
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

                ${tokens.chipCloseIconColor}: ${inverseTextSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${inverseTextSecondary};
                ${tokens.chipCloseIconColorHover}: ${inverseTextSecondaryHover};
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
                ${tokens.tooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
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
                ${tokens.readOnlyOpacity}: 0.1;
                ${tokens.colorReadOnly}: ${textPrimary};
                ${tokens.backgroundColorReadOnly}: transparent;
                ${tokens.placeholderColorReadOnly}: ${textSecondary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};
                ${tokens.titleCaptionColorReadOnly}: ${textSecondary};
                ${tokens.labelColorReadOnly}: ${textPrimary};
                ${tokens.dividerColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.contentSlotRightOpacityReadOnly}: 0.4;
            `,
        },
    },
};
