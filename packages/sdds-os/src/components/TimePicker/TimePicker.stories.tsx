import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { IconClockCircleOutline, IconDisclosureDown, IconDisclosureUp } from '@salutejs/plasma-icons';
import { getTimePickerStories } from '@salutejs/plasma-sb-utils';

import { TimePicker } from './TimePicker';
import { config } from './TimePicker.config';

type TimePickerProps = ComponentProps<typeof TimePicker>;

const getIconSize = (size?: string) => (size === 'xs' ? 'xs' : 's');

const { meta: META, Default } = getTimePickerStories({
    component: TimePicker,
    componentConfig: config,
    defaultArgs: {
        size: 'm',
    },
    disablePropsList: ['appearance', 'hasClearDivider'],
    customIcon: (size, type, _disabled, _readOnly, opened) => {
        const iconSize = getIconSize(size);

        if (type === 'left') {
            return <IconClockCircleOutline size={iconSize} color="inherit" />;
        }

        const DisclosureIcon = opened ? IconDisclosureUp : IconDisclosureDown;

        return <DisclosureIcon size={iconSize} color="inherit" />;
    },
});

const meta: Meta<TimePickerProps> = {
    ...META,
    title: 'Data Entry/TimePicker',
};

export default meta;

export { Default };
