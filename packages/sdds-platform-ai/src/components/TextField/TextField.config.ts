import {
    bodyM,
    bodyS,
    bodyXS,
    inverseTextPrimary,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onDarkTextSecondaryHover,
    shadowDownHardM,
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
    surfaceTransparentNegative,
    surfaceTransparentNegativeActive,
    surfaceTransparentNegativeHover,
    surfaceTransparentPositive,
    surfaceTransparentPositiveActive,
    surfaceTransparentPositiveHover,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    surfaceTransparentWarning,
    surfaceTransparentWarningActive,
    surfaceTransparentWarningHover,
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
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
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
                ${tokens.clearColor}: ${textPrimary};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.clearPlaceholderColor}: ${textSecondary};
                ${tokens.clearPlaceholderColorFocus}: ${textTertiary};

                ${tokens.backgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.backgroundColorHover}: ${surfaceTransparentPrimaryHover};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentSecondary};
                ${tokens.caretColor}: ${textPrimary};
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
                ${tokens.color}: ${textPrimary};
                ${tokens.clearColor}: ${textPositive};

                ${tokens.placeholderColor}: ${textSecondary};

                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.clearPlaceholderColor}: ${textPositive};
                ${tokens.clearPlaceholderColorFocus}: ${textPositive};

                ${tokens.backgroundColor}: ${surfaceTransparentPositive};
                ${tokens.backgroundColorHover}: ${surfaceTransparentPositiveHover};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentPositiveActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textPositive};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfacePositive};
                ${tokens.dividerColorHover}: ${surfacePositive};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            warning: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.clearColor}: ${textWarning};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.clearPlaceholderColor}: ${textWarning};
                ${tokens.clearPlaceholderColorFocus}: ${textWarning};

                ${tokens.backgroundColor}: ${surfaceTransparentWarning};
                ${tokens.backgroundColorHover}: ${surfaceTransparentWarningHover};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentWarningActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textWarning};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfaceWarning};
                ${tokens.dividerColorHover}: ${surfaceWarning};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            negative: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.clearColor}: ${textNegative};

                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.clearPlaceholderColor}: ${textNegative};
                ${tokens.clearPlaceholderColorFocus}: ${textNegative};

                ${tokens.backgroundColor}: ${surfaceTransparentNegative};
                ${tokens.backgroundColorHover}: ${surfaceTransparentNegativeHover};
                ${tokens.backgroundColorFocus}: ${surfaceTransparentNegativeActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.textBeforeColor}: ${textTertiary};
                ${tokens.textAfterColor}: ${textTertiary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textNegative};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};

                ${tokens.dividerColor}: ${surfaceNegative};
                ${tokens.dividerColorHover}: ${surfaceNegative};
                ${tokens.dividerColorFocus}: ${surfaceAccent};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
        },
        size: {
            m: css`
                ${tokens.height}: 3rem;
                ${tokens.padding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 1.25rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.leftContentMargin}: -0.125rem 0.25rem -0.125rem -0.125rem;
                ${tokens.rightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
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
                ${tokens.clearLabelOffset}: 0.25rem;

                ${tokens.labelFontFamily}: ${bodyM.fontFamily};
                ${tokens.labelFontSize}: ${bodyM.fontSize};
                ${tokens.labelFontStyle}: ${bodyM.fontStyle};
                ${tokens.labelFontWeight}: ${bodyM.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyM.lineHeight};

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.813rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.312rem -2.188rem auto auto;

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

                ${tokens.chipGap}: 0.125rem;
                ${tokens.chipBorderRadius}: 1rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.25rem;
                ${tokens.chipPadding}: 0 0.375rem 0 0.5rem;
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
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.6875rem auto auto;
                ${tokens.clearIndicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.25rem -2.488rem auto auto;

                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};
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
            `,
        },
        readOnly: {
            true: css`
                ${tokens.readOnlyOpacity}: 0.1;
                ${tokens.colorReadOnly}: ${textPrimary};
                ${tokens.backgroundColorReadOnly}: ${surfaceTransparentPrimary};
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
