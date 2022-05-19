import React from 'react';

import { GalleryControl, GalleryState, OnChangeCardFn, OnChangeGalleryFn, SingleGalleryEntity } from '../types';

interface UseGalleryStateProps {
    items: SingleGalleryEntity | SingleGalleryEntity[];
    initialState?: GalleryState | number;
    ref?: React.Ref<GalleryControl>;
    focusGallery: (galleryIndex: number, cardIndex?: number) => void;
}

export const getInitialState = (
    items: SingleGalleryEntity | SingleGalleryEntity[],
    initialState?: GalleryState | number,
) => {
    if (typeof initialState === 'undefined') {
        return Array.isArray(items)
            ? { activeGallery: 0, activeCards: items.map(() => 0) }
            : { activeGallery: 0, activeCards: [0] };
    }

    if (typeof initialState === 'number') {
        return {
            activeGallery: 0,
            activeCards: [initialState],
        };
    }

    return initialState;
};

export function useGalleryState({ items, initialState, ref, focusGallery }: UseGalleryStateProps) {
    const [state, setState] = React.useState<GalleryState>(getInitialState(items, initialState));

    const handleChangeGallery = React.useCallback<OnChangeGalleryFn>(({ galleryIndex, cardIndex = -1 }) => {
        setState(({ activeCards }) => ({
            activeGallery: galleryIndex,
            activeCards:
                cardIndex > -1
                    ? [...activeCards.slice(0, galleryIndex), cardIndex, ...activeCards.slice(galleryIndex + 1)]
                    : activeCards,
        }));
    }, []);

    const handleChangeCard = React.useCallback<OnChangeCardFn>(({ galleryIndex, cardIndex }) => {
        setState((prevState) => ({
            ...prevState,
            activeCards: [
                ...prevState.activeCards.slice(0, galleryIndex),
                cardIndex,
                ...prevState.activeCards.slice(galleryIndex + 1),
            ],
        }));
    }, []);

    React.useImperativeHandle(
        ref,
        (): GalleryControl => ({
            getGalleryState: () => state,
            setGalleryState: (newState) => setState(newState),
            setActiveGallery: (galleryIndex, cardIndex) => {
                handleChangeGallery({ galleryIndex, cardIndex });
                focusGallery(galleryIndex, cardIndex);
            },
        }),
    );

    return {
        state,
        handleChangeGallery,
        handleChangeCard,
    };
}
