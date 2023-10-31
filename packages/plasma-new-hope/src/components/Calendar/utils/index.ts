import type { CalendarStateType } from '../store/types';
import type { CalendarValueType, DateObject, DisabledDay, ItemProps } from '../Calendar.types';

export const ROW_STEP = 6;

export const YEAR_RENDER_COUNT = 12;

export const SHORT_DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] as const;

export const FULL_DAY_NAMES: Record<typeof SHORT_DAY_NAMES[number], string> = {
    Пн: 'Понедельник',
    Вт: 'Вторник',
    Ср: 'Среда',
    Чт: 'Четверг',
    Пт: 'Пятница',
    Сб: 'Суббота',
    Вс: 'Воскресенье',
};

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

export const isSelectedMonth = (date: DateObject, monthIndex: number) => date.monthIndex === monthIndex;

export const isCurrentYear = (year: number) => {
    const { year: currentYear } = getDateFromNow();
    return year === currentYear;
};

export const isSelectedYear = (date: DateObject, year: number) => date.year === year;

export const getSortedValues = (values: [Date | undefined, (Date | undefined)?]) =>
    values.sort((start, end) => {
        if (!start || !end) {
            return -1;
        }

        return start.getTime() - end.getTime();
    });

export const isDayInRage = (
    year: number,
    monthIndex: number,
    currentDay: number,
    values: [Date | undefined, Date?],
) => {
    const [startValue, endValue] = getSortedValues(values);

    if (!endValue) {
        return false;
    }

    const day = new Date(year, monthIndex, currentDay);
    return startValue && startValue <= day && day <= endValue;
};

export const isSameDay = (firstDate: DateObject, secondDate?: DateObject) =>
    secondDate &&
    firstDate.day === secondDate.day &&
    firstDate.monthIndex === secondDate.monthIndex &&
    firstDate.year === secondDate.year;

export const isValueUpdate = (value: Date | [Date, Date?], prevValue: Date | [Date, Date?]) => {
    if (!Array.isArray(value) && !Array.isArray(prevValue)) {
        return prevValue?.getTime() !== value?.getTime();
    }

    if (Array.isArray(value) && Array.isArray(prevValue)) {
        return prevValue[0]?.getTime() !== value[0]?.getTime() || prevValue[1]?.getTime() !== value[1]?.getTime();
    }

    return false;
};

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
    value: CalendarValueType,
    date: DateObject,
    hoveredDay?: DateObject,
    isSelected?: boolean,
) => {
    if (!Array.isArray(value)) {
        return undefined;
    }

    const [startValue, endValue] = value;

    if (startValue && isSelected && endValue) {
        return getSideForSelected(date, startValue, endValue);
    }

    if (startValue && hoveredDay) {
        return getSideForHovered(date, hoveredDay, startValue, isSelected);
    }

    return undefined;
};

/**
 * Метод проверяет, находится ли выбранный день в диапазоне.
 */
export const getInRange = (value: CalendarValueType, date: DateObject, hoveredDay?: DateObject, inRange?: boolean) => {
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
    value: CalendarValueType,
    disabledList?: DisabledDay[],
) => {
    if (!isSelectProcess(value)) {
        return true;
    }

    const hoverDate = new Date(year, monthIndex, day);
    const [startDate] = value;

    if (hoverDate?.getTime() === startDate?.getTime()) {
        return false;
    }

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
            return 'год';
        case 'Years':
            return 'период';
        default:
            return 'месяц';
    }
};
