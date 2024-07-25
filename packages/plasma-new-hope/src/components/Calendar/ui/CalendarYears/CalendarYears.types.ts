import { HTMLAttributes, KeyboardEvent, MutableRefObject } from 'react';

import type { CalendarValueType, DateObject, DisabledDay, EventDay } from '../../Calendar.types';

export interface CalendarYearsProps extends HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: CalendarValueType;
    outerRefs: MutableRefObject<HTMLDivElement[][]>;
    startYear: number;
    onChangeYear: (date: DateObject, coord: number[]) => void;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    min?: Date;
    max?: Date;
    hoveredYear?: DateObject;
    selectIndexes?: number[];
    isDouble?: boolean;
    isSecond?: boolean;
    onHoverYear?: (date?: DateObject) => void;
    onSetRefs?: (refs: HTMLDivElement[][]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
}
