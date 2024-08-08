import { styled } from '@linaria/react';

import { calendarBaseConfig, calendarBaseTokens } from '../Calendar';
import { component, mergeConfig } from '../../engines';

import { tokens } from './DatePicker.tokens';

const mergedCalendarConfig = mergeConfig(calendarBaseConfig);
const Calendar = component(mergedCalendarConfig);

export const baseCalendarTokens = `
    padding-top: var(${tokens.calendarPaddingTop});
    box-shadow: var(${tokens.calendarShadow});
    border-radius: var(${tokens.calendarBorderRadius});

    ${calendarBaseTokens.calendarBackgroundColor}: var(${tokens.calendarBackgroundColor});
    ${calendarBaseTokens.calendarSelectedItemBackground}: var(${tokens.calendarSelectedItemBackground});
    ${calendarBaseTokens.calendarSelectedItemColor}: var(${tokens.calendarSelectedItemColor});
    ${calendarBaseTokens.calendarSelectableItemBackgroundHover}: var(${tokens.calendarSelectableItemBackgroundHover});
    ${calendarBaseTokens.calendarCurrentItemBorderColor}: var(${tokens.calendarCurrentItemBorderColor});
    ${calendarBaseTokens.calendarCurrentItemBackgroundHover}: var(${tokens.calendarCurrentItemBackgroundHover});
    ${calendarBaseTokens.calendarCurrentItemColorHover}: var(${tokens.calendarCurrentItemColorHover});
    ${calendarBaseTokens.calendarCurrentItemChildBackgroundHover}: var(${tokens.calendarCurrentItemChildBackgroundHover});
    ${calendarBaseTokens.calendarActiveItemBackground}: var(${tokens.calendarActiveItemBackground});
    ${calendarBaseTokens.calendarActiveItemColor}: var(${tokens.calendarActiveItemColor});
    ${calendarBaseTokens.calendarHoveredItemBackground}: var(${tokens.calendarHoveredItemBackground});
    ${calendarBaseTokens.calendarHoveredItemColor}: var(${tokens.calendarHoveredItemColor});
    ${calendarBaseTokens.calendarRangeBackground}: var(${tokens.calendarRangeBackground});
    ${calendarBaseTokens.calendarOutlineFocusColor}: var(${tokens.calendarOutlineFocusColor});
    ${calendarBaseTokens.calendarContentPrimaryColor}: var(${tokens.calendarContentPrimaryColor});
    ${calendarBaseTokens.calendarContentSecondaryColor}: var(${tokens.calendarContentSecondaryColor});

    ${calendarBaseTokens.iconButtonColor}: var(${tokens.iconButtonColor});
    ${calendarBaseTokens.iconButtonBackgroundColor}: var(${tokens.iconButtonBackgroundColor});
    ${calendarBaseTokens.iconButtonColorHover}: var(${tokens.iconButtonColorHover});
    ${calendarBaseTokens.iconButtonBackgroundColorHover}: var(${tokens.iconButtonBackgroundColorHover});
    ${calendarBaseTokens.iconButtonColorActive}: var(${tokens.iconButtonColorActive});
    ${calendarBaseTokens.iconButtonBackgroundColorActive}: var(${tokens.iconButtonBackgroundColorActive});

    ${calendarBaseTokens.calendarWidth}: var(${tokens.calendarWidth});
    ${calendarBaseTokens.calendarHeight}: var(${tokens.calendarHeight});

    ${calendarBaseTokens.calendarYearsPadding}: var(${tokens.calendarYearsPadding});
    ${calendarBaseTokens.calendarYearItemBorderRadius}: var(${tokens.calendarYearItemBorderRadius});
    ${calendarBaseTokens.calendarYearItemWidth}: var(${tokens.calendarYearItemWidth});
    ${calendarBaseTokens.calendarYearItemHeight}: var(${tokens.calendarYearItemHeight});
    ${calendarBaseTokens.calendarYearFontFamily}: var(${tokens.calendarYearFontFamily});
    ${calendarBaseTokens.calendarYearFontSize}: var(${tokens.calendarYearFontSize});
    ${calendarBaseTokens.calendarYearFontStyle}: var(${tokens.calendarYearFontStyle});
    ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(${tokens.calendarYearFontLetterSpacing});
    ${calendarBaseTokens.calendarYearFontLineHeight}: var(${tokens.calendarYearFontLineHeight});
    ${calendarBaseTokens.calendarYearFontWeight}: var(${tokens.calendarYearFontWeight});
    ${calendarBaseTokens.calendarYearSelectedFontWeight}: var(${tokens.calendarYearSelectedFontWeight});

    ${calendarBaseTokens.calendarMonthsPadding}: var(${tokens.calendarMonthsPadding});
    ${calendarBaseTokens.calendarMonthItemBorderRadius}: var(${tokens.calendarMonthItemBorderRadius});
    ${calendarBaseTokens.calendarMonthItemWidth}: var(${tokens.calendarMonthItemWidth});
    ${calendarBaseTokens.calendarMonthItemHeight}: var(${tokens.calendarMonthItemHeight});
    ${calendarBaseTokens.calendarMonthFontFamily}: var(${tokens.calendarMonthFontFamily});
    ${calendarBaseTokens.calendarMonthFontSize}: var(${tokens.calendarMonthFontSize});
    ${calendarBaseTokens.calendarMonthFontStyle}: var(${tokens.calendarMonthFontStyle});
    ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(${tokens.calendarMonthFontLetterSpacing});
    ${calendarBaseTokens.calendarMonthFontLineHeight}: var(${tokens.calendarMonthFontLineHeight});
    ${calendarBaseTokens.calendarMonthFontWeight}: var(${tokens.calendarMonthFontWeight});
    ${calendarBaseTokens.calendarMonthSelectedFontWeight}: var(${tokens.calendarMonthSelectedFontWeight});

    ${calendarBaseTokens.calendarQuartersPadding}: var(${tokens.calendarQuartersPadding});
    ${calendarBaseTokens.calendarQuarterItemBorderRadius}: var(${tokens.calendarQuarterItemBorderRadius});
    ${calendarBaseTokens.calendarQuarterItemWidth}: var(${tokens.calendarQuarterItemWidth});
    ${calendarBaseTokens.calendarQuarterItemHeight}: var(${tokens.calendarQuarterItemHeight});
    ${calendarBaseTokens.calendarQuarterFontFamily}: var(${tokens.calendarQuarterFontFamily});
    ${calendarBaseTokens.calendarQuarterFontSize}: var(${tokens.calendarQuarterFontSize});
    ${calendarBaseTokens.calendarQuarterFontStyle}: var(${tokens.calendarQuarterFontStyle});
    ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: var(${tokens.calendarQuarterFontLetterSpacing});
    ${calendarBaseTokens.calendarQuarterFontLineHeight}: var(${tokens.calendarQuarterFontLineHeight});
    ${calendarBaseTokens.calendarQuarterFontWeight}: var(${tokens.calendarQuarterFontWeight});
    ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: var(${tokens.calendarQuarterSelectedFontWeight});
    
    ${calendarBaseTokens.calendarDaysPadding}: var(${tokens.calendarDaysPadding});
    ${calendarBaseTokens.calendarDayItemBorderRadius}: var(${tokens.calendarDayItemBorderRadius});
    ${calendarBaseTokens.calendarDayItemWidth}: var(${tokens.calendarDayItemWidth});
    ${calendarBaseTokens.calendarDayItemHeight}: var(${tokens.calendarDayItemHeight});
    ${calendarBaseTokens.calendarDayFontFamily}: var(${tokens.calendarDayFontFamily});
    ${calendarBaseTokens.calendarDayFontSize}: var(${tokens.calendarDayFontSize});
    ${calendarBaseTokens.calendarDayFontStyle}: var(${tokens.calendarDayFontStyle});
    ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(${tokens.calendarDayFontLetterSpacing});
    ${calendarBaseTokens.calendarDayFontLineHeight}: var(${tokens.calendarDayFontLineHeight});
    ${calendarBaseTokens.calendarDayFontWeight}: var(${tokens.calendarDayFontWeight});
    ${calendarBaseTokens.calendarDaySelectedFontWeight}: var(${tokens.calendarDaySelectedFontWeight});
    
    ${calendarBaseTokens.calendarHeaderWrapperPadding}: var(${tokens.calendarHeaderWrapperPadding});
    ${calendarBaseTokens.calendarHeaderArrowGap}: var(${tokens.calendarHeaderArrowGap});
    ${calendarBaseTokens.calendarHeaderArrowPadding}: var(${tokens.calendarHeaderArrowPadding});
    ${calendarBaseTokens.calendarHeaderPadding}: var(${tokens.calendarHeaderPadding});
    ${calendarBaseTokens.calendarHeaderDateGap}: var(${tokens.calendarHeaderDateGap});
    ${calendarBaseTokens.calendarHeaderFontFamily}: var(${tokens.calendarHeaderFontFamily});
    ${calendarBaseTokens.calendarHeaderFontSize}: var(${tokens.calendarHeaderFontSize});
    ${calendarBaseTokens.calendarHeaderFontStyle}: var(${tokens.calendarHeaderFontStyle});
    ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(${tokens.calendarHeaderFontLetterSpacing});
    ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(${tokens.calendarHeaderFontLineHeight});
    ${calendarBaseTokens.calendarHeaderFontWeight}: var(${tokens.calendarHeaderFontWeight});
    ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(${tokens.calendarHeaderFontWeightBold});
    
    ${calendarBaseTokens.iconButtonHeight}: var(${tokens.iconButtonHeight});
    ${calendarBaseTokens.iconButtonWidth}: var(${tokens.iconButtonWidth});
    ${calendarBaseTokens.iconButtonPadding}: var(${tokens.iconButtonPadding});
    ${calendarBaseTokens.iconButtonRadius}: var(${tokens.iconButtonRadius});
    ${calendarBaseTokens.iconButtonFocusColor}: var(${tokens.iconButtonFocusColor});
`;

// NOTE: переопределение токенов Calendar
export const StyledCalendar = styled(Calendar)`
    width: var(${tokens.width});
    ${baseCalendarTokens}
`;
