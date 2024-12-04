import { css, calendarDoubleTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${calendarDoubleTokens.calendarSeparatorBackground}: var(--surface-transparent-secondary);
                ${calendarDoubleTokens.calendarBackgroundColor}: transparent;
                ${calendarDoubleTokens.calendarSelectedItemBackground}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarSelectedItemColor}: var(--inverse-text-primary);
                ${calendarDoubleTokens.calendarSelectableItemBackgroundHover}: var(--surface-transparent-secondary);
                ${calendarDoubleTokens.calendarCurrentItemBorderColor}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarDoubleTokens.calendarCurrentItemColorHover}: var(--text-primary);
                ${calendarDoubleTokens.calendarCurrentItemChildBackgroundHover}: var(--surface-transparent-secondary);
                ${calendarDoubleTokens.calendarActiveItemBackground}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarActiveItemColor}: var(--inverse-text-primary);
                ${calendarDoubleTokens.calendarHoveredItemBackground}: var(--surface-accent);
                ${calendarDoubleTokens.calendarHoveredItemColor}: var(--text-primary);
                ${calendarDoubleTokens.calendarRangeBackground}: var(--surface-transparent-secondary);
                ${calendarDoubleTokens.calendarOutlineFocusColor}: var(--surface-accent);
                ${calendarDoubleTokens.calendarContentPrimaryColor}: var(--surface-solid-default);
                ${calendarDoubleTokens.calendarContentSecondaryColor}: var(--text-secondary);

                ${calendarDoubleTokens.iconButtonColor}: var(--text-primary);
                ${calendarDoubleTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${calendarDoubleTokens.iconButtonColorHover}: var(--text-primary-hover);
                ${calendarDoubleTokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${calendarDoubleTokens.iconButtonColorActive}: var(--text-primary-hover);
                ${calendarDoubleTokens.iconButtonBackgroundColorActive}: var(--surface-clear);
                ${calendarDoubleTokens.iconButtonFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            l: css`
                ${calendarDoubleTokens.calendarWidth}: 51.063rem;
                ${calendarDoubleTokens.calendarHeight}: 25rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.75rem;
                ${calendarDoubleTokens.calendarYearItemWidth}: 7.8125rem;
                ${calendarDoubleTokens.calendarYearItemHeight}: 5.25rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.75rem;
                ${calendarDoubleTokens.calendarQuarterItemWidth}: 11.75rem;
                ${calendarDoubleTokens.calendarQuarterItemHeight}: 10.5rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarDoubleTokens.calendarQuarterFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarDoubleTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarDoubleTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.75rem;
                ${calendarDoubleTokens.calendarMonthItemWidth}: 7.8125rem;
                ${calendarDoubleTokens.calendarMonthItemHeight}: 5.25rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.75rem;
                ${calendarDoubleTokens.calendarDayItemWidth}: 3.5rem;
                ${calendarDoubleTokens.calendarDayItemHeight}: 3rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-l-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-l-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-l-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-l-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-l-bold-font-weight);

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0.5rem;

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 1rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.5rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 3.5rem;
                ${calendarDoubleTokens.iconButtonWidth}: 3.5rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1.5rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.875rem;
            `,
            m: css`
                ${calendarDoubleTokens.calendarWidth}: 44.063rem;
                ${calendarDoubleTokens.calendarHeight}: 21rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.625rem;
                ${calendarDoubleTokens.calendarYearItemWidth}: 6.688rem;
                ${calendarDoubleTokens.calendarYearItemHeight}: 4.375rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.625rem;
                ${calendarDoubleTokens.calendarQuarterItemWidth}: 10rem;
                ${calendarDoubleTokens.calendarQuarterItemHeight}: 8.5rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarDoubleTokens.calendarQuarterFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarDoubleTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarDoubleTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.625rem;
                ${calendarDoubleTokens.calendarMonthItemWidth}: 6.688rem;
                ${calendarDoubleTokens.calendarMonthItemHeight}: 4.375rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.625rem;
                ${calendarDoubleTokens.calendarDayItemWidth}: 3rem;
                ${calendarDoubleTokens.calendarDayItemHeight}: 2.5rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-m-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-m-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-m-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-m-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0.5rem;

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.75rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.375rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 3rem;
                ${calendarDoubleTokens.iconButtonWidth}: 3rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1.25rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.75rem;
            `,
            s: css`
                ${calendarDoubleTokens.calendarWidth}: 37.063rem;
                ${calendarDoubleTokens.calendarHeight}: 17rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.5rem;
                ${calendarDoubleTokens.calendarYearItemWidth}: 5.5rem;
                ${calendarDoubleTokens.calendarYearItemHeight}: 3.5rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.5rem;
                ${calendarDoubleTokens.calendarQuarterItemWidth}: 8.25rem;
                ${calendarDoubleTokens.calendarQuarterItemHeight}: 7rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarQuarterFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.5rem;
                ${calendarDoubleTokens.calendarMonthItemWidth}: 5.5rem;
                ${calendarDoubleTokens.calendarMonthItemHeight}: 3.5rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.5rem;
                ${calendarDoubleTokens.calendarDayItemWidth}: 2.5rem;
                ${calendarDoubleTokens.calendarDayItemHeight}: 2rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0.5rem;

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 2.5rem;
                ${calendarDoubleTokens.iconButtonWidth}: 2.5rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.625rem;
            `,
            xs: css`
                ${calendarDoubleTokens.calendarWidth}: 37.063rem;
                ${calendarDoubleTokens.calendarHeight}: 15.5rem;

                ${calendarDoubleTokens.calendarYearsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarYearItemBorderRadius}: 0.375rem;
                ${calendarDoubleTokens.calendarYearItemWidth}: 5.625rem;
                ${calendarDoubleTokens.calendarYearItemHeight}: 3.281rem;

                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarDoubleTokens.calendarQuartersPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarQuarterItemBorderRadius}: 0.375rem;
                ${calendarDoubleTokens.calendarQuarterItemWidth}: 8.25rem;
                ${calendarDoubleTokens.calendarQuarterItemHeight}: 6.563rem;

                ${calendarDoubleTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.calendarQuarterFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarDoubleTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarDoubleTokens.calendarMonthsPadding}: 0.375rem 0.25rem 0 0.25rem;
                ${calendarDoubleTokens.calendarMonthItemBorderRadius}: 0.375rem;
                ${calendarDoubleTokens.calendarMonthItemWidth}: 5.625rem;
                ${calendarDoubleTokens.calendarMonthItemHeight}: 3.281rem;

                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarDoubleTokens.calendarDaysPadding}: 0.375rem 0 0 0;
                ${calendarDoubleTokens.calendarDayItemBorderRadius}: 0.375rem;
                ${calendarDoubleTokens.calendarDayItemWidth}: 2.5rem;
                ${calendarDoubleTokens.calendarDayItemHeight}: 1.875rem;

                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-xs-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${calendarDoubleTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0;

                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h5-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h5-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h5-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h5-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h5-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h5-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 2rem;
                ${calendarDoubleTokens.iconButtonWidth}: 2rem;
                ${calendarDoubleTokens.iconButtonPadding}: 0.75rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.5rem;
            `,
        },
    },
};
