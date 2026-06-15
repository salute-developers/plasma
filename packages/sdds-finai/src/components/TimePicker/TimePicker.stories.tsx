import React from 'react';
import { getTimePickerStories } from '@salutejs/plasma-sb-utils';
import { IconClockCircleOutline, IconLockOutline } from '@salutejs/plasma-icons';

import { TimePicker } from './TimePicker';
import { config } from './TimePicker.config';

const { meta: META, Default } = getTimePickerStories({
    component: TimePicker,
    componentConfig: config,
    defaultArgs: { ...config.defaults, enableContentLeft: false, valueEdited: false },
    additionalArgTypes: {
        valueEdited: { control: { type: 'boolean' }, table: { category: 'variation' } },
    },
    disablePropsList: ['enableContentLeft'],
    additionalArgTypes: {
        appearance: {
            options: ['default', 'clear', 'viewMode'],
            control: { type: 'select' },
        },
    },
    customIcon: (size: string, _type?: 'left' | 'right', disabled?: boolean) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        if (disabled) {
            return <IconLockOutline size={iconSize} color="inherit" />;
        }
        return <IconClockCircleOutline size={iconSize} color="inherit" />;
    },
});

const meta = {
    ...META,
    title: 'Data Entry/TimePicker',
};

export default meta;

export { Default };
