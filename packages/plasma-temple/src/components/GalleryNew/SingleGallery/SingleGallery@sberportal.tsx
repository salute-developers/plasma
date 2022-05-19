import React from 'react';
import styled from 'styled-components';
import { body3 } from '@salutejs/plasma-tokens';
import { CarouselGridWrapper, CarouselItem } from '@salutejs/plasma-ui';

import { SingleGalleryProps } from '../types';
import { useSingleGallery } from '../hooks/useSingleGallery';
import { GalleryCard } from '../GalleryCard/GalleryCard';
import { Carousel } from '../Carousel/Carousel';
import { getGalleryName } from '../utils';

const StyledContainer = styled.div`
    outline: none;
`;

const StyledTitle = styled.div`
    ${body3}
    margin-bottom: 1rem;
`;

const StyledCarouselItem = styled(CarouselItem)`
    padding: 0.25rem;
    margin-right: 0.75rem;
`;

export function SingleGallerySberPortal({
    gallery,
    galleryIndex,
    activeCard,
    className,
    galleryCard,
    onCardClick,
    onChangeGallery,
    onChangeCard,
}: SingleGalleryProps) {
    const { setCardIndex, handleCardClick } = useSingleGallery({
        galleryIndex,
        activeCard,
        isActive: true,
        galleryLength: gallery.items.length,
        onChangeCard,
        onChangeGallery,
        onCardClick,
    });

    return (
        <StyledContainer className={className} data-name={getGalleryName(galleryIndex)}>
            {gallery.title && <StyledTitle>{gallery.title}</StyledTitle>}
            <CarouselGridWrapper>
                <Carousel
                    axis="x"
                    index={activeCard}
                    detectActive
                    detectThreshold={0.5}
                    onIndexChange={setCardIndex}
                    scrollAlign="center"
                    paddingEnd="30%"
                    animatedScrollByIndex={false}
                >
                    {gallery.items.map((item, idx) => (
                        <StyledCarouselItem key={String(item.id)}>
                            <GalleryCard
                                entity={item}
                                galleryIndex={galleryIndex}
                                index={idx}
                                isActive={activeCard === idx}
                                galleryCard={galleryCard}
                                onClick={handleCardClick}
                            />
                        </StyledCarouselItem>
                    ))}
                </Carousel>
            </CarouselGridWrapper>
        </StyledContainer>
    );
}
