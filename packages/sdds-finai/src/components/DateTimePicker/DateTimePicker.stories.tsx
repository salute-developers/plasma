import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDateTimePickerStories } from '@salutejs/plasma-sb-utils';
import { IconCalendarOutline } from '@salutejs/plasma-icons';

import { DateTimePicker } from './DateTimePicker';
import { config } from './DateTimePicker.config';

type DateTimePickerProps = ComponentProps<typeof DateTimePicker>;

const { meta: META, Default: DefaultStory } = getDateTimePickerStories({
    component: DateTimePicker,
    componentConfig: config,
    defaultArgs: {
        size: 's',
        enableContentLeft: false,
        enableContentRight: true,
    },
    disablePropsList: ['view', 'enableContentLeft'],
});

const meta: Meta<DateTimePickerProps> = {
    ...META,
    title: 'Data Entry/DateTimePicker',
};

export default meta;

export const Default = {
    ...DefaultStory,
    render: (args: DateTimePickerProps) => (
        <DateTimePicker
            {...args}
            contentRight={
                args.enableContentRight ? (
                    <IconCalendarOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />
                ) : undefined
            }
        />
    ),
};
