import { css, calendarDoubleTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${calendarDoubleTokens.calendarBackgroundColor}: transparent;
                ${calendarDoubleTokens.calendarSelectedItemBackground}: var(--plasma-colors-primary);
                ${calendarDoubleTokens.calendarSelectedItemColor}: var(--plasma-colors-background-primary);
                ${calendarDoubleTokens.calendarSelectableItemBackgroundHover}: var(--plasma-colors-surface-liquid02);
                ${calendarDoubleTokens.calendarCurrentItemBorderColor}: var(--plasma-colors-primary);
                ${calendarDoubleTokens.calendarCurrentItemBackgroundHover}: transparent;
                ${calendarDoubleTokens.calendarCurrentItemColorHover}: var(--plasma-colors-primary);
                ${calendarDoubleTokens.calendarCurrentItemChildBackgroundHover}: var(--plasma-colors-surface-liquid02);
                ${calendarDoubleTokens.calendarActiveItemBackground}: var(--plasma-colors-primary);
                ${calendarDoubleTokens.calendarActiveItemColor}: var(--plasma-colors-surface-solid03);
                ${calendarDoubleTokens.calendarHoveredItemBackground}: var(--plasma-colors-accent);
                ${calendarDoubleTokens.calendarHoveredItemColor}: var(--plasma-colors-background-primary);
                ${calendarDoubleTokens.calendarSeparatorBackground}: var(--plasma-colors-surface-liquid02);
                ${calendarDoubleTokens.calendarRangeBackground}: var(--plasma-colors-surface-liquid02);
                ${calendarDoubleTokens.calendarOutlineFocusColor}: var(--plasma-colors-button-focused);
                ${calendarDoubleTokens.calendarContentPrimaryColor}: var(--plasma-colors-primary);
                ${calendarDoubleTokens.calendarContentSecondaryColor}: var(--plasma-colors-secondary);
            `,
        },
        size: {
            m: css`
                ${calendarDoubleTokens.calendarItemBorderRadius}: 0.5rem;
                ${calendarDoubleTokens.calendarHeaderFontFamily}: var(--plasma-typo-h4-font-family);
                ${calendarDoubleTokens.calendarHeaderFontSize}: var(--plasma-typo-h4-font-size);
                ${calendarDoubleTokens.calendarHeaderFontStyle}: var(--plasma-typo-h4-font-style);
                ${calendarDoubleTokens.calendarHeaderFontLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${calendarDoubleTokens.calendarHeaderFontLineHeight}: var(--plasma-typo-h4-line-height);
                ${calendarDoubleTokens.calendarHeaderFontWeight}: var(--plasma-typo-h4-font-weight);
                ${calendarDoubleTokens.calendarHeaderFontWeightBold}: var(--plasma-typo-h4-bold-font-weight);
                ${calendarDoubleTokens.calendarYearFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarYearFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarYearFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarYearFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarYearFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarYearFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarMonthFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarMonthFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarMonthFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarMonthFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarMonthFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarMonthFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${calendarDoubleTokens.calendarDayFontFamily}: var(--plasma-typo-body-s-font-family);
                ${calendarDoubleTokens.calendarDayFontSize}: var(--plasma-typo-body-s-font-size);
                ${calendarDoubleTokens.calendarDayFontStyle}: var(--plasma-typo-body-s-font-style);
                ${calendarDoubleTokens.calendarDayFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${calendarDoubleTokens.calendarDayFontLineHeight}: var(--plasma-typo-body-s-line-height);
                ${calendarDoubleTokens.calendarDayFontWeight}: var(--plasma-typo-body-s-font-weight);
            `,
        },
    },
};
