import React, { useMemo, useState, useCallback, useEffect, ReactElement } from 'react';

import type { Calendar, CalendarRange } from './types';
import { getDateFromValue, getSortedValues } from './utils';

/**
 * HOC для календаря, дающий возможность выбора диапазона даты
 */
export const withRange = <T extends Calendar>(Component: React.FC<Calendar>) => ({
    value,
    disabledList,
    eventList,
    min,
    max,
    onChangeValue,
    ...rest
}: CalendarRange<T>): ReactElement<T> => {
    const [startExternalValue, endExternalValue] = useMemo(() => getSortedValues(value), [value]);
    const [[startValue, endValue], setValues] = useState<[Date, Date?]>([startExternalValue, endExternalValue]);

    const newDate = useMemo(
        () =>
            endValue && endExternalValue && endValue.getTime() === endExternalValue.getTime()
                ? getDateFromValue(endExternalValue)
                : getDateFromValue(startExternalValue),
        [value],
    );

    useEffect(() => {
        setValues([startExternalValue, endExternalValue]);
    }, [value, eventList, disabledList, min, max]);

    const handleOnChangeDay = useCallback(
        (newDay: Date) => {
            if (endValue) {
                setValues([newDay, undefined]);
                return;
            }

            setValues([startValue, newDay]);

            const [first, second] = getSortedValues([startValue, newDay]);
            onChangeValue([first, second]);
        },
        [onChangeValue, value, startValue, endValue],
    );

    return (
        <Component
            value={[startValue, endValue]}
            date={newDate}
            onChangeValue={handleOnChangeDay}
            disabledList={disabledList}
            eventList={eventList}
            min={min}
            max={max}
            {...rest}
        />
    );
};
