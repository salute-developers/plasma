import React from 'react';
import { IconClock } from '@salutejs/plasma-icons';

import { Tabs, TabItem, TabsController } from '.';

const defaultProps = {
    itemsNumber: 4,
    disabled: false,
    stretch: false,
    pilled: false,
    view: 'secondary',
    label: 'Label',
    enableContentLeft: true,
    outsideScroll: true,
};
const items: number[] = [0, 0, 0, 0];
const func = () => {};

export const Default = () => {
    const { disabled, stretch, label } = defaultProps;
    return (
        <Tabs stretch={stretch} disabled={disabled}>
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    isActive={i === 0}
                    tabIndex={0}
                    contentLeft={<IconClock color="inherit" />}
                    onClick={func}
                    onFocus={func}
                    onBlur={func}
                >
                    {label}
                </TabItem>
            ))}
        </Tabs>
    );
};

const arrowsProps = {
    itemsNumber: 4,
    disabled: false,
    stretch: true,
    label: 'Label',
    outsideScroll: true,
    autoscroll: false,
};
const items2 = [
    {
        label: 'Label',
        contentLeft: <IconClock color="inherit" />,
    },
];

export const Arrows = () => {
    const { stretch, disabled, autoscroll } = arrowsProps;
    return (
        <TabsController
            items={items2}
            index={0}
            onIndexChange={func}
            stretch={stretch}
            disabled={disabled}
            autoscroll={autoscroll}
        />
    );
};
