import { useCallback } from 'react';

import { ActionType, CalendarState } from '../store/types';
import { YEAR_RENDER_COUNT } from '../utils';

import type { UseCalendarNavigationArgs, UseKeyNavigationArgs } from './types';

export const useCalendarNavigation = ({ calendarState, dispatch, date }: UseCalendarNavigationArgs) => {
    const handlePrev = useCallback<UseKeyNavigationArgs['onPrev']>(
        (withShift = false) => {
            if (calendarState === CalendarState.Days) {
                if (withShift) {
                    dispatch({
                        type: ActionType.PREVIOUS_YEAR,
                        payload: { step: 1 },
                    });

                    return;
                }

                dispatch({
                    type: ActionType.PREVIOUS_MONTH,
                    payload: { monthIndex: date.monthIndex, year: date.year },
                });

                return;
            }

            if (calendarState === CalendarState.Months || calendarState === CalendarState.Quarters) {
                dispatch({ type: ActionType.PREVIOUS_YEAR, payload: { step: 1 } });

                return;
            }

            if (calendarState === CalendarState.Years) {
                dispatch({ type: ActionType.PREVIOUS_START_YEAR, payload: { yearsCount: YEAR_RENDER_COUNT } });
            }
        },
        [date, calendarState],
    );

    const handleNext = useCallback<UseKeyNavigationArgs['onNext']>(
        (withShift = false) => {
            if (calendarState === CalendarState.Days) {
                if (withShift) {
                    dispatch({
                        type: ActionType.NEXT_YEAR,
                        payload: { step: 1 },
                    });

                    return;
                }

                dispatch({
                    type: ActionType.NEXT_MONTH,
                    payload: { monthIndex: date.monthIndex, year: date.year },
                });

                return;
            }

            if (calendarState === CalendarState.Months || calendarState === CalendarState.Quarters) {
                dispatch({ type: ActionType.NEXT_YEAR, payload: { step: 1 } });

                return;
            }

            if (calendarState === CalendarState.Years) {
                dispatch({ type: ActionType.NEXT_START_YEAR, payload: { yearsCount: YEAR_RENDER_COUNT } });
            }
        },
        [date, calendarState],
    );

    return {
        handlePrev,
        handleNext,
    };
};
