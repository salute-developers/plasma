import { css, calendarBaseTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        tooltipSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${calendarBaseTokens.calendarSelectedItemBackground}: var(--surface-solid-default);
                ${calendarBaseTokens.calendarSelectedItemColor}: var(--inverse-text-primary);
                ${calendarBaseTokens.calendarSelectableItemBackgroundHover}: var(--surface-transparent-secondary);
                ${calendarBaseTokens.calendarCurrentItemBorderColor}: var(--surface-solid-default);
                ${calendarBaseTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarBaseTokens.calendarCurrentItemColorHover}: var(--text-primary);
                ${calendarBaseTokens.calendarCurrentItemChildBackgroundHover}: var(--surface-transparent-secondary);
                ${calendarBaseTokens.calendarActiveItemBackground}: var(--surface-solid-default);
                ${calendarBaseTokens.calendarActiveItemColor}: var(--inverse-text-primary);
                ${calendarBaseTokens.calendarHoveredItemBackground}: var(--surface-accent);
                ${calendarBaseTokens.calendarHoveredItemColor}: var(--text-primary);
                ${calendarBaseTokens.calendarRangeBackground}: var(--surface-transparent-secondary);
                ${calendarBaseTokens.calendarOutlineFocusColor}: var(--surface-accent);
                ${calendarBaseTokens.calendarContentPrimaryColor}: var(--surface-solid-default);
                ${calendarBaseTokens.calendarContentPrimaryDisabledColor}: var(--surface-solid-default);
                ${calendarBaseTokens.calendarContentSecondaryColor}: var(--text-secondary);
                ${calendarBaseTokens.calendarContentSecondaryDisabledColor}: var(--text-secondary);
                ${calendarBaseTokens.calendarHeaderArrowColor}: ${calendarBaseTokens.calendarContentPrimaryColor};
                ${calendarBaseTokens.calendarDayOfWeekColor}: var(--text-secondary);
                ${calendarBaseTokens.calendarDisabledOpacity}: 0.4;

                ${calendarBaseTokens.iconButtonColor}: var(--text-primary);
                ${calendarBaseTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${calendarBaseTokens.iconButtonColorHover}: var(--text-primary-hover);
                ${calendarBaseTokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${calendarBaseTokens.iconButtonColorActive}: var(--text-primary-hover);
                ${calendarBaseTokens.iconButtonBackgroundColorActive}: var(--surface-clear);
                ${calendarBaseTokens.iconButtonFocusColor}: var(--surface-accent);

                ${calendarBaseTokens.tooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${calendarBaseTokens.tooltipBoxShadow}: var(--shadow-down-hard-s);
                ${calendarBaseTokens.tooltipColor}: var(--text-primary);
            `,
        },
        size: {
            xl: css`
                ${calendarBaseTokens.calendarContainerWidth}: 28rem;
                ${calendarBaseTokens.calendarContainerHeight}: 28.75rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.875rem;

                ${calendarBaseTokens.calendarYearFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarBaseTokens.calendarYearFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarBaseTokens.calendarYearFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarBaseTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarBaseTokens.calendarYearFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarBaseTokens.calendarQuartersPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.875rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarBaseTokens.calendarQuarterFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarBaseTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarBaseTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarBaseTokens.calendarMonthsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.875rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarBaseTokens.calendarMonthFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarBaseTokens.calendarMonthFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarBaseTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarBaseTokens.calendarMonthFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarBaseTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.875rem;

                ${calendarBaseTokens.calendarDayFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarBaseTokens.calendarDayFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarBaseTokens.calendarDayFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarBaseTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarBaseTokens.calendarDayFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: var(--plasma-typo-h3-font-family);
                ${calendarBaseTokens.calendarHeaderFontSize}: var(--plasma-typo-h3-font-size);
                ${calendarBaseTokens.calendarHeaderFontStyle}: var(--plasma-typo-h3-font-style);
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h3-line-height);
                ${calendarBaseTokens.calendarHeaderFontWeight}: var(--plasma-typo-h3-font-weight);
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h3-bold-font-weight);

                ${calendarBaseTokens.iconButtonHeight}: 4rem;
                ${calendarBaseTokens.iconButtonWidth}: 4rem;
                ${calendarBaseTokens.iconButtonPadding}: 1.25rem;
                ${calendarBaseTokens.iconButtonRadius}: 1rem;
            `,
            l: css`
                ${calendarBaseTokens.calendarContainerWidth}: 24.5rem;
                ${calendarBaseTokens.calendarContainerHeight}: 25rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.75rem;

                ${calendarBaseTokens.calendarYearFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarBaseTokens.calendarYearFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarBaseTokens.calendarYearFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarBaseTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarBaseTokens.calendarYearFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarBaseTokens.calendarQuartersPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.75rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarBaseTokens.calendarQuarterFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarBaseTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarBaseTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarBaseTokens.calendarMonthsPadding}: 0.5rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.75rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarBaseTokens.calendarMonthFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarBaseTokens.calendarMonthFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarBaseTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarBaseTokens.calendarMonthFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarBaseTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.75rem;

                ${calendarBaseTokens.calendarDayFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarBaseTokens.calendarDayFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarBaseTokens.calendarDayFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarBaseTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarBaseTokens.calendarDayFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: var(--plasma-typo-h3-font-family);
                ${calendarBaseTokens.calendarHeaderFontSize}: var(--plasma-typo-h3-font-size);
                ${calendarBaseTokens.calendarHeaderFontStyle}: var(--plasma-typo-h3-font-style);
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h3-line-height);
                ${calendarBaseTokens.calendarHeaderFontWeight}: var(--plasma-typo-h3-font-weight);
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h3-bold-font-weight);

                ${calendarBaseTokens.iconButtonHeight}: 3.5rem;
                ${calendarBaseTokens.iconButtonWidth}: 3.5rem;
                ${calendarBaseTokens.iconButtonPadding}: 1rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.875rem;
            `,
            m: css`
                ${calendarBaseTokens.calendarContainerWidth}: 21rem;
                ${calendarBaseTokens.calendarContainerHeight}: 21rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.625rem;

                ${calendarBaseTokens.calendarYearFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarBaseTokens.calendarYearFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarBaseTokens.calendarYearFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarBaseTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarBaseTokens.calendarYearFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarBaseTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.625rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarBaseTokens.calendarQuarterFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarBaseTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarBaseTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarBaseTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.625rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarBaseTokens.calendarMonthFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarBaseTokens.calendarMonthFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarBaseTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarBaseTokens.calendarMonthFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarBaseTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.625rem;

                ${calendarBaseTokens.calendarDayFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarBaseTokens.calendarDayFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarBaseTokens.calendarDayFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarBaseTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarBaseTokens.calendarDayFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 0.75rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarBaseTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarBaseTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarBaseTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${calendarBaseTokens.iconButtonHeight}: 3rem;
                ${calendarBaseTokens.iconButtonWidth}: 3rem;
                ${calendarBaseTokens.iconButtonPadding}: 0.75rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.75rem;
            `,
            s: css`
                ${calendarBaseTokens.calendarContainerWidth}: 17.5rem;
                ${calendarBaseTokens.calendarContainerHeight}: 17rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarBaseTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarQuarterFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarBaseTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarBaseTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarBaseTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarBaseTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarBaseTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${calendarBaseTokens.iconButtonHeight}: 2.5rem;
                ${calendarBaseTokens.iconButtonWidth}: 2.5rem;
                ${calendarBaseTokens.iconButtonPadding}: 0.5rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.625rem;
            `,
            xs: css`
                ${calendarBaseTokens.calendarContainerWidth}: 17.5rem;
                ${calendarBaseTokens.calendarContainerHeight}: 15.5rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarBaseTokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarBaseTokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarBaseTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarBaseTokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarBaseTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarBaseTokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarBaseTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarBaseTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarBaseTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarBaseTokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarBaseTokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarBaseTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarBaseTokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarBaseTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.5rem;

                ${calendarBaseTokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarBaseTokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarBaseTokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarBaseTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarBaseTokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.063rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0;
                ${calendarBaseTokens.calendarArrowHeaderCustomSize}: 1rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: var(--plasma-typo-h5-font-family);
                ${calendarBaseTokens.calendarHeaderFontSize}: var(--plasma-typo-h5-font-size);
                ${calendarBaseTokens.calendarHeaderFontStyle}: var(--plasma-typo-h5-font-style);
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h5-line-height);
                ${calendarBaseTokens.calendarHeaderFontWeight}: var(--plasma-typo-h5-font-weight);
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);

                ${calendarBaseTokens.iconButtonHeight}: 2rem;
                ${calendarBaseTokens.iconButtonWidth}: 2rem;
                ${calendarBaseTokens.iconButtonPadding}: 0.5rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.5rem;
            `,
        },
        eventTooltipSize: {
            m: css`
                ${calendarBaseTokens.tooltipPaddingTop}: 0.6875rem;
                ${calendarBaseTokens.tooltipPaddingRight}: 0.875rem;
                ${calendarBaseTokens.tooltipPaddingBottom}: 0.6875rem;
                ${calendarBaseTokens.tooltipPaddingLeft}: 0.875rem;

                ${calendarBaseTokens.tooltipMinHeight}: 2.5rem;
                ${calendarBaseTokens.tooltipBorderRadius}: 0.625rem;

                ${calendarBaseTokens.tooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.tooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.tooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.tooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${calendarBaseTokens.tooltipContentLeftMargin}: 0.375rem;

                ${calendarBaseTokens.tooltipArrowMaskWidth}: 1.25rem;
                ${calendarBaseTokens.tooltipArrowMaskHeight}: 1.25rem;
                ${calendarBaseTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${calendarBaseTokens.tooltipArrowHeight}: 0.5rem;
                ${calendarBaseTokens.tooltipArrowEdgeMargin}: 0.625rem;
                ${calendarBaseTokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
            s: css`
                ${calendarBaseTokens.tooltipPaddingTop}: 0.5rem;
                ${calendarBaseTokens.tooltipPaddingRight}: 0.75rem;
                ${calendarBaseTokens.tooltipPaddingBottom}: 0.5rem;
                ${calendarBaseTokens.tooltipPaddingLeft}: 0.75rem;

                ${calendarBaseTokens.tooltipMinHeight}: 2rem;
                ${calendarBaseTokens.tooltipBorderRadius}: 0.5rem;

                ${calendarBaseTokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarBaseTokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarBaseTokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarBaseTokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarBaseTokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarBaseTokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${calendarBaseTokens.tooltipContentLeftMargin}: 0.25rem;

                ${calendarBaseTokens.tooltipArrowMaskWidth}: 1rem;
                ${calendarBaseTokens.tooltipArrowMaskHeight}: 1rem;
                ${calendarBaseTokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${calendarBaseTokens.tooltipArrowHeight}: 0.375rem;
                ${calendarBaseTokens.tooltipArrowEdgeMargin}: 0.5625rem;
                ${calendarBaseTokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
            `,
        },
    },
};
