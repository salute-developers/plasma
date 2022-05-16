import React from 'react';
import styled, { css } from 'styled-components';
import { Carousel, CarouselGridWrapper, CarouselItem, mediaQuery } from '@salutejs/plasma-ui';

import { GalleryState, OnCardClickFn, OnChangeCardFn, OnChangeGalleryFn, SingleGalleryEntity } from '../types';
import { SingleGallery } from '../SingleGallery/SingleGallery';
import { CardProps } from '../../Card';
import { AnyObject } from '../../../types';
import { useRemoteHandlers } from '../../../hooks';

interface MultiGalleryProps<Id, T> {
    items: SingleGalleryEntity<Id, T>[];
    isActive: boolean;
    state: GalleryState;
    galleryCard?: React.ComponentType<CardProps<Id, T>>;
    onChangeGallery: OnChangeGalleryFn;
    onChangeCard: OnChangeCardFn;
    onCardClick?: OnCardClickFn<Id, T>;
}

const StyledCarouselGridWrapper = styled(CarouselGridWrapper)`
    height: 100%;
`;
const StyledSingleGallery = styled(SingleGallery)`
    margin-bottom: 2rem;

    ${mediaQuery(
        'M',
        2,
    )(css`
        margin-bottom: 1.5rem;
    `)}
` as typeof SingleGallery;

export function MultiGallery<Id = string, T extends AnyObject = AnyObject>({
    items,
    isActive,
    state: { activeCards, activeGallery },
    galleryCard,
    onCardClick,
    onChangeGallery,
    onChangeCard,
}: MultiGalleryProps<Id, T>) {
    const [galleryIndex, setGalleryIndex] = useRemoteHandlers({
        initialIndex: activeGallery,
        axis: 'y',
        min: 0,
        max: items.length - 1,
        disable: !isActive,
        repeat: false,
    });

    React.useEffect(() => {
        onChangeGallery({ galleryIndex });
    }, [galleryIndex]);

    React.useEffect(() => {
        setGalleryIndex(activeGallery);
    }, [activeGallery]);

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
