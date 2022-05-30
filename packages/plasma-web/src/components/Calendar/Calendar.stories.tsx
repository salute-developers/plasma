import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InSpacingDecorator } from '../../helpers';
import { Button } from '../Button';

import { Calendar, CalendarProps } from '.';

export default {
    title: 'Controls/Calendar',
    decorators: [InSpacingDecorator],
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['Days', 'Months', 'Years'],
            },
        },
        isInline: {
            control: {
                type: 'boolean',
            },
        },
    },
} as Meta;

export const Default: Story<CalendarProps> = (args) => {
    const [value, setValue] = React.useState(new Date());
    const handleOnChange = React.useCallback((newValue: Date) => {
        setValue(newValue);
    }, []);

    return <Calendar value={value} type="Days" onChangeValue={handleOnChange} {...args} />;
};

Default.args = {
    type: 'Days',
    isInline: false,
};
