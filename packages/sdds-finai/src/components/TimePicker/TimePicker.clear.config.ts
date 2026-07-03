import { css, timePickerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        hintView: 'default',
        hintSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-transparent-card);
                ${tokens.backgroundError}: var(--surface-transparent-negative);
                ${tokens.backgroundSuccess}: var(--surface-transparent-positive);

                ${tokens.borderColor}: transparent;
                ${tokens.borderColorHover}: transparent;
                ${tokens.borderColorFocus}: transparent;
                ${tokens.borderColorError}: transparent;
                ${tokens.borderColorSuccess}: transparent;

                ${tokens.labelColor}: var(--text-secondary);

                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.indicatorColor}: var(--surface-negative);

                ${tokens.timePickerShadow}: var(--shadow-down-soft-s);

                ${tokens.textFieldBackgroundColor}: transparent;
                ${tokens.textFieldBackgroundColorFocus}: transparent;
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.textFieldBorderColorHover}: transparent;
                ${tokens.textFieldBorderColorFocus}: transparent;
                ${tokens.textFieldBackgroundErrorColor}: transparent;
                ${tokens.textFieldBackgroundErrorColorFocus}: transparent;
                ${tokens.textFieldBorderColorError}: transparent;
                ${tokens.textFieldBorderColorErrorHover}: transparent;
                ${tokens.textFieldBorderColorErrorFocus}: transparent;
                ${tokens.textFieldBackgroundSuccessColor}: transparent;
                ${tokens.textFieldBackgroundSuccessColorFocus}: transparent;
                ${tokens.textFieldBorderColorSuccess}: transparent;
                ${tokens.textFieldBackgroundEditedColor}: transparent;
                ${tokens.textFieldBackgroundEditedColorHover}: transparent;
                ${tokens.textFieldBackgroundEditedColorFocus}: transparent;
                ${tokens.textFieldBorderColorEdited}: transparent;
                ${tokens.textFieldBorderColorEditedHover}: transparent;
                ${tokens.textFieldBorderColorEditedFocus}: transparent;

                ${tokens.textFieldDividerColor}: var(--surface-transparent-tertiary);
                ${tokens.textFieldDividerColorHover}: var(--text-secondary);
                ${tokens.textFieldDividerColorFocus}: var(--surface-accent);
                ${tokens.textFieldDividerColorError}: var(--text-negative);
                ${tokens.textFieldDividerColorSuccess}: var(--text-positive);
                ${tokens.textFieldDividerColorEdited}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary-hover);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);

                ${tokens.timePickerBackground}: var(--surface-solid-card);
                ${tokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.itemBackgroundActive}: var(--surface-transparent-secondary);
                ${tokens.itemFocusColor}: var(--surface-accent);

                ${tokens.scrollbarColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarTrackColor}: var(--surface-transparent-primary);

                ${tokens.leftHelperColor}: var(--text-secondary);
                ${tokens.leftHelperColorError}: var(--text-negative);
                ${tokens.leftHelperColorSuccess}: var(--text-positive);
                ${tokens.leftHelperColorEdited}: var(--text-secondary);

                ${tokens.hintIconColor}: var(--text-secondary);
            `,
        },
        size: {
            s: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem 0;
                ${tokens.textFieldRightContentMargin}: -0.1875rem 0 -0.1875rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.1875rem -0.438rem -0.1875rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.375rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.625rem;
                ${tokens.timePickerWidth}: 12rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 26.25rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.itemLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.813rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
            xs: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.6875rem auto auto;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.375rem;
                ${tokens.textFieldPadding}: 0.5625rem 0;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem 0;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0 -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.688rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.688rem -0.688rem -0.688rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.5rem;
                ${tokens.timePickerWidth}: 10rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 21.25rem;

                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.itemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.itemLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.itemHeight}: 2rem;
                ${tokens.itemBorderRadius}: 0.375rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;
                ${tokens.textFieldColor}: var(--text-secondary);
                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary);
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.borderColor}: transparent;
            `,
        },
        hintView: {
            default: css`
                ${tokens.hintTooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${tokens.hintTooltipBoxShadow}: var(--shadow-down-hard-m);
                ${tokens.hintTooltipColor}: var(--text-primary);
                ${tokens.hintTooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
        },
        hintSize: {
            m: css`
                ${tokens.hintTooltipPaddingTop}: 0.6875rem;
                ${tokens.hintTooltipPaddingRight}: 0.875rem;
                ${tokens.hintTooltipPaddingBottom}: 0.6875rem;
                ${tokens.hintTooltipPaddingLeft}: 0.875rem;

                ${tokens.hintTooltipMinHeight}: 2.5rem;
                ${tokens.hintTooltipBorderRadius}: 0.625rem;

                ${tokens.hintTooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.hintTooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.hintTooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.hintTooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.hintTooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.hintTooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.hintTooltipContentLeftMargin}: 0.375rem;

                ${tokens.hintTooltipArrowMaskWidth}: 1.25rem;
                ${tokens.hintTooltipArrowMaskHeight}: 1.25rem;
                ${tokens.hintTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.hintTooltipArrowHeight}: 0.5rem;
                ${tokens.hintTooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.hintTooltipPaddingTop}: 0.5rem;
                ${tokens.hintTooltipPaddingRight}: 0.75rem;
                ${tokens.hintTooltipPaddingBottom}: 0.5rem;
                ${tokens.hintTooltipPaddingLeft}: 0.75rem;

                ${tokens.hintTooltipMinHeight}: 2rem;
                ${tokens.hintTooltipBorderRadius}: 0.5rem;

                ${tokens.hintTooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.hintTooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.hintTooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.hintTooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.hintTooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.hintTooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.hintTooltipContentLeftMargin}: 0.25rem;

                ${tokens.hintTooltipArrowMaskWidth}: 1rem;
                ${tokens.hintTooltipArrowMaskHeight}: 1rem;
                ${tokens.hintTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.hintTooltipArrowHeight}: 0.375rem;
                ${tokens.hintTooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        readonly: {
            true: css`
                ${tokens.backgroundReadOnly}: transparent;
                ${tokens.labelColorReadOnly}: var(--text-secondary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);

                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-transparent-secondary);
                ${tokens.textFieldDividerColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.textFieldBorderColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary);
            `,
        },
    },
};
