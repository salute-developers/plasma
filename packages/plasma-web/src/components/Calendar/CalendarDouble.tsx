import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { surfaceLiquid02 } from '@salutejs/plasma-core';

import type { DateObject, Calendar } from './types';
import { getDateFromValue, getNextDate, getPrevDate } from './utils';
import { CalendarDays } from './CalendarDays';
import { CalendarHeader } from './CalendarHeader';

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
    value,
    min,
    max,
    eventList,
    disabledList,
    onChangeValue,
    ...rest
}) => {
    const [date, setDate] = useState<DateObject>(getDateFromValue(value));
    const [initialYear, initialMonth] = getNextDate(date.year, date.monthIndex);
    const [doubleDate, setMonths] = useState({
        monthIndex: [date.monthIndex, initialMonth],
        year: [date.year, initialYear],
    });

    useEffect(() => {
        const newDate = getDateFromValue(value);
        const { year, monthIndex } = newDate;

        setDate(newDate);

        const {
            monthIndex: [, prevMonthIndex],
            year: [, prevYear],
        } = doubleDate;

        if (prevMonthIndex === monthIndex && prevYear === year) {
            return;
        }

        const [nextYear, nextMonthIndex] = getNextDate(year, monthIndex);

        setMonths({
            monthIndex: [monthIndex, nextMonthIndex],
            year: [year, nextYear],
        });
    }, [value, eventList, disabledList, min, max]);

    const handleOnChangeDay = useCallback(
        (newDate: DateObject) => {
            onChangeValue(new Date(newDate.year, newDate.monthIndex, newDate.day));
            setDate(newDate);
        },
        [onChangeValue],
    );

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

    return (
        <StyledCalendar {...rest}>
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
                    date={firstDate}
                    value={value}
                    onChangeDay={handleOnChangeDay}
                />
                <StyledSeparator />
                <CalendarDays
                    isDouble
                    eventList={eventList}
                    disabledList={disabledList}
                    min={min}
                    max={max}
                    date={secondDate}
                    value={value}
                    onChangeDay={handleOnChangeDay}
                />
            </StyledWrapper>
        </StyledCalendar>
    );
};
