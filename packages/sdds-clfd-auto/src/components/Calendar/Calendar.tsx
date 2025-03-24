import type { FC } from 'react';
import {
    component,
    calendarBaseConfig,
    calendarDoubleConfig,
    withRange,
    mergeConfig,
    boundCalendar,
    CalendarStateType,
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
    base: CalendarBase as FC<CalendarBaseProps>,
    baseRange: CalendarBaseRange,
    double: CalendarDouble as FC<CalendarDoubleProps>,
    doubleRange: CalendarDoubleRange,
});

export type { CalendarStateType };
