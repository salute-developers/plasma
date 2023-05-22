import React from 'react';
import styled from 'styled-components';

import { ElasticGrid } from '.';

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
};
const arr = [0, 0, 0, 0, 0];

export const Default = () => {
    return (
        <StyledElasticGrid {...defaultProps}>
            {arr.map((_, k) => (
                <Item key={k} />
            ))}
        </StyledElasticGrid>
    );
};
