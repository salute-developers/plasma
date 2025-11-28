import React, { PropsWithChildren, useCallback, useState } from 'react';
import { action } from '@storybook/addon-actions';

import { eventColors } from './fixtures';

type DateType = Date | undefined | null;

type DateInfo = {
    name: string;
    fullValue: DateType | [DateType, DateType];
};

const onChangeValue = action('onChangeValue');

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

export const createDefaultStory = (_: any, Components: any) => {
    const { Tabs, TabItem, Heading, CalendarBase, CalendarDouble } = Components;

    return ({
        min,
        max,
        includeEdgeDates,
        size,
        displayDouble,
        locale,
        eventTooltipSize,
        enableEventTooltip,
        ...rest
    }: any) => {
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

        const getCalendarComponent = ({ ...args }) => {
            return displayDouble ? (
                <CalendarDouble
                    size={size}
                    value={value}
                    includeEdgeDates={includeEdgeDates}
                    locale={locale}
                    onChangeValue={handleOnChange}
                    min={min}
                    max={max}
                    eventTooltipOptions={{
                        bodyWrapper: EventTooltipBody,
                        size: eventTooltipSize,
                    }}
                    {...args}
                />
            ) : (
                <CalendarBase
                    size={size}
                    value={value}
                    includeEdgeDates={includeEdgeDates}
                    locale={locale}
                    onChangeValue={handleOnChange}
                    min={min}
                    max={max}
                    eventTooltipOptions={{
                        bodyWrapper: EventTooltipBody,
                        size: eventTooltipSize,
                    }}
                    {...args}
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
                <Heading size="h3">Тип календаря</Heading>
                <Tabs view="divider" size="s">
                    {Object.keys(calendarMap).map((state, i) => (
                        <TabItem
                            key={`item:${i}`}
                            view="divider"
                            selected={state === currentState}
                            onClick={() => setCurrentState(state)}
                            size="s"
                        >
                            {state}
                        </TabItem>
                    ))}
                </Tabs>
                <div style={{ marginTop: '1rem', height: '100vh' }}>
                    {calendarMap[currentState as keyof typeof calendarMap]}
                </div>
            </>
        );
    };
};

export const createRangeStory = (_: any, Components: any) => {
    const { Tabs, TabItem, Heading, CalendarBaseRange, CalendarDoubleRange } = Components;

    return ({
        min,
        max,
        includeEdgeDates,
        size,
        displayDouble,
        locale,
        eventTooltipSize,
        enableEventTooltip,
        ...rest
    }: any) => {
        const [values, setValue] = useState<[Date, Date?]>([new Date(2023, 6, 1), new Date(2023, 6, 16)]);
        const [currentState, setCurrentState] = useState('Days');

        const handleOnChange = (newValue: [Date, Date?], dateInfo: DateInfo) => {
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

        const getCalendarComponent = ({ ...args }) => {
            return displayDouble ? (
                <CalendarDoubleRange
                    size={size}
                    includeEdgeDates={includeEdgeDates}
                    locale={locale}
                    min={min}
                    max={max}
                    eventTooltipOptions={{
                        bodyWrapper: EventTooltipBody,
                        size: eventTooltipSize,
                    }}
                    {...args}
                    value={values}
                    onChangeValue={handleOnChange}
                />
            ) : (
                <CalendarBaseRange
                    size={size}
                    includeEdgeDates={includeEdgeDates}
                    locale={locale}
                    min={min}
                    max={max}
                    eventTooltipOptions={{
                        bodyWrapper: EventTooltipBody,
                        size: eventTooltipSize,
                    }}
                    {...args}
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
                <div style={{ marginTop: '1rem', height: '100vh' }}>
                    {calendarMap[currentState as keyof typeof calendarMap]}
                </div>
            </>
        );
    };
};
