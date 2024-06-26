import React, { ComponentProps, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { backgroundPrimary } from '@salutejs/plasma-tokens-web';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Popup } from '../Popup';
import { TextField } from '../TextField';

import { Calendar, CalendarBase, CalendarBaseRange, CalendarDouble, CalendarDoubleRange } from '.';
import type { CalendarProps, CalendarBaseProps, CalendarDoubleProps } from '.';

const onChangeValue = action('onChangeValue');
const onChangeStartOfRange = action('onChangeStartOfRange');

const meta: Meta<CalendarProps> = {
    title: 'Controls/Calendar',
    decorators: [InSpacingDecorator],
    component: Calendar,
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
};

export default meta;

type Story = StoryObj<CalendarProps>;

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

const CommonStoryProps = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    includeEdgeDates: false,
};

const StoryCalendarDefault = (props: CalendarProps) => {
    const { isRange, isDouble, min, max, date, includeEdgeDates } = props;
    const [value, setValue] = useState(new Date(2022, 5, 6));
    const [valueRange, setValueRange] = useState<[Date, Date?]>([new Date(2022, 5, 6), new Date(2022, 5, 10)]);

    const handleOnChange = useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);

    const handleOnRangeChange = useCallback((newValue: [Date, Date?]) => {
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
            includeEdgeDates={includeEdgeDates}
            min={min}
            max={max}
            onChangeValue={(isRange ? handleOnRangeChange : handleOnChange) as (value: Date | [Date, Date?]) => void}
        />
    );
};

export const Default: Story = {
    args: {
        ...CommonStoryProps,
        isDouble: false,
        isRange: false,
    },
    render: (args) => <StoryCalendarDefault {...args} />,
};

const StoryCalendarBase = ({ min, max, type, includeEdgeDates }: CalendarBaseProps) => {
    const [value, setValue] = useState(new Date(2022, 5, 6));

    const handleOnChange = useCallback((newValue: Date) => {
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
            eventList={eventsRange}
            disabledList={disabledDays}
            min={min}
            max={max}
            includeEdgeDates={includeEdgeDates}
            type={type}
            onChangeValue={handleOnChange}
        />
    );
};

export const Base: StoryObj<CalendarBaseProps> = {
    args: {
        ...CommonStoryProps,
        type: 'Days',
    },
    argTypes: {
        type: {
            options: ['Days', 'Months', 'Years'],
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => <StoryCalendarBase {...args} />,
};

const StoryCalendarDouble = ({ min, max, includeEdgeDates }: CalendarDoubleProps) => {
    const [value, setValue] = useState(new Date(2022, 5, 6));
    const handleOnChange = useCallback((newValue: Date) => {
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
            includeEdgeDates={includeEdgeDates}
            onChangeValue={handleOnChange}
        />
    );
};

export const Double: StoryObj<CalendarDoubleProps> = {
    args: {
        ...CommonStoryProps,
    },
    render: (args) => <StoryCalendarDouble {...args} />,
};

const StoryCalendarRange = ({ min, max, type, includeEdgeDates }: ComponentProps<typeof CalendarBaseRange>) => {
    const [values, setValue] = useState<[Date, Date?]>([new Date(2022, 5, 16), new Date(2022, 5, 25)]);
    const handleOnChange = useCallback((newValue: [Date, Date?]) => {
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

    const eventList = useMemo(() => [...baseEvents, ...eventsRange], [eventsRange]);
    const disabledList = useMemo(() => [{ date: new Date(2022, 5, 4) }, ...disabledDays], [disabledDays]);

    return (
        <CalendarBaseRange
            value={values}
            eventList={eventList}
            disabledList={disabledList}
            min={min}
            max={max}
            includeEdgeDates={includeEdgeDates}
            type={type}
            onChangeValue={handleOnChange}
            onChangeStartOfRange={onChangeStartOfRange}
        />
    );
};

export const Range: StoryObj<ComponentProps<typeof CalendarBaseRange>> = {
    argTypes: {
        type: {
            options: ['Days', 'Months', 'Years'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        min: new Date(2022, 4, 0),
        max: new Date(2022, 7, 15),
        includeEdgeDates: false,
        type: 'Days',
    },
    render: (args) => <StoryCalendarRange {...args} />,
};

const StoryDoubleRange = ({ min, max, includeEdgeDates }: ComponentProps<typeof CalendarDoubleRange>) => {
    const [values, setValue] = useState<[Date, Date?]>([new Date(2022, 5, 7), new Date(2022, 6, 9)]);
    const handleOnChange = useCallback((newValue: [Date, Date?]) => {
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

    const eventList = useMemo(() => [...baseEvents, ...eventsRange], [eventsRange]);
    const disabledList = useMemo(() => [{ date: new Date(2022, 5, 4) }, ...disabledDays], [disabledDays]);

    return (
        <CalendarDoubleRange
            value={values}
            eventList={eventList}
            disabledList={disabledList}
            min={min}
            max={max}
            includeEdgeDates={includeEdgeDates}
            onChangeValue={handleOnChange}
            onChangeStartOfRange={onChangeStartOfRange}
        />
    );
};

export const DoubleRange: StoryObj<ComponentProps<typeof CalendarDoubleRange>> = {
    args: {
        min: new Date(2022, 4, 0),
        max: new Date(2022, 7, 15),
        includeEdgeDates: false,
    },
    render: (args) => <StoryDoubleRange {...args} />,
};

const StoryCalendarWithPopup = ({ min, max, isDouble, includeEdgeDates }: CalendarProps) => {
    const [textValue, setTextValue] = useState('2022-06-06');
    const [value, setValue] = useState(new Date(textValue));
    const [isOpen, setIsOpen] = useState(false);

    const handleOnTextChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setTextValue(newValue);
        setValue(new Date(newValue));
    }, []);

    const handleOnChange = useCallback((newValue: Date) => {
        setValue(newValue);
        setTextValue(new Date(newValue).toLocaleDateString('en-CA'));
        setIsOpen(false);
        onChangeValue(newValue);
    }, []);

    const onToggle = useCallback((newIsOpen) => {
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
                min={min}
                max={max}
                includeEdgeDates={includeEdgeDates}
                isDouble={isDouble}
                onChangeValue={handleOnChange}
            />
        </Popup>
    );
};

export const WithPopup: Story = {
    args: {
        ...CommonStoryProps,
        isDouble: false,
    },
    render: (args) => <StoryCalendarWithPopup {...args} />,
};
