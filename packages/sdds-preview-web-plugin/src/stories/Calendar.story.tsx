import {
    calendarBaseConfig,
    calendarDoubleConfig,
    component,
    mergeConfig,
    withRange,
} from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';
import type { PropsWithChildren } from 'react';

const CalendarBase = component(mergeConfig(calendarBaseConfig as any, {})) as any;
const CalendarDouble = component(mergeConfig(calendarDoubleConfig as any, {})) as any;
const CalendarBaseRange = withRange<any>(CalendarBase);
const CalendarDoubleRange = withRange<any>(CalendarDouble);

/** Пропсы без служебного `relatedComponents` сцены превью. */
const omitScene = (props: Record<string, unknown>) => {
    const result = { ...props };
    delete result.relatedComponents;

    return result;
};

const toItems = (values: string[]) => values.map((value) => ({ value, label: value }));

/** Дата аргумента строкой `YYYY-MM-DD` в локальном времени; пустая или неверная строка — `undefined`. */
const toDate = (value: unknown): Date | undefined => {
    if (typeof value !== 'string' || !value.trim()) {
        return undefined;
    }

    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
    const date = match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : new Date(value);

    return Number.isNaN(date.getTime()) ? undefined : date;
};

const eventColors = ['red', 'green', 'blue', 'purple'];

type EventType = 'days' | 'months' | 'quarters' | 'years';

const EventNode = ({ dateValue, color }: { dateValue: string; color: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>Дата: {dateValue}</span>
        <span>Цвет: {color}</span>
    </div>
);

const EventTooltipBody = ({ children }: PropsWithChildren) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>
);

const colorIndexByType: Record<EventType, number> = { days: 0, months: 1, quarters: 2, years: 3 };

const getBaseEvents = (type: EventType, datesNumber: number, enableEventTooltip: boolean) => {
    const baseDate = { day: 10, monthIndex: 6, year: 2023 };
    const color = eventColors[colorIndexByType[type]];

    return Array.from({ length: datesNumber }, (_, index) => {
        const day = type === 'days' ? baseDate.day + index : 1;
        const month =
            // eslint-disable-next-line no-nested-ternary
            type === 'months' || type === 'quarters'
                ? baseDate.monthIndex + index
                : type === 'days'
                ? baseDate.monthIndex
                : 0;
        const year = type === 'years' ? baseDate.year + index : baseDate.year;

        return Array.from({ length: index + 1 }, (__, ind) => ({
            date: new Date(year, month, day),
            color,
            ...(enableEventTooltip && {
                eventInfo: <EventNode key={ind} color={color} dateValue={`${year} ${month} ${day}`} />,
            }),
        }));
    }).flat();
};

/** Пропсы календаря выбранного типа: события и недоступные дни, как вкладки историй sdds-serv. */
const getTypeProps = (type: string, enableEventTooltip: boolean) => {
    switch (type) {
        case 'Months':
            return { type, eventMonthList: getBaseEvents('months', 5, enableEventTooltip) };
        case 'Quarters':
            return { type, eventQuarterList: getBaseEvents('quarters', 2, enableEventTooltip) };
        case 'Years':
            return { type, eventYearList: getBaseEvents('years', 2, enableEventTooltip) };
        default:
            return {
                type: 'Days',
                eventList: getBaseEvents('days', 5, enableEventTooltip),
                disabledList: Array.from({ length: 5 }, (_, day) => ({ date: new Date(2023, 6, 23 + day) })),
            };
    }
};

const commonArgs = [
    {
        name: 'type',
        value: 'Days',
        items: toItems(['Days', 'Months', 'Quarters', 'Years']),
    },
    {
        name: 'min',
        value: '2016-07-01',
    },
    {
        name: 'max',
        value: '2030-12-24',
    },
    {
        name: 'includeEdgeDates',
        value: false,
    },
    {
        name: 'locale',
        value: 'ru',
        items: toItems(['ru', 'en']),
    },
    {
        name: 'stretched',
        value: false,
    },
    {
        name: 'enableEventTooltip',
        value: true,
    },
];

const baseArgs = [
    ...commonArgs,
    {
        name: 'periodSelectorAlign',
        value: 'start',
        items: toItems(['start', 'center']),
    },
];

/** Общие пропсы календаря из аргументов story; `relatedComponents` сцены в компонент не уходит. */
const calendarProps = ({ type, min, max, enableEventTooltip, eventTooltipSize, ...rest }: any) => ({
    ...omitScene(rest),
    ...getTypeProps(type, enableEventTooltip),
    min: toDate(min),
    max: toDate(max),
    eventTooltipOptions: {
        bodyWrapper: EventTooltipBody,
        size: eventTooltipSize,
    },
});

const SingleStory = ({ Calendar, ...args }: any) => {
    const [value, setValue] = useState(new Date(2023, 6, 7));

    return <Calendar {...calendarProps(args)} value={value} onChangeValue={(next: Date) => setValue(next)} />;
};

const RangeStory = ({ Calendar, ...args }: any) => {
    const [values, setValues] = useState<[Date, Date?]>([new Date(2023, 6, 1), new Date(2023, 6, 16)]);

    return (
        <Calendar {...calendarProps(args)} value={values} onChangeValue={(next: [Date, Date?]) => setValues(next)} />
    );
};

const CalendarDefault = {
    name: 'Default',
    args: baseArgs,
    render: function Story(args: any) {
        return <SingleStory {...args} Calendar={CalendarBase} />;
    },
};

const CalendarRange = {
    name: 'Range',
    args: baseArgs,
    render: function Story(args: any) {
        return <RangeStory {...args} Calendar={CalendarBaseRange} />;
    },
};

export const CalendarStories = [CalendarDefault, CalendarRange];

const CalendarDoubleDefault = {
    name: 'Default',
    args: commonArgs,
    render: function Story(args: any) {
        return <SingleStory {...args} Calendar={CalendarDouble} />;
    },
};

const CalendarDoubleRangeStory = {
    name: 'Range',
    args: commonArgs,
    render: function Story(args: any) {
        return <RangeStory {...args} Calendar={CalendarDoubleRange} />;
    },
};

export const CalendarDoubleStories = [CalendarDoubleDefault, CalendarDoubleRangeStory];
