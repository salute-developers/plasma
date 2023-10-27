import React, { useState } from 'react';
import styled from 'styled-components';
import { IconClock } from '@salutejs/plasma-icons';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Tabs, TabItem, TabsController } from '.';
import type { TabsProps } from '.';

const meta: Meta<TabsProps> = {
    title: 'Controls/Tabs',
    component: Tabs,
    argTypes: {
        ...disableProps(['ref', 'theme', 'as', 'forwardedAs']),
    },
    decorators: [InSpacingDecorator],
};

export default meta;

type StoryDefaultProps = TabsProps & {
    itemsNumber: number;
    label: string;
    enableContentLeft: boolean;
    autoscroll: boolean;
};

type StoryMultipleProps = StoryDefaultProps & {
    outsideScrollLeftTab: boolean | { left?: string; right?: string };
    outsideScrollRightTab: boolean | { left?: string; right?: string };
};

const StyledMultipleContainer = styled.div`
    display: flex;
    column-gap: 1rem;
`;

const StoryDefault = ({ itemsNumber, disabled, label, enableContentLeft, ...rest }: StoryDefaultProps) => {
    const items = Array(itemsNumber).fill(0);
    const [index, setIndex] = useState(0);

    return (
        <Tabs disabled={disabled} {...rest}>
            {items.map((_, i) => (
                <TabItem
                    key={`item:${i}`}
                    isActive={i === index}
                    tabIndex={disabled ? -1 : 0}
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

export const Default: StoryObj<StoryDefaultProps> = {
    args: {
        itemsNumber: 4,
        disabled: false,
        stretch: false,
        pilled: false,
        view: 'secondary',
        label: 'Label',
        enableContentLeft: true,
        outsideScroll: true,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryArrows = ({ itemsNumber, disabled, stretch, label, autoscroll, enableContentLeft }: StoryDefaultProps) => {
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
            autoscroll={autoscroll}
        />
    );
};

export const Arrows: StoryObj<StoryDefaultProps> = {
    args: {
        itemsNumber: 4,
        disabled: false,
        stretch: true,
        label: 'Label',
        outsideScroll: true,
        autoscroll: false,
    },
    render: (args) => <StoryArrows {...args} />,
};

const StoryMultiple = ({
    itemsNumber,
    disabled,
    stretch,
    label,
    enableContentLeft,
    outsideScrollLeftTab,
    outsideScrollRightTab,
}: StoryMultipleProps) => {
    const items = Array(itemsNumber).fill({
        label,
        contentLeft: enableContentLeft && <IconClock color="inherit" />,
    });

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    return (
        <StyledMultipleContainer>
            <TabsController
                items={items}
                index={index1}
                onIndexChange={(i) => setIndex1(i)}
                stretch={stretch}
                disabled={disabled}
                outsideScroll={outsideScrollLeftTab}
            />
            <TabsController
                items={items}
                index={index2}
                onIndexChange={(i) => setIndex2(i)}
                stretch={stretch}
                disabled={disabled}
                outsideScroll={outsideScrollRightTab}
            />
        </StyledMultipleContainer>
    );
};

export const Multiple: StoryObj<StoryMultipleProps> = {
    args: {
        itemsNumber: 10,
        disabled: false,
        stretch: false,
        pilled: true,
        label: 'Label',
        outsideScrollLeftTab: false,
        outsideScrollRightTab: { right: '1rem' },
    },
    render: (args) => <StoryMultiple {...args} />,
};
