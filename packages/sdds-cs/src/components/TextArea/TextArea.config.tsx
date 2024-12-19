import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.187rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.625rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.688rem;
                ${textAreaTokens.inputPaddingRight}: 0.875rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 2rem;
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
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.5rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelOuterFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-body-s-line-height);
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-m-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-m-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-m-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-m-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-body-s-line-height);

                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${textAreaTokens.clearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.375rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.125rem;

                ${textAreaTokens.hintMargin}: -0.688rem -0.5rem;
                ${textAreaTokens.hintTargetSize}: 2.375rem;
                ${textAreaTokens.hintInnerLabelPlacementOffset}: -0.751rem -2rem auto auto;
                ${textAreaTokens.clearHintInnerLabelPlacementOffset}: 0.062rem -2.063rem auto auto;

                ${textAreaTokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${textAreaTokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        view: {
            default: css`
                ${textAreaTokens.borderColor}: var(--outline-solid-primary);
                ${textAreaTokens.borderColorHover}: var(--outline-solid-primary-hover);
                ${textAreaTokens.borderColorFocus}: var(--outline-accent);
                ${textAreaTokens.backgroundColor}: var(--surface-solid-card);
                ${textAreaTokens.backgroundColorHover}: var(--surface-solid-card-hover);
                ${textAreaTokens.backgroundColorActive}: var(--surface-solid-card-active);
                ${textAreaTokens.backgroundColorFocus}: var(--surface-solid-card);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--text-negative);
                ${textAreaTokens.optionalColor}: var(--text-secondary);
                ${textAreaTokens.rightContentColor}: var(--text-accent);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-solid-default);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-solid-default-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-solid-default-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-solid-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-solid-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-solid-primary-hover);

                ${textAreaTokens.dividerColor}: var(--outline-solid-primary);
                ${textAreaTokens.dividerColorHover}: var(--text-secondary);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${textAreaTokens.borderColor}: var(--outline-solid-primary);
                ${textAreaTokens.borderColorHover}: var(--outline-solid-primary-hover);
                ${textAreaTokens.borderColorFocus}: var(--outline-accent);
                ${textAreaTokens.backgroundColor}: var(--surface-solid-card);
                ${textAreaTokens.backgroundColorHover}: var(--surface-solid-card-hover);
                ${textAreaTokens.backgroundColorActive}: var(--surface-solid-card-active);
                ${textAreaTokens.backgroundColorFocus}: var(--surface-solid-card);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--text-negative);
                ${textAreaTokens.optionalColor}: var(--text-secondary);
                ${textAreaTokens.rightContentColor}: var(--text-accent);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-solid-default);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-solid-default-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-solid-default-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-solid-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-solid-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-solid-primary-hover);

                ${textAreaTokens.dividerColor}: var(--outline-solid-primary);
                ${textAreaTokens.dividerColorHover}: var(--text-secondary);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
            negative: css`
                ${textAreaTokens.borderColor}: var(--text-negative);
                ${textAreaTokens.borderColorHover}: var(--text-negative-hover);
                ${textAreaTokens.borderColorFocus}: var(--outline-accent);
                ${textAreaTokens.backgroundColor}: var(--surface-solid-card);
                ${textAreaTokens.backgroundColorHover}: var(--surface-solid-card-hover);
                ${textAreaTokens.backgroundColorActive}: var(--surface-solid-card-active);
                ${textAreaTokens.backgroundColorFocus}: var(--surface-solid-card);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-negative);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-negative);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColor}: var--text-negative);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-negative);
                ${textAreaTokens.leftHelperColor}: var(--text-negative);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--text-negative);
                ${textAreaTokens.optionalColor}: var(--text-secondary);
                ${textAreaTokens.rightContentColor}: var(--text-accent);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-solid-default);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-solid-default-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-solid-default-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-solid-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-solid-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-solid-primary-hover);

                ${textAreaTokens.dividerColor}: var(--outline-negative);
                ${textAreaTokens.dividerColorHover}: var(--outline-negative-hover);
                ${textAreaTokens.dividerColorFocus}: var(--outline-negative-focus);
                ${textAreaTokens.titleCaptionColor}: var(--text-secondary);
                ${textAreaTokens.hintIconColor}: var(--text-secondary);
            `,
        },
        hintView: {
            // TODO: заменить тень на токен https://github.com/salute-developers/plasma/issues/1131
            default: css`
                ${textAreaTokens.tooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${textAreaTokens.tooltipBoxShadow}: 0px 4px 12px 0px rgba(0, 0, 0, 0.16), 0px 1px 4px 0px rgba(0, 0, 0, 0.08);
                ${textAreaTokens.tooltipColor}: var(--text-primary);
                ${textAreaTokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
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
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.tooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        clear: {
            true: css`
                ${textAreaTokens.backgroundColor}: transparent;
                ${textAreaTokens.backgroundColorFocus}: transparent;
                ${textAreaTokens.backgroundColorHover}: transparent;
                ${textAreaTokens.borderColor}: transparent;
                ${textAreaTokens.borderColorHover}: transparent;
                ${textAreaTokens.borderColorFocus}: transparent;
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 1;
                ${textAreaTokens.backgroundColor}: var(--surface-solid-primary);
                ${textAreaTokens.borderColor}: var(--surface-solid-primary);
                ${textAreaTokens.borderColorHover}: var(--surface-solid-primary);
                ${textAreaTokens.borderColorFocus}: var(--surface-solid-primary);
                ${textAreaTokens.inputColor}: var(--text-secondary);
                ${textAreaTokens.inputColorFocus}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.labelOuterColor}: var(--text-primary);
                ${textAreaTokens.inputColorDisabled}: var(--text-secondary);
            `,
        },
        readOnly: {
            true: css`
                ${textAreaTokens.backgroundColor}: none;
                ${textAreaTokens.borderColor}: transparent;
                ${textAreaTokens.borderColorHover}: transparent;
                ${textAreaTokens.borderColorFocus}: transparent;
                ${textAreaTokens.inputColor}: var(--text-secondary);
                ${textAreaTokens.inputColorFocus}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.labelOuterColor}: var(--text-secondary);
            `,
        },
    },
};
