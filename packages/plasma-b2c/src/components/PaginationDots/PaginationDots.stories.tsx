import React, { useState } from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button';
import { Headline4 } from '../Typography';

import { SmartPaginationDots, PaginationDots, PaginationDot } from '.';
import type { SmartPaginationDotsProps } from '.';

const meta: Meta<SmartPaginationDotsProps> = {
    title: 'Controls/PaginationDots',
    decorators: [InSpacingDecorator],
};

export default meta;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1.25rem;
    align-self: center;
    align-items: center;
    margin-top: 2rem;
`;

export const Default: StoryObj<{ itemsCount: number }> = {
    args: {
        itemsCount: 10,
    },
    render: ({ itemsCount }) => {
        const items = Array(itemsCount)
            .fill(0)
            .map((_, i) => ({ id: i }));

        return (
            <PaginationDots>
                {items.map((_, i) => (
                    <PaginationDot key={`item:${i}`} isActive={i === 0} />
                ))}
            </PaginationDots>
        );
    },
};

type StoryLimitedProps = SmartPaginationDotsProps & {
    initialIndex: number;
    itemsCount: number;
};

const StoryLimited = ({ initialIndex, itemsCount, visibleItems }: StoryLimitedProps) => {
    const [index, setIndex] = useState(initialIndex);

    const items = Array(itemsCount)
        .fill(0)
        .map((_, i) => ({ id: i }));

    return (
        <StyledWrapper>
            <SmartPaginationDots
                items={items}
                index={index}
                visibleItems={visibleItems}
                onIndexChange={(i) => setIndex(i)}
            />
            <StyledButtonGroup>
                <Button text="Prev" onClick={() => setIndex((i) => (i > 0 ? i - 1 : items.length - 1))} />
                <Headline4>{index}</Headline4>
                <Button text="Next" onClick={() => setIndex((i) => (i < items.length - 1 ? i + 1 : 0))} />
            </StyledButtonGroup>
        </StyledWrapper>
    );
};

export const Limited: StoryObj<StoryLimitedProps> = {
    args: {
        initialIndex: 0,
        itemsCount: 10,
        visibleItems: 7,
    },
    parameters: {
        chromatic: {
            disable: true,
        },
    },
    render: (args) => <StoryLimited {...args} />,
};
