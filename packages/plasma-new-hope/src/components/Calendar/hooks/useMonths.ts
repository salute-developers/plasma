import { useMemo } from 'react';

import type { DateItem } from '../Calendar.types';
import {
    SHORT_MONTH_NAME,
    isSelectedMonth,
    isCurrentMonth,
    getMatrix,
    MONTH_NAMES,
    isDateInRange,
    getDatesWithModifications,
} from '../utils';
import { CalendarState } from '../store/types';

import { UseMonthsArgs } from './types';

/**
 * Хук для получения списка месяцев.
 */
export const useMonths = ({ date, value, eventList, disabledList, min, max }: UseMonthsArgs) =>
    useMemo(() => {
        const months = SHORT_MONTH_NAME.map((monthName, monthIndex) => {
            return {
                monthName,
                monthIndex,
                isCurrent: isCurrentMonth(date, monthIndex),
                isSelected: Array.isArray(value)
                    ? Boolean(value.find((v) => isSelectedMonth(date, monthIndex, v)))
                    : isSelectedMonth(date, monthIndex, value),
                inRange: Array.isArray(value) ? isDateInRange(date.year, monthIndex, 1, value) : false,
                monthFullName: MONTH_NAMES[monthIndex],
                date: { year: date.year, monthIndex, day: 1 },
            };
        });

        if (eventList?.length || disabledList?.length || max || min) {
            const modifiedMonths = getDatesWithModifications({
                dates: months,
                type: CalendarState.Months,
                min,
                max,
                eventList,
                disabledList,
            });
            return getMatrix<DateItem>(modifiedMonths, 3);
        }

        return getMatrix<DateItem>(months, 3);
    }, [date, value, eventList, disabledList, max, min]);
