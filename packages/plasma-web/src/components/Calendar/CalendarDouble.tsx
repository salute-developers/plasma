import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { surfaceLiquid02 } from '@salutejs/plasma-core';

import type { DateObject, Calendar } from './types';
import { getDateFromValue, getNextDate, getPrevDate, isValueUpdate } from './utils';
import { CalendarDays } from './CalendarDays';
import { CalendarHeader } from './CalendarHeader';
import { useKeyNavigation } from './hooks';

export type CalendarDoubleProps = Calendar;

const StyledCalendar = styled.div`
    position: relative;
    user-select: none;
    z-index: 1;

    display: flex;
    flex-direction: column;

    width: 39rem;
    height: 19.5rem;
`;

const StyledSeparator = styled.div`
    background-color: ${surfaceLiquid02};
    min-width: 0.063rem;
    margin: 0.5rem 0 1.5rem;
`;

const StyledWrapper = styled.div`
    display: flex;
`;

/**
 * Компонент двойного календаря.
 */
export const CalendarDouble: React.FC<CalendarDoubleProps> = ({
    value: externalValue,
    min,
    max,
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

    const [date, setDate] = useState<DateObject>(getDateFromValue(value));
    const [prevValue, setPrevValue] = useState(value);
    const [doubleDate, setMonths] = useState(() => {
        const nextDate = getDateFromValue(firstValue);
        const [initialYear, initialMonth] = getNextDate(nextDate.year, nextDate.monthIndex);

        return {
            monthIndex: [nextDate.monthIndex, initialMonth],
            year: [nextDate.year, initialYear],
        };
    });

    const handleMonth = useCallback(
        (getDate: (currentYear: number, currentMonth: number) => number[]) => {
            const [newCurrentYear, newCurrentMonth] = getDate(doubleDate.year[0], doubleDate.monthIndex[0]);
            const [newNextYear, newNextMonth] = getDate(doubleDate.year[1], doubleDate.monthIndex[1]);

            setMonths({
                monthIndex: [newCurrentMonth, newNextMonth],
                year: [newCurrentYear, newNextYear],
            });
        },
        [doubleDate],
    );

    const handlePrev = useCallback(() => {
        handleMonth(getPrevDate);
    }, [handleMonth]);

    const handleNext = useCallback(() => {
        handleMonth(getNextDate);
    }, [handleMonth]);

    const [selectIndexes, onKeyDown, onSelectIndexes, outerRefs] = useKeyNavigation({
        isDouble: true,
        size: [11, 6],
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

    const firstDate = useMemo(
        () => ({
            day: date.day,
            year: doubleDate.year[0],
            monthIndex: doubleDate.monthIndex[0],
        }),
        [date, doubleDate],
    );

    const secondDate = useMemo(
        () => ({
            day: date.day,
            year: doubleDate.year[1],
            monthIndex: doubleDate.monthIndex[1],
        }),
        [date, doubleDate],
    );

    if (isValueUpdate(value, prevValue)) {
        const newDate = getDateFromValue(value);

        const { year, monthIndex } = newDate;

        const {
            monthIndex: [, prevMonthIndex],
            year: [, prevYear],
        } = doubleDate;

        if (prevMonthIndex !== monthIndex || prevYear !== year) {
            const [nextYear, nextMonthIndex] = getNextDate(year, monthIndex);

            setDate(newDate);

            setMonths({
                monthIndex: [monthIndex, nextMonthIndex],
                year: [year, nextYear],
            });
        }

        setPrevValue(value);
    }

    return (
        <StyledCalendar aria-label="Выбор даты" {...rest}>
            <CalendarHeader
                isDouble
                firstDate={firstDate}
                secondDate={secondDate}
                onPrev={handlePrev}
                onNext={handleNext}
            />

            <StyledWrapper>
                <CalendarDays
                    isDouble
                    eventList={eventList}
                    disabledList={disabledList}
                    min={min}
                    max={max}
                    value={externalValue}
                    date={firstDate}
                    hoveredDay={hoveredDay}
                    selectIndexes={selectIndexes}
                    onChangeDay={handleOnChangeDay}
                    onHoverDay={setHoveredDay}
                    onSetSelected={onSelectIndexes}
                    onKeyDown={onKeyDown}
                    outerRefs={outerRefs}
                />
                <StyledSeparator />
                <CalendarDays
                    isDouble
                    isSecond
                    eventList={eventList}
                    disabledList={disabledList}
                    min={min}
                    max={max}
                    value={externalValue}
                    date={secondDate}
                    hoveredDay={hoveredDay}
                    selectIndexes={selectIndexes}
                    onChangeDay={handleOnChangeDay}
                    onHoverDay={setHoveredDay}
                    onSetSelected={onSelectIndexes}
                    onKeyDown={onKeyDown}
                    outerRefs={outerRefs}
                />
            </StyledWrapper>
        </StyledCalendar>
    );
};
