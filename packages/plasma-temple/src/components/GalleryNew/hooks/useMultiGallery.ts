import React from 'react';

import { useRemoteHandlers } from '../../../hooks';
import { OnChangeGalleryFn, VoiceNavigationProps } from '../types';

import { useGalleryVoiceNavigation } from './useGalleryVoiceNavigation';

interface UseMultiGalleryProps extends VoiceNavigationProps {
    activeGallery: number;
    galleryLength: number;
    isActive: boolean;
    onChangeGallery: OnChangeGalleryFn;
}

export function useMultiGallery({
    activeGallery,
    galleryLength,
    isActive,
    assistant,
    voiceStepSizeY,
    onChangeGallery,
}: UseMultiGalleryProps) {
    const [galleryIndex, setGalleryIndex] = useRemoteHandlers({
        initialIndex: activeGallery,
        axis: 'y',
        min: 0,
        max: galleryLength - 1,
        disable: !isActive,
        repeat: false,
    });

    useGalleryVoiceNavigation({
        axis: 'y',
        index: galleryIndex,
        maxIndex: galleryLength - 1,
        disabled: !isActive,
        setIndex: setGalleryIndex,
        assistant,
        stepSize: voiceStepSizeY,
    });

    React.useEffect(() => {
        onChangeGallery({ galleryIndex });
    }, [galleryIndex, onChangeGallery]);

    React.useEffect(() => {
        setGalleryIndex(activeGallery);
    }, [activeGallery, setGalleryIndex]);

    return setGalleryIndex;
}
