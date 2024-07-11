import type { HTMLAttributes, MutableRefObject, KeyboardEvent } from 'react';

import type { CalendarValueType, DateObject, DisabledDay, EventDay } from '../../Calendar.types';

export interface CalendarQuartersProps extends HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: CalendarValueType;
    outerRefs: MutableRefObject<HTMLDivElement[][]>;
    onChangeQuarter: (date: DateObject, coord: number[], quarterName: string) => void;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    min?: Date;
    max?: Date;
    hoveredQuarter?: DateObject;
    selectIndexes?: number[];
    isDouble?: boolean;
    isSecond?: boolean;
    onHoverQuarter?: (date?: DateObject) => void;
    onSetRefs?: (refs: HTMLDivElement[][]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
}
