import { useCallback } from 'react';

import { ActionType, CalendarState } from '../store/types';
import { getNextDate, getPrevDate, getPrevYear, getVisibleDate, YEAR_RENDER_COUNT } from '../utils';

import type { UseCalendarNavigationArgs, UseKeyNavigationArgs } from './types';

export const useCalendarNavigation = ({
    calendarState,
    dispatch,
    date,
    startYear,
    onChangeVisibleDate,
}: UseCalendarNavigationArgs) => {
    const handlePrev = useCallback<UseKeyNavigationArgs['onPrev']>(
        (withShift = false) => {
            if (calendarState === CalendarState.Days) {
                if (withShift) {
                    const year = getPrevYear(date.year);

                    dispatch({
                        type: ActionType.PREVIOUS_YEAR,
                        payload: { step: 1 },
                    });

                    if (onChangeVisibleDate) {
                        onChangeVisibleDate(getVisibleDate(calendarState, { ...date, year }, startYear));
                    }

                    return;
                }

                const [year, monthIndex] = getPrevDate(date.year, date.monthIndex);

                dispatch({
                    type: ActionType.PREVIOUS_MONTH,
                    payload: { monthIndex: date.monthIndex, year: date.year },
                });

                if (onChangeVisibleDate) {
                    onChangeVisibleDate(getVisibleDate(calendarState, { ...date, monthIndex, year }, startYear));
                }

                return;
            }

            if (calendarState === CalendarState.Months || calendarState === CalendarState.Quarters) {
                const year = getPrevYear(date.year);

                dispatch({ type: ActionType.PREVIOUS_YEAR, payload: { step: 1 } });

                if (onChangeVisibleDate) {
                    onChangeVisibleDate(getVisibleDate(calendarState, { ...date, year }, startYear));
                }

                return;
            }

            if (calendarState === CalendarState.Years) {
                const prevStartYear = getPrevYear(startYear, YEAR_RENDER_COUNT);

                dispatch({ type: ActionType.PREVIOUS_START_YEAR, payload: { yearsCount: YEAR_RENDER_COUNT } });

                if (onChangeVisibleDate) {
                    onChangeVisibleDate(getVisibleDate(calendarState, date, prevStartYear));
                }
            }
        },
        [date, startYear, calendarState, dispatch, onChangeVisibleDate],
    );

    const handleNext = useCallback<UseKeyNavigationArgs['onNext']>(
        (withShift = false) => {
            if (calendarState === CalendarState.Days) {
                if (withShift) {
                    dispatch({
                        type: ActionType.NEXT_YEAR,
                        payload: { step: 1 },
                    });

                    if (onChangeVisibleDate) {
                        onChangeVisibleDate(getVisibleDate(calendarState, { ...date, year: date.year + 1 }, startYear));
                    }

                    return;
                }

                const [year, monthIndex] = getNextDate(date.year, date.monthIndex);

                dispatch({
                    type: ActionType.NEXT_MONTH,
                    payload: { monthIndex: date.monthIndex, year: date.year },
                });

                if (onChangeVisibleDate) {
                    onChangeVisibleDate(getVisibleDate(calendarState, { ...date, monthIndex, year }, startYear));
                }

                return;
            }

            if (calendarState === CalendarState.Months || calendarState === CalendarState.Quarters) {
                dispatch({ type: ActionType.NEXT_YEAR, payload: { step: 1 } });

                if (onChangeVisibleDate) {
                    onChangeVisibleDate(getVisibleDate(calendarState, { ...date, year: date.year + 1 }, startYear));
                }

                return;
            }

            if (calendarState === CalendarState.Years) {
                const nextStartYear = startYear + YEAR_RENDER_COUNT;

                dispatch({ type: ActionType.NEXT_START_YEAR, payload: { yearsCount: YEAR_RENDER_COUNT } });

                if (onChangeVisibleDate) {
                    onChangeVisibleDate(getVisibleDate(calendarState, date, nextStartYear));
                }
            }
        },
        [date, startYear, calendarState, dispatch, onChangeVisibleDate],
    );

    return {
        handlePrev,
        handleNext,
    };
};
