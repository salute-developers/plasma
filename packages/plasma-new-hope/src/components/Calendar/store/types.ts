import type { DateObject } from '../Calendar.types';

export enum CalendarState {
    Days = 'Days',
    Months = 'Months',
    Years = 'Years',
}

export const enum ActionType {
    NEXT_MONTH = 'next_month',
    PREVIOUS_MONTH = 'previous_month',
    NEXT_YEAR = 'next_year',
    PREVIOUS_YEAR = 'previous_year',
    PREVIOUS_START_YEAR = 'previous_start_year',
    NEXT_START_YEAR = 'next_start_year',
    UPDATE_DATE = 'update_date',
    UPDATE_MONTH = 'update_month',
    UPDATE_YEAR = 'update_year',
    UPDATE_CALENDAR_STATE = 'update_calendar_state',
}

export type CalendarStateType = keyof typeof CalendarState;

export interface InitialState {
    date: DateObject;
    calendarState: CalendarStateType;
    startYear: number;
    size: [number, number];
}

export type PreviousMonthAction = { type: ActionType.PREVIOUS_MONTH; payload: { monthIndex: number; year: number } };

export type NextMonthAction = { type: ActionType.NEXT_MONTH; payload: { monthIndex: number; year: number } };

export type PreviousYearAction = { type: ActionType.PREVIOUS_YEAR; payload: { step: number } };

export type NextYearAction = { type: ActionType.NEXT_YEAR; payload: { step: number } };

export type PreviousStartYearAction = { type: ActionType.PREVIOUS_START_YEAR; payload: { yearsCount: number } };

export type NextStartYearAction = { type: ActionType.NEXT_START_YEAR; payload: { yearsCount: number } };

export type UpdateDateAction = { type: ActionType.UPDATE_DATE; payload: { value: Date } };

export type UpdateMonthAction = {
    type: ActionType.UPDATE_MONTH;
    payload: { calendarState: CalendarStateType; monthIndex: number; size: [number, number] };
};

export type UpdateYearAction = {
    type: ActionType.UPDATE_YEAR;
    payload: { calendarState: CalendarStateType; year: number };
};

export type UpdateCalendarStateAction = {
    type: ActionType.UPDATE_CALENDAR_STATE;
    payload: { calendarState: CalendarStateType; size?: [number, number] };
};

export type Action =
    | NextMonthAction
    | PreviousMonthAction
    | NextYearAction
    | PreviousYearAction
    | PreviousStartYearAction
    | NextStartYearAction
    | UpdateDateAction
    | UpdateMonthAction
    | UpdateYearAction
    | UpdateCalendarStateAction;
