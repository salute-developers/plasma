import React from 'react';

import { Calendar, CalendarDouble, CalendarDoubleRange } from '.';

const defaultProps = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 6, 15),
    date: new Date(),
    isDouble: false,
    isRange: false,
    value: new Date(2022, 5, 6),
    valueRange: [new Date(2022, 5, 6), new Date(2022, 5, 10)],
};

const eventsRange = [...new Array(10)].map((_, day) => ({
    date: new Date(2022, 5, 15 + day),
    color: 'purple',
}));

const disabledDays = [...new Array(5)].map((_, day) => ({
    date: new Date(2022, 5, 11 + day),
}));

const date = {
    day: 1,
    monthIndex: 2,
    year: 2022,
};
const onChangeValue = () => {};

export const Default = () => {
    const { min, max, isDouble, isRange, value } = defaultProps;
    return (
        <Calendar
            isRange={isRange}
            isDouble={isDouble}
            date={date}
            value={value as Date & [Date, Date?]}
            eventList={eventsRange}
            disabledList={disabledDays}
            min={min}
            max={max}
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

const doubleRangeProps = {
    min: new Date(2022, 4, 0),
    max: new Date(2022, 7, 15),
    values: [new Date(2022, 5, 7), new Date(2022, 6, 9)],
};
const eventList = [...eventsRange];
const disabledList = [...disabledDays];
const valueDate = [new Date(), new Date()];

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
