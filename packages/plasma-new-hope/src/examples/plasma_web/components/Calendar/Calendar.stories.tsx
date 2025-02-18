import React, { useCallback, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Heading } from '../../../typography/components/Heading/Heading';
import { WithTheme } from '../../../_helpers';
import { Tabs } from '../Tabs/Tabs';
import { TabItem } from '../Tabs/TabItem';

import { Calendar, CalendarBase, CalendarBaseRange, CalendarDouble, CalendarDoubleRange } from './Calendar';

const onChangeValue = action('onChangeValue');

const meta: Meta<typeof CalendarBase> = {
    title: 'web/Data Entry/Calendar',
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
        locale: {
            options: ['ru', 'en'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type CalendarProps = ComponentProps<typeof Calendar>;
type CalendarBaseProps = ComponentProps<typeof CalendarBase>;
type CalendarBaseRangeProps = ComponentProps<typeof CalendarBaseRange>;

const eventColors = ['red', 'green', 'blue', 'purple'];
const defaultMinDate = new Date(2016, 6, 1);
const defaultMaxDate = new Date(2030, 11, 24);

const getBaseEvents = (type: 'days' | 'months' | 'quarters' | 'years', datesNumber = 2) => {
    const baseDate = {
        day: 10,
        monthIndex: 6,
        year: 2023,
    };

    const colorIndex = Math.floor(Math.random() * eventColors.length);

    const events = [...new Array(datesNumber)].map((_, index) => {
        const eventNumber = Math.floor(Math.random() * 3 + 1);
        const day = type === 'days' ? baseDate.day + index : 1;
        const month =
            // eslint-disable-next-line no-nested-ternary
            type === 'months' || type === 'quarters'
                ? baseDate.monthIndex + index
                : type === 'days'
                ? baseDate.monthIndex
                : 0;
        const year = type === 'years' ? baseDate.year + index : baseDate.year;

        return [...new Array(eventNumber)].map(() => {
            return { date: new Date(year, month, day), color: eventColors[colorIndex] };
        });
    });

    return events.flat();
};

const StoryDefault = (args: CalendarProps) => {
    const { isRange, isDouble, min, max, date, includeEdgeDates, size, locale } = args;
    const [value, setValue] = useState(new Date(2023, 10, 16));
    const [valueRange, setValueRange] = useState<[Date, Date?]>([new Date(2023, 10, 16), new Date(2023, 10, 23)]);

    const handleOnChange = useCallback((newValue: Date) => {
        setValue(newValue);
        onChangeValue(newValue);
    }, []);
    const handleOnRangeChange = useCallback((newValue: [Date, Date?]) => {
        setValueRange(newValue);
    }, []);

    return (
        <Calendar
            size={size}
            isRange={isRange}
            isDouble={isDouble}
            date={date}
            value={(isRange ? valueRange : value) as Date & [Date, Date?]}
            includeEdgeDates={includeEdgeDates}
            locale={locale}
            onChangeValue={(isRange ? handleOnRangeChange : handleOnChange) as (value: Date | [Date, Date?]) => void}
            min={min}
            max={max}
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
        locale: 'ru',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryBase = (args: CalendarBaseProps & { displayDouble: boolean }) => {
    const { min, max, includeEdgeDates, size, displayDouble, locale } = args;
    const [value, setValue] = useState(new Date(2023, 6, 7));
    const [currentState, setCurrentState] = useState('Days');

    const handleOnChange = useCallback((newValue: Date, dateInfo?: unknown) => {
        setValue(newValue);
        onChangeValue(newValue, dateInfo);
    }, []);

    const eventList = useRef(getBaseEvents('days', 5));
    const eventMonthList = useRef(getBaseEvents('months', 5));
    const eventQuarterList = useRef(getBaseEvents('quarters'));
    const eventYearList = useRef(getBaseEvents('years'));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 6, 23 + day),
    }));

    const getCalendarComponent = ({ type, ...rest }) => {
        return displayDouble ? (
            <CalendarDouble
                size={size}
                value={value}
                includeEdgeDates={includeEdgeDates}
                type={type}
                locale={locale}
                onChangeValue={handleOnChange}
                min={min}
                max={max}
                {...rest}
            />
        ) : (
            <CalendarBase
                size={size}
                value={value}
                includeEdgeDates={includeEdgeDates}
                type={type}
                locale={locale}
                onChangeValue={handleOnChange}
                min={min}
                max={max}
                {...rest}
            />
        );
    };

    const calendarMap = {
        Days: getCalendarComponent({ type: 'Days', eventList: eventList.current, disabledList: disabledDays }),
        Months: getCalendarComponent({ type: 'Months', eventMonthList: eventMonthList.current }),
        Quarters: getCalendarComponent({ type: 'Quarters', eventQuarterList: eventQuarterList.current }),
        Years: getCalendarComponent({ type: 'Years', eventYearList: eventYearList.current }),
    };

    return (
        <>
            <Heading size="h3">Тип календаря</Heading>
            <Tabs view="default" size="m">
                {Object.keys(calendarMap).map((state, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view="divider"
                        selected={state === currentState}
                        onClick={() => setCurrentState(state)}
                        size="m"
                    >
                        {state}
                    </TabItem>
                ))}
            </Tabs>
            <div style={{ marginTop: '1rem' }}>{calendarMap[currentState]}</div>
        </>
    );
};

export const Base: StoryObj<CalendarBaseProps & { displayDouble: boolean }> = {
    args: {
        size: 'm',
        min: defaultMinDate,
        max: defaultMaxDate,
        includeEdgeDates: false,
        displayDouble: false,
        locale: 'ru',
    },
    render: (args) => <StoryBase {...args} />,
};

const StoryRange = (args: CalendarBaseRangeProps & { displayDouble: boolean }) => {
    const { min, max, includeEdgeDates, size, displayDouble, locale } = args;
    const [values, setValue] = useState<[Date, Date?]>([new Date(2023, 6, 1), new Date(2023, 6, 16)]);
    const [currentState, setCurrentState] = useState('Days');

    const handleOnChange = (newValue: [Date, Date?], dateInfo) => {
        onChangeValue(newValue, dateInfo);
        setValue(newValue);
    };

    const eventList = useRef(getBaseEvents('days', 5));
    const eventMonthList = useRef(getBaseEvents('months', 5));
    const eventQuarterList = useRef(getBaseEvents('quarters'));
    const eventYearList = useRef(getBaseEvents('years'));

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 6, 23 + day),
    }));

    const getCalendarComponent = ({ type, ...rest }) => {
        return displayDouble ? (
            <CalendarBaseRange
                size={size}
                value={values}
                includeEdgeDates={includeEdgeDates}
                type={type}
                onChangeValue={handleOnChange}
                locale={locale}
                min={min}
                max={max}
                {...rest}
            />
        ) : (
            <CalendarDoubleRange
                size={size}
                value={values}
                includeEdgeDates={includeEdgeDates}
                type={type}
                onChangeValue={handleOnChange}
                locale={locale}
                min={min}
                max={max}
                {...rest}
            />
        );
    };

    const calendarMap = {
        Days: getCalendarComponent({ type: 'Days', eventList: eventList.current, disabledList: disabledDays }),
        Months: getCalendarComponent({ type: 'Months', eventMonthList: eventMonthList.current }),
        Quarters: getCalendarComponent({ type: 'Quarters', eventQuarterList: eventQuarterList.current }),
        Years: getCalendarComponent({ type: 'Years', eventYearList: eventYearList.current }),
    };

    return (
        <>
            <Heading size="h3">Тип календаря</Heading>
            <Tabs view="default" size="m">
                {Object.keys(calendarMap).map((state, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view="divider"
                        selected={state === currentState}
                        onClick={() => setCurrentState(state)}
                        size="m"
                    >
                        {state}
                    </TabItem>
                ))}
            </Tabs>
            <div style={{ marginTop: '1rem' }}>{calendarMap[currentState]}</div>
        </>
    );
};

export const Range: StoryObj<CalendarBaseRangeProps & { displayDouble: boolean }> = {
    args: {
        size: 'm',
        min: defaultMinDate,
        max: defaultMaxDate,
        includeEdgeDates: false,
        displayDouble: false,
        locale: 'ru',
    },
    render: (args) => <StoryRange {...args} />,
};
