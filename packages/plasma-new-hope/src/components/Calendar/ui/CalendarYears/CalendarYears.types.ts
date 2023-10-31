import { HTMLAttributes, KeyboardEvent, MutableRefObject } from 'react';

import type { DateObject } from '../../Calendar.types';

export interface CalendarYearsProps extends HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    startYear: number;
    selectIndexes?: number[];
    outerRefs: MutableRefObject<HTMLDivElement[][]>;
    onChangeYear: (year: number) => void;
    onSetRefs?: (refs: HTMLDivElement[][]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
}
