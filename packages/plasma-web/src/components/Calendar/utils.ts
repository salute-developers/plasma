import type { DateObject, DisabledDay } from './types';

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

export const getSortedValues = (values: [Date, (Date | undefined)?]) =>
    values.sort((start, end) => {
        if (!start || !end) {
            return -1;
        }

        return start.getTime() - end.getTime();
    });

export const isDayInRage = (year: number, monthIndex: number, currentDay: number, values: [Date, Date?]) => {
    const [startValue, endValue] = getSortedValues(values);

    if (!endValue) {
        return false;
    }

    const day = new Date(year, monthIndex, currentDay);
    return startValue <= day && day <= endValue;
};

export const isSameDay = (firstDate: DateObject, secondDate?: DateObject) =>
    secondDate &&
    firstDate.day === secondDate.day &&
    firstDate.monthIndex === secondDate.monthIndex &&
    firstDate.year === secondDate.year;

/**
 * Метод проверяет, находится ли календарь в режиме выбора второго значения.
 */
export const isSelectProcess = (array: unknown | unknown[]): array is [Date, Date?] =>
    Array.isArray(array) && !array[1];

/**
 * Метод возвращает сторону, когда выбор второго значения диапазона завершён.
 */
export const getSideForSelected = (date: DateObject, startValue: Date, endValue: Date) => {
    const currentDateTime = new Date(date.year, date.monthIndex, date.day).getTime();
    const startValueTime = startValue.getTime();
    const endValueTime = endValue.getTime();

    if (currentDateTime === startValueTime) {
        return 'right';
    }

    if (currentDateTime === endValueTime) {
        return 'left';
    }

    return undefined;
};

/**
 * Метод возвращает сторону, во время выбора второго значения диапазона.
 */
export const getSideForHovered = (date: DateObject, hoveredDay: DateObject, startValue: Date, isSelected?: boolean) => {
    const dateHover = new Date(hoveredDay.year, hoveredDay.monthIndex, hoveredDay.day);
    const isHovered = isSameDay(date, hoveredDay);

    if ((isSelected && startValue > dateHover) || (isHovered && startValue < dateHover)) {
        return 'left';
    }

    if ((isSelected && startValue < dateHover) || (isHovered && startValue > dateHover)) {
        return 'right';
    }

    return undefined;
};

/**
 * Метод возвращает сторону, с которой нужно отрисовать направление полоски диапазона.
 */
export const getSideInRange = (
    value: Date | [Date, Date?],
    date: DateObject,
    hoveredDay?: DateObject,
    isSelected?: boolean,
) => {
    if (!Array.isArray(value)) {
        return undefined;
    }

    const [startValue, endValue] = value;

    if (isSelected && endValue) {
        return getSideForSelected(date, startValue, endValue);
    }

    if (hoveredDay) {
        return getSideForHovered(date, hoveredDay, startValue, isSelected);
    }

    return undefined;
};

/**
 * Метод проверяет, находится ли выбранный день в диапазоне.
 */
export const getInRange = (
    value: Date | [Date, Date?],
    date: DateObject,
    hoveredDay?: DateObject,
    inRange?: boolean,
) => {
    if (!isSelectProcess(value) || !hoveredDay) {
        return inRange;
    }

    const dateSelected = value[0];
    const dateHover = new Date(hoveredDay.year, hoveredDay.monthIndex, hoveredDay.day);
    const dateCurrent = new Date(date.year, date.monthIndex, date.day);

    if (
        (dateSelected < dateCurrent && dateCurrent < dateHover) ||
        (dateSelected > dateCurrent && dateCurrent > dateHover)
    ) {
        return true;
    }

    return inRange;
};

/**
 * Метод проверяет, можно ли выбрать день.
 */
export const canSelectDate = (
    { year, monthIndex, day }: DateObject,
    value: Date | [Date, Date?],
    disabledList?: DisabledDay[],
) => {
    if (!disabledList?.length || !isSelectProcess(value)) {
        return true;
    }

    const hoverDate = new Date(year, monthIndex, day);
    const [startDate] = value;

    if (hoverDate.getTime() === startDate.getTime()) {
        return false;
    }

    const offDisabledRange = disabledList.some(
        ({ date }) => (startDate < date && date < hoverDate) || (startDate > date && date > hoverDate),
    );

    return !offDisabledRange;
};
