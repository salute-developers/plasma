import { css, calendarBaseTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${calendarBaseTokens.calendarSelectedItemBackground}: var(--surface-accent);
                ${calendarBaseTokens.calendarSelectedItemColor}: var(--inverse-text-primary);
                ${calendarBaseTokens.calendarSelectableItemBackgroundHover}: var(--surface-transparent-accent);
                ${calendarBaseTokens.calendarCurrentItemBorderColor}: var(--inverse-outline-solid-secondary);
                ${calendarBaseTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarBaseTokens.calendarCurrentItemColorHover}: var(--text-primary);
                ${calendarBaseTokens.calendarCurrentItemChildBackgroundHover}: var(--surface-transparent-accent);
                ${calendarBaseTokens.calendarActiveItemBackground}: var(--surface-accent);
                ${calendarBaseTokens.calendarActiveItemColor}: var(--inverse-text-primary);
                ${calendarBaseTokens.calendarHoveredItemBackground}: var(--surface-transparent-accent);
                ${calendarBaseTokens.calendarHoveredItemColor}: var(--text-primary);
                ${calendarBaseTokens.calendarRangeBackground}: var(--surface-transparent-accent);
                ${calendarBaseTokens.calendarOutlineFocusColor}: var(--surface-accent);
                ${calendarBaseTokens.calendarContentPrimaryColor}: var(--surface-primary);
                ${calendarBaseTokens.calendarContentPrimaryDisabledColor}: var(--text-secondary);
                ${calendarBaseTokens.calendarContentSecondaryColor}: var(--text-secondary);
                ${calendarBaseTokens.calendarContentSecondaryDisabledColor}: var(--text-secondary);
                ${calendarBaseTokens.calendarDayOfWeekColor}: var(--text-secondary);
                ${calendarBaseTokens.calendarHeaderArrowColor}: var(--text-accent);
                ${calendarBaseTokens.calendarDisabledOpacity}: 1;

                ${calendarBaseTokens.iconButtonColor}: var(--text-accent);
                ${calendarBaseTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${calendarBaseTokens.iconButtonColorHover}: var(--text-primary-hover);
                ${calendarBaseTokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${calendarBaseTokens.iconButtonColorActive}: var(--text-primary-hover);
                ${calendarBaseTokens.iconButtonBackgroundColorActive}: var(--surface-clear);
                ${calendarBaseTokens.iconButtonFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${calendarBaseTokens.calendarWidth}: 17.5rem;
                ${calendarBaseTokens.calendarHeight}: 17rem;

                ${calendarBaseTokens.calendarYearsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarBaseTokens.calendarYearItemBorderRadius}: 0.5rem;
                ${calendarBaseTokens.calendarYearItemWidth}: 5.5rem;
                ${calendarBaseTokens.calendarYearItemHeight}: 3.5rem;

                ${calendarBaseTokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarYearSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarBaseTokens.calendarQuartersPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarBaseTokens.calendarQuarterItemBorderRadius}: 0.5rem;
                ${calendarBaseTokens.calendarQuarterItemWidth}: 8.25rem;
                ${calendarBaseTokens.calendarQuarterItemHeight}: 7rem;

                ${calendarBaseTokens.calendarQuarterFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarQuarterFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarQuarterFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarQuarterFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarQuarterFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarBaseTokens.calendarMonthsPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${calendarBaseTokens.calendarMonthItemBorderRadius}: 0.5rem;
                ${calendarBaseTokens.calendarMonthItemWidth}: 5.5rem;
                ${calendarBaseTokens.calendarMonthItemHeight}: 3.5rem;

                ${calendarBaseTokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarMonthSelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarBaseTokens.calendarDaysPadding}: 0.5rem 0 0 0;
                ${calendarBaseTokens.calendarDayItemBorderRadius}: 0.5rem;
                ${calendarBaseTokens.calendarDayItemWidth}: 2.5rem;
                ${calendarBaseTokens.calendarDayItemHeight}: 2rem;

                ${calendarBaseTokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarDaySelectedFontWeight}: var(--plasma-typo-body-s-bold-font-weight);

                ${calendarBaseTokens.calendarCurrentItemBorderWidth}: 0.125rem;

                ${calendarBaseTokens.calendarHeaderArrowGap}: 0.5rem;

                ${calendarBaseTokens.calendarHeaderPadding}: 0 0 0 0.5rem;
                ${calendarBaseTokens.calendarHeaderDateGap}: 0.25rem;

                ${calendarBaseTokens.calendarHeaderFontFamily}: var(--plasma-typo-body-m-bold-font-family);
                ${calendarBaseTokens.calendarHeaderFontSize}: var(--plasma-typo-body-m-bold-font-size);
                ${calendarBaseTokens.calendarHeaderFontStyle}: var(--plasma-typo-body-m-bold-font-style);
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-body-m-bold-letter-spacing);
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-body-m-bold-line-height);
                ${calendarBaseTokens.calendarHeaderFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-body-m-bold-font-weight);

                ${calendarBaseTokens.iconButtonHeight}: 2.5rem;
                ${calendarBaseTokens.iconButtonWidth}: 2.5rem;
                ${calendarBaseTokens.iconButtonPadding}: 1rem;
                ${calendarBaseTokens.iconButtonRadius}: 0.625rem;
            `,
        },
    },
};
