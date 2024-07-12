import { useMemo } from 'react';

import type { DateItem } from '../Calendar.types';
import {
    QUARTER_NAMES,
    getMatrix,
    isDateInRange,
    getDatesWithModifications,
    quarterDates,
    isSelectedMonth as isSelectedQuarter,
    isCurrentMonth as isCurrentQuarter,
} from '../utils';
import { CalendarState } from '../store/types';

import type { UseQuartersArgs } from './types';

/**
 * Хук для получения списка месяцев.
 */
export const useQuarters = ({ date, value, eventList, disabledList, min, max }: UseQuartersArgs) =>
    useMemo(() => {
        const quarters = QUARTER_NAMES.map((quarterName: string) => {
            const { monthIndex, day } = quarterDates[quarterName];

            return {
                quarterName,
                isCurrent: isCurrentQuarter(date, monthIndex),
                isSelected: Array.isArray(value)
                    ? Boolean(value.find((v) => isSelectedQuarter(date, monthIndex, v)))
                    : isSelectedQuarter(date, monthIndex, value),
                inRange: Array.isArray(value) ? isDateInRange(date.year, monthIndex, day, value) : false,
                date: { year: date.year, monthIndex, day: 1 },
            };
        });

        if (eventList?.length || disabledList?.length || max || min) {
            const modifiedQuarters = getDatesWithModifications({
                dates: quarters,
                type: CalendarState.Quarters,
                min,
                max,
                eventList,
                disabledList,
            });

            return getMatrix<DateItem>(modifiedQuarters, 2);
        }

        return getMatrix<DateItem>(quarters, 2);
    }, [date, value, eventList, disabledList, max, min]);
