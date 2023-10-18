import { component, mergeConfig } from '../../../../engines';
import { calendarBaseConfig, calendarDoubleConfig, withRange } from '../../../../components/Calendar';
import type { CalendarBaseProps, CalendarDoubleProps } from '../../../../components/Calendar';
import { boundCalendar } from '../../../../components/Calendar/Calendar';

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
