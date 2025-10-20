import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';

import { TimePickerGrid } from './TimePickerGrid';
import { config } from './TimePickerGrid.config';

const { sizes, views } = getConfigVariations(config);

const meta: Meta = {
    title: 'Data Entry/TimePickerGrid',
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(['view']),
    },
};

export default meta;

const StoryDefault = ({ disabledValues, size, ...rest }: StoryPropsDefault) => {
    return (
        <TimePickerGrid style={{ width: '300px' }} size={size} disabledValues={JSON.parse(disabledValues)} {...rest} />
    );
};

type StoryPropsDefault = ComponentProps<typeof TimePickerGrid>;

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        format: 'HH:mm:ss',
        size: 'l',
        view: 'default',
        disabled: false,
        min: '00:00:01',
        max: '22:22:22',
        disabledValues: '{"hour":[0,1],"minute":[3,4]}',
    },
    render: (args) => <StoryDefault {...args} />,
};
