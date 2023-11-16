import { css, calendarBaseTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${calendarBaseTokens.calendarBackgroundColor}: transparent;
                ${calendarBaseTokens.calendarSelectedItemBackground}: var(--plasma-colors-primary);
                ${calendarBaseTokens.calendarSelectedItemColor}: var(--plasma-colors-background-primary);
                ${calendarBaseTokens.calendarSelectableItemBackgroundHover}: var(--plasma-colors-surface-liquid02);
                ${calendarBaseTokens.calendarCurrentItemBorderColor}: var(--plasma-colors-primary);
                ${calendarBaseTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarBaseTokens.calendarCurrentItemColorHover}: var(--plasma-colors-primary);
                ${calendarBaseTokens.calendarCurrentItemChildBackgroundHover}: var(--plasma-colors-surface-liquid02);
                ${calendarBaseTokens.calendarActiveItemBackground}: var(--plasma-colors-primary);
                ${calendarBaseTokens.calendarActiveItemColor}: var(--plasma-colors-surface-solid03);
                ${calendarBaseTokens.calendarHoveredItemBackground}: var(--plasma-colors-accent);
                ${calendarBaseTokens.calendarHoveredItemColor}: var(--plasma-colors-background-primary);
                ${calendarBaseTokens.calendarRangeBackground}: var(--plasma-colors-surface-liquid02);
                ${calendarBaseTokens.calendarOutlineFocusColor}: var(--plasma-colors-button-focused);
                ${calendarBaseTokens.calendarContentPrimaryColor}: var(--plasma-colors-primary);
                ${calendarBaseTokens.calendarContentSecondaryColor}: var(--plasma-colors-secondary);
            `,
        },
        size: {
            m: css`
                ${calendarBaseTokens.calendarHeaderArrowContainerWidth}: 5.5rem;
                ${calendarBaseTokens.calendarItemBorderRadius}: 0.5rem;
                ${calendarBaseTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarBaseTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarBaseTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarBaseTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);
                ${calendarBaseTokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarBaseTokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarBaseTokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarBaseTokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarBaseTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarBaseTokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
            `,
        },
    },
};
