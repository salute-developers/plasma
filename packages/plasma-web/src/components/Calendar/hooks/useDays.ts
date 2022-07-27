import { useMemo } from 'react';

import { DateItem, DateObject, DisabledDay, EventDay } from '../types';
import {
    getDaysInMonth,
    getNextDate,
    getOffsetDayInWeek,
    getPrevDate,
    getDateFromValue,
    isSelectedDay,
    IsCurrentDay,
    isDayInRage,
    getMatrix,
} from '../utils';

/**
 * Метод возвращающий массив дней в предыдущем месяце.
 */
const getDaysInPrevMonth = (date: DateObject, offsetDayInWeek: number, value: Date | [Date, Date?]) => {
    const [prevYear, prevMonth] = getPrevDate(date.year, date.monthIndex);
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    return Array.from(Array(offsetDayInWeek), (_, i) => ({
        isCurrent: false,
        isSelected: false,
        isDayInCurrentMonth: false,
        inRange: Array.isArray(value)
            ? isDayInRage(prevYear, prevMonth, daysInPrevMonth - (offsetDayInWeek - i) + 1, value)
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
const getDaysInCurrentMonth = (date: DateObject, daysInMonth: number, value: Date | [Date, Date?]) => {
    return Array.from(Array(daysInMonth), (_, i) => ({
        isCurrent: IsCurrentDay(date, i + 1),
        isSelected: Array.isArray(value)
            ? Boolean(value.find((v) => isSelectedDay(date, i + 1, v)))
            : isSelectedDay(date, i + 1, value),
        isDayInCurrentMonth: true,
        inRange: Array.isArray(value) ? isDayInRage(date.year, date.monthIndex, i + 1, value) : false,
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
    value: Date | [Date, Date?],
) => {
    const [nextYear, nextMonthIndex] = getNextDate(date.year, date.monthIndex);
    const visibleDayCount = 42;
    const restDaysInCalendar = visibleDayCount - (daysInMonth + offsetDayInWeek);

    return Array.from(Array(restDaysInCalendar), (_, i) => ({
        isCurrent: false,
        isSelected: false,
        isDayInCurrentMonth: false,
        inRange: Array.isArray(value) ? isDayInRage(nextYear, nextMonthIndex, i + 1, value) : false,
        date: {
            day: i + 1,
            monthIndex: nextMonthIndex,
            year: nextYear,
        },
    }));
};

/**
 * Метод для получения набора неповторяющихся дат.
 */
const getPropsMap = <T extends EventDay | DisabledDay>(props: T[]) =>
    props.reduce((acc, prop) => {
        const { year, monthIndex, day } = getDateFromValue(prop.date);

        const key = `${year}-${monthIndex}-${day}`;

        const propList = acc.get(key) || [];
        propList.push(prop);

        return acc.set(key, propList);
    }, new Map<string, T[]>());

/**
 * Метод модифицирующий дни (добавляющий свойства events и disabled).
 */
const getDaysWithModifications = (
    days: DateItem[],
    eventList: EventDay[] = [],
    disabledList: DisabledDay[] = [],
    min?: Date,
    max?: Date,
) => {
    const eventsMap = getPropsMap(eventList);
    const disabledsMap = getPropsMap(disabledList);

    return days.map((dayItem) => {
        const { date } = dayItem;
        const { year, monthIndex, day } = date;

        const keyDay = `${year}-${monthIndex}-${day}`;
        const currentDate = new Date(year, monthIndex, day);

        dayItem.events = eventsMap.get(keyDay);
        dayItem.disabled = disabledsMap.has(keyDay) || (min && min >= currentDate) || (max && max <= currentDate);

        return dayItem;
    });
};

/**
 * Хук для получения списка дней.
 */
export const useDays = (
    date: DateObject,
    value: Date | [Date, Date?],
    eventList?: EventDay[],
    disabledList?: DisabledDay[],
    min?: Date,
    max?: Date,
) =>
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
            const modifiedDays = getDaysWithModifications(days, eventList, disabledList, min, max);
            return getMatrix<DateItem>(modifiedDays);
        }

        return getMatrix<DateItem>(days);
    }, [date, value, eventList, disabledList, max, min]);
