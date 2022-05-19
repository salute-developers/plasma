import React from 'react';
import styled from 'styled-components';

import { GalleryComponent, GalleryProps } from './Gallery@common';
import { useGalleryState } from './hooks/useGalleryState';
import { MultiGalleryMobile } from './MultiGallery/MultiGallery@mobile';
import { SingleGalleryMobile } from './SingleGallery/SingleGallery@mobile';
import { GalleryControl } from './types';
import { getGalleryCardSelector } from './utils';

const StyledContainer = styled.div`
    padding-bottom: 30%;
`;

export const GalleryMobile = React.forwardRef<GalleryControl, GalleryProps>(
    ({ items, galleryCard, className, initialState, onCardClick }, ref) => {
        const {
            state: { activeGallery, activeCards },
        } = useGalleryState(items, initialState, ref);

        const galleryRef = React.useRef<HTMLDivElement>(null);

        React.useEffect(() => {
            (galleryRef.current?.querySelector(
                getGalleryCardSelector(activeGallery, activeCards[activeGallery]),
            ) as HTMLElement)?.scrollIntoView({ block: 'center' });
        }, [activeGallery, activeCards]);

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
