import React, { ComponentProps, MouseEvent } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { backgroundPrimary } from '@salutejs/plasma-tokens-web';

import { InSpacingDecorator } from '../../helpers';
import { Popup } from '../Popup';
import { TextField } from '../TextField';

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

export const Default: Story<CalendarProps> = ({ isRange, isDouble, min, max, date }) => {
    const [value, setValue] = React.useState(new Date(2022, 5, 6));
    const [valueRange, setValueRange] = React.useState<[Date, Date?]>([new Date(2022, 5, 6), new Date(2022, 5, 10)]);

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
            isRange={isRange}
            isDouble={isDouble}
            date={date}
            value={(isRange ? valueRange : value) as Date & [Date, Date?]}
            eventList={[...baseEvents, ...eventsRange]}
            disabledList={disabledDays}
            min={min}
            max={max}
            onChangeValue={(isRange ? handleOnRangeChange : handleOnChange) as (value: Date | [Date, Date?]) => void}
        />
    );
};

Default.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    isDouble: false,
    isRange: false,
};

export const Base: Story<CalendarBaseProps> = ({ min, max, type }) => {
    const [value, setValue] = React.useState(undefined);

    const handleOnChange = React.useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2022, 5, 15 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(6)].map((_, day) => ({
        date: new Date(2022, 5, 14 + day),
    }));

    const aug = [...new Array(31)].map((_, day) => ({
        date: new Date(2022, 7, 1 + day),
    }));

    const july = [...new Array(8)].map((_, day) => ({
        date: new Date(2022, 6, 24 + day),
    }));

    const may = [...new Array(7)].map((_, day) => ({
        date: new Date(2022, 4, 1 + day),
    }));

    const apr = [...new Array(30)].map((_, day) => ({
        date: new Date(2022, 3, 1 + day),
    }));

    return (
        <CalendarBase
            value={value}
            eventList={eventsRange}
            disabledList={[...disabledDays, ...apr, ...may, ...july, ...aug]}
            min={min}
            max={max}
            type={type}
            onChangeValue={handleOnChange}
        />
    );
};

Base.argTypes = {
    type: {
        options: ['Days', 'Months', 'Years'],
        control: {
            type: 'select',
        },
    },
};

Base.args = {
    min: new Date(2023, 0, 1),
    max: new Date(2023, 8, 15),
    type: 'Days',
};

export const Double: Story<CalendarDoubleProps> = ({ min, max }) => {
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
            eventList={eventsRange}
            disabledList={disabledDays}
            min={min}
            max={max}
            onChangeValue={handleOnChange}
        />
    );
};

Double.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
};

export const Range: Story<ComponentProps<typeof CalendarBaseRange>> = ({ min, max, type }) => {
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

    const eventList = React.useMemo(() => [...baseEvents, ...eventsRange], []);
    const disabledList = React.useMemo(() => [{ date: new Date(2022, 5, 4) }, ...disabledDays], []);

    return (
        <CalendarBaseRange
            value={values}
            eventList={eventList}
            disabledList={disabledList}
            min={min}
            max={max}
            type={type}
            onChangeValue={handleOnChange}
        />
    );
};

Range.argTypes = {
    type: {
        options: ['Days', 'Months', 'Years'],
        control: {
            type: 'select',
        },
    },
};

Range.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 7, 15),
    type: 'Days',
};

export const DoubleRange: Story<ComponentProps<typeof CalendarDoubleRange>> = ({ min, max }) => {
    const [values, setValue] = React.useState<[Date, Date?]>([new Date(2022, 5, 7), new Date(2022, 6, 9)]);
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

    const eventList = React.useMemo(() => [...baseEvents, ...eventsRange], []);
    const disabledList = React.useMemo(() => [{ date: new Date(2022, 5, 4) }, ...disabledDays], []);

    return (
        <CalendarDoubleRange
            value={values}
            eventList={eventList}
            disabledList={disabledList}
            min={min}
            max={max}
            onChangeValue={handleOnChange}
        />
    );
};

DoubleRange.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 7, 15),
};

export const WithPopup: Story<CalendarProps> = ({ min, max, isDouble }) => {
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

    // INFO: В onMouseDown так же используем preventDefault чтобы скрыть нативный datepicker для iOS
    const hideSafariDefaultDatepicker = (event: MouseEvent<HTMLInputElement>) => event.preventDefault();

    return (
        <Popup
            isOpen={isOpen}
            trigger="click"
            placement="bottom"
            disclosure={
                <StyledTextField
                    type="date"
                    onClick={hideSafariDefaultDatepicker}
                    onMouseDown={hideSafariDefaultDatepicker}
                    value={textValue}
                    onChange={handleOnTextChange}
                />
            }
            onToggle={onToggle}
        >
            <StyledCalendar
                value={value}
                eventList={[...baseEvents, ...eventsRange]}
                disabledList={disabledDays}
                min={min}
                max={max}
                isDouble={isDouble}
                onChangeValue={handleOnChange}
            />
        </Popup>
    );
};

WithPopup.args = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    isDouble: false,
};
