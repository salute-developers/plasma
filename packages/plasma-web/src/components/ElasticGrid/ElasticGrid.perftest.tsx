import React from 'react';
import { Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { ElasticGrid, ElasticGridProps } from '.';

const propsToDisable = ['ref', 'theme', 'as', 'forwardedAs'];

export default {
    title: 'Layout/ElasticGrid',
    component: ElasticGrid,
    argTypes: {
        ...disableProps(propsToDisable),
    },
    decorators: [InSpacingDecorator],
} as Meta;


const StyledElasticGrid = styled(ElasticGrid)<{ $width: string }>`
    width: ${({ $width }) => $width};
`;

const Item = styled.div`
    width: 100%;
    height: 100px;
    background-color: #999;
    border-radius: 10px;
`;

const defaultProps = {
    $width: '600px',
    itemsNumber: 5,
    minColWidth: 125,
    gapX: 8,
    gapY: 8,
}

export const Default =() => {
    const {
        $width,
        itemsNumber,
        minColWidth,
        gapX,
        gapY
    } = defaultProps;
    return (
        <StyledElasticGrid {...defaultProps}>
            {Array(itemsNumber)
                .fill(0)
                .map((_, k) => (
                    <Item key={k} />
                ))}
        </StyledElasticGrid>
    );
};
