import { css, rangeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        hintView: 'default',
        hintSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-solid-primary);
                ${tokens.backgroundError}: var(--surface-solid-primary);
                ${tokens.backgroundSuccess}: var(--surface-solid-primary);

                ${tokens.borderColor}: var(--outline-clear);
                ${tokens.borderColorError}: var(--outline-negative);
                ${tokens.borderColorSuccess}: var(--outline-positive);

                ${tokens.dividerColor}: var(--text-primary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);
                ${tokens.leftHelperColorError}: var(--text-negative);
                ${tokens.leftHelperColorSuccess}: var(--text-positive);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.contentSlotColor}: var(--text-primary);
                ${tokens.contentSlotColorHover}: var(--text-primary-hover);
                ${tokens.contentSlotColorActive}: var(--text-primary-active);

                ${tokens.embedIconButtonFocusColor}: var(--surface-accent);
                ${tokens.contentSlotRightColor}: var(--text-primary);
                ${tokens.contentSlotRightColorHover}: var(--text-primary-hover);
                ${tokens.contentSlotRightColorActive}: var(--text-primary-active);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldContentSlotRightColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotRightColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotRightColorActive}: var(--text-secondary-active);

                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.textFieldBackgroundColorHover}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundErrorColorHover}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundErrorColorFocus}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundSuccessColorHover}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundSuccessColorFocus}: var(--surface-solid-primary);

                ${tokens.textFieldBorderColor}: var(--outline-clear);
                ${tokens.textFieldBorderColorHover}: var(--on-light-outline-solid-primary-hover);
                ${tokens.textFieldBorderColorFocus}: var(--outline-primary);
                ${tokens.textFieldBorderColorError}: var(--outline-negative);
                ${tokens.textFieldBorderColorErrorHover}: var(--outline-negative-hover);
                ${tokens.textFieldBorderColorErrorFocus}: var(--outline-negative-active);
                ${tokens.textFieldBorderColorSuccess}: var(--outline-positive);
                ${tokens.textFieldBorderColorSuccessHover}: var(--outline-positive-hover);
                ${tokens.textFieldBorderColorSuccessFocus}: var(--outline-positive-active);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.indicatorColor}: var(--surface-negative);

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.875rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.embedIconButtonHeight}: 3rem;
                ${tokens.embedIconButtonWidth}: 3rem;
                ${tokens.embedIconButtonPadding}: 0.75rem;
                ${tokens.embedIconButtonRadius}: 0.75rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.625rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.875rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.1875rem -2.813rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 0.313rem 0 -0.438rem;

                ${tokens.titleCaptionOffset}: 0.313rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;
            `,
            s: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.5rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.75rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.938rem -2.688rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 0.063rem 0 -0.438rem;

                ${tokens.titleCaptionOffset}: 0.188rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${tokens.tooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.tooltipColor}: var(--text-primary);
                ${tokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
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

                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

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

                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                ${tokens.disabledOpacity}: 1;
                ${tokens.disabledBackgroundOpacity}: 1;
                ${tokens.disabledInnerContentOpacity}: 1;

                ${tokens.background}: var(--surface-solid-tertiary);
                ${tokens.backgroundError}: var(--surface-solid-tertiary);
                ${tokens.backgroundSuccess}: var(--surface-solid-tertiary);
                ${tokens.borderColor}: transparent;
                ${tokens.borderColorError}: transparent;
                ${tokens.borderColorSuccess}: transparent;

                ${tokens.labelColor}: var(--text-secondary);
                ${tokens.titleCaptionColor}: var(--text-tertiary);
                ${tokens.leftHelperColor}: var(--text-tertiary);
                ${tokens.contentSlotColor}: var(--text-tertiary);
                ${tokens.contentSlotRightColor}: var(--text-tertiary);

                ${tokens.textFieldColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColor}: var(--text-tertiary);
                ${tokens.textFieldBackgroundColor}: var(--surface-solid-tertiary);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-solid-tertiary);
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-solid-tertiary);
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.textFieldBorderColorError}: transparent;
                ${tokens.textFieldBorderColorSuccess}: transparent;
                ${tokens.textFieldContentSlotColor}: var(--text-tertiary);
                ${tokens.textFieldContentSlotRightColor}: var(--text-tertiary);
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: var(--surface-solid-secondary);
                ${tokens.borderColorReadOnly}: transparent;

                ${tokens.labelColorReadOnly}: var(--text-primary);
                ${tokens.titleCaptionColorReadOnly}: var(--text-secondary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.rightHelperColorReadOnly}: var(--text-secondary);

                ${tokens.dividerColorReadOnly}: var(--text-tertiary);
                ${tokens.readOnlyOpacity}: 1;
                ${tokens.dividerOpacityReadOnly}: 1;
                ${tokens.rightContentOpacityReadOnly}: 1;

                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: transparent;
                ${tokens.textFieldBorderColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldContentSlotRightColor}: var(--text-tertiary);
            `,
        },
    },
};
