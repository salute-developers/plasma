import React from 'react';
import { IconClock } from '@salutejs/plasma-icons';

import { Tabs, TabItem, TabsController } from '.';

const defaultProps = {
    itemsNumber: 4,
    disabled: false,
    stretch: true,
    label: 'Label',
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
                    tabIndex={-1}
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
    disabled: false,
    stretch: true,
};
const items2 = [
    {
        label: 'Label',
        contentLeft: <IconClock color="inherit" />,
    },
];

export const Arrows = () => {
    const { disabled, stretch } = arrowsProps;
    return <TabsController items={items2} index={0} onIndexChange={func} stretch={stretch} disabled={disabled} />;
};
