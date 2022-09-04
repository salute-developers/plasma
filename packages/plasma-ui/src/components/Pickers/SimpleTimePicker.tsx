import React, { useMemo } from 'react';
import { padZeroNumber as formatter } from '@salutejs/plasma-core';

import { Picker, PickerProps } from './Picker';

export interface SimpleTimePickerProps extends Omit<PickerProps, 'items'> {
    type: 'hours' | 'minutes' | 'seconds';
    range: number[];
}

export const SimpleTimePicker = React.memo<SimpleTimePickerProps>(({ id, type, range, onChange, ...rest }) => {
    const items = useMemo(
        () =>
            range.map((value) => ({
                label: formatter(value),
                value,
            })),
        [range],
    );

    return <Picker id={id ? `${id}-${type}` : undefined} items={items} onChange={onChange} {...rest} />;
});
