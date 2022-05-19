import React from 'react';
import styled from 'styled-components';

import { SingleGalleryMobile } from '../SingleGallery/SingleGallery@mobile';
import { MultiGalleryProps } from '../types';

type MultiGalleryMobileProps = Pick<MultiGalleryProps, 'items' | 'galleryCard' | 'onCardClick'>;

const StyledSingleGallery = styled(SingleGalleryMobile)`
    margin-bottom: 2rem;
`;

export function MultiGalleryMobile({ items, galleryCard, onCardClick }: MultiGalleryMobileProps) {
    return (
        <>
            {items.map((item, index) => (
                <StyledSingleGallery
                    gallery={item}
                    galleryIndex={index}
                    galleryCard={galleryCard}
                    onCardClick={onCardClick}
                />
            ))}
        </>
    );
}
