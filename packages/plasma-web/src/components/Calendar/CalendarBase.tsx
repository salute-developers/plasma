import React, { useCallback, useMemo, useReducer, useState } from 'react';
import styled from 'styled-components';

import type { CalendarStateType, DateObject, Calendar } from './types';
import { CalendarState } from './types';
import { isValueUpdate, YEAR_RENDER_COUNT } from './utils';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarHeader } from './CalendarHeader';
import { CalendarYears } from './CalendarYears';
import { useKeyNavigation } from './hooks';
import { getInitialState, reducer } from './store/reducer';
import { ActionType } from './store/types';

export type CalendarBaseProps = Calendar & {
    /**
     * Тип отображения календаря: дни, месяца, года.
     */
    type?: CalendarStateType;
};

const StyledCalendar = styled.div`
    position: relative;
    user-select: none;
    z-index: 1;

    width: 19.5rem;
    height: 19.5rem;
`;

/**
 * Компонент календаря.
 */
export const CalendarBase: React.FC<CalendarBaseProps> = ({
    value: externalValue,
    min,
    max,
    type = 'Days',
    eventList,
    disabledList,
    onChangeValue,
    ...rest
}) => {
    const [firstValue, secondValue] = useMemo(() => (Array.isArray(externalValue) ? externalValue : [externalValue]), [
        externalValue,
    ]);
    const value = secondValue || firstValue;
    const [hoveredDay, setHoveredDay] = useState<DateObject | undefined>();
    const [prevType, setPrevType] = useState(type);
    const [prevValue, setPrevValue] = useState(value);
    const [state, dispatch] = useReducer(reducer, getInitialState(value, [5, 6], type));

    const { date, calendarState, startYear, size } = state;

    const handlePrev = useCallback(
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

            if (calendarState === CalendarState.Months) {
                dispatch({ type: ActionType.PREVIOUS_YEAR, payload: { step: 1 } });

                return;
            }

            if (calendarState === CalendarState.Years) {
                dispatch({ type: ActionType.PREVIOUS_START_YEAR, payload: { yearsCount: YEAR_RENDER_COUNT } });
            }
        },
        [date, calendarState],
    );

    const handleNext = useCallback(
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

            if (calendarState === CalendarState.Months) {
                dispatch({ type: ActionType.NEXT_YEAR, payload: { step: 1 } });

                return;
            }

            if (calendarState === CalendarState.Years) {
                dispatch({ type: ActionType.NEXT_START_YEAR, payload: { yearsCount: YEAR_RENDER_COUNT } });
            }
        },
        [date, calendarState],
    );

    const [selectIndexes, onKeyDown, onSelectIndexes, outerRefs] = useKeyNavigation({
        size,
        onNext: handleNext,
        onPrev: handlePrev,
    });

    const handleOnChangeDay = useCallback(
        (newDate: DateObject, coord: number[]) => {
            const newDay = new Date(newDate.year, newDate.monthIndex, newDate.day);
            onChangeValue(newDay);

            onSelectIndexes(coord);
        },
        [onChangeValue, onSelectIndexes],
    );

    const handleOnChangeMonth = useCallback((monthIndex: number) => {
        dispatch({
            type: ActionType.UPDATE_MONTH,
            payload: { calendarState: CalendarState.Days, monthIndex, size: [5, 6] },
        });
    }, []);

    const handleOnChangeYear = useCallback((year: number) => {
        dispatch({
            type: ActionType.UPDATE_YEAR,
            payload: { calendarState: CalendarState.Months, year },
        });
    }, []);

    const handleUpdateCalendarState = useCallback((newCalendarState: CalendarStateType, newSize: [number, number]) => {
        dispatch({
            type: ActionType.UPDATE_CALENDAR_STATE,
            payload: { calendarState: newCalendarState, size: newSize },
        });
    }, []);

    if (isValueUpdate(value, prevValue)) {
        dispatch({
            type: ActionType.UPDATE_DATE,
            payload: { value },
        });

        setPrevValue(value);
    }

    if (prevType !== type) {
        dispatch({
            type: ActionType.UPDATE_CALENDAR_STATE,
            payload: { calendarState: type },
        });

        setPrevType(type);
    }

    return (
        <StyledCalendar aria-label="Выбор даты" {...rest}>
            <CalendarHeader
                firstDate={date}
                startYear={startYear}
                type={calendarState}
                onPrev={handlePrev}
                onNext={handleNext}
                onUpdateCalendarState={handleUpdateCalendarState}
            />
            {calendarState === CalendarState.Days && (
                <CalendarDays
                    eventList={eventList}
                    disabledList={disabledList}
                    min={min}
                    max={max}
                    value={externalValue}
                    date={date}
                    hoveredDay={hoveredDay}
                    selectIndexes={selectIndexes}
                    onChangeDay={handleOnChangeDay}
                    onHoverDay={setHoveredDay}
                    onSetSelected={onSelectIndexes}
                    onKeyDown={onKeyDown}
                    outerRefs={outerRefs}
                />
            )}
            {calendarState === CalendarState.Months && (
                <CalendarMonths
                    date={date}
                    selectIndexes={selectIndexes}
                    onChangeMonth={handleOnChangeMonth}
                    onSetSelected={onSelectIndexes}
                    onKeyDown={onKeyDown}
                    outerRefs={outerRefs}
                />
            )}
            {calendarState === CalendarState.Years && (
                <CalendarYears
                    date={date}
                    startYear={startYear}
                    selectIndexes={selectIndexes}
                    onChangeYear={handleOnChangeYear}
                    onSetSelected={onSelectIndexes}
                    onKeyDown={onKeyDown}
                    outerRefs={outerRefs}
                />
            )}
        </StyledCalendar>
    );
};
