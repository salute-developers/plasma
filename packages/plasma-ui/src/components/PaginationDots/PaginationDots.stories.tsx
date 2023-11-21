import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';
import { IconChevronLeft, IconChevronRight } from '@salutejs/plasma-icons';

import { InSpacingDecorator, ShowcaseComponentRow } from '../../helpers';
import { ActionButton } from '../Button';
import { Caption } from '../Typography';

import { SmartPaginationDots, PaginationDots, PaginationDot } from '.';
import type { SmartPaginationDotsProps, PaginationDotProps } from '.';

const meta: Meta<PaginationDotProps> = {
    title: 'Controls/PaginationDots',
    component: PaginationDots,
    decorators: [InSpacingDecorator],
};

export default meta;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledButtonGroup = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
`;

const StyledGhostButton = styled(ActionButton).attrs(() => ({ view: 'clear', outlined: false }))`
    padding: 0;
`;

const rows = Array.from({ length: 4 }, () => [0, 0, 0, 0]);

export const Default: StoryObj = {
    render: () => {
        return (
            <>
                {rows.map((items, i) => (
                    <ShowcaseComponentRow key={`row:${i}`}>
                        <PaginationDots>
                            {items.map((_, j) => (
                                <PaginationDot key={`item:${i}${j}`} isActive={j === i} />
                            ))}
                        </PaginationDots>
                    </ShowcaseComponentRow>
                ))}
            </>
        );
    },
};

type StorySmartPaginationDotsProps = SmartPaginationDotsProps & { itemsCount: number };

const StoryLimited = ({ itemsCount, visibleItems }: StorySmartPaginationDotsProps) => {
    const [currentIndex, setIndex] = useState(0);

    const items = Array(itemsCount)
        .fill(0)
        .map((_, i) => ({ id: i }));

    const minIndex = 0;
    const maxIndex = items.length - 1;

    return (
        <StyledWrapper>
            <SmartPaginationDots items={items} index={currentIndex} visibleItems={visibleItems} />
            <StyledButtonGroup>
                <StyledGhostButton
                    onClick={() => setIndex(currentIndex - 1 >= minIndex ? currentIndex - 1 : maxIndex)}
                    size="s"
                >
                    <IconChevronLeft size="xs" />
                </StyledGhostButton>
                <Caption>{currentIndex}</Caption>
                <StyledGhostButton
                    onClick={() => setIndex(currentIndex + 1 <= maxIndex ? currentIndex + 1 : minIndex)}
                    size="s"
                >
                    <IconChevronRight size="xs" />
                </StyledGhostButton>
            </StyledButtonGroup>
        </StyledWrapper>
    );
};

export const Limited: StoryObj<SmartPaginationDotsProps & { itemsCount: number }> = {
    args: {
        visibleItems: 7,
        itemsCount: 10,
    },
    render: (args) => <StoryLimited {...args} />,
};
