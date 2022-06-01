import React from 'react';
import styled from 'styled-components';
import { TextSkeleton, TextSkeletonProps } from '@salutejs/plasma-ui';

import { Grid } from '../../Grid';
import { CardSkeleton } from '../../Card/CardSkeleton/CardSkeleton';

import { GallerySkeletonProps } from './types';

const defaultTitleProps: TextSkeletonProps = {
    lines: 1,
    width: 30,
    size: 'headline2',
};

export const StyledSingleGallerySkeleton = styled(Grid)`
    margin-bottom: 2rem;
`;

export const StyledTitleSkeleton = styled(TextSkeleton)`
    margin-bottom: 1rem;
`;

export function GallerySkeletonSberBox({
    galleries,
    items,
    columnXL,
    hasTitle = true,
    titleProps = defaultTitleProps,
    cardProps,
}: GallerySkeletonProps) {
    const cardItems = columnXL ?? items ?? 4;

    return (
        <>
            {[...Array(galleries)].map((_, index) => (
                <React.Fragment key={index}>
                    {hasTitle && <StyledTitleSkeleton {...titleProps} />}
                    <StyledSingleGallerySkeleton columnXL={cardItems}>
                        {[...Array(cardItems)].map((__, idx) => (
                            <CardSkeleton key={idx} height={0} width="100%" ratio="3 / 4" {...cardProps} />
                        ))}
                    </StyledSingleGallerySkeleton>
                </React.Fragment>
            ))}
        </>
    );
}
