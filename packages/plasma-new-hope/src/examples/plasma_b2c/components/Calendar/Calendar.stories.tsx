import React, { useCallback, useMemo, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { styled } from '@linaria/react';

import { WithTheme } from '../../../_helpers';
import { Popover } from '../Popover/Popover';
import { Button } from '../Button/Button';

import { Calendar, CalendarBase, CalendarBaseRange, CalendarDouble, CalendarDoubleRange } from './Calendar';

const onChangeValue = action('onChangeValue');

const meta: Meta<typeof CalendarBase> = {
    title: 'plasma_b2c/Calendar',
    decorators: [WithTheme],
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
        size: {
            options: ['l', 'm', 's', 'xs'],
            control: {
                type: 'inline-radio',
            },
        },
    },
};

export default meta;

type CalendarProps = ComponentProps<typeof Calendar>;
type CalendarBaseProps = ComponentProps<typeof CalendarBase>;
type CalendarDoubleProps = ComponentProps<typeof CalendarDouble>;
type CalendarBaseRangeProps = ComponentProps<typeof CalendarBaseRange>;

const StyledCalendar = styled(Calendar)`
    background-color: var(--background-primary);
    box-shadow: 0 0.063rem 0.25rem -0.063rem rgba(0, 0, 0, 0.04), 0 0.375rem 0.75rem -0.125rem rgba(8, 8, 8, 0.1);
    border-radius: 0.75rem;
`;

const StyledArrow = styled.div`
    visibility: hidden;

    &,
    &::before {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background: var(--surface-solid-tertiary);
    }

    &::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
    }
`;

const baseEvents = [
    {
        date: new Date(2023, 10, 6),
    },
    {
        date: new Date(2023, 10, 16),
        color: 'red',
    },
    {
        date: new Date(2023, 10, 16),
        color: 'green',
    },
    {
        date: new Date(2023, 10, 16),
        color: 'blue',
    },
];

const StoryDefault = (args: CalendarProps) => {
    const { isRange, isDouble, min, max, date, includeEdgeDates, size } = args;
    const [value, setValue] = useState(new Date(2023, 10, 16));
    const [valueRange, setValueRange] = useState<[Date, Date?]>([new Date(2023, 10, 16), new Date(2023, 10, 23)]);

    const handleOnChange = useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);
    const handleOnRangeChange = useCallback((newValue: [Date, Date?]) => {
        setValueRange(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2023, 10, 10 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 10, 23 + day),
    }));

    return (
        <Calendar
            size={size}
            isRange={isRange}
            isDouble={isDouble}
            date={date}
            value={(isRange ? valueRange : value) as Date & [Date, Date?]}
            eventList={[...baseEvents, ...eventsRange]}
            disabledList={disabledDays}
            min={min}
            max={max}
            includeEdgeDates={includeEdgeDates}
            onChangeValue={(isRange ? handleOnRangeChange : handleOnChange) as (value: Date | [Date, Date?]) => void}
        />
    );
};

export const Default: StoryObj<CalendarProps> = {
    args: {
        min: new Date(2023, 10, 1),
        max: new Date(2023, 11, 24),
        isDouble: false,
        isRange: false,
        includeEdgeDates: false,
        size: 'm',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryBase = (args: CalendarBaseProps) => {
    const { min, max, type, includeEdgeDates, size } = args;
    const [value, setValue] = useState(new Date(2023, 10, 16));

    const handleOnChange = useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2023, 10, 10 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 10, 23 + day),
    }));

    return (
        <CalendarBase
            size={size}
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
    argTypes: {
        type: {
            options: ['Days', 'Months', 'Years'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        size: 'm',
        min: new Date(2023, 10, 1),
        max: new Date(2023, 11, 24),
        includeEdgeDates: false,
        type: 'Days',
    },
    render: (args) => <StoryBase {...args} />,
};

const StoryDouble = (args: CalendarDoubleProps) => {
    const { min, max, includeEdgeDates, size } = args;
    const [value, setValue] = useState(new Date(2023, 10, 16));
    const handleOnChange = useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);

    const eventsRange = [...new Array(15)].map((_, day) => ({
        date: new Date(2023, 10, 10 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 10, 23 + day),
    }));

    return (
        <CalendarDouble
            size={size}
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
        size: 'm',
        min: new Date(2023, 10, 1),
        max: new Date(2023, 11, 24),
        includeEdgeDates: false,
    },
    render: (args) => <StoryDouble {...args} />,
};

const StoryRange = (args: CalendarBaseRangeProps) => {
    const { min, max, type, includeEdgeDates, size } = args;
    const [values, setValue] = useState<[Date, Date?]>([new Date(2023, 10, 15), new Date(2023, 10, 24)]);
    const handleOnChange = useCallback((newValue: [Date, Date?]) => {
        onChangeValue(newValue);
        setValue(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2023, 10, 16 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 10, 1 + day),
    }));

    const eventList = useMemo(() => [...baseEvents, ...eventsRange], [eventsRange]);
    const disabledList = useMemo(() => [{ date: new Date(2023, 10, 1) }, ...disabledDays], [disabledDays]);

    return (
        <CalendarBaseRange
            size={size}
            value={values}
            eventList={eventList}
            disabledList={disabledList}
            min={min}
            max={max}
            includeEdgeDates={includeEdgeDates}
            type={type}
            onChangeValue={handleOnChange}
        />
    );
};

export const Range: StoryObj<CalendarBaseRangeProps> = {
    argTypes: {
        type: {
            options: ['Days', 'Months', 'Years'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        size: 'm',
        min: new Date(2023, 10, 1),
        max: new Date(2023, 11, 24),
        includeEdgeDates: false,
        type: 'Days',
    },
    render: (args) => <StoryRange {...args} />,
};

const StoryRangeDouble = (args: CalendarBaseRangeProps) => {
    const { min, max, includeEdgeDates, size } = args;
    const [values, setValue] = useState<[Date, Date?]>([new Date(2023, 10, 15), new Date(2023, 10, 24)]);
    const handleOnChange = useCallback((newValue: [Date, Date?]) => {
        onChangeValue(newValue);
        setValue(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2023, 10, 16 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 10, 1 + day),
    }));

    const eventList = useMemo(() => [...baseEvents, ...eventsRange], [eventsRange]);
    const disabledList = useMemo(() => [{ date: new Date(2023, 10, 1) }, ...disabledDays], [disabledDays]);

    return (
        <CalendarDoubleRange
            size={size}
            value={values}
            eventList={eventList}
            disabledList={disabledList}
            min={min}
            max={max}
            includeEdgeDates={includeEdgeDates}
            onChangeValue={handleOnChange}
        />
    );
};

export const RangeDouble: StoryObj<CalendarBaseRangeProps> = {
    args: {
        size: 'm',
        min: new Date(2023, 10, 1),
        max: new Date(2023, 11, 24),
        includeEdgeDates: false,
    },
    render: (args) => <StoryRangeDouble {...args} />,
};

const StoryWithPopover = (args: CalendarProps) => {
    const { isDouble, min, max, includeEdgeDates, size } = args;
    const [isOpen, setIsOpen] = useState(false);
    const [textValue, setTextValue] = useState('2023-10-16');
    const [value, setValue] = useState(new Date(textValue));

    const handleOnChange = useCallback((newValue: Date) => {
        setValue(newValue);
        setTextValue(new Date(newValue).toLocaleDateString('en-CA'));
        setIsOpen(false);
        onChangeValue(newValue);
    }, []);

    const eventsRange = [...new Array(10)].map((_, day) => ({
        date: new Date(2023, 10, 10 + day),
        color: 'purple',
    }));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 10, 23 + day),
    }));

    return (
        <Popover
            isOpen={isOpen}
            onToggle={(is) => setIsOpen(is)}
            role="presentation"
            id="popover"
            target={<Button onClick={() => setIsOpen(true)}>{textValue}</Button>}
            arrow={<StyledArrow />}
            offset={[0, 6]}
            closeOnEsc
            closeOnOverlayClick
        >
            <StyledCalendar
                size={size}
                value={value}
                eventList={[...baseEvents, ...eventsRange]}
                disabledList={disabledDays}
                min={min}
                max={max}
                includeEdgeDates={includeEdgeDates}
                isDouble={isDouble}
                isRange={false}
                onChangeValue={handleOnChange}
            />
        </Popover>
    );
};

export const WithPopover: StoryObj<CalendarProps> = {
    args: {
        size: 'm',
        min: new Date(2023, 9, 1),
        max: new Date(2023, 11, 24),
        isDouble: false,
        includeEdgeDates: false,
    },
    render: (args) => <StoryWithPopover {...args} />,
};
