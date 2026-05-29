import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerRangeStories } from '@salutejs/plasma-sb-utils';
import { IconCalendarOutline, IconLockOutline } from '@salutejs/plasma-icons';

import { DatePickerRange } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerRangeProps = ComponentProps<typeof DatePickerRange>;

const { meta: META, Range } = getDatePickerRangeStories({
    component: DatePickerRange,
    componentConfig: config,
    disablePropsList: [
        'appearance',
        'hasClearDivider',
        'view',
        'showShortcuts',
        'dateShortcutsWidth',
        'dateShortcutsPlacement',
        'enableContentLeft',
    ],
    defaultArgs: {
        size: 's',
        enableContentLeft: false,
    },
    customIcon: (size: string, _type?: 'left' | 'right', disabled?: boolean) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        if (disabled) {
            return <IconLockOutline size={iconSize} color="inherit" />;
        }
        return <IconCalendarOutline size={iconSize} color="inherit" />;
    },
});

const meta: Meta<DatePickerRangeProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
};

export default meta;

export { Range };
