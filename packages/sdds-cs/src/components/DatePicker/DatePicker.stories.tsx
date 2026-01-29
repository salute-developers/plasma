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
    defaultArgs: {
        size: 's',
        hasHint: false,
        hintText: '',
        enableContentLeft: false,
    },
    disablePropsList: [
        'view',
        'size',
        'appearance',
        'hasClearDivider',
        'titleCaption',
        'size',
        'hasHint',
        'hintText',
        'hintTrigger',
        'hintView',
        'hintSize',
        'hintTargetPlacement',
        'hintPlacement',
        'hintWidth',
        'hintHasArrow',
        'enableContentLeft',
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
