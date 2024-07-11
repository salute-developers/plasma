import { useMemo } from 'react';

import {
    getDatesWithModifications,
    getDaysInMonth,
    getMatrix,
    getNextDate,
    getOffsetDayInWeek,
    getPrevDate,
    IsCurrentDay,
    isDateInRange,
    isSelectedDay,
} from '../utils';
import type { CalendarValueType, DateItem, DateObject } from '../Calendar.types';
import { CalendarState } from '../store/types';

import type { UseDaysArgs } from './types';

/**
 * Метод возвращающий массив дней в предыдущем месяце.
 */
const getDaysInPrevMonth = (date: DateObject, offsetDayInWeek: number, value: CalendarValueType) => {
    const [prevYear, prevMonth] = getPrevDate(date.year, date.monthIndex);
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    return Array.from(Array(offsetDayInWeek), (_, i) => ({
        isCurrent: false,
        isSelected: false,
        isDayInCurrentMonth: false,
        inRange: Array.isArray(value)
            ? isDateInRange(prevYear, prevMonth, daysInPrevMonth - (offsetDayInWeek - i) + 1, value)
            : false,
        date: {
            day: daysInPrevMonth - (offsetDayInWeek - i) + 1,
            monthIndex: prevMonth,
            year: prevYear,
        },
    }));
};

/**
 * Метод возвращающий массив дней в текущем месяце.
 */
const getDaysInCurrentMonth = (date: DateObject, daysInMonth: number, value: CalendarValueType) => {
    return Array.from(Array(daysInMonth), (_, i) => ({
        isCurrent: IsCurrentDay(date, i + 1),
        isSelected: Array.isArray(value)
            ? Boolean(value.find((v) => isSelectedDay(date, i + 1, v)))
            : isSelectedDay(date, i + 1, value),
        isDayInCurrentMonth: true,
        inRange: Array.isArray(value) ? isDateInRange(date.year, date.monthIndex, i + 1, value) : false,
        date: {
            day: i + 1,
            monthIndex: date.monthIndex,
            year: date.year,
        },
    }));
};

/**
 * Метод возвращающий массив дней в следующем месяце.
 */
const getDaysInNextMonth = (
    date: DateObject,
    daysInMonth: number,
    offsetDayInWeek: number,
    value: CalendarValueType,
) => {
    const [nextYear, nextMonthIndex] = getNextDate(date.year, date.monthIndex);
    const visibleDayCount = 42;
    const restDaysInCalendar = visibleDayCount - (daysInMonth + offsetDayInWeek);

    return Array.from(Array(restDaysInCalendar), (_, i) => ({
        isCurrent: false,
        isSelected: false,
        isDayInCurrentMonth: false,
        inRange: Array.isArray(value) ? isDateInRange(nextYear, nextMonthIndex, i + 1, value) : false,
        date: {
            day: i + 1,
            monthIndex: nextMonthIndex,
            year: nextYear,
        },
    }));
};

/**
 * Хук для получения списка дней.
 */
export const useDays = ({ date, value, eventList, disabledList, min, max, includeEdgeDates }: UseDaysArgs) =>
    useMemo(() => {
        const { monthIndex, year } = date;
        const daysInMonth = getDaysInMonth(monthIndex, year);
        const offsetDayInWeek = getOffsetDayInWeek(monthIndex, year);

        const days = [
            ...getDaysInPrevMonth(date, offsetDayInWeek, value),
            ...getDaysInCurrentMonth(date, daysInMonth, value),
            ...getDaysInNextMonth(date, daysInMonth, offsetDayInWeek, value),
        ];

        if (eventList?.length || disabledList?.length || max || min) {
            const modifiedDays = getDatesWithModifications({
                dates: days,
                type: CalendarState.Days,
                includeEdgeDates,
                min,
                max,
                eventList,
                disabledList,
            });
            return getMatrix<DateItem>(modifiedDays);
        }

        return getMatrix<DateItem>(days);
    }, [date, value, eventList, disabledList, max, min, includeEdgeDates]);
