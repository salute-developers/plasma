import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerStories } from '@salutejs/plasma-sb-utils';
import { IconCalendarOutline } from '@salutejs/plasma-icons';

import { DatePicker } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerProps = ComponentProps<typeof DatePicker>;

const { meta: META, Default: DefaultStory } = getDatePickerStories({
    component: DatePicker,
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

const meta: Meta<DatePickerProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
};

export default meta;

export const Default = {
    ...DefaultStory,
    render: (args: DatePickerProps) => (
        <DatePicker
            {...args}
            contentRight={
                args.enableContentRight ? (
                    <IconCalendarOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />
                ) : undefined
            }
        />
    ),
};
