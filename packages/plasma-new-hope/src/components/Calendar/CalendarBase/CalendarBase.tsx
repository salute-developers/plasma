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

import type { Calendar, CalendarConfigProps, DateObject } from '../Calendar.types';
import { getInitialState, reducer, sizeMap } from '../store/reducer';
import { ActionType, CalendarState } from '../store/types';
import { isValueUpdate } from '../utils';
import { useKeyNavigation, useCalendarNavigation, useCalendarDateChange } from '../hooks';
import { CalendarDays, CalendarHeader, CalendarMonths, CalendarQuarters, CalendarYears } from '../ui';
import { RootProps } from '../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { IsOutOfRange, StyledCalendar } from './CalendarBase.styles';

export type CalendarBaseProps = Calendar & CalendarConfigProps;

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
                eventQuarterList,
                disabledQuarterList,
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

            const { handleNext, handlePrev } = useCalendarNavigation({
                calendarState,
                date,
                dispatch,
            });
            const [selectIndexes, onKeyDown, onSelectIndexes, outerRefs, isOutOfRange] = useKeyNavigation({
                size,
                calendarState,
                onNext: handleNext,
                onPrev: handlePrev,
            });

            const {
                handleOnChangeDay,
                handleOnChangeMonth,
                handleOnChangeQuarter,
                handleOnChangeYear,
                handleUpdateCalendarState,
            } = useCalendarDateChange({ type, onChangeValue, onSelectIndexes, dispatch });

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
                if (prevType !== calendarState) {
                    dispatch({
                        type: ActionType.UPDATE_CALENDAR_STATE,
                        payload: { calendarState, size: sizeMap[calendarState].single },
                    });

                    setPrevType(calendarState);
                }
            }, [calendarState]);

            useEffect(() => {
                if (!prevValue) {
                    setPrevValue(value);
                }

                if ((value && prevValue && isValueUpdate(value, prevValue)) || (value && !prevValue)) {
                    dispatch({
                        type: ActionType.UPDATE_DATE,
                        payload: { value },
                    });

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
                    {calendarState === CalendarState.Quarters && (
                        <CalendarQuarters
                            value={externalValue}
                            date={date}
                            min={min}
                            max={max}
                            eventList={eventQuarterList}
                            disabledList={disabledQuarterList}
                            hoveredQuarter={hoveredItem}
                            selectIndexes={selectIndexes}
                            onChangeQuarter={handleOnChangeQuarter}
                            onSetSelected={onSelectIndexes}
                            onHoverQuarter={setHoveredItem}
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
