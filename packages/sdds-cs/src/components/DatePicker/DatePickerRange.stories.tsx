import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerRangeStories } from '@salutejs/plasma-sb-utils';

import { DatePickerRange } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerRangeProps = ComponentProps<typeof DatePickerRange>;

const { meta: META, Range } = getDatePickerRangeStories({
    component: DatePickerRange,
    componentConfig: config,
    defaultArgs: {
        size: 's',
        hasHint: false,
        hintText: '',
        enableContentLeft: false,
        enableFirstTextFieldContentLeft: false,
        enableSecondTextFieldContentLeft: false,
    },
    disablePropsList: [
        'view',
        'size',
        'appearance',
        'hasClearDivider',
        'showShortcuts',
        'dateShortcutsWidth',
        'dateShortcutsPlacement',
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
        'enableFirstTextFieldContentLeft',
        'enableSecondTextFieldContentLeft',
    ],
});

const meta: Meta<DatePickerRangeProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
};

export default meta;

export { Range };
