import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import type { CalendarStateType, DateObject, Calendar } from './types';
import { CalendarState } from './types';
import { getDateFromValue, getNextDate, getPrevDate, getStartYear, YEAR_RENDER_COUNT } from './utils';
import { CalendarDays } from './CalendarDays';
import { CalendarMonths } from './CalendarMonths';
import { CalendarHeader } from './CalendarHeader';
import { CalendarYears } from './CalendarYears';

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
    date: externalDate,
    min,
    max,
    type = 'Days',
    eventList,
    disabledList,
    onChangeValue,
    ...rest
}) => {
    const [value] = useMemo(() => (Array.isArray(externalValue) ? externalValue : [externalValue]), [externalValue]);

    const [calendarState, setCalendarState] = useState(type);
    const [date, setDate] = useState<DateObject>(externalDate || getDateFromValue(value));
    const [startYear, setStartYear] = useState(getStartYear(date.year));
    const [hoveredDay, setHoveredDay] = useState<DateObject | undefined>();

    useEffect(() => {
        const newDate = externalDate || getDateFromValue(value);
        setDate(newDate);
    }, [externalDate, eventList, disabledList, min, max]);

    useEffect(() => {
        const newDate = externalDate || getDateFromValue(value);
        setDate(newDate);
    }, [value]);

    useEffect(() => {
        setStartYear(getStartYear(value.getFullYear()));
    }, [value, externalDate, eventList, disabledList, min, max]);

    useEffect(() => {
        setCalendarState(type);
    }, [type]);

    const handleOnChangeDay = useCallback(
        (newDate: DateObject) => {
            const newDay = new Date(newDate.year, newDate.monthIndex, newDate.day);
            onChangeValue(newDay);
        },
        [onChangeValue],
    );

    const handleOnChangeMonth = useCallback(
        (monthIndex: number) => {
            // TODO: https://github.com/salute-developers/plasma/issues/92
            setTimeout(() => {
                setCalendarState(CalendarState.Days);
                setDate({ ...date, monthIndex });
            });
        },
        [type, date],
    );

    const handleOnChangeYear = useCallback(
        (year: number) => {
            // TODO: https://github.com/salute-developers/plasma/issues/92
            setTimeout(() => {
                setCalendarState(CalendarState.Months);
                setDate({ ...date, year });
            });
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
            setStartYear((prevYear) => prevYear - 1);
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
            setStartYear((prevYear) => prevYear + 1);
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
                    value={externalValue}
                    date={date}
                    hoveredDay={hoveredDay}
                    onChangeDay={handleOnChangeDay}
                    onHoverDay={setHoveredDay}
                />
            )}

            {calendarState === CalendarState.Months && (
                <CalendarMonths date={date} onChangeMonth={handleOnChangeMonth} />
            )}

            {calendarState === CalendarState.Years && (
                <CalendarYears date={date} startYear={startYear} onChangeYear={handleOnChangeYear} />
            )}
        </StyledCalendar>
    );
};
