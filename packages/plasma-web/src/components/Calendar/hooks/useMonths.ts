import { useMemo } from 'react';

import { DateObject, MonthsItem } from '../types';
import { SHORT_MONTH_NAME, isSelectedMonth, isCurrentMonth, getMatrix } from '../utils';

/**
 * Хук для получения списка месяцев.
 */
export const useMonths = (date: DateObject) =>
    useMemo(() => {
        const result = SHORT_MONTH_NAME.map((monthName, monthIndex) => ({
            monthName,
            monthIndex,
            isCurrent: isCurrentMonth(date, monthIndex),
            isSelected: isSelectedMonth(date, monthIndex),
        }));

        return getMatrix<MonthsItem>(result, 3);
    }, [date]);
