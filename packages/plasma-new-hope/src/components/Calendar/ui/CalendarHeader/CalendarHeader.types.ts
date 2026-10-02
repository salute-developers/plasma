import type { HTMLAttributes } from 'react';

import type { DateObject, Locales } from '../../Calendar.types';
import type { CalendarBaseProps } from '../../CalendarBase/CalendarBase';
import type { CalendarStateType } from '../../store/types';

export interface CalendarHeaderProps
    extends HTMLAttributes<HTMLDivElement>,
        Pick<CalendarBaseProps, 'periodSelectorAlign'> {
    firstDate: DateObject;
    onPrev: () => void;
    onNext: () => void;
    size?: string;
    secondDate?: DateObject;
    startYear?: number;
    type?: CalendarStateType;
    isDouble?: boolean;
    onUpdateCalendarState?: (newType: CalendarStateType, newSize: [number, number]) => void;
    locale: Locales;
}
