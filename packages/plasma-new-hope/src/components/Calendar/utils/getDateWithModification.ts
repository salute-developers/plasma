import type { DateItem, DateObject, DisabledDay, EventDay } from '../Calendar.types';
import { CalendarState, CalendarStateType } from '../store/types';

import { getPropsMap } from './calendarGridHelper';

type GetDatesWithModificationsArgs = {
    dates: DateItem[];
    type: CalendarStateType;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    includeEdgeDates?: boolean;
    min?: Date;
    max?: Date;
};

type DateOperationHandler = {
    [k in CalendarStateType]: {
        [t in 'add' | 'subtract']: (date: Date) => number;
    };
};

const dateOperationHandler: DateOperationHandler = {
    Days: {
        add: (date: Date) => date.setDate(date.getDate() + 1),
        subtract: (date: Date) => date.setDate(date.getDate() - 1),
    },
    Months: {
        add: (date: Date) => date.setMonth(date.getMonth() + 1),
        subtract: (date: Date) => date.setMonth(date.getMonth() - 1),
    },
    Quarters: {
        add: (date: Date) => date.setMonth(date.getMonth() + 3),
        subtract: (date: Date) => date.setMonth(date.getMonth() - 3),
    },
    Years: {
        add: (date: Date) => date.setFullYear(date.getFullYear() + 1),
        subtract: (date: Date) => date.setFullYear(date.getFullYear() - 1),
    },
};

const normalizeDate = (date: Date, type: CalendarStateType) => {
    if (type === CalendarState.Months || type === CalendarState.Years) {
        date.setDate(1);
    }

    if (type === CalendarState.Years) {
        date.setMonth(0);
    }
};

const isDisabledNextDate = (
    { year, monthIndex, day }: DateObject,
    type: CalendarStateType,
    max?: Date,
    includeEdgeDates?: boolean,
) => {
    if (!max) {
        return false;
    }

    const maxDate = new Date(max);

    normalizeDate(maxDate, type);

    const currentDate = new Date(year, monthIndex, day);
    dateOperationHandler[type].add(currentDate);

    let isOut = true;

    while (isOut && (includeEdgeDates ? currentDate < maxDate : currentDate <= maxDate)) {
        isOut = includeEdgeDates ? maxDate < currentDate : maxDate <= currentDate;

        dateOperationHandler[type].add(currentDate);
    }

    return isOut;
};

const isDisabledPreviousDate = (
    { year, monthIndex, day }: DateObject,
    type: CalendarStateType,
    min?: Date,
    includeEdgeDates?: boolean,
) => {
    if (!min) {
        return false;
    }

    const minDate = new Date(min);

    normalizeDate(minDate, type);

    const currentDate = new Date(year, monthIndex, day);
    dateOperationHandler[type].subtract(currentDate);

    let isOut = true;

    while (isOut && (includeEdgeDates ? currentDate > minDate : currentDate >= minDate)) {
        isOut = includeEdgeDates ? minDate > currentDate : minDate >= currentDate;

        dateOperationHandler[type].subtract(currentDate);
    }

    return isOut;
};

const getDisabledDates = (
    list: DateObject[],
    type: CalendarStateType,
    min?: Date,
    max?: Date,
    includeEdgeDates?: boolean,
) => {
    const disabledDate: string[] = [];

    if (isDisabledPreviousDate(list[0], type, min, includeEdgeDates)) {
        disabledDate.push('previous');
    }

    if (isDisabledNextDate(list[list.length - 1], type, max, includeEdgeDates)) {
        disabledDate.push('next');
    }

    return disabledDate.join(',');
};

const isDisabledArrowLeft = (date: Date, min?: Date, includeEdgeDates?: boolean) => {
    const currentDate = new Date(date);

    currentDate.setDate(currentDate.getDate() - 1);

    const disableCondition = min && (includeEdgeDates ? min > currentDate : min >= currentDate);

    return disableCondition;
};

const isDisabledArrowRight = (date: Date, max?: Date, includeEdgeDates?: boolean) => {
    const currentDate = new Date(date);

    currentDate.setDate(currentDate.getDate() + 1);

    const disableCondition = max && (includeEdgeDates ? max < currentDate : max <= currentDate);

    return disableCondition;
};

const isDisabledArrowUp = (date: Date, min?: Date, includeEdgeDates?: boolean) => {
    const currentDate = new Date(date);

    currentDate.setDate(date.getDate() - 7);

    const disableCondition = min && (includeEdgeDates ? min > currentDate : min >= currentDate);

    return disableCondition;
};

const isDisabledArrowDown = (date: Date, max?: Date, includeEdgeDates?: boolean) => {
    const currentDate = new Date(date);

    currentDate.setDate(date.getDate() + 7);

    const disableCondition = max && (includeEdgeDates ? max < currentDate : max <= currentDate);

    return disableCondition;
};

const getDisabledArrowKey = (currentDate: Date, min?: Date, max?: Date, includeEdgeDates?: boolean) => {
    const disabledArrowKey: string[] = [];

    if (isDisabledArrowLeft(currentDate, min, includeEdgeDates)) {
        disabledArrowKey.push('left');
    }

    if (isDisabledArrowRight(currentDate, max, includeEdgeDates)) {
        disabledArrowKey.push('right');
    }

    if (isDisabledArrowDown(currentDate, max, includeEdgeDates)) {
        disabledArrowKey.push('down');
    }

    if (isDisabledArrowUp(currentDate, min, includeEdgeDates)) {
        disabledArrowKey.push('up');
    }

    return disabledArrowKey.join(',');
};

/**
 * Метод модифицирующий дату (добавляющий свойства events и disabled).
 */
export const getDatesWithModifications = ({
    dates,
    type,
    eventList = [],
    disabledList = [],
    includeEdgeDates,
    min,
    max,
}: GetDatesWithModificationsArgs) => {
    const eventsMap = getPropsMap(eventList);
    const disabledDatesMap = getPropsMap(disabledList);

    const filteredDates =
        type === CalendarState.Days ? dates.filter(({ isDayInCurrentMonth }) => isDayInCurrentMonth) : dates;
    const datesList = filteredDates.map(({ date }) => date);

    const disabledDates = getDisabledDates(datesList, type, min, max, includeEdgeDates);

    return dates.map((dateItem) => {
        const { date } = dateItem;
        const { year, monthIndex, day } = date;

        const keyDate = `${year}-${monthIndex}-${day}`;
        const currentDate = new Date(year, monthIndex, day);

        const minDate = min && new Date(min);
        minDate && normalizeDate(minDate, type);

        const maxDate = max && new Date(max);
        maxDate && normalizeDate(maxDate, type);

        let minValue: boolean | undefined;
        let maxValue: boolean | undefined;

        if (type === CalendarState.Days) {
            minValue = min && (includeEdgeDates ? min > currentDate : min >= currentDate);
            maxValue = max && (includeEdgeDates ? max < currentDate : max <= currentDate);
        } else {
            minValue = minDate && minDate > currentDate;
            maxValue = maxDate && maxDate < currentDate;
        }

        const isOutOfMinMaxRange = minValue || maxValue;

        dateItem.events = eventsMap.get(keyDate);
        dateItem.disabled = disabledDatesMap.has(keyDate) || isOutOfMinMaxRange;

        dateItem.isOutOfMinMaxRange = isOutOfMinMaxRange;
        dateItem.disabledArrowKey = getDisabledArrowKey(currentDate, min, max, includeEdgeDates);
        dateItem.disabledDates = disabledDates;

        return dateItem;
    });
};
