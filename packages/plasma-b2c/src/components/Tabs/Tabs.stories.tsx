import React, { useState } from 'react';
import styled from 'styled-components';
import { IconClock } from '@salutejs/plasma-icons';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Tabs, TabsProps, TabItem, TabsController } from '.';

const propsToDisable = ['ref', 'theme', 'as', 'forwardedAs'];

export default {
    title: 'Controls/Tabs',
    component: Tabs,
    argTypes: {
        ...disableProps(propsToDisable),
    },
    decorators: [InSpacingDecorator],
} as Meta;

interface DefaultStoryProps extends TabsProps {
    itemsNumber: number;
    label: string;
    enableContentLeft: boolean;
    autoscroll: boolean;
}

export const Default: Story<DefaultStoryProps> = ({ itemsNumber, disabled, label, enableContentLeft, ...rest }) => {
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

Default.args = {
    itemsNumber: 4,
    disabled: false,
    stretch: false,
    pilled: false,
    view: 'secondary',
    label: 'Label',
    enableContentLeft: true,
    outsideScroll: true,
};

export const Arrows: Story<DefaultStoryProps> = ({
    itemsNumber,
    disabled,
    stretch,
    label,
    autoscroll,
    enableContentLeft,
}) => {
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

Arrows.args = {
    itemsNumber: 4,
    disabled: false,
    stretch: true,
    label: 'Label',
    outsideScroll: true,
    autoscroll: false,
};

const StyledMultipleContainer = styled.div`
    display: flex;
    column-gap: 1rem;
`;

interface MultipleStoryProps extends DefaultStoryProps {
    outsideScrollLeftTab: boolean | { left?: string; right?: string };
    outsideScrollRightTab: boolean | { left?: string; right?: string };
}

export const Multiple: Story<MultipleStoryProps> = ({
    itemsNumber,
    disabled,
    stretch,
    label,
    enableContentLeft,
    outsideScrollLeftTab,
    outsideScrollRightTab,
}) => {
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

Multiple.args = {
    itemsNumber: 10,
    disabled: false,
    stretch: false,
    pilled: true,
    label: 'Label',
    outsideScrollLeftTab: false,
    outsideScrollRightTab: { right: '1rem' },
};
