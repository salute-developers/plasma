import {
    bodyM,
    bodyS,
    bodyXS,
    outlineAccent,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidCardActive,
    surfaceSolidCardBrightness,
    surfaceSolidPrimary,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textNegative,
    textNegativeActive,
    textNegativeHover,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, textFieldTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.backgroundColor}: ${surfaceSolidCard};
                ${tokens.backgroundColorFocus}: ${surfaceSolidCardActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.textBeforeColor}: ${textSecondary};
                ${tokens.textAfterColor}: ${textSecondary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.rightHelperColor}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.contentSlotColorHover}: ${textSecondaryHover};
                ${tokens.contentSlotColorActive}: ${textSecondaryActive};
                ${tokens.contentSlotRightColor}: ${textAccent};
                ${tokens.contentSlotRightColorHover}: ${textAccentMinor};
                ${tokens.contentSlotRightColorActive}: ${textAccentActive};

                ${tokens.chipCloseIconColor}: ${textSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${textSecondary};
                ${tokens.chipCloseIconColorHover}: ${textPrimary};
                ${tokens.chipColor}: ${textPrimary};
                ${tokens.chipBackground}: var(--surface-transparent-secondary);
                ${tokens.chipColorHover}: ${textPrimaryHover};
                ${tokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${tokens.chipColorActive}: ${textPrimary};
                ${tokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnly}: ${textPrimary};
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnlyHover}: ${textPrimary};
                ${tokens.chipOpacityReadonly}: 0.72;

                ${tokens.focusColor}: ${textAccent};
                ${tokens.borderColor}: ${outlineSolidPrimary};
                ${tokens.borderColorFocus}: ${outlineAccent};
                ${tokens.borderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
            negative: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.backgroundColor}: ${surfaceSolidCard};
                ${tokens.backgroundColorFocus}: ${surfaceSolidCardActive};
                ${tokens.caretColor}: ${textAccent};
                ${tokens.placeholderColor}: ${textSecondary};
                ${tokens.placeholderColorFocus}: ${textTertiary};
                ${tokens.textBeforeColor}: ${textSecondary};
                ${tokens.textAfterColor}: ${textSecondary};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textNegative};
                ${tokens.rightHelperColor}: ${textNegative};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textNegative};
                ${tokens.contentSlotColorHover}: ${textNegativeHover};
                ${tokens.contentSlotColorActive}: ${textNegativeActive};
                ${tokens.contentSlotRightColor}: ${textAccent};
                ${tokens.contentSlotRightColorHover}: ${textAccentMinor};
                ${tokens.contentSlotRightColorActive}: ${textAccentActive};

                ${tokens.chipCloseIconColor}: ${textSecondary};
                ${tokens.chipCloseIconColorReadonly}: ${textSecondary};
                ${tokens.chipCloseIconColorHover}: ${textPrimary};
                ${tokens.chipColor}: ${textPrimary};
                ${tokens.chipBackground}: var(--surface-transparent-secondary);
                ${tokens.chipColorHover}: ${textPrimary};
                ${tokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${tokens.chipColorActive}: ${textPrimary};
                ${tokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnly}: ${textPrimary};
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnlyHover}: ${textPrimary};
                ${tokens.chipOpacityReadonly}: 0.72;

                ${tokens.borderColor}: ${textNegative};
                ${tokens.focusColor}: ${textNegative};
                ${tokens.indicatorColor}: ${surfaceNegative};
                ${tokens.optionalColor}: ${textTertiary};
            `,
        },
        size: {
            m: css`
                ${tokens.height}: 3rem;
                ${tokens.padding}: 0.75rem 0.875rem 0.75rem 0.875rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.leftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.rightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.rightContentWithHintMargin}: -0.125rem -0.438rem -0.125rem 0.75rem;

                ${tokens.contentRightWrapperGap}: 0.25rem;
                ${tokens.contentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

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

                ${tokens.leftHelperPadding}: 0.25rem;
                ${tokens.leftHelperFontFamily}: ${bodyS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyS.lineHeight};

                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

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
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.6875rem auto auto;
            `,
            s: css`
                ${tokens.height}: 2.5rem;
                ${tokens.padding}: 0.6875rem 0.75rem 0.6875rem 0.75rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.leftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.rightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

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

                ${tokens.leftHelperPadding}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyS.lineHeight};

                ${tokens.rightHelperOffset}: 0.25rem 0 0 0.25rem;
                ${tokens.rightHelperFontFamily}: ${bodyS.fontFamily};
                ${tokens.rightHelperFontSize}: ${bodyS.fontSize};
                ${tokens.rightHelperFontStyle}: ${bodyS.fontStyle};
                ${tokens.rightHelperFontWeight}: ${bodyS.fontWeight};
                ${tokens.rightHelperLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.rightHelperLineHeight}: ${bodyS.lineHeight};

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

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
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
            `,
        },
        labelPlacement: {
            outer: css``,
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
                ${tokens.disabledOpacity}: 1;
                ${tokens.backgroundColor}: ${surfaceSolidPrimary};
                ${tokens.backgroundColorFocus}: ${surfaceSolidPrimary};
                ${tokens.borderColor}: ${surfaceSolidPrimary};
                ${tokens.borderColorHover}: ${surfaceSolidPrimary};
                ${tokens.borderColorFocus}: ${surfaceSolidPrimary};
                ${tokens.color}: ${textSecondary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.readOnlyOpacity}: 1;
                ${tokens.colorReadOnly}: ${textPrimary};
                ${tokens.backgroundColorReadOnly}: ${surfaceClear};
                ${tokens.placeholderColorReadOnly}: ${textSecondary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};
                ${tokens.rightHelperColorReadOnly}: ${textSecondary};
                ${tokens.titleCaptionColorReadOnly}: ${textSecondary};
                ${tokens.labelColorReadOnly}: ${textSecondary};
                ${tokens.contentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.borderColor}: transparent;
                ${tokens.borderWidth}: 0;
            `,
        },
    },
};
