import { useMemo } from 'react';

import type { DateItem, DateObject } from './types';
import {
    YEAR_RENDER_COUNT,
    SHORT_MONTH_NAME,
    getDaysInMonth,
    getNextDate,
    getOffsetDayInWeek,
    getPrevDate,
    isSelectedDay,
    isSelectedMonth,
    IsCurrentDay,
    isCurrentMonth,
    isCurrentYear,
    isSelectedYear,
} from './utils';

const getDaysInPrevMonth = (date: DateObject, offsetDayInWeek: number) => {
    const [prevYear, prevMonth] = getPrevDate(date.year, date.monthIndex);
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    return Array.from(Array(offsetDayInWeek), (_, i) => ({
        isCurrent: false,
        isSelected: false,
        isDayInCurrentMonth: false,
        date: {
            day: daysInPrevMonth - (offsetDayInWeek - i) + 1,
            monthIndex: prevMonth,
            year: prevYear,
        },
    }));
};

const getDaysInCurrentMonth = (date: DateObject, daysInMonth: number, value: Date) =>
    Array.from(Array(daysInMonth), (_, i) => ({
        isCurrent: IsCurrentDay(date, i + 1),
        isSelected: isSelectedDay(date, i + 1, value),
        isDayInCurrentMonth: true,
        date: {
            day: i + 1,
            monthIndex: date.monthIndex,
            year: date.year,
        },
    }));

const getDaysInNextMonth = (date: DateObject, daysInMonth: number, offsetDayInWeek: number) => {
    const [nextYear, nextMonth] = getNextDate(date.year, date.monthIndex);
    const visibleDayCount = 42;
    const restDaysInCalendar = visibleDayCount - (daysInMonth + offsetDayInWeek);

    return Array.from(Array(restDaysInCalendar), (_, i) => ({
        isCurrent: false,
        isSelected: false,
        isDayInCurrentMonth: false,
        date: {
            day: i + 1,
            monthIndex: nextMonth,
            year: nextYear,
        },
    }));
};

const getDaysByWeeks = (items: DateItem[]) => {
    const newItems = [...items];
    const daysInWeek = 7;

    return newItems.reduce((acc: DateItem[][], item, index) => {
        if (index % daysInWeek === 0) {
            acc.push([]);
        }

        acc[acc.length - 1].push(item);
        return acc;
    }, []);
};

export const useDays = (date: DateObject, value: Date) =>
    useMemo(() => {
        const { monthIndex, year } = date;
        const daysInMonth = getDaysInMonth(monthIndex, year);
        const offsetDayInWeek = getOffsetDayInWeek(monthIndex, year);

        return getDaysByWeeks([
            ...getDaysInPrevMonth(date, offsetDayInWeek),
            ...getDaysInCurrentMonth(date, daysInMonth, value),
            ...getDaysInNextMonth(date, daysInMonth, offsetDayInWeek),
        ]);
    }, [date, value]);

export const useMonths = (date: DateObject, value: Date) =>
    useMemo(
        () =>
            SHORT_MONTH_NAME.map((monthName, monthIndex) => ({
                monthName,
                isCurrent: isCurrentMonth(date, monthIndex),
                isSelected: isSelectedMonth(date, monthIndex, value),
            })),
        [date, value],
    );

export const useYears = (startYear: number, value: Date) =>
    useMemo(
        () =>
            Array.from(Array(YEAR_RENDER_COUNT), (_, i) => ({
                isCurrent: isCurrentYear(startYear + i),
                isSelected: isSelectedYear(startYear + i, value),
                year: startYear + i,
            })),
        [value, startYear],
    );
