import React from 'react';
import { TextSkeletonProps } from '@salutejs/plasma-ui';

import { CardSkeleton } from '../../Card/CardSkeleton/CardSkeleton';

import { GallerySkeletonProps } from './types';
import { StyledSingleGallerySkeleton, StyledTitleSkeleton } from './GallerySkeleton@sberbox';

const defaultTitleProps: TextSkeletonProps = {
    lines: 1,
    width: 30,
    size: 'body3',
};

export function GallerySkeletonSberPortal({
    galleries,
    items,
    columnM,
    hasTitle = true,
    titleProps = defaultTitleProps,
    cardProps,
}: GallerySkeletonProps) {
    const cardItems = columnM ?? items ?? 3;

    return (
        <>
            {[...Array(galleries)].map((_, index) => (
                <React.Fragment key={index}>
                    {hasTitle && <StyledTitleSkeleton {...titleProps} />}
                    <StyledSingleGallerySkeleton columnM={cardItems}>
                        {[...Array(cardItems)].map((__, idx) => (
                            <CardSkeleton key={idx} height={0} width="100%" ratio="3 / 4" {...cardProps} />
                        ))}
                    </StyledSingleGallerySkeleton>
                </React.Fragment>
            ))}
        </>
    );
}
