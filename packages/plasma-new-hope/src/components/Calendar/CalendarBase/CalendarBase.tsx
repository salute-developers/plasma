import React, { useCallback, useMemo, useReducer, useState, KeyboardEvent, HTMLAttributes, forwardRef } from 'react';

import type { Calendar, DateObject, UseKeyNavigationProps } from '../shared/types';
import type { CalendarStateType } from '../store/types';
import { getInitialState, reducer } from '../store/reducer';
import { ActionType, CalendarState } from '../store/types';
import { isValueUpdate, YEAR_RENDER_COUNT } from '../shared/utils';
import { useKeyNavigation } from '../shared/hooks';
import { CalendarDays, CalendarHeader, CalendarMonths, CalendarYears } from '../ui';
import { RootProps } from '../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { IsOutOfRange, StyledCalendar } from './CalendarBase.styles';

export type CalendarBaseProps = HTMLAttributes<HTMLDivElement> &
    Calendar & {
        /**
         * Тип отображения календаря: дни, месяца, года.
         */
        type?: CalendarStateType;
    };

/**
 * Компонент календаря.
 */
export const calendarBaseRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, CalendarBaseProps>(
        (
            { value: externalValue, min, max, type = 'Days', eventList, disabledList, onChangeValue, ...rest },
            outerRootRef,
        ) => {
            const [firstValue, secondValue] = useMemo(
                () => (Array.isArray(externalValue) ? externalValue : [externalValue]),
                [externalValue],
            );
            const value = secondValue || firstValue;
            const [hoveredDay, setHoveredDay] = useState<DateObject | undefined>();
            const [prevType, setPrevType] = useState(type);
            const [prevValue, setPrevValue] = useState(value);
            const [outOfRangeKey, setOutOfRangeKey] = useState<number>(0);

            const [state, dispatch] = useReducer(reducer, getInitialState(value, [5, 6], type));

            const { date, calendarState, startYear, size } = state;

            const handlePrev = useCallback<UseKeyNavigationProps['onPrev']>(
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

            const handleNext = useCallback<UseKeyNavigationProps['onNext']>(
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

            const [selectIndexes, onKeyDown, onSelectIndexes, outerRefs, isOutOfRange] = useKeyNavigation({
                size,
                onNext: handleNext,
                onPrev: handlePrev,
            });

            const handleOnChangeDay = useCallback(
                (newDate: DateObject, coord: number[]) => {
                    const newDay = new Date(newDate.year, newDate.monthIndex, newDate.day);
                    onChangeValue?.(newDay);

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

            const handleUpdateCalendarState = useCallback(
                (newCalendarState: CalendarStateType, newSize: [number, number]) => {
                    dispatch({
                        type: ActionType.UPDATE_CALENDAR_STATE,
                        payload: { calendarState: newCalendarState, size: newSize },
                    });
                },
                [],
            );

            if (value && prevValue && isValueUpdate(value, prevValue)) {
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

            // Изменяем ключ каждый раз как пытаемся перейти на даты которые находятся за пределами min/max ограничений.
            // Это необходимо для того чтобы screen-reader корректно озвучивал уведомление aria-live="assertive"
            // о том что нет доступных дат
            const handleKeyDown = useCallback(
                (event: KeyboardEvent<HTMLDivElement>) => {
                    setOutOfRangeKey((previousState) => Number(!previousState));

                    onKeyDown(event);
                },
                [onKeyDown],
            );

            return (
                <Root ref={outerRootRef} aria-label="Выбор даты" {...rest}>
                    {isOutOfRange && (
                        <IsOutOfRange
                            key={outOfRangeKey}
                            aria-atomic="true"
                            role="alert"
                            aria-live="assertive"
                            aria-relevant="additions"
                        >
                            Далее нет доступных дат.
                        </IsOutOfRange>
                    )}
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
                            onKeyDown={handleKeyDown}
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
                </Root>
            );
        },
    );

export const calendarBaseConfig = {
    name: 'CalendarBase',
    tag: 'div',
    layout: calendarBaseRoot,
    base: StyledCalendar,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
