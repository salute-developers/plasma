import type { HTMLAttributes } from 'react';

import type { DayProps, EventDay } from '../../shared/types';

export interface CalendarDayItemProps extends DayProps, HTMLAttributes<HTMLDivElement> {
    day: number | string;
    year?: number;
    monthIndex?: number;
    sideInRange?: 'left' | 'right';
    eventList?: EventDay[];
    isFocused?: boolean;
    disabledArrowKey?: string;
    disabledMonths?: string;
}
