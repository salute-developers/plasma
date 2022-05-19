import React from 'react';
import styled from 'styled-components';

import { AnyObject } from '../../types';
import { useFocusedState } from '../../hooks/useFocusedState';
import { useMount } from '../../hooks';
import { UnifiedComponentProps } from '../../registry/types';

import {
    GalleryNewCardProps,
    GalleryControl,
    GalleryState,
    MultiGalleryProps,
    OnCardClickFn,
    SingleGalleryEntity,
    SingleGalleryProps,
    VoiceNavigationProps,
} from './types';
import { getGallerySelector } from './utils';
import { useGalleryState } from './hooks/useGalleryState';

interface MultiProps<Id, T extends AnyObject> {
    /** Список элементов галереи */
    items: SingleGalleryEntity<Id, T>[];
    /** Начальное состояние галереи */
    initialState?: GalleryState;
}

interface SingleProps<Id, T extends AnyObject> {
    /** Список элементов галереи */
    items: SingleGalleryEntity<Id, T>;
    /**
     * Начальное состояние галереи, для бокса и портала устанавливает активную карточку для каждой галереи,
     * для мобильной версии делает проскрол только для активной галереи
     */
    initialState?: number;
}

export type GalleryProps<Id = string, T extends AnyObject = AnyObject> = ({
    /** Автофокус галереи при монтировании компонента */
    autoFocus?: boolean;
    className?: string;
    /** Колбэк, вызываемый при клике по карточке галереи */
    onCardClick?: OnCardClickFn<Id, T>;
    /** Компонент кастомной карточки галереи */
    galleryCard?: React.ComponentType<GalleryNewCardProps<Id, T>>;
} & (MultiProps<Id, T> | SingleProps<Id, T>)) &
    VoiceNavigationProps;

export type GalleryComponent = <Id = string, T extends AnyObject = AnyObject>(
    props: GalleryProps<Id, T> & { ref?: React.Ref<GalleryControl> },
) => React.ReactElement;

type PlatformComponents = {
    SingleGallery: SingleGalleryProps;
    MultiGallery: MultiGalleryProps;
};

const StyledContainer = styled.div`
    height: 100%;
`;

export const GalleryCommon = React.forwardRef<GalleryControl, UnifiedComponentProps<GalleryProps, PlatformComponents>>(
    ({ items, initialState, autoFocus, className, platformComponents, ...props }, ref) => {
        const galleryRef = React.useRef<HTMLDivElement>(null);
        const focused = useFocusedState(galleryRef);

        const focusGallery = (galleryIndex: number) => {
            (galleryRef.current?.querySelector(getGallerySelector(galleryIndex)) as HTMLElement)?.focus();
        };

        const { state, handleChangeGallery, handleChangeCard } = useGalleryState({
            items,
            focusGallery,
            initialState,
            ref,
        });

        useMount(() => {
            if (autoFocus) {
                focusGallery(state.activeGallery);
            }
        });

        const { SingleGallery, MultiGallery } = platformComponents;

        return (
            <StyledContainer ref={galleryRef} className={className}>
                {Array.isArray(items) ? (
                    <MultiGallery
                        {...props}
                        items={items}
                        state={state}
                        isActive={focused}
                        onChangeGallery={handleChangeGallery}
                        onChangeCard={handleChangeCard}
                    />
                ) : (
                    <SingleGallery
                        {...props}
                        gallery={items}
                        galleryIndex={state.activeGallery}
                        activeCard={state.activeCards[0]}
                        isActive={focused}
                        onChangeGallery={handleChangeGallery}
                        onChangeCard={handleChangeCard}
                    />
                )}
            </StyledContainer>
        );
    },
);
