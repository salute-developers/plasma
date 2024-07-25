import type { DateRange, DateStructure } from './TimePicker.types';

export const getYear = (date: Date) => date.getFullYear();
export const getMonth = (date: Date) => date.getMonth();
export const getDay = (date: Date) => date.getDate();
export const getHours = (date: Date) => date.getHours();
export const getMinutes = (date: Date) => date.getMinutes();
export const getSeconds = (date: Date) => date.getSeconds();

export const getDateStructure = (date: Date): DateStructure => {
    return {
        year: getYear(date),
        month: getMonth(date),
        day: getDay(date),
        hours: getHours(date),
        minutes: getMinutes(date),
        seconds: getSeconds(date),
    };
};

export const getTimeFromStructure = (date: DateStructure): number => {
    return new Date(
        date.year,
        date.month,
        date.day,
        date?.hours || 0,
        date?.minutes || 0,
        date?.seconds || 0,
    ).getTime();
};

/**
 * Вернет ближайшую дату в заданных пределах
 */
export const getClosestDate = (min: Date, max: Date, date: Date, step = 1) => {
    if (date < min) {
        return new Date(min);
    }

    if (date > max) {
        return new Date(max);
    }

    const millisecondsStep = step * 1000;
    const diff = date.getTime() - min.getTime();
    const stepsDiff = diff % millisecondsStep;
    if (!stepsDiff) {
        return date;
    }

    const stepsCount = Math.ceil(diff / millisecondsStep);

    return new Date(min.getTime() + stepsCount * millisecondsStep);
};

/**
 * Вернёт нормализованные значения в заданных пределах
 */
export const getNormalizeValues = (current: Date, min: Date, max: Date, step?: number) => {
    const curValues = getDateStructure(getClosestDate(min, max, current, step));
    const minValues = getDateStructure(min);
    const maxValues = getDateStructure(max);

    const curSeconds = current.getTime();
    const minSeconds = min.getTime();
    const maxSeconds = max.getTime();

    if (curSeconds < minSeconds) {
        return minValues;
    }

    if (curSeconds > maxSeconds) {
        return maxValues;
    }

    return curValues;
};

/**
 * Вернет массив объектов от `min` до `max` с интервалом `step` для часов.
 */
export const getHoursRange = (min: DateStructure, max: DateStructure, step = 1) => {
    const currentDate = new Date(min.year, min.month, min.day, min.hours);
    const endDate = new Date(max.year, max.month, max.day, max.hours);
    const hoursRange: DateRange[] = [];

    while (currentDate.getTime() <= endDate.getTime()) {
        const value = `${getYear(currentDate)}_${getMonth(currentDate)}_${getDay(currentDate)}_${getHours(
            currentDate,
        )}`;

        hoursRange.push({ value, date: new Date(currentDate) });
        currentDate.setHours(getHours(currentDate) + step);
    }

    return hoursRange;
};

/**
 * Вернет массив объектов от `min` до `max` с интервалом `step` для минут/секунд.
 */
export const getRange = (min: number, max: number, currentDate: Date, type: 'minutes' | 'seconds', step = 1) => {
    const range: DateRange[] = [];

    for (let i = min; i <= max; i += step) {
        type === 'minutes' ? currentDate.setMinutes(i) : currentDate.setSeconds(i);

        const value = type === 'minutes' ? getMinutes(currentDate) : getSeconds(currentDate);

        range.push({ value, date: new Date(currentDate) });
    }

    return range;
};
