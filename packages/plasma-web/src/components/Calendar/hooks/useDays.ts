import { useMemo } from 'react';

import { CalendarValueType, DateItem, DateObject, DisabledDay, EventDay } from '../types';
import {
    getDateFromValue,
    getDaysInMonth,
    getMatrix,
    getNextDate,
    getOffsetDayInWeek,
    getPrevDate,
    IsCurrentDay,
    isDayInRage,
    isSelectedDay,
} from '../utils';

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
const getDaysInCurrentMonth = (date: DateObject, daysInMonth: number, value: CalendarValueType) => {
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
    value: CalendarValueType,
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

const isDisabledArrowLeft = (date: Date, min?: Date) => {
    const currentDate = new Date(date);

    currentDate.setDate(currentDate.getDate() - 1);

    return (min && min >= currentDate) || (min && min >= date);
};

const isDisabledArrowRight = (date: Date, max?: Date) => {
    const currentDate = new Date(date);

    currentDate.setDate(currentDate.getDate() + 1);

    return (max && max <= currentDate) || (max && max <= date);
};

const isDisabledArrowUp = (date: Date, min?: Date) => {
    const currentDate = new Date(date);

    currentDate.setDate(date.getDate() - 7);

    return min && min >= currentDate;
};

const isDisabledArrowDown = (date: Date, max?: Date) => {
    const currentDate = new Date(date);

    currentDate.setDate(date.getDate() + 7);

    return max && max <= currentDate;
};

const isDisabledNextMonth = ({ year, monthIndex, day }: DateObject, max?: Date) => {
    if (!max) {
        return false;
    }

    const currentDate = new Date(year, monthIndex, day);

    currentDate.setDate(currentDate.getDate() + 1);

    let isOut = true;

    while (isOut && currentDate <= max) {
        isOut = max <= currentDate;

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return isOut;
};

const isDisabledPreviousMonth = ({ year, monthIndex, day }: DateObject, min?: Date) => {
    if (!min) {
        return false;
    }

    const currentDate = new Date(year, monthIndex, day);

    currentDate.setDate(currentDate.getDate() - 1);

    let isOut = true;

    while (isOut && currentDate >= min) {
        isOut = min >= currentDate;

        currentDate.setDate(currentDate.getDate() - 1);
    }

    return isOut;
};

const getDisabledArrowKey = (currentDate: Date, min?: Date, max?: Date) => {
    const disabledArrowKey = [];

    if (isDisabledArrowLeft(currentDate, min)) {
        disabledArrowKey.push('left');
    }

    if (isDisabledArrowRight(currentDate, max)) {
        disabledArrowKey.push('right');
    }

    if (isDisabledArrowDown(currentDate, max)) {
        disabledArrowKey.push('down');
    }

    if (isDisabledArrowUp(currentDate, min)) {
        disabledArrowKey.push('up');
    }

    return disabledArrowKey.join(',');
};

const getDisabledMonths = (list: DateObject[], min?: Date, max?: Date) => {
    const disabledMonth = [];

    if (isDisabledPreviousMonth(list[0], min)) {
        disabledMonth.push('previous');
    }

    if (isDisabledNextMonth(list[list.length - 1], max)) {
        disabledMonth.push('next');
    }

    return disabledMonth.join(',');
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
    const disabledDaysMap = getPropsMap(disabledList);

    const daysList = days.filter(({ isDayInCurrentMonth }) => isDayInCurrentMonth).map(({ date }) => date);

    const disabledMonths = getDisabledMonths(daysList, min, max);

    return days.map((dayItem) => {
        const { date } = dayItem;
        const { year, monthIndex, day } = date;

        const keyDay = `${year}-${monthIndex}-${day}`;
        const currentDate = new Date(year, monthIndex, day);

        const isOutOfMinMaxRange = (min && min >= currentDate) || (max && max <= currentDate);

        dayItem.events = eventsMap.get(keyDay);
        dayItem.disabled = disabledDaysMap.has(keyDay) || isOutOfMinMaxRange;

        dayItem.isOutOfMinMaxRange = isOutOfMinMaxRange;
        dayItem.disabledArrowKey = getDisabledArrowKey(currentDate, min, max);
        dayItem.disabledMonths = disabledMonths;

        return dayItem;
    });
};

/**
 * Хук для получения списка дней.
 */
export const useDays = (
    date: DateObject,
    value: CalendarValueType,
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
