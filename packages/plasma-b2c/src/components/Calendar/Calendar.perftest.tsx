import React from 'react';

import { Calendar, CalendarBase, CalendarBaseRange, CalendarDouble, CalendarDoubleRange } from '.';

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
const eventsRange = [...new Array(10)].map((_, day) => ({
    date: new Date(2022, 5, 15 + day),
    color: 'purple',
}));

const disabledDays = [...new Array(5)].map((_, day) => ({
    date: new Date(2022, 5, 11 + day),
}));

const defaultProps = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    isDouble: false,
    isRange: false,
    value: new Date(2022, 5, 6),
};
const onChangeValue = () => {};
const eventListCalendar = [...baseEvents, ...eventsRange];
const date = {
    day: 1,
    monthIndex: 2,
    year: 2022,
};

export const Default = () => {
    const { min, max, isDouble, isRange, value } = defaultProps;

    return (
        <Calendar
            isRange={isRange}
            isDouble={isDouble}
            date={date}
            value={value as Date & [Date, Date?]}
            eventList={eventListCalendar}
            disabledList={disabledDays}
            min={min}
            max={max}
            onChangeValue={onChangeValue}
        />
    );
};

const baseProps = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    type: undefined,
    value: new Date(2022, 5, 6),
};

export const Base = () => {
    const { min, max, type, value } = baseProps;

    return (
        <CalendarBase
            value={value}
            eventList={eventsRange}
            disabledList={disabledDays}
            min={min}
            max={max}
            type={type}
            onChangeValue={onChangeValue}
        />
    );
};

const doubleProps = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    value: new Date(2022, 5, 6),
};

export const Double = () => {
    const { min, max, value } = doubleProps;

    return (
        <CalendarDouble
            value={value}
            eventList={eventsRange}
            disabledList={disabledDays}
            min={min}
            max={max}
            onChangeValue={onChangeValue}
        />
    );
};

const rangeProps = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 7, 15),
};
const eventList = [...eventsRange];
const disabledList = [...disabledDays];
const valueDate = [new Date(), new Date()];

export const Range = () => {
    const { min, max } = rangeProps;

    return (
        <CalendarBaseRange
            value={valueDate as Date & [Date, Date?]}
            eventList={eventList}
            disabledList={disabledList}
            min={min}
            max={max}
            onChangeValue={onChangeValue}
        />
    );
};

const doubleRangeProps = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 7, 15),
};

export const DoubleRange = () => {
    const { min, max } = doubleRangeProps;

    return (
        <CalendarDoubleRange
            value={valueDate as Date & [Date, Date?]}
            eventList={eventList}
            disabledList={disabledList}
            min={min}
            max={max}
            onChangeValue={onChangeValue}
        />
    );
};
