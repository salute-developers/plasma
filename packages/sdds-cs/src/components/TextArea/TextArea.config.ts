import {
    bodyM,
    bodyS,
    bodyXS,
    outlineAccent,
    outlineNegative,
    outlineNegativeHover,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    surfaceAccent,
    surfaceClear,
    surfaceSolidCard,
    surfaceSolidCardActive,
    surfaceSolidCardBrightness,
    surfaceSolidCardHover,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceSolidPrimary,
    surfaceSolidPrimaryActive,
    surfaceSolidPrimaryHover,
    textAccent,
    textNegative,
    textNegativeHover,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, textAreaTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${textAreaTokens.borderColor}: ${outlineSolidPrimary};
                ${textAreaTokens.borderColorHover}: ${outlineSolidPrimaryHover};
                ${textAreaTokens.borderColorFocus}: ${outlineAccent};
                ${textAreaTokens.backgroundColor}: ${surfaceSolidCard};
                ${textAreaTokens.backgroundColorHover}: ${surfaceSolidCardHover};
                ${textAreaTokens.backgroundColorActive}: ${surfaceSolidCardActive};
                ${textAreaTokens.backgroundColorFocus}: ${surfaceSolidCard};

                ${textAreaTokens.inputColor}: ${textPrimary};
                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.inputCaretColor}: ${textAccent};

                ${textAreaTokens.placeholderColor}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textSecondary};

                ${textAreaTokens.leftHelperColor}: ${textSecondary};
                ${textAreaTokens.rightHelperColor}: ${textSecondary};

                ${textAreaTokens.rightContentColor}: ${textAccent};

                ${textAreaTokens.indicatorColor}: ${textNegative};
                ${textAreaTokens.optionalColor}: ${textSecondary};

                ${textAreaTokens.scrollbarThumbBackgroundColor}: ${surfaceSolidDefault};
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: ${surfaceSolidDefaultActive};
                ${textAreaTokens.scrollbarTrackBackgroundColor}: ${surfaceSolidPrimary};
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: ${surfaceSolidPrimaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: ${surfaceSolidPrimaryHover};

                ${textAreaTokens.dividerColor}: ${outlineSolidPrimary};
                ${textAreaTokens.dividerColorHover}: ${textSecondary};
                ${textAreaTokens.dividerColorFocus}: ${surfaceAccent};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${textAreaTokens.borderColor}: ${outlineSolidPrimary};
                ${textAreaTokens.borderColorHover}: ${outlineSolidPrimaryHover};
                ${textAreaTokens.borderColorFocus}: ${outlineAccent};
                ${textAreaTokens.backgroundColor}: ${surfaceSolidCard};
                ${textAreaTokens.backgroundColorHover}: ${surfaceSolidCardHover};
                ${textAreaTokens.backgroundColorActive}: ${surfaceSolidCardActive};
                ${textAreaTokens.backgroundColorFocus}: ${surfaceSolidCard};
                ${textAreaTokens.inputColor}: ${textPrimary};
                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.inputCaretColor}: ${textAccent};
                ${textAreaTokens.placeholderColor}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textSecondary};

                ${textAreaTokens.leftHelperColor}: ${textSecondary};
                ${textAreaTokens.rightHelperColor}: ${textSecondary};
                ${textAreaTokens.indicatorColor}: ${textNegative};
                ${textAreaTokens.optionalColor}: ${textSecondary};
                ${textAreaTokens.rightContentColor}: ${textAccent};

                ${textAreaTokens.scrollbarThumbBackgroundColor}: ${surfaceSolidDefault};
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: ${surfaceSolidDefaultActive};
                ${textAreaTokens.scrollbarTrackBackgroundColor}: ${surfaceSolidPrimary};
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: ${surfaceSolidPrimaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: ${surfaceSolidPrimaryHover};

                ${textAreaTokens.dividerColor}: ${outlineSolidPrimary};
                ${textAreaTokens.dividerColorHover}: ${textSecondary};
                ${textAreaTokens.dividerColorFocus}: ${surfaceAccent};
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
            negative: css`
                ${textAreaTokens.borderColor}: ${textNegative};
                ${textAreaTokens.borderColorHover}: ${textNegativeHover};
                ${textAreaTokens.borderColorFocus}: ${outlineAccent};
                ${textAreaTokens.backgroundColor}: ${surfaceSolidCard};
                ${textAreaTokens.backgroundColorHover}: ${surfaceSolidCardHover};
                ${textAreaTokens.backgroundColorActive}: ${surfaceSolidCardActive};
                ${textAreaTokens.backgroundColorFocus}: ${surfaceSolidCard};

                ${textAreaTokens.inputColor}: ${textPrimary};
                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.inputCaretColor}: ${textNegative};

                ${textAreaTokens.placeholderColor}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textSecondary};

                ${textAreaTokens.leftHelperColor}: ${textNegative};
                ${textAreaTokens.rightHelperColor}: ${textSecondary};

                ${textAreaTokens.rightContentColor}: ${textAccent};

                ${textAreaTokens.indicatorColor}: ${textNegative};
                ${textAreaTokens.optionalColor}: ${textSecondary};

                ${textAreaTokens.scrollbarThumbBackgroundColor}: ${surfaceSolidDefault};
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: ${surfaceSolidDefaultActive};
                ${textAreaTokens.scrollbarTrackBackgroundColor}: ${surfaceSolidPrimary};
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: ${surfaceSolidPrimaryActive};
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: ${surfaceSolidPrimaryHover};

                ${textAreaTokens.dividerColor}: ${outlineNegative};
                ${textAreaTokens.dividerColorHover}: ${outlineNegativeHover};
                ${textAreaTokens.dividerColorFocus}: var(--outline-negative-focus);
                ${textAreaTokens.titleCaptionColor}: ${textSecondary};
                ${textAreaTokens.hintIconColor}: ${textSecondary};
            `,
        },
        size: {
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.187rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.75rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.688rem;
                ${textAreaTokens.inputPaddingRight}: 0.875rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;

                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;

                ${textAreaTokens.helpersPaddingRight}: 0.875rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.688rem;
                ${textAreaTokens.rightContentRight}: 0.75rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;

                ${textAreaTokens.labelMarginBottom}: 0.5rem;

                ${textAreaTokens.labelOuterFontSize}: ${bodyS.fontSize};
                ${textAreaTokens.labelInnerFontFamily}: ${bodyS.fontFamily};
                ${textAreaTokens.labelInnerFontSize}: ${bodyS.fontSize};
                ${textAreaTokens.labelInnerFontStyle}: ${bodyS.fontStyle};
                ${textAreaTokens.labelInnerFontWeight}: ${bodyS.fontWeight};
                ${textAreaTokens.labelInnerLetterSpacing}: ${bodyS.letterSpacing};
                ${textAreaTokens.labelInnerLineHeight}: ${bodyS.lineHeight};
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: ${bodyM.fontFamily};
                ${textAreaTokens.inputFontSize}: ${bodyM.fontSize};
                ${textAreaTokens.inputFontStyle}: ${bodyM.fontStyle};
                ${textAreaTokens.inputFontWeight}: ${bodyM.fontWeight};
                ${textAreaTokens.inputLetterSpacing}: ${bodyM.letterSpacing};
                ${textAreaTokens.inputLineHeight}: ${bodyM.lineHeight};
                ${textAreaTokens.helpersFontFamily}: ${bodyS.fontFamily};
                ${textAreaTokens.helpersFontSize}: ${bodyS.fontSize};
                ${textAreaTokens.helpersFontStyle}: ${bodyS.fontStyle};
                ${textAreaTokens.helpersFontWeight}: ${bodyS.fontWeight};
                ${textAreaTokens.helpersLetterSpacing}: ${bodyS.letterSpacing};
                ${textAreaTokens.helpersLineHeight}: ${bodyS.lineHeight};

                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.375rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.125rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: -0.751rem -2rem auto auto;

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
            // TODO: заменить тень на токен https://github.com/salute-developers/plasma/issues/1131
            default: css`
                ${textAreaTokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${textAreaTokens.tooltipBoxShadow}: 0px 4px 12px 0px rgba(0, 0, 0, 0.16), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
                ${textAreaTokens.tooltipColor}: ${textPrimary};
                ${textAreaTokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        hintSize: {
            m: css`
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.tooltipPaddingTop}: 0.6875rem;
                ${textAreaTokens.tooltipPaddingRight}: 0.875rem;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.tooltipPaddingBottom}: 0.6875rem;
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
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.tooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 1;
                ${textAreaTokens.backgroundColor}: ${surfaceSolidPrimary};
                ${textAreaTokens.borderColor}: ${surfaceSolidPrimary};
                ${textAreaTokens.borderColorHover}: ${surfaceSolidPrimary};
                ${textAreaTokens.borderColorFocus}: ${surfaceSolidPrimary};
                ${textAreaTokens.inputColor}: ${textSecondary};
                ${textAreaTokens.inputColorFocus}: ${textSecondary};
                ${textAreaTokens.placeholderColorFocus}: ${textSecondary};
                ${textAreaTokens.labelOuterColor}: ${textPrimary};
                ${textAreaTokens.inputColorDisabled}: ${textSecondary};
            `,
        },
        readOnly: {
            true: css`
                ${textAreaTokens.readOnlyOpacity}: 0.1;
                ${textAreaTokens.labelOuterColor}: ${textSecondary};
                ${textAreaTokens.inputColorReadOnly}: ${textPrimary};
                ${textAreaTokens.dividerColorReadOnly}: var(--surface-transparent-primary);
                ${textAreaTokens.contentSlotRightOpacityReadOnly}: 0.4;
                ${textAreaTokens.backgroundColor}: ${surfaceClear};
                ${textAreaTokens.borderColor}: ${surfaceClear};
                ${textAreaTokens.borderColorHover}: ${surfaceClear};
                ${textAreaTokens.borderColorFocus}: ${surfaceClear};
                ${textAreaTokens.inputColor}: ${textPrimary};
                ${textAreaTokens.inputColorFocus}: ${textPrimary};
                ${textAreaTokens.placeholderColorFocus}: ${textSecondary};
                ${textAreaTokens.labelOuterColor}: ${textSecondary};
            `,
        },
    },
};
