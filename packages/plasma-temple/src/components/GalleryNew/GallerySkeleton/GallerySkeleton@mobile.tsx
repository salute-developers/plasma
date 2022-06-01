import React from 'react';
import styled from 'styled-components';
import { TextSkeleton, TextSkeletonProps } from '@salutejs/plasma-ui';

import { CardSkeleton } from '../../Card/CardSkeleton/CardSkeleton';

import { GallerySkeletonProps } from './types';
import { StyledSingleGallerySkeleton } from './GallerySkeleton@sberbox';

const defaultTitleProps: TextSkeletonProps = {
    lines: 1,
    width: 30,
    size: 'headline3',
};

const StyledTitleSkeleton = styled(TextSkeleton)`
    margin-bottom: 1.25rem;
`;

export function GallerySkeletonMobile({
    galleries,
    items = 4,
    columnS = 2,
    hasTitle = true,
    titleProps = defaultTitleProps,
    cardProps,
}: GallerySkeletonProps) {
    return (
        <>
            {[...Array(galleries)].map((_, index) => (
                <React.Fragment key={index}>
                    {hasTitle && <StyledTitleSkeleton {...titleProps} />}
                    <StyledSingleGallerySkeleton columnS={columnS}>
                        {[...Array(items)].map((__, idx) => (
                            <CardSkeleton key={idx} height={0} width="100%" ratio="3 / 4" {...cardProps} />
                        ))}
                    </StyledSingleGallerySkeleton>
                </React.Fragment>
            ))}
        </>
    );
}
