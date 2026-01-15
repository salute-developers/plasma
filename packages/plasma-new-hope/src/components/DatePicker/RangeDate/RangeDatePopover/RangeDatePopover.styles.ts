import { styled } from '@linaria/react';
import { calendarDoubleConfig, withRange, calendarBaseConfig } from 'src/components/Calendar';
import type { CalendarDoubleProps, CalendarBaseProps } from 'src/components/Calendar';
import { component, mergeConfig } from 'src/engines';

import { privateTokens, tokens } from '../../DatePicker.tokens';
import { baseCalendarTokens } from '../../DatePickerBase.styles';

const mergedCalendarDoubleConfig = mergeConfig(calendarDoubleConfig);
const CalendarDouble = component(mergedCalendarDoubleConfig);

const mergedCalendarConfig = mergeConfig(calendarBaseConfig);
const Calendar = component(mergedCalendarConfig);

const CalendarDoubleRange = withRange<CalendarDoubleProps>(CalendarDouble);
const CalendarRange = withRange<CalendarBaseProps>(Calendar);

// NOTE: переопределение токенов Calendar
export const StyledCalendarDouble = styled(CalendarDoubleRange)<{ innerWidth?: string; innerHeight?: string }>`
    /* NOTE: помимо умножения ширины на 2, добавляется место под разделитель */
        ${privateTokens.calendarDoubleWidth}: calc(var(${tokens.calendarWidth}) * 2 + 2.063rem);
        
        flex-shrink: ${({ innerWidth }) => (innerWidth && innerWidth !== '0' ? '1' : '0')};
        width: ${({ innerWidth }) =>
            innerWidth && innerWidth !== '0' ? '100%' : `var(${privateTokens.calendarDoubleWidth})`};
        height: ${({ innerHeight }) => (innerHeight && innerHeight !== '0' ? '100%' : `var(${tokens.calendarHeight})`)};
    
        ${baseCalendarTokens}
`;

export const StyledCalendar = styled(CalendarRange)<{ innerWidth?: string; innerHeight?: string }>`
    flex-shrink: ${({ innerWidth }) => (innerWidth && innerWidth !== '0' ? '1' : '0')};
    width: ${({ innerWidth }) => (innerWidth && innerWidth !== '0' ? '100%' : `var(${tokens.calendarWidth})`)};
    height: ${({ innerHeight }) => (innerHeight && innerHeight !== '0' ? '100%' : `var(${tokens.calendarHeight})`)};

    ${baseCalendarTokens}
`;
