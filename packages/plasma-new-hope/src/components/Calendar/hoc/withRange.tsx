import React, { useMemo, useState, useCallback } from 'react';
import type { ReactElement, FC } from 'react';

import type { Calendar, CalendarRange, DateInfo } from '../Calendar.types';
import { getSortedValues, isValueUpdate } from '../utils';

/**
 * HOC для календаря, дающий возможность выбора диапазона даты
 */
export const withRange = <T extends Calendar>(Component: FC<Calendar>) => ({
    value,
    min,
    max,
    disabledList,
    eventList,
    eventMonthList,
    disabledMonthList,
    eventYearList,
    disabledYearList,
    onChangeValue,
    onChangeStartOfRange,
    ...rest
}: CalendarRange<T>): ReactElement<T> => {
    const [startExternalValue, endExternalValue] = useMemo(() => value, [value]);
    const [[startValue, endValue], setValues] = useState<[Date?, Date?]>([startExternalValue, endExternalValue]);
    const [prevValue, setPrevValue] = useState(value);

    if (isValueUpdate(value, prevValue)) {
        setValues([startExternalValue, endExternalValue]);

        setPrevValue(value);
    }

    const handleOnChangeDay = useCallback(
        (newDay: Date, dateInfo?: DateInfo) => {
            if (endValue) {
                setValues([newDay, undefined]);

                onChangeStartOfRange?.(newDay, dateInfo);

                return;
            }

            setValues([startValue, newDay]);

            const [first, second] = getSortedValues([startValue, newDay]);

            if (first) {
                onChangeValue([first, second], dateInfo);
            }
        },
        [onChangeValue, onChangeStartOfRange, startValue, endValue],
    );

    return (
        <Component
            value={[startValue, endValue]}
            onChangeValue={handleOnChangeDay}
            disabledList={disabledList}
            eventList={eventList}
            eventMonthList={eventMonthList}
            disabledMonthList={disabledMonthList}
            eventYearList={eventYearList}
            disabledYearList={disabledYearList}
            min={min}
            max={max}
            {...rest}
        />
    );
};
