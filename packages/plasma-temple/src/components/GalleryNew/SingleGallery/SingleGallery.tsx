import React from 'react';
import styled, { css } from 'styled-components';
import { body1, body2, body3, footnote1, footnote2, headline2 } from '@salutejs/plasma-tokens';
import { Carousel, CarouselGridWrapper, CarouselItem, mediaQuery } from '@salutejs/plasma-ui';

import { GalleryCardEntity, OnCardClickFn, OnChangeCardFn, OnChangeGalleryFn, SingleGalleryEntity } from '../types';
import { AnyObject } from '../../../types';
import { Card, CardEntity, CardProps } from '../../Card';
import { useRemoteHandlers } from '../../../hooks';

interface SingleGalleryProps<Id, T extends AnyObject> {
    gallery: SingleGalleryEntity<Id, T>;
    galleryIndex: number;
    activeCard: number;
    isActive: boolean;
    className?: string;
    galleryCard?: React.ComponentType<CardProps<Id, T>>;
    onChangeGallery: OnChangeGalleryFn;
    onChangeCard: OnChangeCardFn;
    onCardClick?: OnCardClickFn<Id, T>;
}

const StyledContainer = styled.div`
    outline: none;
`;

const StyledTitle = styled.div`
    ${headline2}
    margin-bottom: 1rem;

    ${mediaQuery(
        'M',
        2,
    )(css`
        ${body3}
    `)}
`;

const StyledCarouselItem = styled(CarouselItem)`
    padding: 0.25rem;
    margin-right: 0.75rem;

    ${mediaQuery(
        'S',
        1,
    )(css`
        margin-right: 0.25rem;
    `)}
`;

const StyledCard = styled(Card)`
    height: 18.375rem;
    width: 12.25rem;

    ${mediaQuery(
        'M',
        2,
    )(css`
        height: 15.81rem;
        width: 10.375rem;
    `)}

    ${mediaQuery(
        'S',
        1,
    )(css`
        height: 13.25rem;
        width: 10.375rem;
    `)}
` as typeof Card;

const StyledName = styled.div<{ lines: number }>`
    ${body1}

    ${mediaQuery(
        'M',
        2,
    )(css`
        ${footnote1}
    `)}

    overflow: hidden;
    text-overflow: ellipsis;
    hyphens: none;

    ${({ lines }) =>
        lines > 1
            ? css`
                  display: -webkit-box;
                  -webkit-line-clamp: ${lines};
                  -webkit-box-orient: vertical;
              `
            : css`
                  white-space: nowrap;
              `}
`;

const StyledCaption = styled.div`
    ${body2}

    ${mediaQuery(
        'M',
        2,
    )(css`
        ${footnote2}
    `)}
`;

function SingleGalleryComponent<Id = string, T extends AnyObject = AnyObject>({
    gallery,
    galleryIndex,
    activeCard,
    isActive,
    className,
    galleryCard: GalleryCard,
    onCardClick,
    onChangeGallery,
    onChangeCard,
}: SingleGalleryProps<Id, T>) {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [cardIndex, setCardIndex] = useRemoteHandlers({
        initialIndex: activeCard,
        axis: 'x',
        min: 0,
        max: gallery.items.length - 1,
        disable: !isActive,
        repeat: false,
    });

    const handleFocus = React.useCallback(() => {
        onChangeGallery({ galleryIndex, cardIndex });
    }, [galleryIndex, cardIndex, onChangeGallery]);

    const handleCardClick = React.useCallback(
        (entity: GalleryCardEntity<Id, T>, index: number) => {
            if (index !== activeCard) {
                setCardIndex(index);
                onChangeGallery({ galleryIndex, cardIndex: index });
            }

            onCardClick?.(entity, galleryIndex, index);
        },
        [galleryIndex, onChangeGallery, onCardClick],
    );

    React.useEffect(() => {
        onChangeCard({ galleryIndex, cardIndex });
    }, [galleryIndex, cardIndex]);

    React.useEffect(() => {
        setCardIndex(activeCard);
    }, [activeCard]);

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
                <Carousel axis="x" index={cardIndex} paddingEnd="50%">
                    {gallery.items.map((item, idx) => (
                        <StyledCarouselItem scrollSnapAlign="start" key={String(item.id)}>
                            {GalleryCard ? (
                                <GalleryCard
                                    entity={item}
                                    index={idx}
                                    focused={activeCard === idx && isActive}
                                    onClick={handleCardClick as (id: CardEntity<Id, T>) => void}
                                />
                            ) : (
                                <StyledCard<Id, T>
                                    entity={item}
                                    index={idx}
                                    focused={activeCard === idx && isActive}
                                    onClick={handleCardClick as (id: CardEntity<Id, T>) => void}
                                >
                                    <StyledName lines={item.caption ? 2 : 3}>{item.name}</StyledName>
                                    {item.caption && <StyledCaption>{item.caption}</StyledCaption>}
                                </StyledCard>
                            )}
                        </StyledCarouselItem>
                    ))}
                </Carousel>
            </CarouselGridWrapper>
        </StyledContainer>
    );
}

export const SingleGallery = React.memo(SingleGalleryComponent) as typeof SingleGalleryComponent;
