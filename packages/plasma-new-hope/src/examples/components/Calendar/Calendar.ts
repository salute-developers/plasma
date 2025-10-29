import type { FC } from 'react';

import { component, mergeConfig } from '../../../engines';
import { calendarBaseConfig, calendarDoubleConfig, withRange } from '../../../components/Calendar';
import type { CalendarBaseProps, CalendarDoubleProps } from '../../../components/Calendar';
import { boundCalendar } from '../../../components/Calendar/Calendar';

import { config as baseConfig } from './CalendarBase.config';
import { config as doubleConfig } from './CalendarDouble.config';

const mergedCalendarBaseConfig = mergeConfig(calendarBaseConfig, baseConfig);
const mergedCalendarDoubleConfig = mergeConfig(calendarDoubleConfig, doubleConfig);

export const CalendarBase = component(mergedCalendarBaseConfig);
export const CalendarDouble = component(mergedCalendarDoubleConfig);
export const CalendarBaseRange = withRange<CalendarBaseProps>(CalendarBase as FC<CalendarBaseProps>);
export const CalendarDoubleRange = withRange<CalendarDoubleProps>(CalendarDouble as FC<CalendarDoubleProps>);

export const Calendar = boundCalendar({
    base: CalendarBase as FC<CalendarBaseProps>,
    baseRange: CalendarBaseRange,
    double: CalendarDouble as FC<CalendarDoubleProps>,
    doubleRange: CalendarDoubleRange,
});
