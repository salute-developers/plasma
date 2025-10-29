import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';
import { applyHidden } from 'src/mixins';

import { calendarBaseConfig, calendarBaseTokens } from '../Calendar';

import { tokens } from './DatePicker.tokens';

const mergedCalendarConfig = mergeConfig(calendarBaseConfig);
const Calendar = component(mergedCalendarConfig);

export const baseCalendarTokens = `
    padding-top: var(${tokens.calendarPaddingTop});
    box-shadow: var(${tokens.calendarShadow});
    border-radius: var(${tokens.calendarBorderRadius});
    margin-top: var(${tokens.calendarMarginTop});

    ${calendarBaseTokens.calendarBackgroundColor}: var(${tokens.calendarBackgroundColor});
    ${calendarBaseTokens.calendarSelectedItemBackground}: var(${tokens.calendarSelectedItemBackground});
    ${calendarBaseTokens.calendarSelectedItemColor}: var(${tokens.calendarSelectedItemColor});
    ${calendarBaseTokens.calendarSelectableItemBackgroundHover}: var(${tokens.calendarSelectableItemBackgroundHover});
    ${calendarBaseTokens.calendarCurrentItemBorderColor}: var(${tokens.calendarCurrentItemBorderColor});
    ${calendarBaseTokens.calendarCurrentItemBorderWidth}: var(${tokens.calendarCurrentItemBorderWidth});
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
    ${calendarBaseTokens.calendarContentPrimaryDisabledColor}: var(${tokens.calendarContentPrimaryDisabledColor});
    ${calendarBaseTokens.calendarContentSecondaryColor}: var(${tokens.calendarContentSecondaryColor});
    ${calendarBaseTokens.calendarContentSecondaryDisabledColor}: var(${tokens.calendarContentSecondaryDisabledColor});
    ${calendarBaseTokens.calendarDisabledOpacity}: var(${tokens.calendarDisabledOpacity});

    ${calendarBaseTokens.iconButtonColor}: var(${tokens.iconButtonColor});
    ${calendarBaseTokens.iconButtonBackgroundColor}: var(${tokens.iconButtonBackgroundColor});
    ${calendarBaseTokens.iconButtonColorHover}: var(${tokens.iconButtonColorHover});
    ${calendarBaseTokens.iconButtonBackgroundColorHover}: var(${tokens.iconButtonBackgroundColorHover});
    ${calendarBaseTokens.iconButtonColorActive}: var(${tokens.iconButtonColorActive});
    ${calendarBaseTokens.iconButtonBackgroundColorActive}: var(${tokens.iconButtonBackgroundColorActive});

    ${calendarBaseTokens.calendarBorderWidth}: var(${tokens.calendarBorderWidth});
    ${calendarBaseTokens.calendarBorderColor}: var(${tokens.calendarBorderColor});

    ${calendarBaseTokens.calendarYearsPadding}: var(${tokens.calendarYearsPadding});
    ${calendarBaseTokens.calendarYearItemBorderRadius}: var(${tokens.calendarYearItemBorderRadius});
    ${calendarBaseTokens.calendarYearFontFamily}: var(${tokens.calendarYearFontFamily});
    ${calendarBaseTokens.calendarYearFontSize}: var(${tokens.calendarYearFontSize});
    ${calendarBaseTokens.calendarYearFontStyle}: var(${tokens.calendarYearFontStyle});
    ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(${tokens.calendarYearFontLetterSpacing});
    ${calendarBaseTokens.calendarYearFontLineHeight}: var(${tokens.calendarYearFontLineHeight});
    ${calendarBaseTokens.calendarYearFontWeight}: var(${tokens.calendarYearFontWeight});
    ${calendarBaseTokens.calendarYearSelectedFontWeight}: var(${tokens.calendarYearSelectedFontWeight});

    ${calendarBaseTokens.calendarMonthsPadding}: var(${tokens.calendarMonthsPadding});
    ${calendarBaseTokens.calendarMonthItemBorderRadius}: var(${tokens.calendarMonthItemBorderRadius});
    ${calendarBaseTokens.calendarMonthFontFamily}: var(${tokens.calendarMonthFontFamily});
    ${calendarBaseTokens.calendarMonthFontSize}: var(${tokens.calendarMonthFontSize});
    ${calendarBaseTokens.calendarMonthFontStyle}: var(${tokens.calendarMonthFontStyle});
    ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(${tokens.calendarMonthFontLetterSpacing});
    ${calendarBaseTokens.calendarMonthFontLineHeight}: var(${tokens.calendarMonthFontLineHeight});
    ${calendarBaseTokens.calendarMonthFontWeight}: var(${tokens.calendarMonthFontWeight});
    ${calendarBaseTokens.calendarMonthSelectedFontWeight}: var(${tokens.calendarMonthSelectedFontWeight});

    ${calendarBaseTokens.calendarQuartersPadding}: var(${tokens.calendarQuartersPadding});
    ${calendarBaseTokens.calendarQuarterItemBorderRadius}: var(${tokens.calendarQuarterItemBorderRadius});
    ${calendarBaseTokens.calendarQuarterFontFamily}: var(${tokens.calendarQuarterFontFamily});
    ${calendarBaseTokens.calendarQuarterFontSize}: var(${tokens.calendarQuarterFontSize});
    ${calendarBaseTokens.calendarQuarterFontStyle}: var(${tokens.calendarQuarterFontStyle});
    ${calendarBaseTokens.calendarQuarterFontLetterSpacing}: var(${tokens.calendarQuarterFontLetterSpacing});
    ${calendarBaseTokens.calendarQuarterFontLineHeight}: var(${tokens.calendarQuarterFontLineHeight});
    ${calendarBaseTokens.calendarQuarterFontWeight}: var(${tokens.calendarQuarterFontWeight});
    ${calendarBaseTokens.calendarQuarterSelectedFontWeight}: var(${tokens.calendarQuarterSelectedFontWeight});
    
    ${calendarBaseTokens.calendarDaysPadding}: var(${tokens.calendarDaysPadding});
    ${calendarBaseTokens.calendarDayItemBorderRadius}: var(${tokens.calendarDayItemBorderRadius});
    ${calendarBaseTokens.calendarDayFontFamily}: var(${tokens.calendarDayFontFamily});
    ${calendarBaseTokens.calendarDayFontSize}: var(${tokens.calendarDayFontSize});
    ${calendarBaseTokens.calendarDayFontStyle}: var(${tokens.calendarDayFontStyle});
    ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(${tokens.calendarDayFontLetterSpacing});
    ${calendarBaseTokens.calendarDayFontLineHeight}: var(${tokens.calendarDayFontLineHeight});
    ${calendarBaseTokens.calendarDayFontWeight}: var(${tokens.calendarDayFontWeight});
    ${calendarBaseTokens.calendarDaySelectedFontWeight}: var(${tokens.calendarDaySelectedFontWeight});
    ${calendarBaseTokens.calendarDayOfWeekColor}: var(${tokens.calendarDayOfWeekColor});
    
    ${calendarBaseTokens.calendarEventItemBottom}: var(${tokens.calendarEventItemBottom});
    
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
    ${calendarBaseTokens.calendarHeaderArrowColor}: var(${tokens.calendarHeaderArrowColor});
    ${calendarBaseTokens.calendarArrowHeaderCustomSize}: var(${tokens.calendarHeaderArrowCustomSize});
    
    ${calendarBaseTokens.iconButtonHeight}: var(${tokens.iconButtonHeight});
    ${calendarBaseTokens.iconButtonWidth}: var(${tokens.iconButtonWidth});
    ${calendarBaseTokens.iconButtonPadding}: var(${tokens.iconButtonPadding});
    ${calendarBaseTokens.iconButtonRadius}: var(${tokens.iconButtonRadius});
    ${calendarBaseTokens.iconButtonFocusColor}: var(${tokens.iconButtonFocusColor});

    ${calendarBaseTokens.tooltipPaddingTop} var(${tokens.tooltipPaddingTop});
    ${calendarBaseTokens.tooltipPaddingRight} var(${tokens.tooltipPaddingRight});
    ${calendarBaseTokens.tooltipPaddingBottom} var(${tokens.tooltipPaddingBottom});
    ${calendarBaseTokens.tooltipPaddingLeft} var(${tokens.tooltipPaddingLeft});
    ${calendarBaseTokens.tooltipMinHeight} var(${tokens.tooltipMinHeight});
    ${calendarBaseTokens.tooltipBackgroundColor} var(${tokens.tooltipBackgroundColor});
    ${calendarBaseTokens.tooltipBoxShadow} var(${tokens.tooltipBoxShadow});
    ${calendarBaseTokens.tooltipBorderRadius} var(${tokens.tooltipBorderRadius});
    ${calendarBaseTokens.tooltipColor} var(${tokens.tooltipColor});
    ${calendarBaseTokens.tooltipTextFontFamily} var(${tokens.tooltipTextFontFamily});
    ${calendarBaseTokens.tooltipTextFontSize} var(${tokens.tooltipTextFontSize});
    ${calendarBaseTokens.tooltipTextFontStyle} var(${tokens.tooltipTextFontStyle});
    ${calendarBaseTokens.tooltipTextFontWeight} var(${tokens.tooltipTextFontWeight});
    ${calendarBaseTokens.tooltipTextFontLetterSpacing} var(${tokens.tooltipTextFontLetterSpacing});
    ${calendarBaseTokens.tooltipTextFontLineHeight} var(${tokens.tooltipTextFontLineHeight});
    ${calendarBaseTokens.tooltipContentLeftMargin} var(${tokens.tooltipContentLeftMargin});
    ${calendarBaseTokens.tooltipArrowMaskWidth} var(${tokens.tooltipArrowMaskWidth});
    ${calendarBaseTokens.tooltipArrowMaskHeight} var(${tokens.tooltipArrowMaskHeight});
    ${calendarBaseTokens.tooltipArrowMaskImage} var(${tokens.tooltipArrowMaskImage});
    ${calendarBaseTokens.tooltipArrowBackground} var(${tokens.tooltipArrowBackground});
    ${calendarBaseTokens.tooltipArrowHeight} var(${tokens.tooltipArrowHeight});
    ${calendarBaseTokens.tooltipArrowEdgeMargin} var(${tokens.tooltipArrowEdgeMargin});
`;

// NOTE: переопределение токенов Calendar
export const StyledCalendar = styled(Calendar)<{ innerWidth?: string; innerHeight?: string }>`
    ${baseCalendarTokens}

    width: ${({ innerWidth }) => innerWidth || `var(${tokens.calendarContainerWidth})`};
    height: ${({ innerHeight }) => innerHeight || `var(${tokens.calendarContainerHeight})`};
`;

export const InputHidden = styled.input`
    ${applyHidden()};
`;
