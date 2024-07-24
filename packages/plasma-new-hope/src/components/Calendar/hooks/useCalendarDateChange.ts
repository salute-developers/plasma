import { useCallback } from 'react';

import type { DateObject } from '../Calendar.types';
import { ActionType, CalendarState, CalendarStateType } from '../store/types';
import { sizeMap } from '../store/reducer';

import type { UseCalendarDateChangeArgs } from './types';

export const useCalendarDateChange = ({
    type,
    onChangeValue,
    onSelectIndexes,
    dispatch,
}: UseCalendarDateChangeArgs) => {
    const handleOnChangeDay = useCallback(
        (newDate: DateObject, coord: number[]) => {
            const newDay = new Date(newDate.year, newDate.monthIndex, newDate.day);
            onChangeValue?.(newDay);

            onSelectIndexes(coord);
        },
        [onChangeValue, onSelectIndexes],
    );

    const handleOnChangeQuarter = useCallback(
        (newDate: DateObject, coord: number[], quarterName: string) => {
            const newQuarterDate = new Date(newDate.year, newDate.monthIndex, newDate.day);
            const endQuarter = new Date(newQuarterDate);

            endQuarter.setMonth(newQuarterDate.getMonth() + 3);
            endQuarter.setDate(0);

            onChangeValue?.(newQuarterDate, {
                name: quarterName,
                fullValue: [newQuarterDate, endQuarter],
            });

            onSelectIndexes(coord);
        },
        [onChangeValue, onSelectIndexes, type],
    );

    const handleOnChangeMonth = useCallback(
        (newDate: DateObject, coord: number[]) => {
            if (type === CalendarState.Months) {
                const newMonthDate = new Date(newDate.year, newDate.monthIndex, newDate.day);
                onChangeValue?.(newMonthDate);
                onSelectIndexes(coord);

                return;
            }

            dispatch({
                type: ActionType.UPDATE_MONTH,
                payload: {
                    calendarState: CalendarState.Days,
                    monthIndex: newDate.monthIndex,
                    size: sizeMap.Days.double,
                },
            });
        },
        [onChangeValue, onSelectIndexes, type],
    );

    const handleOnChangeYear = useCallback(
        (newDate: DateObject, coord: number[]) => {
            if (type === CalendarState.Years) {
                const newYearDate = new Date(newDate.year, newDate.monthIndex, newDate.day);
                onChangeValue?.(newYearDate);
                onSelectIndexes(coord);

                return;
            }

            if (type === CalendarState.Quarters) {
                dispatch({
                    type: ActionType.UPDATE_YEAR,
                    payload: {
                        calendarState: CalendarState.Quarters,
                        year: newDate.year,
                        size: sizeMap.Quarters.double,
                    },
                });

                return;
            }

            dispatch({
                type: ActionType.UPDATE_YEAR,
                payload: {
                    calendarState: CalendarState.Months,
                    year: newDate.year,
                    size: sizeMap.Months.double,
                },
            });
        },
        [onChangeValue, onSelectIndexes, type],
    );

    const handleUpdateCalendarState = useCallback((newCalendarState: CalendarStateType, newSize: [number, number]) => {
        dispatch({
            type: ActionType.UPDATE_CALENDAR_STATE,
            payload: { calendarState: newCalendarState, size: newSize },
        });
    }, []);

    return {
        handleOnChangeDay,
        handleOnChangeMonth,
        handleOnChangeQuarter,
        handleOnChangeYear,
        handleUpdateCalendarState,
    };
};
