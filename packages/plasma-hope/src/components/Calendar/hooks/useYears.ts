import { useMemo } from 'react';

import { DateObject, YearsItem } from '../types';
import { YEAR_RENDER_COUNT, isCurrentYear, isSelectedYear, getMatrix } from '../utils';

/**
 * Хук для получения списка годов.
 */
export const useYears = (date: DateObject, startYear: number) =>
    useMemo(() => {
        // type-coverage:ignore-next-line
        const result = Array.from(Array(YEAR_RENDER_COUNT), (_, i) => ({
            isCurrent: isCurrentYear(startYear + i),
            isSelected: isSelectedYear(date, startYear + i),
            yearValue: startYear + i,
        }));

        return getMatrix<YearsItem>(result, 3);
    }, [date, startYear]);
