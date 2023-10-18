import type { HTMLAttributes } from 'react';

import type { DateObject } from '../../shared/types';
import type { CalendarStateType } from '../../store/types';

export interface CalendarHeaderProps extends HTMLAttributes<HTMLDivElement> {
    firstDate: DateObject;
    secondDate?: DateObject;
    startYear?: number;
    type?: CalendarStateType;
    isDouble?: boolean;
    onPrev: () => void;
    onNext: () => void;
    onUpdateCalendarState?: (newType: CalendarStateType, newSize: [number, number]) => void;
}
