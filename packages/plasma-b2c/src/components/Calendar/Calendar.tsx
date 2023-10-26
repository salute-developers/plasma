import {
    boundCalendar,
    withRange,
    calendarBaseConfig,
    calendarDoubleConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import type { CalendarBaseProps, CalendarDoubleProps } from '@salutejs/plasma-new-hope/styled-components';

const mergedCalendarBaseConfig = mergeConfig(calendarBaseConfig);
const mergedCalendarDoubleConfig = mergeConfig(calendarDoubleConfig);

export const CalendarBase = component(mergedCalendarBaseConfig);
export const CalendarDouble = component(mergedCalendarDoubleConfig);
export const CalendarBaseRange = withRange<CalendarBaseProps>(CalendarBase);
export const CalendarDoubleRange = withRange<CalendarDoubleProps>(CalendarDouble);

export const Calendar = boundCalendar({
    base: CalendarBase,
    baseRange: CalendarBaseRange,
    double: CalendarDouble,
    doubleRange: CalendarDoubleRange,
});
