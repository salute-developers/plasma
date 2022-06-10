import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import type { CalendarStateType, DateObject, Calendar } from './types';
import { CalendarState } from './types';
import { getDateFromValue, getNextDate, getPrevDate, getStartYear, YEAR_RENDER_COUNT } from './utils';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarHeader } from './CalendarHeader';
import { CalendarYears } from './CalendarYears';

export type CalendarBaseProps = Calendar & {
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
    value,
    min,
    max,
    type = 'Days',
    eventList,
    disabledList,
    onChangeValue,
    ...rest
}) => {
    const [calendarState, setCalendarState] = useState(type);
    const [date, setDate] = useState<DateObject>(getDateFromValue(value));
    const [startYear, setStartYear] = useState(getStartYear(date.year));

    useEffect(() => {
        setDate(getDateFromValue(value));
        setStartYear(getStartYear(value.getFullYear()));
    }, [value, eventList, disabledList, min, max]);

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
        [date, type],
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
        <StyledCalendar {...rest}>
            <CalendarHeader
                firstDate={date}
                startYear={startYear}
                type={calendarState}
                onPrev={handlePrev}
                onNext={handleNext}
                onCalendarStateChange={setCalendarState}
            />

            {calendarState === CalendarState.Days && (
                <CalendarDays
                    eventList={eventList}
                    disabledList={disabledList}
                    min={min}
                    max={max}
                    date={date}
                    value={value}
                    onChangeDay={handleOnChangeDay}
                />
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
