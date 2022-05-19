import React from 'react';
import styled from 'styled-components';
import { Headline3 } from '@salutejs/plasma-ui';

import { Grid } from '../../Grid';
import { GalleryCard } from '../GalleryCard/GalleryCard';
import { GalleryCardEntity, SingleGalleryProps } from '../types';

type SingleGalleryMobileProps = Pick<
    SingleGalleryProps,
    'gallery' | 'galleryIndex' | 'galleryCard' | 'onCardClick' | 'className'
>;

const StyledTitle = styled(Headline3)`
    margin-bottom: 1.25rem;
`;

export function SingleGalleryMobile({
    gallery,
    galleryIndex,
    galleryCard,
    className,
    onCardClick,
}: SingleGalleryMobileProps) {
    const handleCardClick = React.useCallback(
        (entity: GalleryCardEntity, index: number) => {
            onCardClick?.(entity, galleryIndex, index);
        },
        [galleryIndex, onCardClick],
    );

    return (
        <>
            {gallery.title && <StyledTitle>{gallery.title}</StyledTitle>}
            <Grid columnS={2} className={className}>
                {gallery.items.map((item, index) => (
                    <GalleryCard
                        entity={item}
                        galleryIndex={galleryIndex}
                        index={index}
                        isActive={false}
                        galleryCard={galleryCard}
                        onClick={handleCardClick}
                    />
                ))}
            </Grid>
        </>
    );
}
