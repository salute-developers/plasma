import React from 'react';
import styled from 'styled-components';
import { Card, CardBody1, CardContent } from '@salutejs/plasma-ui';
import { GalleryCardProps } from '@salutejs/plasma-temple';

import { Category } from '../../../../types';

const StyledCardName = styled(CardBody1)`
    height: 80px;
`;

const StyledCategoryName = styled(StyledCardName)`
    text-align: center;
    display: inline-flex;
    align-items: center;
`;

export const CategoryCard: React.FC<GalleryCardProps<Category>> = ({ card, focused }) => {
    return (
        <Card focused={focused}>
            <CardContent>
                <StyledCategoryName>{card.label}</StyledCategoryName>
            </CardContent>
        </Card>
    );
};
