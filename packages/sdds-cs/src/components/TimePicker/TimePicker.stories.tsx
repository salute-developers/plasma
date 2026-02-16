import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTimePickerStories } from '@salutejs/plasma-sb-utils';

import { TimePicker } from './TimePicker';
import { config } from './TimePicker.config';

type TimePickerProps = ComponentProps<typeof TimePicker>;

const { meta: META, Default } = getTimePickerStories({
    component: TimePicker,
    componentConfig: config,
    defaultArgs: {
        size: 's',
    },
    disablePropsList: [
        'size',
        'view',
        'labelPlacement',
        'required',
        'hasHint',
        'hintText',
        'hintTrigger',
        'hintView',
        'hintSize',
        'hintTargetPlacement',
        'hintPlacement',
        'hintWidth',
        'hintHasArrow',
    ],
});

const meta: Meta<TimePickerProps> = {
    ...META,
    title: 'Data Entry/TimePicker',
};

export default meta;

export { Default };
