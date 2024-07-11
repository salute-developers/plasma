import type { HTMLAttributes, MutableRefObject, KeyboardEvent } from 'react';

import type { CalendarValueType, DateObject, DisabledDay, EventDay } from '../../Calendar.types';

export interface CalendarMonthsProps extends HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: CalendarValueType;
    outerRefs: MutableRefObject<HTMLDivElement[][]>;
    onChangeMonth: (date: DateObject, coord: number[]) => void;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    min?: Date;
    max?: Date;
    includeEdgeDates?: boolean;
    hoveredMonth?: DateObject;
    selectIndexes?: number[];
    isDouble?: boolean;
    isSecond?: boolean;
    onHoverMonth?: (date?: DateObject) => void;
    onSetRefs?: (refs: HTMLDivElement[][]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
}
