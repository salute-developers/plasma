import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InSpacingDecorator } from '../../helpers';

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
    const [value, setValue] = React.useState(new Date(2022, 5, 6));
    const handleOnChange = React.useCallback((newValue: Date) => {
        setValue(newValue);
    }, []);

    const events = [
        {
            date: new Date(2022, 5, 6),
        },
        {
            date: new Date(2022, 5, 10),
            color: 'red',
        },
        {
            date: new Date(2022, 5, 10),
            color: 'green',
        },
        {
            date: new Date(2022, 5, 10),
            color: 'blue',
        },
    ];

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2022, 5, 15 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2022, 5, 11 + day),
    }));

    return (
        <Calendar
            value={value}
            eventList={[...events, ...eventsRange]}
            disabledList={disabledDays}
            min={new Date(2022, 4, 0)}
            max={new Date(2022, 6, 15)}
            type="Days"
            onChangeValue={handleOnChange}
            {...args}
        />
    );
};

Default.args = {
    type: 'Days',
    isInline: false,
};
