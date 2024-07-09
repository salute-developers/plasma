import React, {
    useCallback,
    useMemo,
    useReducer,
    useState,
    KeyboardEvent,
    HTMLAttributes,
    forwardRef,
    useEffect,
} from 'react';

import type { Calendar, DateObject, UseKeyNavigationProps } from '../Calendar.types';
import type { CalendarStateType } from '../store/types';
import { getInitialState, reducer } from '../store/reducer';
import { ActionType, CalendarState } from '../store/types';
import { isValueUpdate, YEAR_RENDER_COUNT } from '../utils';
import { useKeyNavigation } from '../hooks';
import { CalendarDays, CalendarHeader, CalendarMonths, CalendarYears } from '../ui';
import { RootProps } from '../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { IsOutOfRange, StyledCalendar } from './CalendarBase.styles';

export type CalendarBaseProps = Calendar;

/**
 * Компонент календаря.
 */
export const calendarBaseRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, CalendarBaseProps>(
        (
            {
                value: externalValue,
                min,
                max,
                includeEdgeDates,
                type = 'Days',
                eventList,
                disabledList,
                eventMonthList,
                disabledMonthList,
                eventYearList,
                disabledYearList,
                onChangeValue,
                ...rest
            },
            outerRootRef,
        ) => {
            const [firstValue, secondValue] = useMemo(
                () => (Array.isArray(externalValue) ? externalValue : [externalValue]),
                [externalValue],
            );
            const value = secondValue || firstValue;
            const [hoveredItem, setHoveredItem] = useState<DateObject | undefined>();
            const [prevType, setPrevType] = useState(type);
            const [prevValue, setPrevValue] = useState(value);
            const [outOfRangeKey, setOutOfRangeKey] = useState<number>(0);

            const [state, dispatch] = useReducer(reducer, getInitialState(value, type));

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

                    if (calendarState === CalendarState.Months || calendarState === CalendarState.Quarter) {
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

                    if (calendarState === CalendarState.Months || calendarState === CalendarState.Quarter) {
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

            const handleOnChangeMonth = useCallback(
                (newDate: DateObject) => {
                    if (type === CalendarState.Months) {
                        const newDay = new Date(newDate.year, newDate.monthIndex, newDate.day);
                        return onChangeValue?.(newDay);
                    }

                    dispatch({
                        type: ActionType.UPDATE_MONTH,
                        payload: { calendarState: CalendarState.Days, monthIndex: newDate.monthIndex, size: [5, 6] },
                    });
                },
                [onChangeValue],
            );

            const handleOnChangeYear = useCallback(
                (newDate: DateObject) => {
                    if (type === CalendarState.Years) {
                        const newDay = new Date(newDate.year, newDate.monthIndex, newDate.day);
                        return onChangeValue?.(newDay);
                    }

                    if (type === CalendarState.Quarter) {
                        dispatch({
                            type: ActionType.UPDATE_YEAR,
                            payload: { calendarState: CalendarState.Quarter, year: newDate.year, size: [1, 1] },
                        });

                        return;
                    }

                    dispatch({
                        type: ActionType.UPDATE_YEAR,
                        payload: { calendarState: CalendarState.Months, year: newDate.year, size: [3, 2] },
                    });
                },
                [onChangeValue],
            );

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

            useEffect(() => {
                if (!prevValue) {
                    setPrevValue(value);
                }
            }, [value, prevValue]);

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
                        size={rest.size}
                        firstDate={date}
                        startYear={startYear}
                        type={calendarState}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        onUpdateCalendarState={handleUpdateCalendarState}
                    />
                    {calendarState === CalendarState.Days && (
                        <CalendarDays
                            value={externalValue}
                            date={date}
                            min={min}
                            max={max}
                            eventList={eventList}
                            disabledList={disabledList}
                            includeEdgeDates={includeEdgeDates}
                            hoveredDay={hoveredItem}
                            selectIndexes={selectIndexes}
                            onChangeDay={handleOnChangeDay}
                            onSetSelected={onSelectIndexes}
                            onHoverDay={setHoveredItem}
                            onKeyDown={handleKeyDown}
                            outerRefs={outerRefs}
                        />
                    )}
                    {calendarState === CalendarState.Months && (
                        <CalendarMonths
                            value={externalValue}
                            date={date}
                            min={min}
                            max={max}
                            eventList={eventMonthList}
                            disabledList={disabledMonthList}
                            hoveredMonth={hoveredItem}
                            selectIndexes={selectIndexes}
                            onChangeMonth={handleOnChangeMonth}
                            onSetSelected={onSelectIndexes}
                            onHoverMonth={setHoveredItem}
                            onKeyDown={onKeyDown}
                            outerRefs={outerRefs}
                        />
                    )}
                    {calendarState === CalendarState.Years && (
                        <CalendarYears
                            value={externalValue}
                            date={date}
                            startYear={startYear}
                            selectIndexes={selectIndexes}
                            min={min}
                            max={max}
                            eventList={eventYearList}
                            disabledList={disabledYearList}
                            hoveredYear={hoveredItem}
                            onChangeYear={handleOnChangeYear}
                            onSetSelected={onSelectIndexes}
                            onHoverYear={setHoveredItem}
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
        view: 'primary',
        size: 'm',
    },
};
