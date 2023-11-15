import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { ElasticGrid, ElasticGridProps } from '.';

const meta: Meta<ElasticGridProps> = {
    title: 'Layout/ElasticGrid',
    component: ElasticGrid,
    decorators: [InSpacingDecorator],
    argTypes: {
        ...disableProps(['ref', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

type StoryProps = ElasticGridProps & {
    $width: string;
    itemsNumber: number;
};

const StyledElasticGrid = styled(ElasticGrid)<{ $width: string }>`
    width: ${({ $width }) => $width};
`;

const Item = styled.div`
    width: 100%;
    height: 100px;
    background-color: #999;
    border-radius: 10px;
`;

export const Default: StoryObj<StoryProps> = {
    args: {
        $width: '600px',
        itemsNumber: 5,
        minColWidth: 125,
        gapX: 8,
        gapY: 8,
    },
    render: ({ itemsNumber, ...props }) => {
        return (
            <StyledElasticGrid {...props}>
                {Array(itemsNumber)
                    .fill(0)
                    .map((_, k) => (
                        <Item key={k} />
                    ))}
            </StyledElasticGrid>
        );
    },
};
