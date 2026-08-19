import type { Dispatch, SetStateAction } from 'react';

import type { Action, CalendarStateType } from '../store/types';
import type { CalendarValueType, DateInfo, DateObject, DisabledDay, EventDay, Locales } from '../Calendar.types';

export interface UseKeyNavigationArgs {
    size: [number, number];
    onPrev: (withShift?: boolean) => void;
    onNext: (withShift?: boolean) => void;
    calendarState: CalendarStateType;
    isDouble?: boolean;
}

export type UseCalendarNavigationArgs = {
    calendarState: CalendarStateType;
    dispatch: Dispatch<Action>;
    date: DateObject;
    startYear: number;
    onChangeVisibleDate?: (date: Date) => void;
};

export type UseCalendarDateChangeArgs = {
    type: CalendarStateType;
    onChangeValue: (value: Date, dateInfo?: DateInfo) => void;
    onSelectIndexes: Dispatch<SetStateAction<number[]>>;
    dispatch: Dispatch<Action>;
    onChangeVisibleDate?: (date: Date) => void;
};

export type UseDateStructureArgs = {
    date: DateObject;
    value: CalendarValueType;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    min?: Date;
    max?: Date;
    locale?: Locales;
};

export type UseDaysArgs = {
    includeEdgeDates?: boolean;
} & UseDateStructureArgs;

export type UseMonthsArgs = {
    includeEdgeDates?: boolean;
} & UseDateStructureArgs;

export type UseQuartersArgs = {
    includeEdgeDates?: boolean;
} & UseDateStructureArgs;

export type UseYearsArgs = {
    startYear: number;
    includeEdgeDates?: boolean;
} & UseDateStructureArgs;
