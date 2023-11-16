import {
    boundCalendar,
    withRange,
    calendarBaseConfig,
    calendarDoubleConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';
import type { CalendarBaseProps, CalendarDoubleProps } from '@salutejs/plasma-new-hope/styled-components';

import { config as baseConfig } from './CalendarBase.config';
import { config as doubleConfig } from './CalendarDouble.config';

const mergedCalendarBaseConfig = mergeConfig(calendarBaseConfig, baseConfig);
const mergedCalendarDoubleConfig = mergeConfig(calendarDoubleConfig, doubleConfig);

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
