import React, { PropsWithChildren } from 'react';

type EventNodeProps = {
    dateValue: string;
    color: string;
};

const EventNode = ({ dateValue, color }: EventNodeProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Дата: {dateValue}</span>
            <span>Цвет: {color}</span>
        </div>
    );
};

const eventColors = ['red', 'green', 'blue', 'purple'];

export const EventTooltipBody = ({ children }: PropsWithChildren) => {
    return <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>;
};

export const getBaseEvents = (
    type: 'days' | 'months' | 'quarters' | 'years',
    datesNumber = 2,
    enableEventTooltip = false,
) => {
    const baseDate = {
        day: 14,
        monthIndex: 5,
        year: 2024,
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

export const getIconSize = (size?: string) => {
    return size === 'xs' ? 'xs' : 's';
};
