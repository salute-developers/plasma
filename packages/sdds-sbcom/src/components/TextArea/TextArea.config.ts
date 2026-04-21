import { textAreaTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, bodyXxs, surfaceAccent, surfaceTransparentNegative
     * surfaceTransparentNegativeActive, surfaceTransparentNegativeHover, surfaceTransparentPositive
     * surfaceTransparentPositiveActive, surfaceTransparentPositiveHover, surfaceTransparentWarning
     * surfaceTransparentWarningActive, surfaceTransparentWarningHover
     */
    bodyL,
    bodyS,
    surfaceNegative,
    surfacePositive,
    surfaceSolidCardBrightness,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryActive,
    surfaceTransparentPrimaryHover,
    surfaceTransparentSecondary,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${tokens.inputBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.inputBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
                ${tokens.inputBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.inputBackgroundColorFocus}: ${surfaceTransparentSecondary};

                ${tokens.helpersBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.helpersBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
                ${tokens.helpersBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.helpersBackgroundColorFocus}: ${surfaceTransparentSecondary};

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.dividerColorFocus}: var(--surface-accent);
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
            `,
            positive: css`
                /* NOTE: no token surfaceTransparentPositive in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColor}: var(--surface-transparent-positive);
                /* NOTE: no token surfaceTransparentPositiveHover in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorHover}: var(--surface-transparent-positive-hover);
                /* NOTE: no token surfaceTransparentPositiveActive in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorActive}: var(--surface-transparent-positive-active);
                /* NOTE: no token surfaceTransparentPositive in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorFocus}: var(--surface-transparent-positive);

                /* NOTE: no token surfaceTransparentPositive in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColor}: var(--surface-transparent-positive);
                /* NOTE: no token surfaceTransparentPositiveHover in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorHover}: var(--surface-transparent-positive-hover);
                /* NOTE: no token surfaceTransparentPositiveActive in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorActive}: var(--surface-transparent-positive-active);
                /* NOTE: no token surfaceTransparentPositive in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorFocus}: var(--surface-transparent-positive);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.dividerColorFocus}: var(--surface-accent);
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
            `,
            warning: css`
                /* NOTE: no token surfaceTransparentWarning in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColor}: var(--surface-transparent-warning);
                /* NOTE: no token surfaceTransparentWarningHover in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorHover}: var(--surface-transparent-warning-hover);
                /* NOTE: no token surfaceTransparentWarningActive in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorActive}: var(--surface-transparent-warning-active);
                /* NOTE: no token surfaceTransparentWarning in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorFocus}: var(--surface-transparent-warning);

                /* NOTE: no token surfaceTransparentWarning in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColor}: var(--surface-transparent-warning);
                /* NOTE: no token surfaceTransparentWarningHover in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorHover}: var(--surface-transparent-warning-hover);
                /* NOTE: no token surfaceTransparentWarningActive in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorActive}: var(--surface-transparent-warning-active);
                /* NOTE: no token surfaceTransparentWarning in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorFocus}: var(--surface-transparent-warning);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.dividerColorFocus}: var(--surface-accent);
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
            `,
            negative: css`
                /* NOTE: no token surfaceTransparentNegative in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColor}: var(--surface-transparent-negative);
                /* NOTE: no token surfaceTransparentNegativeHover in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorHover}: var(--surface-transparent-negative-hover);
                /* NOTE: no token surfaceTransparentNegativeActive in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorActive}: var(--surface-transparent-negative-active);
                /* NOTE: no token surfaceTransparentNegative in @salutejs/sdds-themes/tokens */
                ${tokens.inputBackgroundColorFocus}: var(--surface-transparent-negative);

                /* NOTE: no token surfaceTransparentNegative in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColor}: var(--surface-transparent-negative);
                /* NOTE: no token surfaceTransparentNegativeHover in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorHover}: var(--surface-transparent-negative-hover);
                /* NOTE: no token surfaceTransparentNegativeActive in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorActive}: var(--surface-transparent-negative-active);
                /* NOTE: no token surfaceTransparentNegative in @salutejs/sdds-themes/tokens */
                ${tokens.helpersBackgroundColorFocus}: var(--surface-transparent-negative);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.dividerColorFocus}: var(--surface-accent);
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
                ${tokens.borderRadiusWithHelpers}: 1rem 1rem 0 0;

                ${tokens.inputPaddingTop}: 1.313rem;
                ${tokens.inputPaddingRight}: 1.25rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.5rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingLeft}: 1.25rem;

                ${tokens.helpersPaddingTop}: 0.75rem;
                ${tokens.helpersPaddingRight}: 1.25rem;
                ${tokens.helpersPaddingBottom}: 0.75rem;
                ${tokens.helpersPaddingLeft}: 1.25rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 1.25rem;
                ${tokens.rightContentRight}: 1.25rem;
                ${tokens.rightContentHeight}: 1.5rem;

                ${tokens.labelMarginBottom}: 0.75rem;

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
                ${tokens.inputMinHeight}: 1.625rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.borderRadiusWithHelpers}: 0.875rem 0.875rem 0 0;

                ${tokens.inputPaddingTop}: 1.063rem;
                ${tokens.inputPaddingRight}: 1.125rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.625rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingLeft}: 1.125rem;

                ${tokens.helpersPaddingTop}: 0.75rem;
                ${tokens.helpersPaddingRight}: 1.125rem;
                ${tokens.helpersPaddingBottom}: 0.75rem;
                ${tokens.helpersPaddingLeft}: 1.125rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 1.063rem;
                ${tokens.rightContentRight}: 1rem;
                ${tokens.rightContentHeight}: 1.25rem;

                ${tokens.labelMarginBottom}: 0.75rem;

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
                ${tokens.inputPaddingRight}: 1rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.375rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingLeft}: 1rem;

                ${tokens.helpersPaddingTop}: 0.75rem;
                ${tokens.helpersPaddingRight}: 1rem;
                ${tokens.helpersPaddingBottom}: 0.75rem;
                ${tokens.helpersPaddingLeft}: 1rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.875rem;
                ${tokens.rightContentRight}: 0.875rem;
                ${tokens.rightContentHeight}: 1.25rem;

                ${tokens.labelMarginBottom}: 0.625rem;

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

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.inputFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.inputFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.inputFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.inputFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.inputLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.inputLineHeight}: var(--plasma-typo-body-m-line-height);

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
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                /* stylelint-disable-next-line number-max-precision */
                ${tokens.indicatorLabelPlacementOuter}: 0.4375rem auto auto -0.675rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                /* stylelint-disable-next-line number-max-precision */
                ${tokens.indicatorLabelPlacementOuterRight}: 0.1875rem -0.625rem auto auto;
                ${tokens.indicatorLabelPlacementHintOuterRight}: -0.25rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;

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
                ${tokens.inputPaddingRight}: 0.875rem;
                ${tokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${tokens.inputPaddingBottom}: 0.75rem;
                ${tokens.inputPaddingLeft}: 0.875rem;

                ${tokens.helpersPaddingTop}: 0.75rem;
                ${tokens.helpersPaddingRight}: 0.875rem;
                ${tokens.helpersPaddingBottom}: 0.75rem;
                ${tokens.helpersPaddingLeft}: 0.875rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.688rem;
                ${tokens.rightContentRight}: 0.75rem;
                ${tokens.rightContentHeight}: 1.25rem;

                ${tokens.labelMarginBottom}: 0.5rem;

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
                ${tokens.inputPaddingRight}: 0.625rem;
                ${tokens.inputPaddingRightWithRightContent}: 2.125rem;
                ${tokens.inputPaddingBottom}: 0.563rem;
                ${tokens.inputPaddingLeft}: 0.625rem;

                ${tokens.helpersPaddingTop}: 0.5rem;
                ${tokens.helpersPaddingRight}: 0.625rem;
                ${tokens.helpersPaddingBottom}: 0.563rem;
                ${tokens.helpersPaddingLeft}: 0.625rem;
                ${tokens.helpersOffset}: 0rem;

                ${tokens.rightContentTop}: 0.563rem;
                ${tokens.rightContentRight}: 0.5rem;
                ${tokens.rightContentHeight}: 1rem;

                ${tokens.labelMarginBottom}: 0.375rem;

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
                ${tokens.tooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16), 0px 1px 4px 0px rgba(0, 0, 0, 0.08));
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
        readOnly: {
            true: css`
                ${tokens.readOnlyOpacity}: 0.1;
                ${tokens.backgroundColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.inputColorReadOnly}: ${textPrimary};
                ${tokens.dividerColorReadOnly}: ${surfaceTransparentPrimary};
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
