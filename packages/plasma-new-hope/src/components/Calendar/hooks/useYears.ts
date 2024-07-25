import { useMemo } from 'react';

import {
    YEAR_RENDER_COUNT,
    isCurrentYear,
    isSelectedYear,
    getMatrix,
    isDateInRange,
    getDatesWithModifications,
} from '../utils';
import type { DateItem } from '../Calendar.types';
import { CalendarState } from '../store/types';

import type { UseYearsArgs } from './types';

/**
 * Хук для получения списка годов.
 */
export const useYears = ({ date, value, startYear, eventList, disabledList, min, max }: UseYearsArgs) =>
    useMemo(() => {
        // type-coverage:ignore-next-line
        const years = Array.from(Array(YEAR_RENDER_COUNT), (_, i) => {
            const yearValue = startYear + i;

            return {
                isCurrent: isCurrentYear(startYear + i),
                isSelected: Array.isArray(value)
                    ? Boolean(value.find((v) => isSelectedYear(yearValue, v)))
                    : isSelectedYear(yearValue, value),
                inRange: Array.isArray(value) ? isDateInRange(yearValue, 0, 1, value) : false,
                date: { year: yearValue, monthIndex: 0, day: 1 },
                yearValue,
            };
        });

        if (eventList?.length || disabledList?.length || max || min) {
            const modifiedMonths = getDatesWithModifications({
                dates: years,
                type: CalendarState.Years,
                min,
                max,
                eventList,
                disabledList,
            });
            return getMatrix<DateItem>(modifiedMonths, 3);
        }

        return getMatrix<DateItem>(years, 3);
    }, [date, startYear, value, eventList, disabledList, max, min]);
