import { styled } from '@linaria/react';
import { calendarDoubleConfig, calendarBaseTokens, withRange, calendarBaseConfig } from 'src/components/Calendar';
import type { CalendarDoubleProps, CalendarBaseProps } from 'src/components/Calendar';
import { component, mergeConfig } from 'src/engines';

import { pivateTokens, tokens } from '../../DatePicker.tokens';
import { baseCalendarTokens } from '../../DatePickerBase.styles';

const mergedCalendarDoubleConfig = mergeConfig(calendarDoubleConfig);
const CalendarDouble = component(mergedCalendarDoubleConfig);

const mergedCalendarConfig = mergeConfig(calendarBaseConfig);
const Calendar = component(mergedCalendarConfig);

const CalendarDoubleRange = withRange<CalendarDoubleProps>(CalendarDouble);
const CalendarRange = withRange<CalendarBaseProps>(Calendar);

// NOTE: переопределение токенов Calendar
export const StyledCalendarDouble = styled(CalendarDoubleRange)<{ innerWidth?: string; innerHeight?: string }>`
    ${calendarBaseTokens.calendarSeparatorBackground}: var(${tokens.calendarSeparatorBackground});
    ${baseCalendarTokens}
    /* NOTE: помимо умножения ширины на 2, добавляется место под разделитель */
    ${pivateTokens.calendarDoubleWidth}: calc(var(${tokens.calendarContainerWidth}) * 2 + 2.063rem);

    width: ${({ innerWidth }) => innerWidth || `var(${pivateTokens.calendarDoubleWidth})`};
    height: ${({ innerHeight }) => innerHeight || `var(${tokens.calendarContainerHeight})`};
`;

export const StyledCalendar = styled(CalendarRange)<{ innerWidth?: string; innerHeight?: string }>`
    ${baseCalendarTokens}

    width: ${({ innerWidth }) => innerWidth || `var(${tokens.calendarContainerWidth})`};
    height: ${({ innerHeight }) => innerHeight || `var(${tokens.calendarContainerHeight})`};
`;
