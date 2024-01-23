import React from 'react';
import styled from 'styled-components';

import { DatePicker as DatePickerComponent } from './DatePicker';
import { TimePicker as TimePickerComponent } from './TimePicker';

const StyledWrapper = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
`;

const parseDateTime = (dateTime: string) => {
    const [date, time] = dateTime.split(' ');
    const dated = date.split('.').map(Number);
    const timed = time.split(':').map(Number);

    return new Date(dated[2], dated[1] - 1, dated[0], timed[0], timed[1], timed[2]);
};

const defaultComponentProps = {
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
    controls: true,
    autofocus: true,
    scrollSnapType: 'none' as const,
    DatePickerSize: 's',
    DatePickerVisibleItems: 3,
    TimePickerSize: 's',
    TimePickerStep: 1,
    TimePickerVisibleItems: 5,
    DatePickerNativeControl: false,
    TimePickerNativeControl: false,
};

export const Default = () => {
    window.top;
    // jhgj
    const args = defaultComponentProps;
    const [value, setValue] = React.useState(parseDateTime(args.initialValue));
    const min = React.useMemo(() => parseDateTime(args.minDate), [args.minDate]);
    const max = React.useMemo(() => parseDateTime(args.maxDate), [args.maxDate]);
    const years = args.optionsYears;
    const months = args.optionsMonths;
    const days = args.optionsDays;
    const shortMonthName = args.optionsShortMonthName;
    const hours = args.optionsHours;
    const minutes = args.optionsMinutes;
    const seconds = args.optionsSeconds;
    const dateOptions = React.useMemo(
        () => ({
            years,
            months,
            days,
            shortMonthName,
        }),
        [years, months, days, shortMonthName],
    );
    const timeOptions = React.useMemo(
        () => ({
            hours,
            minutes,
            seconds,
        }),
        [hours, minutes, seconds],
    );

    return (
        <StyledWrapper>
            <DatePickerComponent
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
            />
            <TimePickerComponent
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
            />
        </StyledWrapper>
    );
};

const datePickerProps = {
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
    scrollSnapType: 'none' as const,
    size: 's' as const,
    visibleItems: 5 as const,
    infiniteScroll: true,
};

export const DatePicker = () => {
    const {
        initialValue,
        minDate,
        maxDate,
        optionsYears,
        optionsMonths,
        optionsDays,
        optionsShortMonthName,
        ...rest
    } = datePickerProps;
    const [value, setValue] = React.useState(parseDateTime(initialValue));
    const min = React.useMemo(() => parseDateTime(minDate), [minDate]);
    const max = React.useMemo(() => parseDateTime(maxDate), [maxDate]);
    const years = optionsYears;
    const months = optionsMonths;
    const days = optionsDays;
    const shortMonthName = optionsShortMonthName;

    const options = React.useMemo(
        () => ({
            years,
            months,
            days,
            shortMonthName,
        }),
        [years, months, days, shortMonthName],
    );

    return (
        <DatePickerComponent
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

const timePickerProps = {
    initialValue: '01.09.1980 00:28:59',
    minDate: '01.09.1980 00:15:29',
    maxDate: '01.09.1980 12:30:30',
    optionsHours: true,
    optionsMinutes: true,
    optionsSeconds: true,
    disabled: false,
    controls: true,
    autofocus: true,
    scrollSnapType: 'none' as const,
    size: 'l' as const,
    visibleItems: 3 as const,
    step: 1,
    infiniteScroll: true,
};

export const TimePicker = () => {
    const { initialValue, minDate, maxDate, optionsHours, optionsMinutes, optionsSeconds, ...rest } = timePickerProps;
    const [value, setValue] = React.useState(parseDateTime(initialValue));
    const min = React.useMemo(() => parseDateTime(minDate), [minDate]);
    const max = React.useMemo(() => parseDateTime(maxDate), [maxDate]);
    const hours = optionsHours;
    const minutes = optionsMinutes;
    const seconds = optionsSeconds;

    const options = React.useMemo(
        () => ({
            hours,
            minutes,
            seconds,
        }),
        [hours, minutes, seconds],
    );

    return (
        <TimePickerComponent
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
