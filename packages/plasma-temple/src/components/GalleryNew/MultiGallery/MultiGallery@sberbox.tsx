import React from 'react';
import styled from 'styled-components';
import { CarouselGridWrapper, CarouselItem } from '@salutejs/plasma-ui';

import { MultiGalleryProps } from '../types';
import { useMultiGallery } from '../hooks/useMultiGallery';
import { SingleGallerySberBox } from '../SingleGallery/SingleGallery@sberbox';
import { Carousel } from '../Carousel/Carousel';

const StyledCarouselGridWrapper = styled(CarouselGridWrapper)`
    height: 100%;
`;
const StyledSingleGallery = styled(SingleGallerySberBox)`
    margin-bottom: 2rem;
` as typeof SingleGallerySberBox;

export function MultiGallerySberBox({
    items,
    isActive,
    state: { activeCards, activeGallery },
    galleryCard,
    onCardClick,
    onChangeGallery,
    onChangeCard,
}: MultiGalleryProps) {
    useMultiGallery({
        activeGallery,
        galleryLength: items.length,
        isActive,
        onChangeGallery,
    });

    return (
        <StyledCarouselGridWrapper>
            <Carousel axis="y" index={activeGallery} paddingEnd="50%" scrollAlign="start">
                {items.map((item, index) => (
                    <CarouselItem key={index} scrollSnapAlign="start">
                        <StyledSingleGallery
                            gallery={item}
                            galleryIndex={index}
                            activeCard={activeCards[index]}
                            isActive={index === activeGallery && isActive}
                            galleryCard={galleryCard}
                            onCardClick={onCardClick}
                            onChangeGallery={onChangeGallery}
                            onChangeCard={onChangeCard}
                        />
                    </CarouselItem>
                ))}
            </Carousel>
        </StyledCarouselGridWrapper>
    );
}
