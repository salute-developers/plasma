import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../../engines';
import { rangeConfig, rangeTokens } from '../../Range';
import { calendarBaseConfig, calendarBaseTokens } from '../../Calendar';
import { tokens } from '../DatePicker.tokens';
import { popoverConfig } from '../../Popover';

const mergedRangeConfig = mergeConfig(rangeConfig);
const Range = component(mergedRangeConfig);

const mergedCalendarConfig = mergeConfig(calendarBaseConfig);
const Calendar = component(mergedCalendarConfig);

const mergedPopoverConfig = mergeConfig(popoverConfig);
const Popover = component(mergedPopoverConfig);

export const StyledPopover = styled(Popover)``;

// NOTE: переопределение токенов Range
export const StyledRange = styled(Range)`
    ${rangeTokens.background}: var(${tokens.background});
    ${rangeTokens.backgroundError}: var(${tokens.backgroundError});
    ${rangeTokens.backgroundSuccess}: var(${tokens.backgroundSuccess});

    ${rangeTokens.dividerColor}: var(${tokens.dividerColor});
    ${rangeTokens.labelColor}: var(${tokens.labelColor});
    ${rangeTokens.leftHelperColor}: var(${tokens.leftHelperColor});

    ${rangeTokens.textFieldColor}: var(${tokens.textFieldColor});
    ${rangeTokens.textFieldPlaceholderColor}: var(${tokens.textFieldPlaceholderColor});
    ${rangeTokens.textFieldCaretColor}: var(${tokens.textFieldCaretColor});

    ${rangeTokens.textFieldBackgroundColorFocus}: var(${tokens.textFieldBackgroundColorFocus});
    ${rangeTokens.textFieldBackgroundErrorColor}: var(${tokens.textFieldBackgroundErrorColor});
    ${rangeTokens.textFieldBackgroundErrorColorFocus}: var(${tokens.textFieldBackgroundErrorColorFocus});
    ${rangeTokens.textFieldBackgroundSuccessColor}: var(${tokens.textFieldBackgroundSuccessColor});
    ${rangeTokens.textFieldBackgroundSuccessColorFocus}: var(${tokens.textFieldBackgroundSuccessColorFocus});

    ${rangeTokens.textFieldTextBeforeColor}: var(${tokens.textFieldTextBeforeColor});
    ${rangeTokens.textFieldTextAfterColor}: var(${tokens.textFieldTextAfterColor});

    ${rangeTokens.focusColor}: var(${tokens.focusColor});

    ${rangeTokens.borderRadius}: var(${tokens.borderRadius});

    ${rangeTokens.dividerPadding}: var(${tokens.dividerPadding});
    ${rangeTokens.dividerFontFamily}: var(${tokens.dividerFontFamily});
    ${rangeTokens.dividerFontStyle}: var(${tokens.dividerFontStyle});
    ${rangeTokens.dividerFontSize}: var(${tokens.dividerFontSize});
    ${rangeTokens.dividerFontWeight}: var(${tokens.dividerFontWeight});
    ${rangeTokens.dividerLetterSpacing}: var(${tokens.dividerLetterSpacing});
    ${rangeTokens.dividerLineHeight}: var(${tokens.dividerLineHeight});

    ${rangeTokens.leftContentMargin}: var(${tokens.leftContentMargin});
    ${rangeTokens.rightContentMargin}: var(${tokens.rightContentMargin});

    ${rangeTokens.labelOffset}: var(${tokens.labelOffset});

    ${rangeTokens.labelFontFamily}: var(${tokens.labelFontFamily});
    ${rangeTokens.labelFontStyle}: var(${tokens.labelFontStyle});
    ${rangeTokens.labelFontSize}: var(${tokens.labelFontSize});
    ${rangeTokens.labelFontWeight}: var(${tokens.labelFontWeight});
    ${rangeTokens.labelLetterSpacing}: var(${tokens.labelLetterSpacing});
    ${rangeTokens.labelLineHeight}: var(${tokens.labelLineHeight});

    ${rangeTokens.textFieldHeight}: var(${tokens.textFieldHeight});
    ${rangeTokens.textFieldBorderRadius}: var(${tokens.textFieldBorderRadius});
    ${rangeTokens.textFieldPadding}: var(${tokens.textFieldPadding});
    ${rangeTokens.textFieldFontFamily}: var(${tokens.textFieldFontFamily});
    ${rangeTokens.textFieldFontStyle}: var(${tokens.textFieldFontStyle});
    ${rangeTokens.textFieldFontSize}: var(${tokens.textFieldFontSize});
    ${rangeTokens.textFieldFontWeight}: var(${tokens.textFieldFontWeight});
    ${rangeTokens.textFieldLetterSpacing}: var(${tokens.textFieldLetterSpacing});
    ${rangeTokens.textFieldLineHeight}: var(${tokens.textFieldLineHeight});

    ${rangeTokens.leftHelperOffset}: var(${tokens.leftHelperOffset});
    ${rangeTokens.leftHelperFontFamily}: var(${tokens.leftHelperFontFamily});
    ${rangeTokens.leftHelperFontStyle}: var(${tokens.leftHelperFontStyle});
    ${rangeTokens.leftHelperFontSize}: var(${tokens.leftHelperFontSize});
    ${rangeTokens.leftHelperFontWeight}: var(${tokens.leftHelperFontWeight});
    ${rangeTokens.leftHelperLetterSpacing}: var(${tokens.leftHelperLetterSpacing});
    ${rangeTokens.leftHelperLineHeight}: var(${tokens.leftHelperLineHeight});

    ${rangeTokens.textFieldLeftContentMargin}: var(${tokens.textFieldLeftContentMargin});
    ${rangeTokens.textFieldRightContentMargin}: var(${tokens.textFieldRightContentMargin});
    ${rangeTokens.textFieldTextBeforeMargin}: var(${tokens.textFieldTextBeforeMargin});
    ${rangeTokens.textFieldTextAfterMargin}: var(${tokens.textFieldTextAfterMargin});

    ${rangeTokens.backgroundReadOnly}: var(${tokens.backgroundReadOnly});
    ${rangeTokens.labelColorReadOnly}: var(${tokens.labelColorReadOnly});
    ${rangeTokens.leftHelperColorReadOnly}: var(${tokens.leftHelperColorReadOnly});
    ${rangeTokens.dividerColorReadOnly}: var(${tokens.dividerColorReadOnly});

    ${rangeTokens.textFieldColorReadOnly}: var(${tokens.textFieldColorReadOnly});
    ${rangeTokens.textFieldBackgroundColorReadOnly}: var(${tokens.textFieldBackgroundColorReadOnly});
    ${rangeTokens.textFieldPlaceholderColorReadOnly}: var(${tokens.textFieldPlaceholderColorReadOnly});
`;

// NOTE: переопределение токенов Calendar
export const StyledCalendar = styled(Calendar)`
    box-shadow: var(${tokens.calendarShadow});

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

    ${calendarBaseTokens.calendarHeaderArrowContainerWidth}: var(${tokens.calendarHeaderArrowContainerWidth});
    ${calendarBaseTokens.calendarItemBorderRadius}: var(${tokens.calendarItemBorderRadius});
    ${calendarBaseTokens.calendarHeaderFontFamily}: var(${tokens.calendarHeaderFontFamily});
    ${calendarBaseTokens.calendarHeaderFontSize}: var(${tokens.calendarHeaderFontSize});
    ${calendarBaseTokens.calendarHeaderFontStyle}: var(${tokens.calendarHeaderFontStyle});
    ${calendarBaseTokens.calendarHeaderFontLetterSpacing}: var(${tokens.calendarHeaderFontLetterSpacing});
    ${calendarBaseTokens.calendarHeaderFontLineHeight}: var(${tokens.calendarHeaderFontLineHeight});
    ${calendarBaseTokens.calendarHeaderFontWeight}: var(${tokens.calendarHeaderFontWeight});
    ${calendarBaseTokens.calendarHeaderFontWeightBold}: var(${tokens.calendarHeaderFontWeightBold});
    ${calendarBaseTokens.calendarYearFontFamily}: var(${tokens.calendarYearFontFamily});
    ${calendarBaseTokens.calendarYearFontSize}: var(${tokens.calendarYearFontSize});
    ${calendarBaseTokens.calendarYearFontStyle}: var(${tokens.calendarYearFontStyle});
    ${calendarBaseTokens.calendarYearFontLetterSpacing}: var(${tokens.calendarYearFontLetterSpacing});
    ${calendarBaseTokens.calendarYearFontLineHeight}: var(${tokens.calendarYearFontLineHeight});
    ${calendarBaseTokens.calendarYearFontWeight}: var(${tokens.calendarYearFontWeight});
    ${calendarBaseTokens.calendarMonthFontFamily}: var(${tokens.calendarMonthFontFamily});
    ${calendarBaseTokens.calendarMonthFontSize}: var(${tokens.calendarMonthFontSize});
    ${calendarBaseTokens.calendarMonthFontStyle}: var(${tokens.calendarMonthFontStyle});
    ${calendarBaseTokens.calendarMonthFontLetterSpacing}: var(${tokens.calendarMonthFontLetterSpacing});
    ${calendarBaseTokens.calendarMonthFontLineHeight}: var(${tokens.calendarMonthFontLineHeight});
    ${calendarBaseTokens.calendarMonthFontWeight}: var(${tokens.calendarMonthFontWeight});
    ${calendarBaseTokens.calendarDayFontFamily}: var(${tokens.calendarDayFontFamily});
    ${calendarBaseTokens.calendarDayFontSize}: var(${tokens.calendarDayFontSize});
    ${calendarBaseTokens.calendarDayFontStyle}: var(${tokens.calendarDayFontStyle});
    ${calendarBaseTokens.calendarDayFontLetterSpacing}: var(${tokens.calendarDayFontLetterSpacing});
    ${calendarBaseTokens.calendarDayFontLineHeight}: var(${tokens.calendarDayFontLineHeight});
    ${calendarBaseTokens.calendarDayFontWeight}: var(${tokens.calendarDayFontWeight});
`;

export const base = css``;
