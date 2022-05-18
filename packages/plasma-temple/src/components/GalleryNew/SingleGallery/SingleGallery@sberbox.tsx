import React from 'react';
import styled from 'styled-components';
import { headline2 } from '@salutejs/plasma-tokens';
import { CarouselGridWrapper, CarouselItem } from '@salutejs/plasma-ui';

import { SingleGalleryProps } from '../types';
import { useSingleGallery } from '../hooks/useSingleGallery';
import { GalleryCard } from '../GalleryCard/GalleryCard';
import { Carousel } from '../Carousel/Carousel';

const StyledContainer = styled.div`
    outline: none;
`;

const StyledTitle = styled.div`
    ${headline2}
    margin-bottom: 1rem;
`;

const StyledCarouselItem = styled(CarouselItem)`
    padding: 0.25rem;
    margin-right: 0.75rem;
`;

export function SingleGallerySberBox({
    gallery,
    galleryIndex,
    activeCard,
    isActive,
    className,
    galleryCard,
    onCardClick,
    onChangeGallery,
    onChangeCard,
}: SingleGalleryProps) {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const { cardIndex, handleCardClick } = useSingleGallery({
        galleryIndex,
        activeCard,
        isActive,
        galleryLength: gallery.items.length,
        onChangeCard,
        onChangeGallery,
        onCardClick,
    });

    const handleFocus = React.useCallback(() => {
        onChangeGallery({ galleryIndex, cardIndex });
    }, [galleryIndex, cardIndex, onChangeGallery]);

    React.useEffect(() => {
        if (isActive && cardIndex === activeCard && document.activeElement !== containerRef.current) {
            containerRef.current?.focus();
        }
    }, [isActive, cardIndex, activeCard]);

    return (
        <StyledContainer
            onFocus={handleFocus}
            tabIndex={0}
            data-focusable
            ref={containerRef}
            data-name={`gallery-${galleryIndex}`}
            className={className}
        >
            <StyledTitle>{gallery.title}</StyledTitle>
            <CarouselGridWrapper>
                <Carousel axis="x" index={activeCard} paddingEnd="50%">
                    {gallery.items.map((item, idx) => (
                        <StyledCarouselItem scrollSnapAlign="start" key={String(item.id)}>
                            <GalleryCard
                                entity={item}
                                galleryIndex={galleryIndex}
                                index={idx}
                                isActive={activeCard === idx && isActive}
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
