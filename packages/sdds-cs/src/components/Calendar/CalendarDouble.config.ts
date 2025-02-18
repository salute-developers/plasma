import { css, calendarDoubleTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${calendarDoubleTokens.calendarSelectedItemBackground}: var(--surface-accent);
                ${calendarDoubleTokens.calendarSelectedItemColor}: var(--inverse-text-primary);
                ${calendarDoubleTokens.calendarSelectableItemBackgroundHover}: var(--surface-transparent-accent);
                ${calendarDoubleTokens.calendarCurrentItemBorderColor}: var(--inverse-outline-solid-secondary);
                ${calendarDoubleTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarDoubleTokens.calendarCurrentItemColorHover}: var(--text-primary);
                ${calendarDoubleTokens.calendarCurrentItemChildBackgroundHover}: var(--surface-transparent-accent);
                ${calendarDoubleTokens.calendarActiveItemBackground}: var(--surface-accent);
                ${calendarDoubleTokens.calendarActiveItemColor}: var(--inverse-text-primary);
                ${calendarDoubleTokens.calendarHoveredItemBackground}: var(--surface-transparent-accent);
                ${calendarDoubleTokens.calendarHoveredItemColor}: var(--text-primary);
                ${calendarDoubleTokens.calendarRangeBackground}: var(--surface-transparent-accent);
                ${calendarDoubleTokens.calendarOutlineFocusColor}: var(--surface-accent);
                ${calendarDoubleTokens.calendarContentPrimaryColor}: var(--surface-primary);
                ${calendarDoubleTokens.calendarContentPrimaryDisabledColor}: var(--text-secondary);
                ${calendarDoubleTokens.calendarContentSecondaryColor}: var(--text-secondary);
                ${calendarDoubleTokens.calendarContentSecondaryDisabledColor}: var(--text-secondary);
                ${calendarDoubleTokens.calendarDayOfWeekColor}: var(--text-secondary);
                ${calendarDoubleTokens.calendarHeaderArrowColor}: var(--text-accent);
                ${calendarDoubleTokens.calendarDisabledOpacity}: 1;

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

                ${calendarDoubleTokens.calendarCurrentItemBorderWidth}: 0.125rem;

                ${calendarDoubleTokens.calendarHeaderArrowGap}: 0.5rem;

                ${calendarDoubleTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarDoubleTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarDoubleTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-body-m-bold-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-body-m-bold-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-body-m-bold-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-body-m-bold-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-body-m-bold-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarDoubleTokens.iconButtonHeight}: 2.5rem;
                ${calendarDoubleTokens.iconButtonWidth}: 2.5rem;
                ${calendarDoubleTokens.iconButtonPadding}: 1rem;
                ${calendarDoubleTokens.iconButtonRadius}: 0.625rem;
            `,
        },
    },
};
