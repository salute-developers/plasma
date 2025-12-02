import React, { ComponentProps, PropsWithChildren, useCallback, useRef, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Tabs } from '../Tabs/Tabs';
import { TabItem } from '../Tabs/TabItem';
import { H3 } from '../Typography';

import { Calendar, CalendarBase, CalendarBaseRange, CalendarDouble, CalendarDoubleRange } from '.';

const onChangeValue = action('onChangeValue');

const meta: Meta<CalendarProps> = {
    title: 'Data Entry/Calendar',
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
        ...disableProps([
            'value',
            'onChangeValue',
            'date',
            'eventList',
            'disabledList',
            'eventMonthList',
            'disabledMonthList',
            'eventQuarterList',
            'disabledQuarterList',
            'eventYearList',
            'disabledYearList',
            'type',
            'view',
            'onChangeStartOfRange',
        ]),
    },
};

export default meta;

type BaseProps = { displayDouble: boolean; enableEventTooltip?: boolean; eventTooltipSize?: string };

type CalendarProps = ComponentProps<typeof Calendar>;
type CalendarBaseProps = ComponentProps<typeof CalendarBase> & BaseProps;
type CalendarBaseRangeProps = ComponentProps<typeof CalendarBaseRange> & BaseProps;
const eventColors = ['red', 'green', 'blue', 'purple'];
const defaultMinDate = new Date(2016, 6, 1);
const defaultMaxDate = new Date(2030, 11, 24);

const EventNode = ({ dateValue, color }: { dateValue: string; color: string }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Дата: {dateValue}</span>
            <span>Цвет: {color}</span>
        </div>
    );
};

const EventTooltipBody = ({ children }: PropsWithChildren) => {
    return <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>;
};

const getBaseEvents = (type: 'days' | 'months' | 'quarters' | 'years', datesNumber = 2, enableEventTooltip = false) => {
    const baseDate = {
        day: 10,
        monthIndex: 6,
        year: 2023,
    };

    const getColorIndex = () => {
        switch (type) {
            case 'days':
                return 0;
            case 'months':
                return 1;
            case 'quarters':
                return 2;
            case 'years':
                return 3;
            default:
                return 0;
        }
    };

    const colorIndex = getColorIndex();

    const events = [...new Array(datesNumber)].map((_, index) => {
        const eventNumber = index + 1;
        const day = type === 'days' ? baseDate.day + index : 1;
        const month =
            // eslint-disable-next-line no-nested-ternary
            type === 'months' || type === 'quarters'
                ? baseDate.monthIndex + index
                : type === 'days'
                ? baseDate.monthIndex
                : 0;
        const year = type === 'years' ? baseDate.year + index : baseDate.year;

        return [...new Array(eventNumber)].map((_, ind) => {
            return {
                date: new Date(year, month, day),
                color: eventColors[colorIndex],
                ...(enableEventTooltip && {
                    eventInfo: (
                        <EventNode key={ind} color={eventColors[colorIndex]} dateValue={`${year} ${month} ${day}`} />
                    ),
                }),
            };
        });
    });

    return events.flat();
};

const StoryDefault = (args: CalendarProps) => {
    const { isRange, isDouble, min, max, date, includeEdgeDates, size, locale, ...rest } = args;
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
        <div style={{ height: '100vh' }}>
            <Calendar
                size={size}
                isRange={isRange}
                isDouble={isDouble}
                date={date}
                includeEdgeDates={includeEdgeDates}
                locale={locale}
                min={min}
                max={max}
                {...rest}
                value={(isRange ? valueRange : value) as Date & [Date, Date?]}
                onChangeValue={
                    (isRange ? handleOnRangeChange : handleOnChange) as (value: Date | [Date, Date?]) => void
                }
            />
        </div>
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
        stretched: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryBase = (args: CalendarBaseProps & { displayDouble: boolean; enableEventTooltip?: boolean }) => {
    const {
        min,
        max,
        includeEdgeDates,
        size,
        displayDouble,
        locale,
        eventTooltipSize,
        enableEventTooltip,
        ...rest
    } = args;
    const [value, setValue] = useState(new Date(2023, 6, 7));
    const [currentState, setCurrentState] = useState('Days');

    const handleOnChange = useCallback((newValue: Date, dateInfo?: unknown) => {
        setValue(newValue);
        onChangeValue(newValue, dateInfo);
    }, []);

    const eventList = getBaseEvents('days', 5, enableEventTooltip);
    const eventMonthList = getBaseEvents('months', 5, enableEventTooltip);
    const eventQuarterList = getBaseEvents('quarters', 2, enableEventTooltip);
    const eventYearList = getBaseEvents('years', 2, enableEventTooltip);

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
                eventTooltipOptions={{
                    bodyWrapper: EventTooltipBody,
                    size: eventTooltipSize,
                }}
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
                eventTooltipOptions={{
                    bodyWrapper: EventTooltipBody,
                    size: eventTooltipSize,
                }}
                {...rest}
            />
        );
    };

    const calendarMap = {
        Days: getCalendarComponent({ type: 'Days', eventList, disabledList: disabledDays, ...rest }),
        Months: getCalendarComponent({ type: 'Months', eventMonthList, ...rest }),
        Quarters: getCalendarComponent({ type: 'Quarters', eventQuarterList, ...rest }),
        Years: getCalendarComponent({ type: 'Years', eventYearList, ...rest }),
    };

    return (
        <>
            <H3>Тип календаря</H3>
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
            <div style={{ marginTop: '1rem', height: '100vh' }}>{calendarMap[currentState]}</div>
        </>
    );
};

export const Base: StoryObj<CalendarBaseProps & { displayDouble: boolean }> = {
    argTypes: {
        eventTooltipSize: {
            options: ['m', 's'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['isRange', 'isDouble']),
    },
    args: {
        size: 'm',
        min: defaultMinDate,
        max: defaultMaxDate,
        includeEdgeDates: false,
        displayDouble: false,
        locale: 'ru',
        stretched: false,
        enableEventTooltip: true,
        eventTooltipSize: 'm',
    },
    render: (args) => <StoryBase {...args} />,
};

const StoryRange = (args: CalendarBaseRangeProps) => {
    const {
        min,
        max,
        includeEdgeDates,
        size,
        displayDouble,
        locale,
        enableEventTooltip,
        eventTooltipSize,
        ...rest
    } = args;
    const [values, setValue] = useState<[Date, Date?]>([new Date(2023, 6, 1), new Date(2023, 6, 16)]);
    const [currentState, setCurrentState] = useState('Days');

    const handleOnChange = (newValue: [Date, Date?], dateInfo) => {
        onChangeValue(newValue, dateInfo);
        setValue(newValue);
    };

    const eventList = getBaseEvents('days', 5, enableEventTooltip);
    const eventMonthList = getBaseEvents('months', 5, enableEventTooltip);
    const eventQuarterList = getBaseEvents('quarters', 2, enableEventTooltip);
    const eventYearList = getBaseEvents('years', 2, enableEventTooltip);

    const disabledDays = [...new Array(5)].map((_, day) => ({
        date: new Date(2023, 6, 23 + day),
    }));

    const getCalendarComponent = ({ type, ...rest }) => {
        return displayDouble ? (
            <CalendarBaseRange
                size={size}
                includeEdgeDates={includeEdgeDates}
                type={type}
                locale={locale}
                min={min}
                max={max}
                eventTooltipOptions={{
                    bodyWrapper: EventTooltipBody,
                    size: eventTooltipSize,
                }}
                {...rest}
                value={values}
                onChangeValue={handleOnChange}
            />
        ) : (
            <CalendarDoubleRange
                size={size}
                includeEdgeDates={includeEdgeDates}
                type={type}
                locale={locale}
                min={min}
                max={max}
                eventTooltipOptions={{
                    bodyWrapper: EventTooltipBody,
                    size: eventTooltipSize,
                }}
                {...rest}
                value={values}
                onChangeValue={handleOnChange}
            />
        );
    };

    const calendarMap = {
        Days: getCalendarComponent({ type: 'Days', eventList, disabledList: disabledDays, ...rest }),
        Months: getCalendarComponent({ type: 'Months', eventMonthList, ...rest }),
        Quarters: getCalendarComponent({ type: 'Quarters', eventQuarterList, ...rest }),
        Years: getCalendarComponent({ type: 'Years', eventYearList, ...rest }),
    };

    return (
        <>
            <H3>Тип календаря</H3>
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
            <div style={{ marginTop: '1rem', height: '100vh' }}>{calendarMap[currentState]}</div>
        </>
    );
};

export const Range: StoryObj<CalendarBaseRangeProps> = {
    argTypes: {
        ...disableProps(['isRange', 'isDouble']),
    },
    args: {
        size: 'm',
        min: defaultMinDate,
        max: defaultMaxDate,
        includeEdgeDates: false,
        displayDouble: false,
        locale: 'ru',
        stretched: false,
        enableEventTooltip: true,
        eventTooltipSize: 'm',
    },
    render: (args) => <StoryRange {...args} />,
};
