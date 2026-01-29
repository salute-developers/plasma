import { datePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.outlineFocusColor}: var(--surface-accent);

                ${tokens.background}: var(--surface-transparent-card);
                ${tokens.backgroundError}: var(--surface-transparent-negative);
                ${tokens.backgroundSuccess}: var(--surface-transparent-positive);

                ${tokens.borderColor}: var(--outline-solid-primary);
                ${tokens.borderColorHover}: var(--outline-solid-primary-hover);
                ${tokens.borderColorFocus}: var(--outline-accent);
                ${tokens.borderColorError}: var(--outline-transparent-negative);
                ${tokens.borderColorSuccess}: var(--outline-transparent-positive);

                ${tokens.dividerColor}: var(--text-primary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);
                ${tokens.leftHelperColorError}: var(--text-negative);
                ${tokens.leftHelperColorSuccess}: var(--text-positive);

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
                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentSlotColorActive}: var(--text-secondary-active);
                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary-hover);
                ${tokens.textFieldContentRightSlotColorActive}: var(--text-secondary-active);

                ${tokens.textFieldContentSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColor}: var(--text-secondary);
                ${tokens.textFieldContentRightSlotColorHover}: var(--text-secondary-hover);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorColor}: var(--surface-negative);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card);
                ${tokens.textFieldBorderColor}: var(--outline-solid-primary);
                ${tokens.textFieldBorderColorFocus}: var(--outline-accent);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-negative);
                ${tokens.textFieldBackgroundErrorColorFocus}: var(--surface-transparent-card);
                ${tokens.textFieldBorderColorError}: var(--outline-transparent-negative);
                ${tokens.textFieldBorderColorErrorFocus}: var(--outline-accent);
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-transparent-positive);
                ${tokens.textFieldBackgroundSuccessColorFocus}: var(--surface-transparent-card);
                ${tokens.textFieldBorderColorSuccess}: var(--outline-transparent-positive);
                ${tokens.textFieldBorderColorSuccessFocus}: var(--outline-accent);

                ${tokens.textFieldTextBeforeColor}: var(--text-tertiary);
                ${tokens.textFieldTextAfterColor}: var(--text-tertiary);

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.textFieldPlaceholderColorFocus}: var(--text-tertiary);

                ${tokens.popoverShadow}: var(--shadow-down-soft-s);
                ${tokens.popoverSeparatorBackground}: var(--surface-transparent-secondary);
                ${tokens.popoverBackgroundColor}: var(--surface-solid-card);

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
                ${tokens.calendarContentPrimaryDisabledColor}: var(--surface-solid-default);
                ${tokens.calendarHeaderArrowColor}: ${tokens.calendarContentPrimaryColor};
                ${tokens.calendarContentSecondaryColor}: var(--text-secondary);
                ${tokens.calendarContentSecondaryDisabledColor}: var(--text-secondary);
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

                ${tokens.shortcutColor}: var(--text-primary);
                ${tokens.shortcutBackgroundHover}: var(--surface-transparent-secondary);
            `,
        },
        size: {
            l: css`
                ${tokens.width}: 26.5rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.leftContentMargin}: 0 0 0 1rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.labelWrapperOffset}: 0.75rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.embedIconButtonHeight}: 3.5rem;
                ${tokens.embedIconButtonWidth}: 3.5rem;
                ${tokens.embedIconButtonPadding}: 1rem;
                ${tokens.embedIconButtonRadius}: 0.875rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;

                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.875rem;
                ${tokens.popoverGap}: 1rem;
                ${tokens.popoverPadding}: 1rem 1rem 1.125rem 1rem;
                ${tokens.popoverVerticalPadding}: 2.125rem;

                ${tokens.calendarWidth}: 24.5rem;
                ${tokens.calendarHeight}: 25rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.75rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.75rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.75rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.75rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;
                ${tokens.calendarHeaderArrowCustomSize}: 1.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${tokens.calendarHeaderDateGap}: 0.5rem;

                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h3-line-height);
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h3-bold-font-weight);

                ${tokens.iconButtonHeight}: 3.5rem;
                ${tokens.iconButtonWidth}: 3.5rem;
                ${tokens.iconButtonPadding}: 1.5rem;
                ${tokens.iconButtonRadius}: 0.875rem;

                ${tokens.shortcutFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.shortcutFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.shortcutFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.shortcutFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.shortcutLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.shortcutLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.shortcutPadding}: 1.063rem 0.75rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.75rem;
            `,
            m: css`
                ${tokens.width}: 23rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.875rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.labelWrapperOffset}: 0.625rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.embedIconButtonHeight}: 3rem;
                ${tokens.embedIconButtonWidth}: 3rem;
                ${tokens.embedIconButtonPadding}: 0.75rem;
                ${tokens.embedIconButtonRadius}: 0.75rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.6875rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
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

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.75rem;
                ${tokens.popoverGap}: 1rem;
                ${tokens.popoverPadding}: 1rem 1rem 1.125rem 1rem;
                ${tokens.popoverVerticalPadding}: 2.125rem;

                ${tokens.calendarWidth}: 21rem;
                ${tokens.calendarHeight}: 21rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.625rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.625rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.625rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.625rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
                ${tokens.calendarHeaderArrowGap}: 0;
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

                ${tokens.iconButtonHeight}: 3rem;
                ${tokens.iconButtonWidth}: 3rem;
                ${tokens.iconButtonPadding}: 1.25rem;
                ${tokens.iconButtonRadius}: 0.75rem;

                ${tokens.shortcutFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.shortcutFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.shortcutFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.shortcutFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.shortcutLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.shortcutLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.shortcutPadding}: 0.875rem 0.625rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.625rem;
            `,
            s: css`
                ${tokens.width}: 19.5rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelWrapperOffset}: 0.5rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
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

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.625rem;
                ${tokens.popoverGap}: 0.875rem;
                ${tokens.popoverPadding}: 0.875rem 0.875rem 1rem 0.875rem;
                ${tokens.popoverVerticalPadding}: 1.875rem;

                ${tokens.calendarWidth}: 17.5rem;
                ${tokens.calendarHeight}: 17rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.5rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
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

                ${tokens.iconButtonHeight}: 2.5rem;
                ${tokens.iconButtonWidth}: 2.5rem;
                ${tokens.iconButtonPadding}: 0.5rem;
                ${tokens.iconButtonRadius}: 0.625rem;

                ${tokens.shortcutFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.shortcutFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.shortcutFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.shortcutFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.shortcutLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.shortcutLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.shortcutPadding}: 0.688rem 0.5rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.5rem;
            `,
            xs: css`
                ${tokens.width}: 19rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

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

                ${tokens.labelWrapperOffset}: 0.375rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.embedIconButtonHeight}: 2rem;
                ${tokens.embedIconButtonWidth}: 2rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.5rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;

                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.6875rem auto auto;

                ${tokens.indicatorMarginTop}: 0.125rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.375rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.375rem 0;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
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

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.popoverBorderRadius}: 0.5rem;
                ${tokens.popoverGap}: 0.75rem;
                ${tokens.popoverPadding}: 0.75rem 0.75rem 0.875rem 0.75rem;
                ${tokens.popoverVerticalPadding}: 1.625rem;

                ${tokens.calendarWidth}: 17.5rem;
                ${tokens.calendarHeight}: 15.5rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 0 0 0;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.375rem 0 0 0;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${tokens.calendarHeaderWrapperPadding}: 0;
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

                ${tokens.shortcutFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.shortcutFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.shortcutFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.shortcutFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.shortcutLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.shortcutLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.shortcutPadding}: 0.563rem 0.375rem;
                ${tokens.shortcutGap}: 0.375rem;
                ${tokens.shortcutBorderRadius}: 0.375rem;
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
                ${tokens.backgroundReadOnly}: var(--surface-transparent-primary);
                ${tokens.labelColorReadOnly}: var(--text-primary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);

                ${tokens.dividerColorReadOnly}: var(--text-primary);
                ${tokens.dividerOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);

                ${tokens.rightContentOpacityReadOnly}: 0.4;
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.textFieldReadOnlyOpacity}: 0.1;
                ${tokens.rangeReadOnlyOpacity}: 0.1;
            `,
        },
    },
};
