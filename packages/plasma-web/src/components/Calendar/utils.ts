import type { DateObject } from './types';

export const YEAR_RENDER_COUNT = 12;

export const SHORT_DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const SHORT_MONTH_NAME = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

export const MONTH_NAMES = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

export const getDaysInMonth = (monthIndex: number, year: number) => new Date(year, monthIndex + 1, 0).getDate();

export const getOffsetDayInWeek = (monthIndex: number, year: number) => (new Date(year, monthIndex).getDay() || 7) - 1;

export const getStartYear = (year: number) => Math.trunc((year - 1) * 0.1) * 10 - 1;

export const getNextDate = (currentYear: number, currentMonth: number) =>
    currentMonth + 1 === MONTH_NAMES.length ? [currentYear + 1, 0] : [currentYear, currentMonth + 1];

export const getPrevDate = (currentYear: number, currentMonth: number) =>
    currentMonth - 1 < 0 ? [currentYear - 1, 11] : [currentYear, currentMonth - 1];

export const getDateFromValue = (date: Date): DateObject => ({
    day: date.getDate(),
    monthIndex: date.getMonth(),
    year: date.getFullYear(),
});

export const getDateFromNow = (): DateObject => {
    const nowDate = new Date();

    return {
        day: nowDate.getDate(),
        monthIndex: nowDate.getMonth(),
        year: nowDate.getFullYear(),
    };
};

export const IsCurrentDay = (date: DateObject, day: number) => {
    const { day: currentDay, monthIndex: currentMonthIndex, year: currentYear } = getDateFromNow();
    return day === currentDay && date.monthIndex === currentMonthIndex && date.year === currentYear;
};

export const isSelectedDay = (date: DateObject, day: number, value: Date) => {
    const { monthIndex, year } = getDateFromValue(value);
    return date.day === day && date.monthIndex === monthIndex && date.year === year;
};

export const isCurrentMonth = (date: DateObject, monthIndex: number) => {
    const { monthIndex: currentMonthIndex, year: currentYear } = getDateFromNow();
    return monthIndex === currentMonthIndex && date.year === currentYear;
};

export const isSelectedMonth = (date: DateObject, monthIndex: number, value: Date) => {
    const { year } = getDateFromValue(value);
    return date.monthIndex === monthIndex && date.year === year;
};

export const isCurrentYear = (year: number) => {
    const { year: currentYear } = getDateFromNow();
    return year === currentYear;
};

export const isSelectedYear = (year: number, value: Date) => {
    const { year: currentYear } = getDateFromValue(value);
    return currentYear === year;
};
