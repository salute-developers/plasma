import { HTMLAttributes, MutableRefObject, KeyboardEvent } from 'react';

import type { DateObject } from '../../Calendar.types';

export interface CalendarMonthsProps extends HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    selectIndexes?: number[];
    outerRefs: MutableRefObject<HTMLDivElement[][]>;
    onChangeMonth: (month: number) => void;
    onSetRefs?: (refs: HTMLDivElement[][]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
}
