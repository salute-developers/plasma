import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTimePickerStories } from '@salutejs/plasma-sb-utils';
import { IconClockCircleOutline } from '@salutejs/plasma-icons';

import { TimePicker } from './TimePicker';
import { config } from './TimePicker.config';

type TimePickerProps = ComponentProps<typeof TimePicker>;

const { meta: META, Default: DefaultStory } = getTimePickerStories({
    component: TimePicker,
    componentConfig: config,
    defaultArgs: config.defaults,
});

const meta: Meta<TimePickerProps> = {
    ...META,
    title: 'Data Entry/TimePicker',
};

export default meta;

export const Default = {
    ...DefaultStory,
    render: (args: TimePickerProps) => (
        <TimePicker
            {...args}
            contentRight={
                args.enableContentRight ? (
                    <IconClockCircleOutline size={args.size === 'xs' ? 'xs' : 's'} color="inherit" />
                ) : undefined
            }
        />
    ),
};
