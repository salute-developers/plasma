import { CalendarValueType, DateObject } from '../Calendar.types';

export const getSortedValues = (values: [Date | undefined, (Date | undefined)?]) =>
    values.sort((start, end) => {
        if (!start || !end) {
            return -1;
        }

        return start.getTime() - end.getTime();
    });

export const isDateInRange = (
    year: number,
    monthIndex: number,
    currentDay: number,
    values: [Date | undefined, Date?],
) => {
    const [startValue, endValue] = getSortedValues(values);

    if (!endValue || !startValue) {
        return false;
    }

    const day = new Date(year, monthIndex, currentDay);
    return startValue < day && day <= endValue;
};

export const isSameDay = (firstDate: DateObject, secondDate?: DateObject) =>
    secondDate &&
    firstDate.day === secondDate.day &&
    firstDate.monthIndex === secondDate.monthIndex &&
    firstDate.year === secondDate.year;

export const isValueUpdate = (value: Date | [Date?, Date?], prevValue: Date | [Date?, Date?]) => {
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
