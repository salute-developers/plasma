import { css, textAreaTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${tokens.inputBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.inputBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${tokens.inputBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.inputBackgroundColorFocus}: var(--surface-transparent-secondary);

                ${tokens.helpersBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.helpersBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${tokens.helpersBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.helpersBackgroundColorFocus}: var(--surface-transparent-secondary);

                ${tokens.inputColor}: var(--text-primary);
                ${tokens.inputColorFocus}: var(--text-primary);
                ${tokens.inputCaretColor}: var(--text-accent);

                ${tokens.placeholderColor}: var(--text-secondary);
                ${tokens.placeholderColorFocus}: var(--text-tertiary);

                ${tokens.leftHelperColor}: var(--text-secondary);
                ${tokens.rightHelperColor}: var(--text-secondary);

                ${tokens.rightContentColor}: var(--text-secondary);
                ${tokens.rightContentColorHover}: var(--text-secondary-hover);
                ${tokens.rightContentColorActive}: var(--text-secondary-active);

                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.optionalColor}: var(--text-tertiary);

                ${tokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${tokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);
                ${tokens.dividerColorHover}: var(--text-secondary);
                ${tokens.dividerColorFocus}: var(--surface-accent);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.hintIconColor}: var(--text-secondary);
                ${tokens.titleCaptionColor}: var(--text-secondary);
            `,
            negative: css`
                ${tokens.inputBackgroundColor}: var(--surface-transparent-negative);
                ${tokens.inputBackgroundColorHover}: var(--surface-transparent-negative-hover);
                ${tokens.inputBackgroundColorActive}: var(--surface-transparent-negative-active);
                ${tokens.inputBackgroundColorFocus}: var(--surface-transparent-negative);

                ${tokens.helpersBackgroundColor}: var(--surface-transparent-negative);
                ${tokens.helpersBackgroundColorHover}: var(--surface-transparent-negative-hover);
                ${tokens.helpersBackgroundColorActive}: var(--surface-transparent-negative-active);
                ${tokens.helpersBackgroundColorFocus}: var(--surface-transparent-negative);

                ${tokens.inputColor}: var(--text-primary);
                ${tokens.inputColorFocus}: var(--text-primary);
                ${tokens.inputCaretColor}: var(--text-negative);

                ${tokens.placeholderColor}: var(--text-secondary);
                ${tokens.placeholderColorFocus}: var(--text-tertiary);

                ${tokens.leftHelperColor}: var(--text-negative);
                ${tokens.rightHelperColor}: var(--text-secondary);

                ${tokens.rightContentColor}: var(--text-secondary);
                ${tokens.rightContentColorHover}: var(--text-secondary-hover);
                ${tokens.rightContentColorActive}: var(--text-secondary-active);

                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.optionalColor}: var(--text-tertiary);

                ${tokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${tokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${tokens.dividerColor}: var(--surface-negative);
                ${tokens.dividerColorHover}: var(--surface-negative);
                ${tokens.dividerColorFocus}: var(--surface-accent);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.hintIconColor}: var(--text-secondary);
                ${tokens.titleCaptionColor}: var(--text-secondary);
            `,
        },
        size: {
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

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerTop}: 0.375rem;
                ${tokens.labelInnerTopHelper}: -0.313rem;
                ${tokens.labelInnerMarginBottom}: 0.125rem;

                ${tokens.inputFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.inputFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.inputFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.inputFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.inputLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.inputLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${tokens.tooltipBoxShadow}: var(--shadow-down-hard-m);
                ${tokens.tooltipColor}: var(--text-primary);
                ${tokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
        },
        hintSize: {
            m: css`
                ${tokens.tooltipPaddingTop}: 0.688rem;
                ${tokens.tooltipPaddingRight}: 0.875rem;
                ${tokens.tooltipPaddingBottom}: 0.688rem;
                ${tokens.tooltipPaddingLeft}: 0.875rem;

                ${tokens.tooltipMinHeight}: 2.5rem;
                ${tokens.tooltipBorderRadius}: 0.625rem;

                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.tooltipContentLeftMargin}: 0.375rem;

                ${tokens.tooltipArrowMaskWidth}: 1.25rem;
                ${tokens.tooltipArrowMaskHeight}: 1.25rem;
                /* stylelint-disable-next-line */
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

                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.tooltipContentLeftMargin}: 0.25rem;

                ${tokens.tooltipArrowMaskWidth}: 1rem;
                ${tokens.tooltipArrowMaskHeight}: 1rem;
                /* stylelint-disable-next-line */
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.tooltipArrowHeight}: 0.375rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.563rem;
            `,
        },
        clear: {
            true: css``,
        },
        readOnly: {
            true: css`
                ${tokens.readOnlyOpacity}: 0.1;
                ${tokens.backgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.inputColorReadOnly}: var(--text-primary);
                ${tokens.dividerColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.contentSlotRightOpacityReadOnly}: 0.4;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
                ${tokens.inputColorDisabled}: var(--text-secondary);
                ${tokens.dividerColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.titleCaptionColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
