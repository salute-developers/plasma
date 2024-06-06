import { styled } from '@linaria/react';

import { calendarDoubleConfig, calendarBaseTokens, withRange } from '../../../Calendar';
import type { CalendarDoubleProps } from '../../../Calendar';
import { tokens } from '../../DatePicker.tokens';
import { component, mergeConfig } from '../../../../engines';
import { baseCalendarTokens } from '../../DatePickerBase.styles';

const mergedCalendarConfig = mergeConfig(calendarDoubleConfig);
const CalendarDouble = component(mergedCalendarConfig);

const CalendarDoubleRange = withRange<CalendarDoubleProps>(CalendarDouble);

// NOTE: переопределение токенов Calendar
export const StyledCalendar = styled(CalendarDoubleRange)`
    ${calendarBaseTokens.calendarSeparatorBackground}: var(${tokens.calendarSeparatorBackground});
    ${baseCalendarTokens}
    /* NOTE: помимо умножения ширины на 2, добавляется место под разделитель */
    ${calendarBaseTokens.calendarWidth}: calc(var(${tokens.calendarWidth}) * 2 + 2.063rem);
`;
