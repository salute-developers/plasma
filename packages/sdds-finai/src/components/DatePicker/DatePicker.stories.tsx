import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerStories } from '@salutejs/plasma-sb-utils';
import { IconCalendarOutline, IconLockOutline } from '@salutejs/plasma-icons';

import { DatePicker } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerProps = ComponentProps<typeof DatePicker>;

const { meta: META, Default } = getDatePickerStories({
    component: DatePicker,
    componentConfig: config,
    additionalArgTypes: {
        inputView: { options: ['default', 'positive', 'negative', 'edited'], control: { type: 'select' } },
    },
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

const meta: Meta<DatePickerProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
};

export default meta;

export { Default };
