import type { HTMLAttributes, MutableRefObject, KeyboardEvent, ReactNode } from 'react';

import type { CalendarValueType, DateObject, DisabledDay, EventDay, Locales } from '../../Calendar.types';

export interface CalendarDaysProps extends HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: CalendarValueType;
    outerRefs: MutableRefObject<HTMLDivElement[][]>;
    onChangeDay: (date: DateObject, coord: number[]) => void;
    min?: Date;
    max?: Date;
    includeEdgeDates?: boolean;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    isDouble?: boolean;
    isSecond?: boolean;
    hoveredDay?: DateObject;
    selectIndexes?: number[];
    onHoverDay?: (hoveredDate: DateObject | undefined) => void;
    onTriggerEventTooltip?: (structureRef?: MutableRefObject<HTMLDivElement | null>, events?: ReactNode[]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
    locale?: Locales;
}
