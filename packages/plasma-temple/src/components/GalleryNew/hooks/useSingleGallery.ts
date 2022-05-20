import React from 'react';

import { useRemoteHandlers } from '../../../hooks';
import { GalleryCardEntity, OnCardClickFn, OnChangeCardFn, OnChangeGalleryFn, VoiceNavigationProps } from '../types';

import { useGalleryVoiceNavigation } from './useGalleryVoiceNavigation';

interface UseSingleGalleryProps extends VoiceNavigationProps {
    galleryIndex: number;
    activeCard: number;
    galleryLength: number;
    isActive: boolean;
    onChangeGallery: OnChangeGalleryFn;
    onChangeCard: OnChangeCardFn;
    onCardClick?: OnCardClickFn;
}

export function useSingleGallery({
    galleryIndex,
    activeCard,
    galleryLength,
    isActive,
    assistant,
    voiceStepSizeX,
    onChangeCard,
    onChangeGallery,
    onCardClick,
}: UseSingleGalleryProps) {
    const [cardIndex, setCardIndex] = useRemoteHandlers({
        initialIndex: activeCard,
        axis: 'x',
        min: 0,
        max: galleryLength - 1,
        disable: !isActive,
        repeat: false,
    });

    useGalleryVoiceNavigation({
        axis: 'x',
        main: true,
        index: cardIndex,
        maxIndex: galleryLength - 1,
        disabled: !isActive,
        setIndex: setCardIndex,
        assistant,
        stepSize: voiceStepSizeX,
    });

    const handleCardClick = React.useCallback(
        (entity: GalleryCardEntity, index: number) => {
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

    return {
        setCardIndex,
        handleCardClick,
    };
}
