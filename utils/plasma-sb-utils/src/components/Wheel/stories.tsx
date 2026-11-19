import React, { useState } from 'react';

import { cities, countries, hourItems, initialLocation, initialTime, minuteItems } from './fixtures';

const getStoryArgs = ({
    columnsCount = 3,
    hoursLoop = true,
    minutesLoop = false,
    secondsLoop = false,
    columnWidths = {},
    hasDescription = true,
    ...wheelArgs
}: any) => ({
    count: Number.isFinite(columnsCount) ? Math.max(0, Math.floor(columnsCount)) : undefined,
    loops: { hours: hoursLoop, minutes: minutesLoop, seconds: secondsLoop },
    columnWidths: columnWidths ?? {},
    hasDescription,
    wheelArgs,
});

export const createDefaultStory = (Wheel: any) => (args: any) => {
    const { count, loops, columnWidths, hasDescription, wheelArgs } = getStoryArgs(args);
    const [value, setValue] = useState(initialTime);
    const columns = [
        {
            name: 'hours',
            label: 'Часы',
            description: hasDescription ? 'Часы' : undefined,
            items: hourItems,
            loop: loops.hours,
            width: columnWidths.hours,
        },
        {
            name: 'minutes',
            label: 'Минуты',
            description: hasDescription ? 'Минуты' : undefined,
            items: minuteItems,
            loop: loops.minutes,
            width: columnWidths.minutes,
        },
        {
            name: 'seconds',
            label: 'Секунды',
            description: hasDescription ? 'Секунды' : undefined,
            items: minuteItems,
            loop: loops.seconds,
            width: columnWidths.seconds,
        },
    ];

    return <Wheel {...wheelArgs} value={value} onChange={setValue} columns={columns.slice(0, count)} />;
};

export const createCustomItemsStory = (Wheel: any) => (args: any) => {
    const { count, loops, columnWidths, hasDescription, wheelArgs } = getStoryArgs(args);
    const [value, setValue] = useState(initialTime);
    const columns = [
        {
            name: 'hours',
            width: columnWidths.hours,
            label: 'Часы',
            description: hasDescription ? 'Часы' : undefined,
            loop: loops.hours,
            textAfter: 'ч',
            items: hourItems.map((item) => ({
                ...item,
                label: <span>{item.label}</span>,
                textValue: `${item.value} часов`,
            })),
            renderItem: (item: { label: React.ReactNode }, { selected }: { selected: boolean }) => (
                <span style={{ color: selected ? 'var(--text-accent)' : 'inherit' }}>{item.label}</span>
            ),
        },
    ];

    return <Wheel {...wheelArgs} value={value} onChange={setValue} columns={columns.slice(0, count)} />;
};

export const createCustomSeparatorStory = (Wheel: any) => {
    const DefaultStory = createDefaultStory(Wheel);

    return (args: any) => (
        <DefaultStory
            {...args}
            separator={
                <span aria-hidden style={{ color: 'var(--text-accent)' }}>
                    /
                </span>
            }
        />
    );
};

export const createDependentColumnsStory = (Wheel: any) => (args: any) => {
    const { count, columnWidths, wheelArgs } = getStoryArgs(args);
    const [location, setLocation] = useState(initialLocation);
    const columns = [
        { name: 'country', label: 'Страна', items: countries, width: columnWidths.country },
        { name: 'city', label: 'Город', items: cities[location.country], width: columnWidths.city },
    ];

    return (
        <Wheel
            {...wheelArgs}
            value={location}
            columns={columns.slice(0, count)}
            onChange={(next: typeof location, column: keyof typeof location) => {
                setLocation(column === 'country' ? { ...next, city: cities[next.country][0].value } : next);
            }}
        />
    );
};
