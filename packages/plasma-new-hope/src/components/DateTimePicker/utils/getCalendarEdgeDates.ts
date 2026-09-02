import type { CalendarStateType } from 'src/components/Calendar';

const hasTime = (date: Date) =>
    date.getHours() !== 0 || date.getMinutes() !== 0 || date.getSeconds() !== 0 || date.getMilliseconds() !== 0;

/**
 * Сдвигает min/max для календарной сетки, когда includeEdgeDates выключен:
 * граничный день должен остаться кликабельным, время внутри него ограничит TimeGrid.
 * max сдвигается только со временем: max в 00:00 не оставляет в дне ни одного
 * валидного значения, тогда как min в 00:00 оставляет почти все сутки.
 */
export const getCalendarEdgeDates = (min?: Date, max?: Date, type?: CalendarStateType, includeEdgeDates?: boolean) => {
    if (type !== 'Days' || includeEdgeDates) {
        return { calendarMin: min, calendarMax: max };
    }

    let calendarMin = min;

    if (min) {
        calendarMin = new Date(min);
        calendarMin.setDate(calendarMin.getDate() - 1);
    }

    let calendarMax = max;

    if (max && hasTime(max)) {
        calendarMax = new Date(max);
        calendarMax.setDate(calendarMax.getDate() + 1);
    }

    return { calendarMin, calendarMax };
};
