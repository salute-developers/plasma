import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerStories } from '@salutejs/plasma-sb-utils';

import { DatePicker } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerProps = ComponentProps<typeof DatePicker>;

const { meta: META, Default } = getDatePickerStories({
    component: DatePicker,
    componentConfig: config,
    disablePropsList: [
        'appearance',
        'hasClearDivider',
        'view',
        'hasHint',
        'showShortcuts',
        'dateShortcutsWidth',
        'dateShortcutsPlacement',
    ],
});

const meta: Meta<DatePickerProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
};

export default meta;

export { Default };
