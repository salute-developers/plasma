import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getDateTimePickerStories } from '@salutejs/plasma-sb-utils';

import { DateTimePicker } from './DateTimePicker';
import { config } from './DateTimePicker.config';

type DateTimePickerProps = ComponentProps<typeof DateTimePicker>;

const { meta: META, Default } = getDateTimePickerStories({
    component: DateTimePicker,
    componentConfig: config,
});

const meta: Meta<DateTimePickerProps> = {
    ...META,
    title: 'Data Entry/DateTimePicker',
};

export default meta;

export { Default };
