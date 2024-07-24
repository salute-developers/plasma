import type { HTMLAttributes } from 'react';

import type { DateObject } from '../../Calendar.types';
import type { CalendarStateType } from '../../store/types';

export interface CalendarHeaderProps extends HTMLAttributes<HTMLDivElement> {
    firstDate: DateObject;
    onPrev: () => void;
    onNext: () => void;
    size?: string;
    secondDate?: DateObject;
    startYear?: number;
    type?: CalendarStateType;
    isDouble?: boolean;
    onUpdateCalendarState?: (newType: CalendarStateType, newSize: [number, number]) => void;
}
