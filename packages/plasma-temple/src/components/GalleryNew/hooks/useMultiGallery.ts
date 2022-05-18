import React from 'react';

import { useRemoteHandlers } from '../../../hooks';
import { OnChangeGalleryFn } from '../types';

interface UseMultiGalleryProps {
    activeGallery: number;
    galleryLength: number;
    isActive: boolean;
    onChangeGallery: OnChangeGalleryFn;
}

export function useMultiGallery({ activeGallery, galleryLength, isActive, onChangeGallery }: UseMultiGalleryProps) {
    const [galleryIndex, setGalleryIndex] = useRemoteHandlers({
        initialIndex: activeGallery,
        axis: 'y',
        min: 0,
        max: galleryLength - 1,
        disable: !isActive,
        repeat: false,
    });

    React.useEffect(() => {
        onChangeGallery({ galleryIndex });
    }, [galleryIndex]);

    React.useEffect(() => {
        setGalleryIndex(activeGallery);
    }, [activeGallery]);

    return {
        galleryIndex,
        setGalleryIndex,
    };
}
