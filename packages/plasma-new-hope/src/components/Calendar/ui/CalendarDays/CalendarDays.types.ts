import { HTMLAttributes, MutableRefObject, KeyboardEvent } from 'react';

import type { CalendarValueType, DateObject, DisabledDay, EventDay } from '../../Calendar.types';

export interface CalendarDaysProps extends HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: CalendarValueType;
    min?: Date;
    max?: Date;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    isDouble?: boolean;
    isSecond?: boolean;
    hoveredDay?: DateObject;
    selectIndexes?: number[];
    outerRefs: MutableRefObject<HTMLDivElement[][]>;
    onHoverDay?: (date?: DateObject) => void;
    onChangeDay: (date: DateObject, coord: number[]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
}
