import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';
import { IconStarFill } from '@salutejs/plasma-icons';
import { additional } from '@salutejs/plasma-colors';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import type { CellProps } from '.';
import { Cell } from '.';

export default {
    title: 'Content/Cell',
    decorators: [InSpacingDecorator],
} as Meta;

const StyledCellRating = styled(Cell)`
    color: ${additional.h40[300]};
    margin-right: 0.75rem;
`;

const StyledIconStarFill = styled(IconStarFill)`
    transform: scale(0.75);
`;

interface DefaultProps extends CellProps {}

export const Default: Story<DefaultProps> = ({ description }) => {
    return <StyledCellRating content={<StyledIconStarFill color={additional.h40[300]} />} description={description} />;
};

Default.args = {
    description: '4.7',
};
