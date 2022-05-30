import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { backgroundPrimary } from '@salutejs/plasma-core';

import type { CalendarStateType, DateObject } from './types';
import { CalendarState } from './types';
import { getDateFromValue, getNextDate, getPrevDate, getStartYear, YEAR_RENDER_COUNT } from './utils';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarHeader } from './CalendarHeader';
import { CalendarYears } from './CalendarYears';

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: Date;
    isInline?: boolean;
    type?: CalendarStateType;
    onChangeValue: (value: Date) => void;
}

const StyledCalendar = styled.div<{ isInline?: boolean }>`
    position: relative;
    user-select: none;
    z-index: 1;

    width: 19.5rem;
    height: 19.5rem;

    ${({ isInline }) =>
        !isInline &&
        css`
            background-color: ${backgroundPrimary};
            box-shadow: 0 0.063rem 0.25rem -0.063rem rgba(0, 0, 0, 0.04),
                0 0.375rem 0.75rem -0.125rem rgba(8, 8, 8, 0.1);
            border-radius: 0.75rem;
        `}
`;

/**
 * Компонент календаря.
 */
export const Calendar: React.FC<CalendarProps> = ({
    value,
    isInline = false,
    type = 'Days',
    onChangeValue,
    ...rest
}) => {
    const [calendarState, setCalendarState] = useState(type);
    const [date, setDate] = useState<DateObject>(getDateFromValue(value));
    const [startYear, setStartYear] = useState(getStartYear(date.year));

    useEffect(() => {
        setDate(getDateFromValue(value));
        setStartYear(getStartYear(value.getFullYear()));
    }, [value]);

    useEffect(() => {
        setCalendarState(type);
    }, [type]);

    const handleOnChangeDay = useCallback(
        (newDate: DateObject) => {
            onChangeValue(new Date(newDate.year, newDate.monthIndex, newDate.day));
            setDate(newDate);
        },
        [onChangeValue],
    );

    const handleOnChangeMonth = useCallback(
        (monthIndex: number) => {
            setCalendarState(CalendarState.Days);
            setDate({ ...date, monthIndex });
        },
        [type, date],
    );

    const handleOnChangeYear = useCallback(
        (year: number) => {
            setCalendarState(CalendarState.Months);
            setDate({ ...date, year });
        },
        [date, type, onChangeValue],
    );

    const handleMonth = useCallback(
        (getDate: (currentYear: number, currentMonth: number) => number[]) => {
            const [year, monthIndex] = getDate(date.year, date.monthIndex);
            setDate({ ...date, monthIndex, year });
        },
        [date],
    );

    const handlePrev = useCallback(() => {
        if (calendarState === CalendarState.Days) {
            handleMonth(getPrevDate);
            return;
        }

        if (calendarState === CalendarState.Months) {
            setDate((prevDate) => ({ ...prevDate, year: prevDate.year - 1 }));
            return;
        }

        if (calendarState === CalendarState.Years) {
            setStartYear((prevStartYear) => prevStartYear - YEAR_RENDER_COUNT);
        }
    }, [handleMonth, calendarState]);

    const handleNext = useCallback(() => {
        if (calendarState === CalendarState.Days) {
            handleMonth(getNextDate);
            return;
        }

        if (calendarState === CalendarState.Months) {
            setDate((prevDate) => ({ ...prevDate, year: prevDate.year + 1 }));
            return;
        }

        if (calendarState === CalendarState.Years) {
            setStartYear((prevStartYear) => prevStartYear + YEAR_RENDER_COUNT);
        }
    }, [handleMonth, calendarState]);

    return (
        <StyledCalendar isInline={isInline} {...rest}>
            <CalendarHeader
                date={date}
                startYear={startYear}
                type={calendarState}
                onPrev={handlePrev}
                onNext={handleNext}
                onCalendarStateChange={setCalendarState}
            />

            {calendarState === CalendarState.Days && (
                <CalendarDays date={date} value={value} onChangeDay={handleOnChangeDay} />
            )}

            {calendarState === CalendarState.Months && (
                <CalendarMonths date={date} value={value} onChangeMonth={handleOnChangeMonth} />
            )}

            {calendarState === CalendarState.Years && (
                <CalendarYears startYear={startYear} value={value} onChangeYear={handleOnChangeYear} />
            )}
        </StyledCalendar>
    );
};
