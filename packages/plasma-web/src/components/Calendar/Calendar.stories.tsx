import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { backgroundPrimary } from '@salutejs/plasma-tokens-web';

import { InSpacingDecorator } from '../../helpers';
import { Popup } from '../Popup';
import { TextField } from '../TextField';

import { CalendarRange } from './types';

import { Calendar, CalendarBase, CalendarBaseRange, CalendarDouble, CalendarDoubleRange } from '.';
import type { CalendarProps, CalendarBaseProps, CalendarDoubleProps } from '.';

export default {
    title: 'Controls/Calendar',
    decorators: [InSpacingDecorator],
    argTypes: {
        min: {
            control: {
                type: 'date',
            },
        },
        max: {
            control: {
                type: 'date',
            },
        },
    },
} as Meta;

const onChangeValue = action('onChangeValue');

const baseEvents = [
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

const StyledTextField = styled(TextField)`
    input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

const StyledCalendar = styled(Calendar)`
    background-color: ${backgroundPrimary};
    box-shadow: 0 0.063rem 0.25rem -0.063rem rgba(0, 0, 0, 0.04), 0 0.375rem 0.75rem -0.125rem rgba(8, 8, 8, 0.1);
    border-radius: 0.75rem;
`;

export const Default: Story<CalendarProps> = ({ isRange, ...args }) => {
    const [value, setValue] = React.useState(new Date(2022, 5, 6));
    const [valueRange, setValueRange] = React.useState([new Date(2022, 5, 6), new Date(2022, 5, 10)]);

    const handleOnChange = React.useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);
    const handleOnRangeChange = React.useCallback((newValue: [Date, Date?]) => {
        setValueRange(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2022, 5, 15 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2022, 5, 11 + day),
    }));

    return (
        <Calendar
            isRange={isRange as any}
            value={isRange ? valueRange : value}
            eventList={[...baseEvents, ...eventsRange]}
            disabledList={disabledDays}
            onChangeValue={isRange ? handleOnRangeChange : handleOnChange}
            {...args}
        />
    );
};

Default.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    isDouble: false,
    isRange: false,
};

export const Base: Story<CalendarBaseProps> = (args) => {
    const [value, setValue] = React.useState(new Date(2022, 5, 6));
    const handleOnChange = React.useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2022, 5, 15 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2022, 5, 11 + day),
    }));

    return (
        <CalendarBase
            value={value}
            eventList={[...baseEvents, ...eventsRange]}
            disabledList={disabledDays}
            type="Days"
            onChangeValue={handleOnChange}
            {...args}
        />
    );
};

Base.argTypes = {
    type: {
        control: {
            type: 'select',
            options: ['Days', 'Months', 'Years'],
        },
    },
};

Base.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    type: 'Days',
};

export const Double: Story<CalendarDoubleProps> = (args) => {
    const [value, setValue] = React.useState(new Date(2022, 5, 6));
    const handleOnChange = React.useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);

    const eventsRange = [...new Array(15)].map((_, day) => ({
        date: new Date(2022, 5, 25 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2022, 5, 11 + day),
    }));

    return (
        <CalendarDouble
            value={value}
            eventList={[...baseEvents, ...eventsRange]}
            disabledList={disabledDays}
            onChangeValue={handleOnChange}
            {...args}
        />
    );
};

Double.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
};

export const Range: Story<CalendarRange<CalendarBaseProps>> = (args) => {
    const [values, setValue] = React.useState<[Date, Date?]>([new Date(2022, 5, 16), new Date(2022, 5, 25)]);
    const handleOnChange = React.useCallback((newValue: [Date, Date?]) => {
        onChangeValue(newValue);
        setValue(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2022, 5, 15 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2022, 5, 11 + day),
    }));

    return (
        <CalendarBaseRange
            value={values}
            eventList={[...baseEvents, ...eventsRange]}
            disabledList={[{ date: new Date(2022, 5, 4) }, ...disabledDays]}
            onChangeValue={handleOnChange}
            {...args}
        />
    );
};

Range.argTypes = {
    type: {
        control: {
            type: 'select',
            options: ['Days', 'Months', 'Years'],
        },
    },
};

Range.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 7, 15),
    type: 'Days',
};

export const DoubleRange: Story<CalendarRange<CalendarDoubleProps>> = (args) => {
    const [values, setValue] = React.useState<[Date, Date?]>([new Date(2022, 5, 7), new Date(2022, 5, 25)]);
    const handleOnChange = React.useCallback((newValue: [Date, Date?]) => {
        onChangeValue(newValue);
        setValue(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2022, 5, 15 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(7)].map((_, day) => ({
        date: new Date(2022, 6, 10 + day),
    }));

    return (
        <CalendarDoubleRange
            value={values}
            eventList={[...baseEvents, ...eventsRange]}
            disabledList={[{ date: new Date(2022, 5, 4) }, ...disabledDays]}
            onChangeValue={handleOnChange}
            {...args}
        />
    );
};

DoubleRange.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 7, 15),
};

export const WithPopup: Story<CalendarProps> = (args) => {
    const [textValue, setTextValue] = React.useState('2022-06-06');
    const [value, setValue] = React.useState(new Date(textValue));
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOnTextChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setTextValue(newValue);
        setValue(new Date(newValue));
    }, []);

    const handleOnChange = React.useCallback(
        (newValue: Date) => {
            setValue(newValue);
            setTextValue(new Date(newValue).toLocaleDateString('en-CA'));
            setIsOpen(false);
            onChangeValue(newValue);
        },
        [textValue],
    );

    const onToggle = React.useCallback((newIsOpen) => {
        setIsOpen(newIsOpen);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2022, 5, 15 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2022, 5, 11 + day),
    }));

    return (
        <Popup
            isOpen={isOpen}
            trigger="click"
            placement="bottom"
            disclosure={<StyledTextField type="date" value={textValue} onChange={handleOnTextChange} />}
            onToggle={onToggle}
        >
            <StyledCalendar
                value={value}
                eventList={[...baseEvents, ...eventsRange]}
                disabledList={disabledDays}
                onChangeValue={handleOnChange}
                {...args}
            />
        </Popup>
    );
};

WithPopup.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    isDouble: false,
};
