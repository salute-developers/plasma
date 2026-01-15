import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerRangeStories } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { IconButton } from '../IconButton/IconButton';

import { DatePickerRange } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerRangeProps = ComponentProps<typeof DatePickerRange>;

const { meta: META, Range } = getDatePickerRangeStories({
    component: DatePickerRange,
    componentConfig: config,
    iconButton: IconButton,
    embedIconButton: IconButton,
});

const meta: Meta<DatePickerRangeProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
    disablePropsList: [
        'view',
        'size',
        'appearance',
        'hasClearDivider',
        'showShortcuts',
        'dateShortcutsWidth',
        'dateShortcutsPlacement',
    ],
};

export default meta;

export { Range };
