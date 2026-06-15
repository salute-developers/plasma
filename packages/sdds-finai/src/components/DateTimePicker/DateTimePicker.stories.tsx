import React from 'react';
import { getDateTimePickerStories } from '@salutejs/plasma-sb-utils';
import { IconCalendarOutline, IconLockOutline } from '@salutejs/plasma-icons';

import { DateTimePicker } from './DateTimePicker';
import { config } from './DateTimePicker.config';

const { meta: META, Default } = getDateTimePickerStories({
    component: DateTimePicker,
    componentConfig: config,
    defaultArgs: {
        size: 's',
        enableContentLeft: false,
        enableContentRight: true,
        valueEdited: false,
    },
    additionalArgTypes: {
        valueEdited: { control: { type: 'boolean' }, table: { category: 'layout' } },
    },
    disablePropsList: ['view', 'enableContentLeft'],
    customIcon: (size: string, _type?: 'left' | 'right', disabled?: boolean) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        if (disabled) {
            return <IconLockOutline size={iconSize} color="inherit" />;
        }
        return <IconCalendarOutline size={iconSize} color="inherit" />;
    },
});

const meta = {
    ...META,
    title: 'Data Entry/DateTimePicker',
};

export default meta;

export { Default };
