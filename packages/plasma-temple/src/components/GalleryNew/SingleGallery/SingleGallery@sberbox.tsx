import React from 'react';
import styled from 'styled-components';
import { headline2 } from '@salutejs/plasma-tokens';
import { CarouselGridWrapper, CarouselItem } from '@salutejs/plasma-ui';

import { SingleGalleryProps } from '../types';
import { useSingleGallery } from '../hooks/useSingleGallery';
import { GalleryCard } from '../GalleryCard/GalleryCard';
import { Carousel } from '../Carousel/Carousel';
import { getGalleryName } from '../utils';
import { useThrottledCallback } from '../../../hooks';

const StyledContainer = styled.div`
    outline: none;
`;

const StyledTitle = styled.div`
    ${headline2}
    margin-bottom: 1rem;
`;

const StyledGridWrapper = styled(CarouselGridWrapper)`
    margin-top: -0.25rem;
    margin-bottom: -0.25rem;
`;

const StyledCarouselItem = styled(CarouselItem)`
    padding: 0.25rem 0;
    margin-right: 1rem;
`;

export const SingleGallerySberBox = React.memo<SingleGalleryProps>(
    ({
        gallery,
        galleryIndex,
        activeCard,
        isActive,
        className,
        galleryCard,
        assistant,
        voiceStepSizeX,
        onCardClick,
        onChangeGallery,
        onChangeCard,
    }) => {
        const containerRef = React.useRef<HTMLDivElement>(null);

        const { handleCardClick } = useSingleGallery({
            galleryIndex,
            activeCard,
            isActive,
            galleryLength: gallery.items.length,
            assistant,
            voiceStepSizeX,
            onChangeCard,
            onChangeGallery,
            onCardClick,
        });

        const handleFocus = React.useCallback(() => {
            onChangeGallery({ galleryIndex, cardIndex: activeCard });
        }, [galleryIndex, activeCard, onChangeGallery]);

        React.useEffect(() => {
            if (isActive && document.activeElement !== containerRef.current) {
                containerRef.current?.focus();
            }
        }, [isActive, activeCard]);

        const handleKeyDown = useThrottledCallback(
            (event: React.KeyboardEvent) => {
                if (event.key === 'Enter') {
                    onCardClick?.(gallery.items[activeCard], galleryIndex, activeCard);
                }
            },
            [gallery, galleryIndex, activeCard, isActive, onCardClick],
        );

        return (
            <StyledContainer
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                data-focusable
                ref={containerRef}
                data-name={getGalleryName(galleryIndex)}
                className={className}
            >
                {gallery.title && <StyledTitle>{gallery.title}</StyledTitle>}
                <StyledGridWrapper>
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
                </StyledGridWrapper>
            </StyledContainer>
        );
    },
);
