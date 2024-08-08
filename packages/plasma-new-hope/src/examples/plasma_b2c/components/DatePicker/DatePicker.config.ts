import { css } from '@linaria/core';

import { datePickerTokens as tokens } from '../../../../components/DatePicker';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-transparent-primary);
                ${tokens.backgroundError}: var(--surface-transparent-negative);
                ${tokens.backgroundSuccess}: var(--surface-transparent-positive);

                ${tokens.dividerColor}: var(--text-primary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);

                ${tokens.textFieldColor}: var(--text-primary);
                ${tokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${tokens.textFieldCaretColor}: var(--text-accent);

                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-transparent-secondary);
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-negative);
                ${tokens.textFieldBackgroundErrorColorFocus}: var(--surface-transparent-negative-active);
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-transparent-positive);
                ${tokens.textFieldBackgroundSuccessColorFocus}: var(--surface-transparent-positive-active);

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

                ${tokens.iconButtonColor}: var(--text-primary);
                ${tokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${tokens.iconButtonColorHover}: var(--text-primary-hover);
                ${tokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${tokens.iconButtonColorActive}: var(--text-primary-hover);
                ${tokens.iconButtonBackgroundColorActive}: var(--surface-clear);
                ${tokens.iconButtonFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            l: css`
                ${tokens.width}: 26.5rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.leftContentMargin}: 0 0 0 1rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0 0 0.75rem 0;
                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

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

                ${tokens.calendarBorderRadius}: 0.875rem;
                ${tokens.calendarWidth}: 26.5rem;

                ${tokens.calendarYearsPadding}: 0.5rem 1rem 1.125rem 1rem;
                ${tokens.calendarYearItemBorderRadius}: 0.75rem;
                ${tokens.calendarYearItemWidth}: 7.8125rem;
                ${tokens.calendarYearItemHeight}: 5.25rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 1rem 1.125rem 1rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.75rem;
                ${tokens.calendarMonthItemWidth}: 7.8125rem;
                ${tokens.calendarMonthItemHeight}: 5.25rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.75rem;
                ${tokens.calendarQuarterItemWidth}: 11.75rem;
                ${tokens.calendarQuarterItemHeight}: 10.5rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.5rem 1rem 1.125rem 1rem;
                ${tokens.calendarDayItemBorderRadius}: 0.75rem;
                ${tokens.calendarDayItemWidth}: 3.5rem;
                ${tokens.calendarDayItemHeight}: 3rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${tokens.calendarHeaderWrapperPadding}: 0.875rem 1rem 0 1rem;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;

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
            `,
            m: css`
                ${tokens.width}: 23rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.875rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0 0 0.625rem 0;
                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

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

                ${tokens.calendarWidth}: 23rem;
                ${tokens.calendarBorderRadius}: 0.875rem;

                ${tokens.calendarYearsPadding}: 0.5rem 1rem 1.125rem 1rem;
                ${tokens.calendarYearItemBorderRadius}: 0.625rem;
                ${tokens.calendarYearItemWidth}: 6.688rem;
                ${tokens.calendarYearItemHeight}: 4.375rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.625rem;
                ${tokens.calendarQuarterItemWidth}: 10rem;
                ${tokens.calendarQuarterItemHeight}: 8.5rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 1rem 1.125rem 1rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.625rem;
                ${tokens.calendarMonthItemWidth}: 6.688rem;
                ${tokens.calendarMonthItemHeight}: 4.375rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.5rem 1rem 1.125rem 1rem;
                ${tokens.calendarDayItemBorderRadius}: 0.625rem;
                ${tokens.calendarDayItemWidth}: 3rem;
                ${tokens.calendarDayItemHeight}: 2.5rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${tokens.calendarHeaderWrapperPadding}: 0.75rem 1rem 0 1rem;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.875rem;
                ${tokens.calendarHeaderDateGap}: 0.375rem;

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
            `,
            s: css`
                ${tokens.width}: 19.5rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0 0 0.5rem 0;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

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

                ${tokens.calendarWidth}: 19.5rem;
                ${tokens.calendarBorderRadius}: 0.875rem;

                ${tokens.calendarYearsPadding}: 0.5rem 1rem 0.875rem 1rem;
                ${tokens.calendarYearItemBorderRadius}: 0.5rem;
                ${tokens.calendarYearItemWidth}: 5.5rem;
                ${tokens.calendarYearItemHeight}: 3.5rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.5rem;
                ${tokens.calendarQuarterItemWidth}: 8.25rem;
                ${tokens.calendarQuarterItemHeight}: 7rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 1rem 0.875rem 1rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.5rem;
                ${tokens.calendarMonthItemWidth}: 5.5rem;
                ${tokens.calendarMonthItemHeight}: 3.5rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.5rem 1rem 0.875rem 1rem;
                ${tokens.calendarDayItemBorderRadius}: 0.5rem;
                ${tokens.calendarDayItemWidth}: 2.5rem;
                ${tokens.calendarDayItemHeight}: 2rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${tokens.calendarHeaderWrapperPadding}: 0.75rem 1rem 0 1rem;
                ${tokens.calendarHeaderArrowGap}: 0.5rem;

                ${tokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${tokens.calendarHeaderDateGap}: 0.25rem;

                ${tokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${tokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${tokens.iconButtonHeight}: 2rem;
                ${tokens.iconButtonWidth}: 2rem;
                ${tokens.iconButtonPadding}: 0.75rem;
                ${tokens.iconButtonRadius}: 0.5rem;
            `,
            xs: css`
                ${tokens.width}: 19rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.dividerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0 0 0.375rem 0;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.calendarWidth}: 19rem;
                ${tokens.calendarBorderRadius}: 0.5rem;

                ${tokens.calendarYearsPadding}: 0.5rem 0.75rem 0.625rem 0.75rem;
                ${tokens.calendarYearItemBorderRadius}: 0.375rem;
                ${tokens.calendarYearItemWidth}: 5.625rem;
                ${tokens.calendarYearItemHeight}: 3.281rem;

                ${tokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${tokens.calendarQuarterItemBorderRadius}: 0.375rem;
                ${tokens.calendarQuarterItemWidth}: 8.25rem;
                ${tokens.calendarQuarterItemHeight}: 6.563rem;

                ${tokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarMonthsPadding}: 0.5rem 0.75rem 0.625rem 0.75rem;
                ${tokens.calendarMonthItemBorderRadius}: 0.375rem;
                ${tokens.calendarMonthItemWidth}: 5.625rem;
                ${tokens.calendarMonthItemHeight}: 3.281rem;

                ${tokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarDaysPadding}: 0.375rem 0.75rem 0.625rem 0.75rem;
                ${tokens.calendarDayItemBorderRadius}: 0.375rem;
                ${tokens.calendarDayItemWidth}: 2.5rem;
                ${tokens.calendarDayItemHeight}: 2rem;

                ${tokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${tokens.calendarHeaderWrapperPadding}: 0.5rem 0.75rem 0 0.75rem;
                ${tokens.calendarHeaderArrowGap}: 0;

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
                ${tokens.iconButtonPadding}: 0.75rem;
                ${tokens.iconButtonRadius}: 0.5rem;
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
                ${tokens.labelColorReadOnly}: var(--text-secondary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.dividerColorReadOnly}: var(--text-secondary);

                ${tokens.textFieldColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
            `,
        },
    },
};
