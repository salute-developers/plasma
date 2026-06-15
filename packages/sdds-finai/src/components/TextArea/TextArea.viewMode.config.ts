import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${textAreaTokens.backgroundColor}: transparent;
                ${textAreaTokens.backgroundColorHover}: transparent;
                ${textAreaTokens.backgroundColorActive}: transparent;
                ${textAreaTokens.backgroundColorFocus}: transparent;
                ${textAreaTokens.borderColor}: transparent;
                ${textAreaTokens.borderColorHover}: transparent;
                ${textAreaTokens.borderColorFocus}: transparent;
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);

                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.leftHelperColorFocus}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.dividerColorHover}: var(--text-secondary);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.labelOuterColor}: var(--text-secondary);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            positive: css`
                ${textAreaTokens.backgroundColor}: transparent;
                ${textAreaTokens.backgroundColorHover}: transparent;
                ${textAreaTokens.backgroundColorActive}: transparent;
                ${textAreaTokens.backgroundColorFocus}: transparent;
                ${textAreaTokens.borderColor}: transparent;
                ${textAreaTokens.borderColorHover}: transparent;
                ${textAreaTokens.borderColorFocus}: transparent;
                ${textAreaTokens.inputColor}: var(--text-primary);

                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);

                ${textAreaTokens.leftHelperColor}: var(--text-positive);
                ${textAreaTokens.leftHelperColorFocus}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-positive);
                ${textAreaTokens.dividerColorHover}: var(--surface-positive);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.labelOuterColor}: var(--text-secondary);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            warning: css`
                ${textAreaTokens.backgroundColor}: transparent;
                ${textAreaTokens.backgroundColorHover}: transparent;
                ${textAreaTokens.backgroundColorActive}: transparent;
                ${textAreaTokens.backgroundColorFocus}: transparent;
                ${textAreaTokens.borderColor}: transparent;
                ${textAreaTokens.borderColorHover}: transparent;
                ${textAreaTokens.borderColorFocus}: transparent;
                ${textAreaTokens.inputColor}: var(--text-primary);

                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);

                ${textAreaTokens.leftHelperColor}: var(--text-warning);
                ${textAreaTokens.leftHelperColorFocus}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-warning);
                ${textAreaTokens.dividerColorHover}: var(--surface-warning);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.labelOuterColor}: var(--text-secondary);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            negative: css`
                ${textAreaTokens.backgroundColor}: transparent;
                ${textAreaTokens.backgroundColorHover}: transparent;
                ${textAreaTokens.backgroundColorActive}: transparent;
                ${textAreaTokens.backgroundColorFocus}: transparent;
                ${textAreaTokens.borderColor}: transparent;
                ${textAreaTokens.borderColorHover}: transparent;
                ${textAreaTokens.borderColorFocus}: transparent;
                ${textAreaTokens.inputColor}: var(--text-primary);

                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);

                ${textAreaTokens.leftHelperColor}: var(--text-negative);
                ${textAreaTokens.leftHelperColorFocus}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-negative);
                ${textAreaTokens.dividerColorHover}: var(--surface-negative);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.labelOuterColor}: var(--text-secondary);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
        },
        size: {
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 1.5rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 0.625rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0.625rem 0.625rem;
                ${textAreaTokens.inputPaddingTop}: 0.25rem;
                ${textAreaTokens.inputPaddingRight}: 0rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.25rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.25rem;
                ${textAreaTokens.inputPaddingLeft}: 0rem;
                ${textAreaTokens.helpersPaddingTop}: 0.125rem;
                ${textAreaTokens.outsideHelpersPaddingTop}: 0.125rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.125rem;
                ${textAreaTokens.rightContentRight}: 0rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-s-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);
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
                ${textAreaTokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        hintView: {
            default: css`
                ${textAreaTokens.tooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${textAreaTokens.tooltipBoxShadow}: var(--shadow-down-hard-m);
                ${textAreaTokens.tooltipColor}: var(--text-primary);
                ${textAreaTokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
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

                ${textAreaTokens.tooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.tooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.tooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.tooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

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

                ${textAreaTokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                ${textAreaTokens.backgroundColorReadOnly}: transparent;
                ${textAreaTokens.inputColorReadOnly}: var(--text-primary);
                ${textAreaTokens.dividerColorReadOnly}: var(--surface-transparent-primary);
                ${textAreaTokens.contentSlotRightOpacityReadOnly}: 1;
                ${textAreaTokens.rightContentColor}: var(--text-secondary);
                ${textAreaTokens.backgroundColor}: transparent;
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 1;
                ${textAreaTokens.inputColorDisabled}: var(--text-secondary);
                ${textAreaTokens.dividerColorReadOnly}: var(--surface-transparent-primary);
                ${textAreaTokens.titleCaptionColorReadOnly}: var(--text-secondary);
                ${textAreaTokens.rightContentColor}: var(--text-secondary);
                ${textAreaTokens.backgroundColor}: transparent;
                ${textAreaTokens.borderColor}: transparent;
            `,
        },
    },
};
