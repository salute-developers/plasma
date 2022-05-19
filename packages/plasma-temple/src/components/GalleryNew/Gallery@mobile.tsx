import React from 'react';
import styled from 'styled-components';

import { useMount } from '../../hooks';

import { GalleryComponent, GalleryProps } from './Gallery@common';
import { useGalleryState } from './hooks/useGalleryState';
import { MultiGalleryMobile } from './MultiGallery/MultiGallery@mobile';
import { SingleGalleryMobile } from './SingleGallery/SingleGallery@mobile';
import { GalleryControl } from './types';
import { getGalleryCardSelector, getGallerySelector } from './utils';

const StyledContainer = styled.div`
    height: 100%;
    padding-bottom: 30%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
        opacity: 0;
        width: 0;
    }
`;

export const GalleryMobile = React.forwardRef<GalleryControl, GalleryProps>(
    ({ items, galleryCard, className, initialState, onCardClick }, ref) => {
        const galleryRef = React.useRef<HTMLDivElement>(null);

        const focusGallery = (galleryIndex: number, cardIndex = 0) => {
            const containerEl = galleryRef.current;
            const targetEl = galleryRef.current?.querySelector(
                cardIndex < 2 ? getGallerySelector(galleryIndex) : getGalleryCardSelector(galleryIndex, cardIndex),
            ) as HTMLElement;

            if (!containerEl || !targetEl) {
                return;
            }

            containerEl.scrollTo({
                top: targetEl.offsetTop - containerEl.offsetTop,
                behavior: 'smooth',
            });
        };

        const {
            state: { activeGallery, activeCards },
        } = useGalleryState({ items, initialState, ref, focusGallery });

        useMount(() => {
            focusGallery(activeGallery, activeCards[activeGallery]);
        });

        return (
            <StyledContainer ref={galleryRef} className={className}>
                {Array.isArray(items) ? (
                    <MultiGalleryMobile items={items} galleryCard={galleryCard} onCardClick={onCardClick} />
                ) : (
                    <SingleGalleryMobile
                        gallery={items}
                        galleryIndex={0}
                        galleryCard={galleryCard}
                        onCardClick={onCardClick}
                    />
                )}
            </StyledContainer>
        );
    },
) as GalleryComponent;
