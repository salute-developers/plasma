import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDatePickerRangeStories } from '@salutejs/plasma-sb-utils';

import { DatePickerRange } from './DatePicker';
import { config } from './DatePicker.config';

type DatePickerRangeProps = ComponentProps<typeof DatePickerRange>;

const { meta: META, Range } = getDatePickerRangeStories({
    component: DatePickerRange,
    componentConfig: config,
    disablePropsList: ['appearance'],
});

const meta: Meta<DatePickerRangeProps> = {
    ...META,
    title: 'Data Entry/DatePicker',
};

export default meta;

export { Range };
