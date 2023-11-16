import React, { useMemo, useState, useCallback, ReactElement } from 'react';

import type { Calendar, CalendarRange } from '../Calendar.types';
import { getSortedValues, isValueUpdate } from '../utils';

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
    const [startExternalValue, endExternalValue] = useMemo(() => value, [value]);
    const [[startValue, endValue], setValues] = useState<[Date, Date?]>([startExternalValue, endExternalValue]);
    const [prevValue, setPrevValue] = useState(value);

    if (isValueUpdate(value, prevValue)) {
        setValues([startExternalValue, endExternalValue]);

        setPrevValue(value);
    }

    const handleOnChangeDay = useCallback(
        (newDay: Date) => {
            if (endValue) {
                setValues([newDay, undefined]);
                return;
            }

            setValues([startValue, newDay]);

            const [first, second] = getSortedValues([startValue, newDay]);

            if (first) {
                onChangeValue([first, second]);
            }
        },
        [onChangeValue, startValue, endValue],
    );

    return (
        <Component
            value={[startValue, endValue]}
            onChangeValue={handleOnChangeDay}
            disabledList={disabledList}
            eventList={eventList}
            min={min}
            max={max}
            {...rest}
        />
    );
};
