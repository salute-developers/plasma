import React, { useState } from 'react';
import { IconClock } from '@salutejs/plasma-icons';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { InSpacingDecorator, disableProps } from '../../helpers';

import { Tabs, TabItem, TabsController } from '.';
import type { TabsProps } from '.';

type StoryPropsDefault = TabsProps & {
    itemsNumber: number;
    label: string;
    enableContentLeft: boolean;
};

const meta: Meta<StoryPropsDefault> = {
    title: 'Controls/Tabs',
    component: Tabs,
    decorators: [InSpacingDecorator],
    argTypes: {
        ...disableProps(['ref', 'theme', 'as', 'forwardedAs']),
    },
    args: {
        itemsNumber: 4,
        disabled: false,
        stretch: true,
        label: 'Label',
    },
};

export default meta;

const StoryDefault = ({ itemsNumber, disabled, stretch, label, enableContentLeft }: StoryPropsDefault) => {
    const items = Array(itemsNumber).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs stretch={stretch} disabled={disabled}>
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    isActive={i === index}
                    tabIndex={!disabled ? i : -1}
                    contentLeft={enableContentLeft && <IconClock color="inherit" />}
                    onClick={() => !disabled && setIndex(i)}
                    onFocus={action(`onFocus item #${i}`)}
                    onBlur={action(`onBlur item #${i}`)}
                >
                    {label}
                </TabItem>
            ))}
        </Tabs>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryArrows = ({ itemsNumber, disabled, stretch, label, enableContentLeft }: StoryPropsDefault) => {
    const items = Array(itemsNumber).fill({
        label,
        contentLeft: enableContentLeft && <IconClock color="inherit" />,
    });

    const [index, setIndex] = useState(0);

    return (
        <TabsController
            items={items}
            index={index}
            onIndexChange={(i) => setIndex(i)}
            stretch={stretch}
            disabled={disabled}
        />
    );
};

export const Arrows: StoryObj<StoryPropsDefault> = {
    render: (args) => <StoryArrows {...args} />,
};
