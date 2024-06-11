import { styled } from '@linaria/react';

import { calendarDoubleConfig, calendarBaseTokens, withRange, calendarBaseConfig } from '../../../Calendar';
import type { CalendarDoubleProps, CalendarBaseProps } from '../../../Calendar';
import { tokens } from '../../DatePicker.tokens';
import { component, mergeConfig } from '../../../../engines';
import { baseCalendarTokens } from '../../DatePickerBase.styles';

const mergedCalendarDoubleConfig = mergeConfig(calendarDoubleConfig);
const CalendarDouble = component(mergedCalendarDoubleConfig);

const mergedCalendarConfig = mergeConfig(calendarBaseConfig);
const Calendar = component(mergedCalendarConfig);

const CalendarDoubleRange = withRange<CalendarDoubleProps>(CalendarDouble);
const CalendarRange = withRange<CalendarBaseProps>(Calendar);

// NOTE: переопределение токенов Calendar
export const StyledCalendarDouble = styled(CalendarDoubleRange)`
    ${calendarBaseTokens.calendarSeparatorBackground}: var(${tokens.calendarSeparatorBackground});
    ${baseCalendarTokens}
    /* NOTE: помимо умножения ширины на 2, добавляется место под разделитель */
    ${calendarBaseTokens.calendarWidth}: calc(var(${tokens.calendarWidth}) * 2 + 2.063rem);
`;

export const StyledCalendar = styled(CalendarRange)`
    ${baseCalendarTokens}
`;
