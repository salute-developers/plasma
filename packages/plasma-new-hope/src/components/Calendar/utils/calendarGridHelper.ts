import type { CalendarValueType, DateObject, DisabledDay, EventDay, ItemProps } from '../Calendar.types';
import type { CalendarStateType } from '../store/types';

import { isSelectProcess } from './calendarRangeHelper';
import { MONTH_NAMES, YEAR_RENDER_COUNT } from './constants';

export const getDaysInMonth = (monthIndex: number, year: number) => new Date(year, monthIndex + 1, 0).getDate();

export const getOffsetDayInWeek = (monthIndex: number, year: number) => (new Date(year, monthIndex).getDay() || 7) - 1;

export const getStartYear = (year: number) => Math.floor(year / YEAR_RENDER_COUNT) * YEAR_RENDER_COUNT;

export const getNextDate = (currentYear: number, currentMonth: number) =>
    currentMonth + 1 === MONTH_NAMES.length ? [currentYear + 1, 0] : [currentYear, currentMonth + 1];

export const getPrevDate = (currentYear: number, currentMonth: number) =>
    currentMonth - 1 < 0 ? [currentYear - 1, 11] : [currentYear, currentMonth - 1];

export const getDateFromValue = (date: Date | undefined): DateObject => {
    const state = date || new Date();

    return {
        day: date !== undefined ? state.getDate() : 0,
        monthIndex: state.getMonth(),
        year: state.getFullYear(),
    };
};

export const getDateFromNow = (): DateObject => {
    const nowDate = new Date();

    return {
        day: nowDate.getDate(),
        monthIndex: nowDate.getMonth(),
        year: nowDate.getFullYear(),
    };
};

export const IsCurrentDay = (date: DateObject, currentDay: number) => {
    const { day, monthIndex: currentMonthIndex, year: currentYear } = getDateFromNow();
    return day === currentDay && date.monthIndex === currentMonthIndex && date.year === currentYear;
};

export const isSelectedDay = (date: DateObject, currentDay: number, value?: Date) => {
    if (!value) {
        return false;
    }

    const { day, monthIndex, year } = getDateFromValue(value);
    return day === currentDay && date.monthIndex === monthIndex && date.year === year;
};

export const isCurrentMonth = (date: DateObject, monthIndex: number) => {
    const { monthIndex: currentMonthIndex, year: currentYear } = getDateFromNow();
    return monthIndex === currentMonthIndex && date.year === currentYear;
};

export const isSelectedMonth = (date: DateObject, currentMonth: number, value?: Date) => {
    if (!value) {
        return false;
    }

    const { monthIndex, year } = getDateFromValue(value);
    return currentMonth === monthIndex && date.year === year;
};

export const isCurrentYear = (year: number) => {
    const { year: currentYear } = getDateFromNow();
    return year === currentYear;
};

export const isSelectedYear = (yearValue: number, value?: Date) => {
    if (!value) {
        return false;
    }

    const { year } = getDateFromValue(value);
    return yearValue === year;
};

/**
 * Метод для получения набора неповторяющихся дат.
 */
export const getPropsMap = <T extends EventDay | DisabledDay>(props: T[]) =>
    props.reduce((acc, prop) => {
        const { year, monthIndex, day } = getDateFromValue(prop.date);

        const key = `${year}-${monthIndex}-${day}`;

        const propList = acc.get(key) || [];
        propList.push(prop);

        return acc.set(key, propList);
    }, new Map<string, T[]>());

/**
 * Метод проверяет, можно ли выбрать день.
 */
export const canSelectDate = (
    { year, monthIndex, day }: DateObject,
    value: CalendarValueType,
    disabledList?: DisabledDay[],
) => {
    if (!isSelectProcess(value)) {
        return true;
    }

    const hoverDate = new Date(year, monthIndex, day);
    const [startDate] = value;

    if (!disabledList?.length) {
        return true;
    }

    const offDisabledRange = disabledList.some(
        ({ date }) => (startDate < date && date < hoverDate) || (startDate > date && date > hoverDate),
    );

    return !offDisabledRange;
};

/**
 * Метод для получения двумерного массива и возвращения выбранного элемента.
 */
export const getMatrix = <T extends ItemProps>(items: T[], rowSize = 7): readonly [T[][], number[] | undefined] => {
    const newItems = [...items];

    let selected: [number, number] | undefined;

    const result = newItems.reduce((acc: T[][], item, index) => {
        if (index % rowSize === 0) {
            acc.push([]);
        }

        acc[acc.length - 1].push(item);

        if (item.isSelected) {
            selected = [acc.length - 1, index % rowSize];
        }

        return acc;
    }, []);

    return [result, selected] as const;
};

export const getCalendarType = (type: CalendarStateType) => {
    switch (type) {
        case 'Months':
        case 'Quarters':
            return 'год';
        case 'Years':
            return 'период';
        default:
            return 'месяц';
    }
};
