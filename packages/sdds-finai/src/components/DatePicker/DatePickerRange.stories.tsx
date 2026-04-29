import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerRangeStories } from '@salutejs/plasma-sb-utils';
import { IconCalendarOutline } from '@salutejs/plasma-icons';

import { DatePickerRange } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerRangeProps = ComponentProps<typeof DatePickerRange>;

const { meta: META, Range: RangeStory } = getDatePickerRangeStories({
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
});

const meta: Meta<DatePickerRangeProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
};

export default meta;

export const Range = {
    ...RangeStory,
    render: (args: DatePickerRangeProps) => (
        <DatePickerRange
            {...args}
            contentRight={
                args.enableContentRight ? (
                    <IconCalendarOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />
                ) : undefined
            }
        />
    ),
};
