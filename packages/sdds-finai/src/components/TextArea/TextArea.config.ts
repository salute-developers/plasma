import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodyXS,
    dataBlueLight,
    dataBlueLightActive,
    dataBlueLightHover,
    outlineAccent,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    outlineTransparentInfo,
    outlineTransparentInfoActive,
    outlineTransparentInfoHover,
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

export const config = {
    defaults: {
        view: 'default',
        size: 's',
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
                ${textAreaTokens.labelOuterColor}: ${textSecondary};
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
                ${textAreaTokens.labelOuterColor}: ${textSecondary};
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
                ${textAreaTokens.labelOuterColor}: ${textSecondary};
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
                ${textAreaTokens.labelOuterColor}: ${textSecondary};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
            edited: css`
                ${textAreaTokens.backgroundColor}: ${dataBlueLight};
                ${textAreaTokens.backgroundColorHover}: ${dataBlueLightHover};
                ${textAreaTokens.backgroundColorActive}: ${dataBlueLightActive};
                ${textAreaTokens.backgroundColorFocus}: ${dataBlueLightActive};
                ${textAreaTokens.borderColor}: ${outlineTransparentInfo};
                ${textAreaTokens.borderColorHover}: ${outlineTransparentInfoHover};
                ${textAreaTokens.borderColorFocus}: ${outlineTransparentInfoActive};
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

                ${textAreaTokens.dividerColor}: ${outlineTransparentInfo};
                ${textAreaTokens.dividerColorHover}: ${outlineTransparentInfo};
                ${textAreaTokens.dividerColorFocus}: ${outlineTransparentInfoActive};
                ${textAreaTokens.labelOuterColor}: ${textSecondary};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
        },
        size: {
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
                ${textAreaTokens.outsideHelpersPaddingTop}: 0.25rem;
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
                ${textAreaTokens.backgroundColorReadOnly}: ${surfaceTransparentSecondary};
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
