import React, { useMemo } from 'react';
import { monthShortName, monthLongName } from '@salutejs/plasma-core';

import { Picker, PickerProps } from './Picker';

type PickerType = 'day' | 'month' | 'year';
type MonthNameFormat = 'long' | 'short';

const labelFormatter = {
    day: (value: number) => `${value}`,
    year: (value: number) => `${value}`,
    month: monthLongName,
    monthShort: monthShortName,
};

const getFormatterKey = (type: PickerType, monthNameFormat?: MonthNameFormat): keyof typeof labelFormatter => {
    const isMonth = type === 'month';
    const isShortFormat = monthNameFormat === 'short';
    if (isMonth && isShortFormat) {
        return 'monthShort';
    }
    return type;
};

export interface SimpleDatePickerProps extends Omit<PickerProps, 'items'> {
    range: number[];
    type: PickerType;
    monthNameFormat?: MonthNameFormat;
}

export const SimpleDatePicker = React.memo<SimpleDatePickerProps>(
    ({ id, type, monthNameFormat, range, onChange, ...rest }) => {
        const items = useMemo(() => {
            const formatterKey = getFormatterKey(type, monthNameFormat);
            const formatter = labelFormatter[formatterKey];
            const from = range[0];
            return range.map((_, i) => ({
                label: formatter(from + i),
                value: from + i,
            }));
        }, [range, monthNameFormat, type]);

        return <Picker id={id ? `${id}-${type}` : undefined} items={items} onChange={onChange} {...rest} />;
    },
);
