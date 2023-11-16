import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import styled from 'styled-components';
import { IconStarFill } from '@salutejs/plasma-icons';
import { additional } from '@salutejs/plasma-colors';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Cell } from '.';
import type { CellProps } from '.';

const meta: Meta<CellProps> = {
    title: 'Content/Cell',
    component: Cell,
    decorators: [InSpacingDecorator],
};

export default meta;

type Story = StoryObj<CellProps>;

const StyledCellRating = styled(Cell)`
    color: ${additional.h40[300]};
    margin-right: 0.75rem;
`;

const StyledIconStarFill = styled(IconStarFill)`
    transform: scale(0.75);
`;

export const Default: Story = {
    args: {
        description: '4.7',
    },
    render: ({ description }) => {
        return (
            <StyledCellRating content={<StyledIconStarFill color={additional.h40[300]} />} description={description} />
        );
    },
};
