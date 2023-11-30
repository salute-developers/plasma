import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import type { SnapType } from '@salutejs/plasma-core';

import { isSberBox } from '../../utils';
import { disableProps, InSpacingDecorator } from '../../helpers';

import { DatePicker, TimePicker } from '.';
import type { DatePickerProps, TimePickerProps } from '.';

const meta: Meta<DatePickerProps> = {
    title: 'Controls/Pickers',
    decorators: [InSpacingDecorator],
    argTypes: {
        ...disableProps(['initialValue', 'minDate', 'maxDate']),
    },
};

export default meta;

type StoryDefaultProps = DatePickerProps & {
    initialValue: string;
    minDate: string;
    maxDate: string;
    DatePickerSize: string;
    TimePickerSize: string;
    TimePickerStep: number;
    DatePickerVisibleItems: number;
    TimePickerVisibleItems: number;
    DatePickerNativeControl: boolean;
    TimePickerNativeControl: boolean;
    optionsYears: boolean;
    optionsMonths: boolean;
    optionsDays: boolean;
    optionsShortMonthName: boolean;
    optionsHours: boolean;
    optionsMinutes: boolean;
    optionsSeconds: boolean;
    disableScrollSnapAlign: boolean;
};

type StoryDatePickerProps = DatePickerProps & {
    initialValue: string;
    minDate: string;
    maxDate: string;
    optionsYears: boolean;
    optionsMonths: boolean;
    optionsDays: boolean;
    optionsShortMonthName: boolean;
};

type StoryTimePickerProps = TimePickerProps & {
    initialValue: string;
    minDate: string;
    maxDate: string;
    optionsHours: boolean;
    optionsMinutes: boolean;
    optionsSeconds: boolean;
    hoursLabel?: string;
    minutesLabel?: string;
    secondsLabel?: string;
    hasLabel?: boolean;
};

const StyledWrapper = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
`;

const isSberbox = isSberBox();

const snapTypes = ['mandatory', 'proximity'] as SnapType[];

const parseDateTime = (dateTime: string) => {
    const [date, time] = dateTime.split(' ');
    const dated = date.split('.').map(Number);
    const timed = time.split(':').map(Number);

    return new Date(dated[2], dated[1] - 1, dated[0], timed[0], timed[1], timed[2]);
};

const StoryDefault = ({ disableScrollSnapAlign, ...args }: StoryDefaultProps) => {
    const [value, setValue] = useState(parseDateTime(args.initialValue));
    const min = useMemo(() => parseDateTime(args.minDate), [args.minDate]);
    const max = useMemo(() => parseDateTime(args.maxDate), [args.maxDate]);
    const years = args.optionsYears;
    const months = args.optionsMonths;
    const days = args.optionsDays;
    const shortMonthName = args.optionsShortMonthName;
    const hours = args.optionsHours;
    const minutes = args.optionsMinutes;
    const seconds = args.optionsSeconds;

    const dateOptions = useMemo(
        () => ({
            years,
            months,
            days,
            shortMonthName,
        }),
        [years, months, days, shortMonthName],
    );
    const timeOptions = useMemo(
        () => ({
            hours,
            minutes,
            seconds,
        }),
        [hours, minutes, seconds],
    );

    return (
        <StyledWrapper>
            <DatePicker
                key={`date-${args.DatePickerSize}-${args.DatePickerVisibleItems}`}
                id="datepicker"
                value={value}
                min={min}
                max={max}
                size={args.DatePickerSize as 's'}
                visibleItems={args.DatePickerVisibleItems as 3}
                scrollSnapType={args.scrollSnapType}
                options={dateOptions}
                disabled={args.disabled}
                controls={args.controls}
                autofocus={args.autofocus}
                onChange={setValue}
                enableNativeControl={args.DatePickerNativeControl}
                daysAriaLabel="день"
                monthsAriaLabel="месяц"
                yearsAriaLabel="год"
                disableScrollSnapAlign={disableScrollSnapAlign}
            />
            <TimePicker
                key={`time-${args.TimePickerSize}-${args.TimePickerVisibleItems}`}
                id="timepicker"
                value={value}
                min={min}
                max={max}
                step={args.TimePickerStep}
                size={args.TimePickerSize as 's'}
                visibleItems={args.TimePickerVisibleItems as 3}
                scrollSnapType={args.scrollSnapType}
                options={timeOptions}
                disabled={args.disabled}
                controls={args.controls}
                onChange={setValue}
                enableNativeControl={args.TimePickerNativeControl}
                secondsAriaLabel="секунды"
                minutesAriaLabel="минуты"
                hoursAriaLabel="часы"
                disableScrollSnapAlign={disableScrollSnapAlign}
            />
        </StyledWrapper>
    );
};

export const Default: StoryObj<StoryDefaultProps> = {
    argTypes: {
        DatePickerSize: {
            options: ['l', 's', 'xs'],
            control: {
                type: 'inline-radio',
            },
        },
        TimePickerSize: {
            options: ['l', 's', 'xs'],
            control: {
                type: 'inline-radio',
            },
        },
        DatePickerVisibleItems: {
            options: [3, 5],
            control: {
                type: 'inline-radio',
            },
        },
        TimePickerVisibleItems: {
            options: [3, 5],
            control: {
                type: 'inline-radio',
            },
        },
        scrollSnapType: {
            options: snapTypes,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        initialValue: '01.09.1980 00:28:59',
        minDate: '01.01.1975 01:15:29',
        maxDate: '31.12.1985 12:45:50',
        optionsYears: true,
        optionsMonths: true,
        optionsDays: true,
        optionsShortMonthName: false,
        optionsHours: true,
        optionsMinutes: true,
        optionsSeconds: true,
        disabled: false,
        controls: isSberbox,
        autofocus: true,
        scrollSnapType: isSberbox ? 'none' : 'mandatory',
        DatePickerSize: 's',
        DatePickerVisibleItems: 3,
        TimePickerSize: 's',
        TimePickerStep: 1,
        TimePickerVisibleItems: 5,
        DatePickerNativeControl: false,
        TimePickerNativeControl: false,
        disableScrollSnapAlign: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryDatePicker = ({
    initialValue,
    minDate,
    maxDate,
    optionsYears,
    optionsMonths,
    optionsDays,
    optionsShortMonthName,
    ...rest
}: StoryDatePickerProps) => {
    const [value, setValue] = useState(parseDateTime(initialValue));
    const min = useMemo(() => parseDateTime(minDate), [minDate]);
    const max = useMemo(() => parseDateTime(maxDate), [maxDate]);
    const years = optionsYears;
    const months = optionsMonths;
    const days = optionsDays;
    const shortMonthName = optionsShortMonthName;

    const options = useMemo(
        () => ({
            years,
            months,
            days,
            shortMonthName,
        }),
        [years, months, days, shortMonthName],
    );

    return (
        <DatePicker
            key={`${rest.size}-${rest.visibleItems}`}
            id="picker"
            value={value}
            min={min}
            max={max}
            options={options}
            onChange={setValue}
            daysAriaLabel="день"
            monthsAriaLabel="месяц"
            yearsAriaLabel="год"
            {...rest}
        />
    );
};

// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
export const Date_Picker: StoryObj<StoryDatePickerProps> = {
    argTypes: {
        size: {
            options: ['l', 's', 'xs'],
            control: {
                type: 'inline-radio',
            },
        },
        visibleItems: {
            options: [3, 5],
            control: {
                type: 'inline-radio',
            },
        },
        scrollSnapType: {
            options: snapTypes,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        initialValue: '01.09.1980 00:28:59',
        minDate: '01.02.1975 01:15:29',
        maxDate: '30.11.1985 12:45:50',
        optionsYears: true,
        optionsMonths: true,
        optionsDays: true,
        optionsShortMonthName: false,
        disabled: false,
        controls: true,
        autofocus: true,
        scrollSnapType: isSberbox ? 'none' : 'mandatory',
        size: 's',
        visibleItems: 5,
        infiniteScroll: true,
    },
    render: (args) => <StoryDatePicker {...args} />,
};

const StoryTimePicker = ({
    initialValue,
    minDate,
    maxDate,
    optionsHours,
    optionsMinutes,
    optionsSeconds,
    ...rest
}: StoryTimePickerProps) => {
    const [value, setValue] = useState(parseDateTime(initialValue));
    const min = useMemo(() => parseDateTime(minDate), [minDate]);
    const max = useMemo(() => parseDateTime(maxDate), [maxDate]);
    const hours = optionsHours;
    const minutes = optionsMinutes;
    const seconds = optionsSeconds;

    const options = useMemo(
        () => ({
            hours,
            minutes,
            seconds,
        }),
        [hours, minutes, seconds],
    );

    return (
        <TimePicker
            key={`${rest.size}-${rest.visibleItems}`}
            id="picker"
            value={value}
            min={min}
            max={max}
            options={options}
            onChange={setValue}
            secondsAriaLabel="секунды"
            minutesAriaLabel="минуты"
            hoursAriaLabel="часы"
            {...rest}
        />
    );
};

// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
export const Time_Picker: StoryObj<StoryTimePickerProps> = {
    argTypes: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ...Date_Picker.argTypes,
        size: {
            options: ['l', 's', 'xs'],
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        initialValue: '01.09.1980 00:28:59',
        minDate: '01.09.1980 00:15:29',
        maxDate: '01.09.1980 12:30:30',
        optionsHours: true,
        optionsMinutes: true,
        optionsSeconds: true,
        disabled: false,
        controls: true,
        autofocus: true,
        scrollSnapType: isSberbox ? 'none' : 'mandatory',
        size: 'l',
        visibleItems: 3,
        step: 1,
        infiniteScroll: true,
        hoursLabel: '',
        minutesLabel: '',
        secondsLabel: '',
        hasLabel: false,
    },
    render: (args) => <StoryTimePicker {...args} />,
};
