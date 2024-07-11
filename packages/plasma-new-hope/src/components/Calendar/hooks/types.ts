import type { Dispatch, SetStateAction } from 'react';

import type { Action, CalendarStateType } from '../store/types';
import type { CalendarValueType, DateInfo, DateObject, DisabledDay, EventDay } from '../Calendar.types';

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
};

export type UseCalendarDateChangeArgs = {
    type: CalendarStateType;
    onChangeValue: (value: Date, dateInfo?: DateInfo) => void;
    onSelectIndexes: Dispatch<SetStateAction<number[]>>;
    dispatch: Dispatch<Action>;
};

export type UseDateStructureArgs = {
    date: DateObject;
    value: CalendarValueType;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    min?: Date;
    max?: Date;
};

export type UseDaysArgs = {
    includeEdgeDates?: boolean;
} & UseDateStructureArgs;

export type UseMonthsArgs = UseDateStructureArgs;

export type UseQuartersArgs = UseDateStructureArgs;

export type UseYearsArgs = {
    startYear: number;
} & UseDateStructureArgs;
