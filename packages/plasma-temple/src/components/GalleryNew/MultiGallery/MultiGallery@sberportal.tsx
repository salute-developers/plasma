import React from 'react';
import styled from 'styled-components';
import { CarouselGridWrapper, CarouselItem } from '@salutejs/plasma-ui';

import { useMultiGallery } from '../hooks/useMultiGallery';
import { SingleGallerySberPortal } from '../SingleGallery/SingleGallery@sberportal';
import { Carousel } from '../Carousel/Carousel';
import { MultiGalleryProps } from '../types';

const StyledCarouselGridWrapper = styled(CarouselGridWrapper)`
    height: 100%;
`;

const StyledSingleGallery = styled(SingleGallerySberPortal)`
    margin-bottom: 1.5rem;
` as typeof SingleGallerySberPortal;

export function MultiGallerySberPortal({
    items,
    state: { activeCards, activeGallery },
    galleryCard,
    assistant,
    voiceStepSizeX,
    voiceStepSizeY,
    onCardClick,
    onChangeGallery,
    onChangeCard,
}: MultiGalleryProps) {
    const setGalleryIndex = useMultiGallery({
        activeGallery,
        galleryLength: items.length,
        isActive: true,
        assistant,
        voiceStepSizeY,
        onChangeGallery,
    });

    return (
        <StyledCarouselGridWrapper>
            <Carousel
                axis="y"
                index={activeGallery}
                detectActive
                detectThreshold={0.5}
                onIndexChange={setGalleryIndex}
                paddingEnd="50%"
                scrollAlign="start"
            >
                {items.map((item, index) => (
                    <CarouselItem key={index} scrollSnapAlign="start">
                        <StyledSingleGallery
                            gallery={item}
                            galleryIndex={index}
                            activeCard={activeCards[index]}
                            isActive={index === activeGallery}
                            galleryCard={galleryCard}
                            assistant={assistant}
                            voiceStepSizeX={voiceStepSizeX}
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
