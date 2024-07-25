import React, { memo } from 'react';
import { padZeroNumber as formatter } from '@salutejs/plasma-core';

import { Picker } from '../Picker';

import type { SimpleTimePickerProps } from './SimpleTimePicker.types';

export const SimpleTimePicker = memo<SimpleTimePickerProps>(({ id, type, range, dateStructureGetter, ...rest }) => {
    const items = range.map(({ value, date }) => ({
        label: formatter(dateStructureGetter(date)),
        value,
        date,
    }));

    return <Picker id={id ? `${id}-${type}` : undefined} items={items} {...rest} />;
});
