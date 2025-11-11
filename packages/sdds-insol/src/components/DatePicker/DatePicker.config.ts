import { datePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-transparent-card);
                ${tokens.backgroundError}: var(--surface-transparent-card);
                ${tokens.backgroundSuccess}: var(--surface-transparent-card);

                ${tokens.dividerColor}: var(--text-primary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);
                ${tokens.leftHelperColorError}: var(--text-negative);
                ${tokens.leftHelperColorSuccess}: var(--text-positive);

                ${tokens.contentSlotColor}: var(--text-primary);
                ${tokens.contentSlotColorHover}: var(--text-primary-hover);
                ${tokens.contentSlotColorActive}: var(--text-primary-active);

                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.textFieldContentSlotColor}: var(--text-primary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-primary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-primary-active);
                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: var(--text-secondary-active);

                ${tokens.indicatorColor}: var(--surface-negative);

                ${tokens.textFieldBorderColorFocus}: var(--outline-solid-secondary);
                ${tokens.textFieldBorderColorHover}: var(--outline-clear);

                ${tokens.borderColorFocus}: var(--outline-solid-secondary);

                ${tokens.borderColorSuccess}: var(--outline-positive-minor);
                ${tokens.textFieldBorderColorSuccess}: var(--outline-positive-minor);
                ${tokens.textFieldBorderColorSuccessFocus}: var(--outline-positive-minor-active);
                ${tokens.textFieldBorderColorSuccessHover}: var(--outline-positive-minor-hover);

                ${tokens.borderColorError}: var(--outline-negative-minor);
                ${tokens.textFieldBorderColorError}: var(--outline-negative-minor);
                ${tokens.textFieldBorderColorErrorFocus}: var(--outline-negative-minor-active);
                ${tokens.textFieldBorderColorErrorHover}: var(--outline-negative-minor-hover);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-clear);
                ${tokens.textFieldColorError}: var(--text-negative);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundErrorColorFocus}: var(--surface-transparent-clear);
                ${tokens.textFieldColorSuccess}: var(--text-positive);
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundSuccessColorFocus}: var(--surface-transparent-clear);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.focusColor}: var(--text-accent);

                ${tokens.calendarShadow}: var(--shadow-down-soft-s);
                ${tokens.calendarSeparatorBackground}: var(--surface-transparent-secondary);
                ${tokens.calendarBackgroundColor}: var(--surface-solid-card);
                ${tokens.calendarSelectedItemBackground}: var(--surface-solid-default);
                ${tokens.calendarSelectedItemColor}: var(--inverse-text-primary);
                ${tokens.calendarSelectableItemBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.calendarCurrentItemBorderColor}: var(--surface-solid-default);
                ${tokens.calendarCurrentItemBackgroundHover}: transparent;
                ${tokens.calendarCurrentItemColorHover}: var(--text-primary);
                ${tokens.calendarCurrentItemChildBackgroundHover}: var(--surface-transparent-secondary);
                ${tokens.calendarActiveItemBackground}: var(--surface-solid-default);
                ${tokens.calendarActiveItemColor}: var(--inverse-text-primary);
                ${tokens.calendarHoveredItemBackground}: var(--surface-accent);
                ${tokens.calendarHoveredItemColor}: var(--text-primary);
                ${tokens.calendarRangeBackground}: var(--surface-transparent-secondary);
                ${tokens.calendarOutlineFocusColor}: var(--surface-accent);
                ${tokens.calendarContentPrimaryColor}: var(--surface-solid-default);
                ${tokens.calendarContentSecondaryColor}: var(--text-secondary);
                ${tokens.calendarDisabledOpacity}: 0.4;

                ${tokens.iconButtonColor}: var(--text-primary);
                ${tokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${tokens.iconButtonColorHover}: var(--text-primary-hover);
                ${tokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${tokens.iconButtonColorActive}: var(--text-primary-hover);
                ${tokens.iconButtonBackgroundColorActive}: var(--surface-clear);
                ${tokens.iconButtonFocusColor}: var(--surface-accent);

                ${tokens.tooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${tokens.tooltipBoxShadow}: var(--shadow-down-hard-s);
                ${tokens.tooltipColor}: var(--text-primary);
            `,
        },
        size: {
            xl: css`
                ${tokens.width}: 30rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.dividerPadding}: 0;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftContentMargin}: 0 0 0 1.125rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.8125rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.938rem 0 0.813rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 4rem;
                ${tokens.textFieldBorderRadius}: 1rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;
                ${tokens.textFieldPadding}: 1.375rem 1.25rem 1.375rem 1.25rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.6255rem -0.0625rem 0;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0 -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.calendarBorderRadius}: 1rem;
                ${tokens.calendarContainerWidth}: 30rem;
                ${tokens.calendarContainerHeight}: 30.5rem;

                ${tokens.calendarYearsPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarYearItemBorderRadius}: 0.75rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-m-font-weight);

                ${tokens.calendarMonthsPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.75rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-m-font-weight);

                ${tokens.calendarQuartersPadding}: 0 0.5rem 0 0.5rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.75rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-m-font-weight);

                ${tokens.calendarDaysPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarDayItemBorderRadius}: 0.75rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-m-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarEventItemBottom}: 0.5rem;
                ${tokens.calendarHeaderWrapperPadding}: 1rem 1rem 0.375rem 1rem;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.75rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${tokens.iconButtonHeight}: 4rem;
                ${tokens.iconButtonWidth}: 4rem;
                ${tokens.iconButtonPadding}: 1.25rem;
                ${tokens.iconButtonRadius}: 1.25rem;
            `,
            l: css`
                ${tokens.width}: 26.5rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftContentMargin}: 0 0 0 1rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.625rem -0.0625rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.calendarBorderRadius}: 0.875rem;
                ${tokens.calendarContainerWidth}: 26.5rem;
                ${tokens.calendarContainerHeight}: 27.125rem;

                ${tokens.calendarYearsPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-s-font-weight);

                ${tokens.calendarMonthsPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-s-font-weight);

                ${tokens.calendarQuartersPadding}: 0 0.5rem 0 0.5rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-s-font-weight);

                ${tokens.calendarDaysPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-s-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarEventItemBottom}: 0.5rem;
                ${tokens.calendarHeaderWrapperPadding}: 1rem 1rem 0.375rem 1rem;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${tokens.iconButtonHeight}: 3.5rem;
                ${tokens.iconButtonWidth}: 3.5rem;
                ${tokens.iconButtonPadding}: 1rem;
                ${tokens.iconButtonRadius}: 0.625rem;
            `,
            m: css`
                ${tokens.width}: 23rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.875rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.625rem -0.125rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem 0rem -0.125rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.calendarContainerWidth}: 23rem;
                ${tokens.calendarContainerHeight}: 22.625rem;
                ${tokens.calendarBorderRadius}: 0.75rem;

                ${tokens.calendarYearsPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarYearItemBorderRadius}: 0.375rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarQuartersPadding}: 0 1rem 0 1rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.375rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarMonthsPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.375rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarDaysPadding}: 0 1rem 1.125rem 1rem;
                ${tokens.calendarDayItemBorderRadius}: 0.375rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarEventItemBottom}: 0.375rem;
                ${tokens.calendarHeaderWrapperPadding}: 1rem 1rem 0.375rem 1rem;
                ${tokens.calendarHeaderArrowGap}: 0;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${tokens.iconButtonHeight}: 3rem;
                ${tokens.iconButtonWidth}: 3rem;
                ${tokens.iconButtonPadding}: 0.75rem;
                ${tokens.iconButtonRadius}: 0.5rem;
            `,
            s: css`
                ${tokens.width}: 19.25rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;
                ${tokens.textFieldPadding}: 0.813rem 0.75rem 0.813rem 0.75rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.5rem -0.1875rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem 0rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.calendarContainerWidth}: 19.25rem;
                ${tokens.calendarContainerHeight}: 18.875rem;
                ${tokens.calendarBorderRadius}: 0.625rem;

                ${tokens.calendarYearsPadding}: 0 0.875rem 0.875rem 0.875rem;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarQuartersPadding}: 0 0.875rem 0 0.875rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarMonthsPadding}: 0 0.875rem 0.875rem 0.875rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarDaysPadding}: 0 0.875rem 0.875rem 0.875rem;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarEventItemBottom}: 0.25rem;
                ${tokens.calendarHeaderWrapperPadding}: 0.875rem 0.875rem 0.375rem 0.875rem;
                ${tokens.calendarHeaderArrowGap}: 0;
                ${tokens.calendarHeaderArrowCustomSize}: 1rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h5-line-height);
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);

                ${tokens.iconButtonHeight}: 2.5rem;
                ${tokens.iconButtonWidth}: 2.5rem;
                ${tokens.iconButtonPadding}: 0.75rem;
                ${tokens.iconButtonRadius}: 0.5rem;
            `,
            xs: css`
                ${tokens.width}: 19rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.borderWidth}: 0.0625rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.375rem;
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
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldBorderWidth}: 0.0625rem;
                ${tokens.textFieldPadding}: 0.5rem 0.625rem 0.5rem 0.625rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0rem -0.0625rem 0.625rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.calendarContainerWidth}: 19rem;
                ${tokens.calendarContainerHeight}: 18.625rem;
                ${tokens.calendarBorderRadius}: 0.5rem;

                ${tokens.calendarYearsPadding}: 0 0.75rem 0.625rem 0.75rem;
                ${tokens.calendarYearItemBorderRadius}: 0.375rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarQuartersPadding}: 0 0.25rem 0 0.25rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.375rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarMonthsPadding}: 0 0.75rem 0.625rem 0.75rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.375rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarDaysPadding}: 0 0.75rem 0.625rem 0.75rem;
                ${tokens.calendarDayItemBorderRadius}: 0.375rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarEventItemBottom}: 0.25rem;
                ${tokens.calendarHeaderWrapperPadding}: 0.5rem 0.75rem 0.375rem 0.75rem;
                ${tokens.calendarHeaderArrowGap}: 0;
                ${tokens.calendarHeaderArrowCustomSize}: 1rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h5-line-height);
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);

                ${tokens.iconButtonHeight}: 2rem;
                ${tokens.iconButtonWidth}: 2rem;
                ${tokens.iconButtonPadding}: 0.5rem;
                ${tokens.iconButtonRadius}: 0.5rem;
            `,
        },
        eventTooltipSize: {
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
                ${tokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
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
                ${tokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: var(--surface-solid-secondary);
                ${tokens.labelColorReadOnly}: var(--text-primary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);

                ${tokens.dividerColorReadOnly}: var(--text-primary);
                ${tokens.dividerOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-solid-secondary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);

                ${tokens.rightContentOpacityReadOnly}: 0.4;
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
            `,
        },
    },
};
