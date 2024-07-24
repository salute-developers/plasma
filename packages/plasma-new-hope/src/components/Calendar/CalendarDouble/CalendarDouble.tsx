import React, {
    useState,
    useCallback,
    useMemo,
    forwardRef,
    HTMLAttributes,
    KeyboardEvent,
    useEffect,
    useReducer,
} from 'react';

import type { Calendar, CalendarConfigProps, DateObject } from '../Calendar.types';
import { YEAR_RENDER_COUNT, getNextDate, isValueUpdate } from '../utils';
import { useKeyNavigation, useCalendarNavigation, useCalendarDateChange } from '../hooks';
import { CalendarDays, CalendarHeader, CalendarMonths, CalendarQuarters, CalendarYears } from '../ui';
import { RootProps } from '../../../engines/types';
import { getInitialState, reducer, sizeMap } from '../store/reducer';
import { ActionType, CalendarState } from '../store/types';
import { IsOutOfRange } from '../CalendarBase/CalendarBase.styles';

import { base as viewCSS } from './variations/_view/base';
import { StyledCalendar, StyledSeparator, StyledWrapper } from './CalendarDouble.styles';

export type CalendarDoubleProps = Calendar & CalendarConfigProps;

/**
 * Компонент двойного календаря.
 */
export const calendarDoubleRoot = (Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>>) =>
    forwardRef<HTMLDivElement, CalendarDoubleProps>(
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

            const [state, dispatch] = useReducer(reducer, getInitialState(value, type, true));

            const { date, calendarState, startYear, size } = state;

            const [firstDate, setFirstDate] = useState<DateObject>(date);
            const [secondDate, setSecondDate] = useState<DateObject>(date);

            const { handleNext, handlePrev } = useCalendarNavigation({
                calendarState,
                date,
                dispatch,
            });

            const [selectIndexes, onKeyDown, onSelectIndexes, outerRefs, isOutOfRange] = useKeyNavigation({
                isDouble: true,
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

            const updateSecondDate = () => {
                if (calendarState === CalendarState.Days) {
                    const [nextYear, nextMonthIndex] = getNextDate(date.year, date.monthIndex);
                    setSecondDate({ year: nextYear, monthIndex: nextMonthIndex, day: date.day });
                }

                if (calendarState === CalendarState.Months || calendarState === CalendarState.Quarters) {
                    setSecondDate({ year: date.year + 1, monthIndex: date.monthIndex, day: date.day });
                }

                if (calendarState === CalendarState.Years) {
                    setSecondDate({ year: startYear + YEAR_RENDER_COUNT, monthIndex: date.monthIndex, day: date.day });
                }
            };

            const getBoundaryDates = () => {
                // NOTE: Если установить индекс дня равным "0", то берется последнее число предыдущего месяца
                if (calendarState === CalendarState.Days) {
                    return [
                        new Date(firstDate.year, firstDate.monthIndex, 1),
                        new Date(secondDate.year, secondDate.monthIndex + 1, 0),
                    ];
                }

                if (calendarState === CalendarState.Months || calendarState === CalendarState.Quarters) {
                    return [new Date(firstDate.year, 0), new Date(secondDate.year, 12, 0)];
                }

                const endVisibleYear = startYear + YEAR_RENDER_COUNT * 2 - 1;
                return [new Date(startYear, 0), new Date(endVisibleYear, 11)];
            };

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
                        payload: { calendarState, size: sizeMap[calendarState].double },
                    });

                    setPrevType(calendarState);
                }
            }, [calendarState]);

            useEffect(() => {
                if (!prevValue) {
                    setPrevValue(value);
                }

                if ((value && prevValue && isValueUpdate(value, prevValue)) || (value && !prevValue)) {
                    const [minVisibleDate, maxVisibleDate] = getBoundaryDates();

                    if (value > maxVisibleDate || value < minVisibleDate) {
                        dispatch({
                            type: ActionType.UPDATE_DATE,
                            payload: { value },
                        });
                    }

                    setPrevValue(value);
                }
            }, [value, prevValue]);

            useEffect(() => {
                setFirstDate(date);

                updateSecondDate();
            }, [date, calendarState]);

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
                        isDouble
                        size={rest.size}
                        firstDate={firstDate}
                        secondDate={secondDate}
                        startYear={startYear}
                        type={calendarState}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        onUpdateCalendarState={handleUpdateCalendarState}
                    />

                    <StyledWrapper>
                        {calendarState === CalendarState.Days && (
                            <>
                                <CalendarDays
                                    value={externalValue}
                                    date={firstDate}
                                    min={min}
                                    max={max}
                                    eventList={eventList}
                                    disabledList={disabledList}
                                    includeEdgeDates={includeEdgeDates}
                                    hoveredDay={hoveredItem}
                                    selectIndexes={selectIndexes}
                                    onChangeDay={handleOnChangeDay}
                                    onHoverDay={setHoveredItem}
                                    onSetSelected={onSelectIndexes}
                                    onKeyDown={handleKeyDown}
                                    outerRefs={outerRefs}
                                    isDouble
                                />
                                <StyledSeparator />
                                <CalendarDays
                                    value={externalValue}
                                    date={secondDate}
                                    min={min}
                                    max={max}
                                    eventList={eventList}
                                    disabledList={disabledList}
                                    includeEdgeDates={includeEdgeDates}
                                    hoveredDay={hoveredItem}
                                    selectIndexes={selectIndexes}
                                    onChangeDay={handleOnChangeDay}
                                    onHoverDay={setHoveredItem}
                                    onSetSelected={onSelectIndexes}
                                    onKeyDown={handleKeyDown}
                                    outerRefs={outerRefs}
                                    isDouble
                                    isSecond
                                />
                            </>
                        )}
                        {calendarState === CalendarState.Months && (
                            <>
                                <CalendarMonths
                                    value={externalValue}
                                    date={firstDate}
                                    min={min}
                                    max={max}
                                    eventList={eventMonthList}
                                    disabledList={disabledMonthList}
                                    hoveredMonth={hoveredItem}
                                    selectIndexes={selectIndexes}
                                    onChangeMonth={handleOnChangeMonth}
                                    onSetSelected={onSelectIndexes}
                                    onHoverMonth={setHoveredItem}
                                    onKeyDown={handleKeyDown}
                                    outerRefs={outerRefs}
                                    isDouble
                                />
                                <StyledSeparator />
                                <CalendarMonths
                                    value={externalValue}
                                    date={secondDate}
                                    min={min}
                                    max={max}
                                    eventList={eventMonthList}
                                    disabledList={disabledMonthList}
                                    hoveredMonth={hoveredItem}
                                    selectIndexes={selectIndexes}
                                    onChangeMonth={handleOnChangeMonth}
                                    onSetSelected={onSelectIndexes}
                                    onHoverMonth={setHoveredItem}
                                    onKeyDown={handleKeyDown}
                                    outerRefs={outerRefs}
                                    isDouble
                                    isSecond
                                />
                            </>
                        )}
                        {calendarState === CalendarState.Quarters && (
                            <>
                                <CalendarQuarters
                                    value={externalValue}
                                    date={firstDate}
                                    min={min}
                                    max={max}
                                    eventList={eventQuarterList}
                                    disabledList={disabledQuarterList}
                                    hoveredQuarter={hoveredItem}
                                    selectIndexes={selectIndexes}
                                    onChangeQuarter={handleOnChangeQuarter}
                                    onSetSelected={onSelectIndexes}
                                    onHoverQuarter={setHoveredItem}
                                    onKeyDown={handleKeyDown}
                                    outerRefs={outerRefs}
                                    isDouble
                                />
                                <StyledSeparator />
                                <CalendarQuarters
                                    value={externalValue}
                                    date={secondDate}
                                    min={min}
                                    max={max}
                                    eventList={eventQuarterList}
                                    disabledList={disabledQuarterList}
                                    hoveredQuarter={hoveredItem}
                                    selectIndexes={selectIndexes}
                                    onChangeQuarter={handleOnChangeQuarter}
                                    onSetSelected={onSelectIndexes}
                                    onHoverQuarter={setHoveredItem}
                                    onKeyDown={handleKeyDown}
                                    outerRefs={outerRefs}
                                    isDouble
                                    isSecond
                                />
                            </>
                        )}
                        {calendarState === CalendarState.Years && (
                            <>
                                <CalendarYears
                                    value={externalValue}
                                    date={firstDate}
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
                                    onKeyDown={handleKeyDown}
                                    outerRefs={outerRefs}
                                    isDouble
                                />
                                <StyledSeparator />
                                <CalendarYears
                                    value={externalValue}
                                    date={secondDate}
                                    startYear={startYear + YEAR_RENDER_COUNT}
                                    selectIndexes={selectIndexes}
                                    min={min}
                                    max={max}
                                    eventList={eventYearList}
                                    disabledList={disabledYearList}
                                    hoveredYear={hoveredItem}
                                    onChangeYear={handleOnChangeYear}
                                    onSetSelected={onSelectIndexes}
                                    onHoverYear={setHoveredItem}
                                    onKeyDown={handleKeyDown}
                                    outerRefs={outerRefs}
                                    isDouble
                                    isSecond
                                />
                            </>
                        )}
                    </StyledWrapper>
                </Root>
            );
        },
    );

export const calendarDoubleConfig = {
    name: 'CalendarDouble',
    tag: 'div',
    layout: calendarDoubleRoot,
    base: StyledCalendar,
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
